const expressLayouts = require("express-ejs-layouts");
const multer = require("multer");
const path = require("path");  // Add at the top with other requires
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");



const app = express();

// MongoDB
mongoose.connect("mongodb+srv://article_app:article_app01@cluster0.x2fadie.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected")).catch(err => console.error(err));
;

app.use(cors({
  origin: "*", // allow all domains
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // allow JSON bodies for API endpoints
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));  // 👈 ADD THIS
app.use(expressLayouts);
app.set("layout", "layout");  // default layout file: layout.ejs
// Routes
const Article = require("./models/Article");
const Theme = require("./models/Theme"); // new model for theme settings

// Multer Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/uploads")); // save in public/uploads
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // unique filename
  }
});

const upload = multer({ storage });
// Home → list articles
app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.render("articles/index", { articles,      title: "Articles" // Pass title variable
 });
});

// New article form
app.get("/articles/new", (req, res) => {
  res.render("articles/new", { title: "Create New Article | MyArticles" });
});

// Create article
// Create article
app.post("/articles", async (req, res) => {
  try {
    const { title, description, image } = req.body; // image is URL

    // Validate required fields
    if (!title || !description) {
      return res.status(400).send("Title and Description are required");
    }

    // Save to DB
    await Article.create({
      title,
      description,
      image: image || null, // store null if no URL provided
    });

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating article");
  }
});

// Edit article form
app.get("/articles/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article,title: article.title + " | Articles" });
});

// Update article
// Article details page
app.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).send("Article not found");
    }

    res.render("articles/article-details", { article,title: article.title + " | Articles" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Delete article
app.delete("/articles/:id", async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

// ----------- Theme API ----------
// save a theme configuration (client sends { settings: {...}, user_id?, domain?, location_id? })
app.put("/api/theme", async (req, res) => {
  try {
    const { settings, user_id, domain, location_id } = req.body;
    if (!settings || typeof settings !== "object") {
      return res.status(400).json({ error: "settings object is required" });
    }
    const theme = await Theme.create({ settings, user_id, domain, location_id });
    res.json({ success: true, id: theme._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save theme" });
  }
});

// delete a theme by location_id (from query param ?l=...)
app.delete("/api/theme", async (req, res) => {
  try {
    const location_id = req.query.l; // script sends &l=location_id
    if (!location_id) {
      return res.status(400).json({ error: "location_id required in query param ?l=" });
    }
    const deleted = await Theme.findOneAndDelete({ location_id });
    if (!deleted) return res.status(404).json({ error: "No theme found for that location" });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete theme" });
  }
});

// fetch a theme by id
app.get("/api/theme/:id", async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id);
    if (!theme) return res.status(404).json({ error: "Not found" });
    res.json(theme);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// fetch most recent theme (by updatedAt desc) optionally filtered by domain/user_id/location_id
app.get("/api/theme", async (req, res) => {
  try {
    const query = {};
    ["domain", "user_id", "location_id"].forEach((k) => {
      if (req.query[k]) query[k] = req.query[k];
    });

    const theme = await Theme.findOne(query).sort({ updatedAt: -1 });
    if (!theme) {
      return res.status(404).json({ error: "No theme found" });
    }
    res.json(theme);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// list themes (optional query parameters: domain, user_id, location_id)
app.get("/api/themes", async (req, res) => {
  try {
    const query = {};
    ["domain", "user_id", "location_id"].forEach((k) => {
      if (req.query[k]) query[k] = req.query[k];
    });
    const list = await Theme.find(query).sort({ updatedAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

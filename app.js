const expressLayouts = require("express-ejs-layouts");
const multer = require("multer");
const path = require("path");  // Add at the top with other requires
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");


const app = express();

// MongoDB
mongoose.connect("mongodb+srv://article_app:article_app01@cluster0.x2fadie.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected")).catch(err => console.error(err));
;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));  // 👈 ADD THIS
app.use(expressLayouts);
app.set("layout", "layout");  // default layout file: layout.ejs
// Routes
const Article = require("./models/Article");
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
  res.render("articles/new");
});

// Create article
app.post("/articles", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;       // must match form
    const image = req.file ? req.file.filename : null;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).send("Title and Description are required");
    }

    // Save to DB
    await Article.create({ title, description, image });

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

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

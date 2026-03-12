const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
  // store everything the client sends under "settings";
  // the dashboard-customizer script builds this as a flat object
  settings: { type: mongoose.Schema.Types.Mixed, required: true },

  // optional metadata that you might send from the client
  user_id: { type: String },
  domain: { type: String },
  location_id: { type: String },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Theme', ThemeSchema);

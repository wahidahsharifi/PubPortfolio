const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let posts = []; // Store posts in memory for now

// API to receive form data
app.post('/submit', (req, res) => {
   const { name, resource, link } = req.body;
   const newPost = { name, resource, link };
   posts.push(newPost);
   res.json(newPost);
});

// API to fetch all posts
app.get('/posts', (req, res) => {
   res.json(posts);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});

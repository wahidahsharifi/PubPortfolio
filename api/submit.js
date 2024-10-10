let posts = []; // Array to store posts

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { name, resource, link } = req.body;

    if (!name || !resource || !link) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newPost = { name, resource, link };
    posts.push(newPost);

    // Respond with the new post
    return res.status(200).json(newPost);
  }

  if (req.method === 'GET') {
    // Return all posts
    return res.status(200).json(posts);
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

const db = require('../db');

class PostController {
  async createPost(req, res) {
    try {
      const { title, content, userId } = req.body;
      const newPost = await db.query(
        'INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
        [title, content, userId]
      );
      res.json(newPost.rows[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async getPostsByUser(req, res) {
    try {
      const id = req.query.id;
      const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id]);
      res.json(posts.rows);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostController();

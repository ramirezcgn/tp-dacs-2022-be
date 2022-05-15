import postService from '../services/post.service';

const PostController = () => {
  const create = async (req, res) => {
    try {
      const post = await postService().create(req.body);
      if (!post) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ post });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      const posts = await postService().getAll(0, 10);
      if (!posts) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ posts });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const post = await postService().get(req.params.id);
      if (!post) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ post });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
      const post = await postService().update(req.params.id, req.body);
      if (!post) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ post });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const destroy = async (req, res) => {
    try {
      const model = await postService().remove(req.params.id);
      if (!model) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ msg: 'Successfully destroyed model' });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    getAll,
    get,
    update,
    create,
    destroy,
  };
};

export default PostController;

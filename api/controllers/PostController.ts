import postService from '../services/post.service';

const PostController = () => {
  const create = async (req, res) => {
    try {
        await postService().create(req.query);
          return res.status(200)
        } catch (err) {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        }

    };

    const getAll = async (req, res) => {
    try {
      const posts = await postService().getAll(0, 10);
      return res.status(200).json({ posts });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const users = await postService().get(req.params.id);
      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const remove = async (req, res) => {
    try {
      await postService().remove(req.params.id);
      return res.status(200);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    try {
    await postService().update(req.params.id, req.query);
      return res.status(200)
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
    remove
  };
};

export default PostController;

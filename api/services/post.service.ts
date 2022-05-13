import PostRepository from '../repositories/PostRepository';
import Post from '../models/Post';

const post = new PostRepository<typeof Post>(Post);

const postService = () => {

    const get = (id) => post.get(id);
    const getAll= (page, limit) => post.getAll(page, limit);
    const create = (data) => post.create(data);
    const update =(id, data)  => post.update(id, data);
    const remove = (id) => post.remove(id);

  return {
    get,
    getAll,
    create,
    update,
    remove
  };

};

export default postService;

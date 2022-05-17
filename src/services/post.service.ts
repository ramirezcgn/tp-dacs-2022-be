import PostRepository from '../repositories/PostRepository';
import emailService from './email.service';

const post = new PostRepository();

const postService = () => {
  const get = (id) => post.get(id);
  const getAll = (page, limit) => post.getAll(page, limit);
  const create = (data) => post.create(data);
  const update = (id, data) => post.update(id, data);
  const remove = (id) => post.remove(id);
  const notifyInactiveUsers = async () => {
    const users = post.getInactiveUsers(30);
    const result = users.map(({ email }) =>
      emailService().sendEmail(
        'info@superblog.com',
        email,
        'We miss you!',
        'Please comeback!',
      ),
    );
    return Promise.all(result);
  };

  return {
    get,
    getAll,
    create,
    update,
    remove,
    notifyInactiveUsers,
  };
};

export default postService;

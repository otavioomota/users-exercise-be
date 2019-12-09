import User from '../models/User';

class UserController {
  async index(req, res) {
    if (req.params.id) {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    }

    const users = await User.findAll();
    return res.json(users);
  }

  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      console.log('User already exists');
      return res.status(400).json({ error: 'user already exists' });
    }
    const user = await User.create(req.body);
    return res.json(user);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id);

    await user.destroy();

    return res.json({ ok: true });
  }
}

export default new UserController();

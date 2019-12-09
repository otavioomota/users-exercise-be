import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        gender: Sequelize.STRING,
        age: Sequelize.INTEGER,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;

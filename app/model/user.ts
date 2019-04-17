import { Application } from 'egg';

export default(app: Application) => {
  const { INTEGER, STRING, DATEONLY, ENUM } = app.Sequelize;
  const User = app.model.define('user', {
    level: { type: INTEGER, defaultValue: 0 },
    avatar: { type: STRING(1000), allowNull: false },
    username: { type: STRING(50), allowNull: false },
    gender: { type: ENUM('male', 'female', 'unknown'), defaultValue: 'unknown', allowNull: false },
    birthday: DATEONLY,
    password: STRING(100),
    email: { type: STRING(50), unique: true },
    phone: { type: STRING(50), unique: true },
  }, {
    freezeTableName: true,
    paranoid: true,
  });

  return User;
}
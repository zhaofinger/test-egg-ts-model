import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {
  public async list() {
    const { ctx } = this;
    ctx.model.User.create({ id: 1 });
  }
}

import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  public async list() {
    const { ctx } = this;
    ctx.model.User.all();
  }
}

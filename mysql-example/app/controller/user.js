'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getAll() {
    const { ctx } = this;
    const res = await ctx.service.user.getAll();
    ctx.body = res;
  }
  async create(data) {
    const { ctx } = this;
    await ctx.service.user.create(data);
  }
  async delete(data) {
    const { ctx } = this;
    const res = await ctx.service.user.delete(data);
    ctx.body = res;
  }
}

module.exports = UserController;

'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAll() {
    const { app } = this;
    const res = await app.mysql.select('user');
    return res;
  }
  async create(data) {
    const { app } = this;
    const res = await app.mysql.insert('user', data);
    return res;
  }
  async delete(data) {
    const { app } = this;
    const res = await app.mysql.delete('user', data);
    return res;
  }
}

module.exports = UserService;

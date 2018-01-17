'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/service/user.test.js', () => {

  describe('create()', () => {
    const data = {
      name: 'test1',
      age: 50,
    };
    after(async () => {
      const ctx = app.mockContext();
      await ctx.service.user.delete({ age: 29 });
      console.log('delate test');
    });
    it('should create a new user', async () => {
      const ctx = app.mockContext();
      const res = await ctx.service.user.create(data);
      assert(res);
    });
  });


});

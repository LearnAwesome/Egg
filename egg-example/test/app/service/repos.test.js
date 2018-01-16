const { app, mock, assert } = require( 'egg-mock/bootstrap' );

describe( 'test/app/service/repos.test.js', () => {
    it( 'should get repos', async () => {
        const ctx = app.mockContext();
        const repos = await ctx.service.repos.list();
        assert(repos);
    } );
} );
const Controller = require( 'egg' ).Controller;

class ReposController extends Controller {
    async list() {
        const { ctx } = this;
        // const { name } = ctx.query;
        const reposList = await ctx.service.repos.list();
        await ctx.render( 'repos/list.tpl', reposList );
    }
}

module.exports = ReposController;
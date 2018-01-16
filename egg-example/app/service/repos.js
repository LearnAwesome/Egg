const Service = require( 'egg' ).Service;

class ReposService extends Service {
    async list() {
        const { serverUrl, user } = this.config.repos;
        const reposList = await this.ctx.curl( `${ serverUrl }/${ user }/repos`, {
            dataType: 'json'
        } );
        return { list: reposList.data };
    }
}

module.exports = ReposService;
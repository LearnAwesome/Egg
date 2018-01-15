const Service = require( 'egg' ).Service;

class ReposService extends Service {
    async list( name = '' ) {
        const { serverUrl, user } = this.config.repos;
        const reposList = await this.ctx.curl( `${ serverUrl }/${ user }/repos`, {
            dataType: 'json'
        } );
        // const list = reposList.data.map( list => {
        //     return {
        //         name: list.name,
        //         url: list.html_url
        //     }
        // } );
        return { list: reposList.data };
    }
}

module.exports = ReposService;
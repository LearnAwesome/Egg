const { app, mock, assert } = require( 'egg-mock/bootstrap' );

describe( 'test/app/controller/repos.test.js', () => {

    describe( 'GET /repos', () => {
        
        it( 'should status 200 and ', () => {
            return app.httpRequest()
                .get( '/repos' )
                .expect( 200 )
        } );

    } ) ;   
    
} );
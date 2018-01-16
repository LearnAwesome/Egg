const { app, mock, assert } = require( 'egg-mock/bootstrap' );

describe( 'test/app/extend/helper.test.js', () => {

    describe( 'formatTime()', () => {

        it( 'should format time', () => {
            const ctx = app.mockContext();
            assert( ctx.helper.formatTime( '2017-10-10T18-16:59' ) === '2017-10-10' );
        } );

    } );

} );
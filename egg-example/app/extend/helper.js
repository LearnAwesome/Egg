const moment = require( 'moment' );
exports.formatTime = time => {
    return time.replace(/T[\S\s]+$/, '')
};
const fs = require( 'fs' );
const path = require( 'path' );

const initConfig = appInfo => {
    const config = {};

    // 安全Cookies字符串
    config.keys = appInfo.name + '123456';

    config.middleware = [
        'robot'
    ];

    config.robot = {
        ua: [ /Baiduspider/i ]
    };

    // 模板引擎
    config.view = {
        defaultEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };

    // 业务层外接API地址
    config.repos = {
        user: 'codefine',
        serverUrl: `https://api.github.com/users`
    };
    return config;
};

module.exports = initConfig;
const initConfig = appInfo => {
    const config = {};
    config.keys = appInfo.name + '123456';
    config.view = {
        defaultEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };
    config.repos = {
        user: 'codefine',
        serverUrl: `https://api.github.com/users`
    };
    return config;
};

module.exports = initConfig;
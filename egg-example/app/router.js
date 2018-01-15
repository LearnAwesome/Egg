module.exports = app => {
    const { router, controller } = app;
    router.redirect( '/', '/repos' );
    router.get( '/repos', controller.repos.list );
};
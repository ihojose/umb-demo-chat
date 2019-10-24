const router = require('express').Router();

module.exports = io => {
    router.get('/general', (req, res) => {
        res.render('general');
    });

    router.get('/', (req, res) => {
        res.render('index');
    });

    return router;
};
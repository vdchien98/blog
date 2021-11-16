const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);

router.get('/', newsController.index); // chú ý tyền đường gốc phải đưa xuống cuối cùng

module.exports = router;

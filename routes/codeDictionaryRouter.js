const express = require('express');
const basicAuth = require('basic-auth');

const index = require('../controllers/codeDictionary/index');
const error404 = require('../controllers/codeDictionary/error404');
const subtheme = require('../controllers/codeDictionary/subtheme');
const adminCreateTheme = require('../controllers/codeDictionary/adminCreateTheme');
const adminCreateSubtheme = require('../controllers/codeDictionary/adminCreateSubtheme');
const adminCreateSection = require('../controllers/codeDictionary/adminCreateSection');
const adminCreateChapter = require('../controllers/codeDictionary/adminCreateChapter');

const codeDictionaryRouter = express.Router();

const auth = function auth(req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }

  const user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  }

  if (user.name === 'admin' && user.pass === 'super') {
    return next();
  }

  return unauthorized(res);
};

codeDictionaryRouter.post('/admin/create/:sectionId/chapter', auth, adminCreateChapter.post);
codeDictionaryRouter.get('/admin/create/:sectionId/chapter', auth, adminCreateChapter.get);
codeDictionaryRouter.post('/admin/create/:subthemeId/section', auth, adminCreateSection.post);
codeDictionaryRouter.get('/admin/create/:subthemeId/section', auth, adminCreateSection.get);
codeDictionaryRouter.post('/admin/create/:themeId/subtheme', auth, adminCreateSubtheme.post);
codeDictionaryRouter.get('/admin/create/:themeId/subtheme', auth, adminCreateSubtheme.get);
codeDictionaryRouter.post('/admin/create/theme', auth, adminCreateTheme.post);
codeDictionaryRouter.get('/admin/create/theme', auth, adminCreateTheme.get);

codeDictionaryRouter.get('/subtheme/:id', subtheme.get);
codeDictionaryRouter.get('/', index);
codeDictionaryRouter.use(error404);

module.exports = codeDictionaryRouter;

// Third party libraries
require('@babel/polyfill');
require('./thirdPartyScripts/prism');

// Click handlers
const menuToggleHandler = require('./modules/menuToggleHandler');
const themeItemToggle = require('./modules/themeItemToggle');
const subthemeHandler = require('./modules/subthemeHandler');
const sectionHandler = require('./modules/sectionHandler');
const theoryHandler = require('./modules/theoryHandler');
const exampleMoreHandler = require('./modules/exampleMoreHandler');
const exampleTabHandler = require('./modules/exampleTabHandler');
const runHandler = require('./modules/runHandler');
const reloadHandler = require('./modules/reloadHandler');

// My modules
const init = require('./modules/init');

require('./modules/init');

document.addEventListener('click', (event) => {
  let handlerTarget;

  handlerTarget = event.target.closest('.navbar__button-toggle');
  if (handlerTarget) {
    return menuToggleHandler(handlerTarget);
  }

  handlerTarget = event.target.closest('.themes__title');
  if (handlerTarget) {
    return themeItemToggle(handlerTarget);
  }

  handlerTarget = event.target.closest('.subthemes__item:not(.subthemes__item_active) .subthemes__link');
  if (handlerTarget) {
    return subthemeHandler(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.sections__item:not(.sections__item_active)');
  if (handlerTarget) {
    return sectionHandler(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.subthemes__item_active .subthemes__link');
  if (handlerTarget) {
    return event.preventDefault();
  }

  handlerTarget = event.target.closest('.theory__more');
  if (handlerTarget) {
    return theoryHandler(handlerTarget);
  }

  handlerTarget = event.target.closest('.example__more');
  if (handlerTarget) {
    return exampleMoreHandler(handlerTarget);
  }

  handlerTarget = event.target.closest('.example__tab:not(.example__tab_active)');
  if (handlerTarget) {
    return exampleTabHandler(handlerTarget);
  }

  handlerTarget = event.target.closest('.example__code-start');
  if (handlerTarget) {
    return runHandler(handlerTarget);
  }

  handlerTarget = event.target.closest('.example__code-reload');
  if (handlerTarget) {
    return reloadHandler(handlerTarget);
  }
});

init();

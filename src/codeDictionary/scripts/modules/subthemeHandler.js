const Subtheme = require('./Subtheme');
const showMsgOnPage = require('./showMsgOnPage');

const content = document.querySelector('.content');

// Выделить subtheme и убрать выделение с прошлой subtheme
function addActiveClass(subthemeLink) {
  const activeSubthemeItem = document.querySelector('.subthemes__item_active');

  if (activeSubthemeItem) {
    activeSubthemeItem.classList.remove('subthemes__item_active');
  }

  const subthemeItem = subthemeLink.closest('.subthemes__item');
  subthemeItem.classList.add('subthemes__item_active');
}

// Показать индикатор загрузки
function showLoadIndicator() {
  const loadIndicatorHTML = `<div class="content__load-indicator">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" class="svg-inline--fa fa-spinner fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path></svg>
  </div>`;
  content.insertAdjacentHTML('afterbegin', loadIndicatorHTML);
}

// Скрыть индикатор загрузки
function hideLoadIndicator() {
  content.querySelector('.content__load-indicator').remove();
}

async function subthemeHandler(subthemeLink, event) {
  event.preventDefault();

  const { id } = subthemeLink.dataset;
  localStorage.setItem('currentSubthemeId', id);
  addActiveClass(subthemeLink);

  let sections;
  sections = localStorage.getItem(id);
  if (!sections) {
    showLoadIndicator();
    try {
      const response = await fetch(subthemeLink.href);
      if (response.status === 200) {
        sections = await response.text();
        localStorage.setItem(id, sections);
      } else {
        showMsgOnPage(`Server response status: ${response.status}`);
        return;
      }
    } catch (err) {
      showMsgOnPage(`Error in request: ${err}`);
      return;
    } finally {
      hideLoadIndicator();
    }
  }

  Subtheme.render(id, JSON.parse(sections));
}

module.exports = subthemeHandler;

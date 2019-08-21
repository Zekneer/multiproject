function exampleTabHandler(tab) {
  const browser = tab.closest('.example__browser');
  const padName = tab.dataset.pad;

  const activeTab = browser.querySelector('.example__tab_active');
  activeTab.classList.remove('example__tab_active');
  tab.classList.add('example__tab_active');

  const visiblePad = browser.querySelector('.example__pad_visible');
  visiblePad.classList.remove('example__pad_visible');
  const pad = browser.querySelector(`.example__pad[data-name="${padName}"]`);
  pad.classList.add('example__pad_visible');
}

module.exports = exampleTabHandler;

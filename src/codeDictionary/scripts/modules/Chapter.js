const Prism = require('../thirdPartyScripts/prism');

class Chapter {
  constructor(chapter) {
    this.id = chapter.chapter_id;
    this.title = chapter.chapter_title;
    this.spec = chapter.chapter_spec;
    this.text = chapter.chapter_text;
    this.html = chapter.chapter_html;
    this.css = chapter.chapter_css;
    this.js = chapter.chapter_js;

    this.renderChapterDOM();
    this.constructor.chaptersDomMap.set(this.chapterDOM, this);
  }

  renderChapterDOM() {
    this.chapterDOM = document.createElement('article');
    this.chapterDOM.className = 'chapter content__chapter';
    this.chapterDOM.innerHTML += `
    <div class="chapter__wrapper">
      <div class="chapter__header">
        <h4 class="chapter__title"></h4>
      </div>
      <div class="theory chapter__theory">
        <div class="theory__more button-icon">
          <div class="icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
              </path>
            </svg>
          </div>
        </div>
        <div class="theory__text"></div>
      </div>
    </div>`;

    const titleDOM = this.chapterDOM.querySelector('.chapter__title');
    titleDOM.textContent = this.title;

    const theoryTextDOM = this.chapterDOM.querySelector('.theory__text');
    theoryTextDOM.textContent = this.text;

    if (this.spec) {
      const chapterHeader = this.chapterDOM.querySelector('.chapter__header');
      const specLinkHTML = `
      <a class="chapter__spec-link" href="${this.spec}" target="_blank">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-alt" class="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
        </div>
      </a>`;
      chapterHeader.insertAdjacentHTML('beforeend', specLinkHTML);
    }

    if (this.html || this.css || this.js) {
      this.renderExampleDOM();
    }

    return this.chapterDOM;
  }

  rerenderExampleDOM() {
    const example = this.chapterDOM.querySelector('.example');
    example.remove();

    this.renderExampleDOM();

    const exampleMore = this.chapterDOM.querySelector('.example__more');
    exampleMore.classList.add('example__more_pressed');
    Prism.highlightAll();
  }

  renderExampleDOM() {
    const example = document.createElement('div');
    example.className = 'example chapter_example';
    example.innerHTML = `
    <div class="example__more button-icon">
      <div class="icon">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
          class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
          </path>
        </svg>
      </div>
    </div>`;

    const content = document.createElement('div');
    content.className = 'example__content';
    example.append(content);

    if (this.html || this.css) {
      this.renderBrowserDOM(content);
    }

    if (this.js) {
      this.renderCodeDOM(content);
    }

    this.chapterDOM.querySelector('.chapter__wrapper').append(example);
  }

  renderBrowserDOM(content) {
    const browser = document.createElement('div');
    browser.className = 'example__browser';

    let tabsHTML = '';
    let padsHTML = '<div class="example__pads">';
    if (this.html) {
      tabsHTML += '<div class="example__tab" data-pad="view">VIEW</div><div class="example__tab" data-pad="html">HTML</div>';
      padsHTML +=
        '<div class="example__pad" data-name="view"><div class="shadow-window"></div></div><div class="example__pad" data-name="html"><pre><code class="language-html"></code></pre></div>';
    }
    if (this.css) {
      tabsHTML += '<div class="example__tab" data-pad="css">CSS</div>';
      padsHTML += '<div class="example__pad" data-name="css"><pre><code class="language-css"></code></pre></div>';
    }
    padsHTML += '</div>';

    browser.insertAdjacentHTML('beforeend', tabsHTML);
    browser.insertAdjacentHTML('beforeend', padsHTML);

    if (this.html) {
      const view = browser.querySelector('.example__pad[data-name="view"] .shadow-window');
      view.attachShadow({ mode: 'open' });
      view.shadowRoot.innerHTML = `<style>${this.css}</style>${this.html}`;

      const html = browser.querySelector('.example__pad[data-name="html"] code');
      html.textContent = this.html;

      const observer = new MutationObserver(() => {
        const newHtml = view.shadowRoot.innerHTML.replace(/<style>(\S*?\s*?)*?<\/style>/im, '');
        html.textContent = newHtml;
        Prism.highlightElement(html);
      });
      observer.observe(view.shadowRoot, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    if (this.css) {
      const css = browser.querySelector('.example__pad[data-name="css"] code');
      css.textContent = this.css;
    }

    browser.querySelector('.example__tab').classList.add('example__tab_active');
    browser.querySelector('.example__pad').classList.add('example__pad_visible');

    content.append(browser);
  }

  renderCodeDOM(content) {
    const code = document.createElement('div');
    code.className = 'example__code-wrapper';

    code.innerHTML = `
    <div class="example__code-text">
      <pre><code class="language-javascript"></code></pre>
    </div>
    <div class="example__code-buttons-wrapper">
      <div class="example__code-start button-icon">
        <div class="icon">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
          </svg>
        </div>
      </div>
      <div class="example__code-reload button-icon">
        <div class="icon">
          <div class="icon">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" class="svg-inline--fa fa-redo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="example__code-console"></div>`;

    const codeText = code.querySelector('.example__code-text code');
    codeText.textContent = this.js;

    content.append(code);
  }

  runJS() {
    const view = this.chapterDOM.querySelector('.example__pad[data-name="view"] .shadow-window');
    const codeConsole = this.chapterDOM.querySelector('.example__code-console');
    function log(string) {
      if (!codeConsole.classList.contains('example__code-console_data')) {
        codeConsole.classList.add('example__code-console_data');
      }

      if (string) {
        codeConsole.textContent += `${string}\n`;
      } else {
        codeConsole.textContent += '\n';
      }
    }

    const run = new Function('log', 'body', 'shadowDoc', this.js);

    if (view) {
      run(log, view, view.shadowRoot);
    } else {
      run(log);
    }
  }
}

Chapter.chaptersDomMap = new Map();

module.exports = Chapter;

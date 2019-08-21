function serveOutput(message) {
  const output = document.querySelector('.serve__output');
  output.textContent += `${message}\n`;
}

document.addEventListener('click', async (event) => {
  if (event.target.closest('[name="themeCreate"]')) {
    event.preventDefault();
    const form = event.target.closest('form');
    const theme = {
      theme_name: form.themeName.value,
    };

    const response = await fetch('/codeDictionary/admin/create/theme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(theme),
    });

    if (response.status === 200) {
      const data = await response.json();
      serveOutput(data.status);
      document.location.reload(true);
    } else {
      serveOutput(`Server status: ${response.status}`);
    }
  }

  if (event.target.closest('[name="subthemeCreate"]')) {
    event.preventDefault();
    const form = event.target.closest('form');
    const subtheme = {
      subtheme_name: form.subthemeName.value,
    };

    const response = await fetch(document.location.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(subtheme),
    });

    if (response.status === 200) {
      document.location.reload(true);
    } else {
      serveOutput(`Server status: ${response.status}`);
    }
  }

  if (event.target.closest('[name="sectionCreate"]')) {
    event.preventDefault();
    const form = event.target.closest('form');
    const section = {
      section_name: form.sectionName.value,
    };

    const response = await fetch(document.location.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(section),
    });

    if (response.status === 200) {
      document.location.reload(true);
    } else {
      serveOutput(`Server status: ${response.status}`);
    }
  }

  if (event.target.closest('[name="chapterCreate"]')) {
    event.preventDefault();
    const form = event.target.closest('form');
    const chapter = {
      chapter_title: form.chapterTitle.value,
      chapter_spec: form.chapterSpec.value,
      chapter_text: form.chapterText.value,
      chapter_html: form.chapterHtml.value,
      chapter_css: form.chapterCss.value,
      chapter_js: form.chapterJs.value,
    };

    const response = await fetch(document.location.href, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(chapter),
    });

    if (response.status === 200) {
      document.location.reload(true);
    } else {
      serveOutput(`Server status: ${response.status}`);
    }
  }
});

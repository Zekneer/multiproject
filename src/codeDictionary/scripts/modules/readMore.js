function readMore() {
  const textCollection = document.querySelectorAll('.theory__text');
  const textArray = Array.from(textCollection);
  textArray.forEach((text) => {
    const textMore = text.previousElementSibling;

    if (text.clientHeight === text.scrollHeight) {
      if (!textMore.classList.contains('theory__more_hidden')) {
        text.classList.add('theory__text_full');
        textMore.classList.add('theory__more_hidden');
      }
    }

    if (text.clientHeight !== text.scrollHeight) {
      if (textMore.classList.contains('theory__more_hidden')) {
        textMore.classList.remove('theory__more_hidden');
      }
    }
  });
}

module.exports = readMore;

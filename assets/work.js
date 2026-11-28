// ブラウザの言語が日本語でなければ英語の文に替え、冒頭の再生を動かす
(() => {
  const english = !(navigator.languages || [navigator.language]).some((l) => /^ja\b/i.test(l));
  if (english) {
    document.documentElement.lang = "en";
    for (const el of document.querySelectorAll("[data-en]")) el.textContent = el.dataset.en;
    for (const el of document.querySelectorAll("[data-en-aria]")) el.setAttribute("aria-label", el.dataset.enAria);
  }

  const data = document.getElementById("chunks");
  const screen = document.getElementById("rsvp");
  const button = document.getElementById("play");
  if (!data || !screen || !button) return;
  const chunks = JSON.parse(data.textContent);
  const labels = english
    ? { play: button.dataset.en, pause: button.dataset.enPause }
    : { play: button.textContent, pause: button.dataset.jaPause };
  let index = 0;
  let timer = null;

  const stop = () => {
    clearTimeout(timer);
    timer = null;
    button.textContent = labels.play;
  };
  const step = () => {
    if (index >= chunks.length) {
      index = 0;
      stop();
      return;
    }
    const [text, ms] = chunks[index++];
    screen.textContent = text;
    timer = setTimeout(step, ms);
  };
  button.addEventListener("click", () => {
    if (timer) return stop();
    button.textContent = labels.pause;
    step();
  });
})();

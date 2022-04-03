export function debounce(func, delay = 800) {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, delay, event);
  };
}

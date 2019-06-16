function debounce(func, time) {
  console.log("func", func);
  var timeId;
  function debouncedFunc() {
    if (timeId) {
      clearTimeout(timeId);
      timeId = undefined;
    }
    timeId = setTimeout(() => {
      func();
    }, time);
  }
  return debouncedFunc;
}

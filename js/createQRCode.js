// dom
var QRCodeImgDom = document.querySelector("#qr-code-img");
var contentInputDom = document.querySelector("#content-input");
// value
var debouncedHandleContentChange = debounce(handleContentChange, 200);

contentInputDom.addEventListener("input", debouncedHandleContentChange);

function handleContentChange() {
  var content = contentInputDom.value;
  console.log("content", content);
  if (content === "") {
    QRCodeImgDom.style.display = "none";
    return;
  } else {
    QRCodeImgDom.style.display = "inline-block";
  }
  createQRCode(content);
}

function createQRCode(content) {
  QRCode.toDataURL(content, function(err, url) {
    if (err) {
      console.error(err);
    }
    console.log(url);
    QRCodeImgDom.src = url;
  });
}

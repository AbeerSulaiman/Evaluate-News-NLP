function checkUrl(inputValue) {
  var validUrl = require("valid-url");

  if (validUrl.isUri(inputValue)) {
    alert("Looks like an URI");
    console.log("Looks like an URI");
  } else {
    alert("Not a URI");
    console.log("Not a URI");
  }
}
export { checkUrl };

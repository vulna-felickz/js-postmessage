window.parent.postMessage(password, '*'); // NOT OK

(function() {
  var data = {};
  data.foo = password;
  data.bar = "unproblematic";

  window.parent.postMessage(data, '*');     // NOT OK
  window.parent.postMessage(data.foo, '*'); // NOT OK
  window.parent.postMessage(data.bar, '*'); // OK
})();

window.parent.postMessage(authKey, '*');



window.parent.postMessage('reloadPage', '*');


window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}



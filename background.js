//var baseUrl = 'http://suchday/';
var baseUrl = 'http://dash.ptzlabs.com/';
var userId = '102190104458073909670';
var mode = 'blank';

function poll(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http:/dash.ptzlabs.com/mode?user="+userId, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var data = JSON.parse(xhr.responseText);
      if(mode != data.mode){
        mode = data.mode;
        update();
      }
    }
  }
  xhr.send();
  setTimeout(function() { poll() }, 5000);
}

function update(){
  chrome.windows.create({'url': 'http://ptzlabs.com/dw', 'type': 'popup'}, function(window) {
    chrome.windows.update(window.id, {state: 'fullscreen'});
  });
}

poll();

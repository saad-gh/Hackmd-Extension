chrome.management.onEnabled.addListener(function (info){
  if(info.name == "Google Input Tools"){
    chrome.tabs.executeScript({
          file: 'contentScript.js'
        });
  }
});

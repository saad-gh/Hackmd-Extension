chrome.commands.onCommand.addListener(function(command) {
  if(command == "insert-span")
  chrome.tabs.executeScript({
        file: 'contentScript.js'  
      });
});

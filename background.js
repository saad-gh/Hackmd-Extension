chrome.commands.onCommand.addListener(function(command) {
  if(command == "insert-span"){
    selectText("sandbox");
    document.execCommand("copy");
    chrome.tabs.executeScript({
          file: 'contentScript.js'
        });
  }
});

// gist source: https://stackoverflow.com/questions/1173194/select-all-div-text-with-single-mouse-click
function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

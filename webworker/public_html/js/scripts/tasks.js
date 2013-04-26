var data = "", i = 0;
var loop = function() {
    self.postMessage(data + i++);
    setTimeout(function() {
        loop();
    }, 250);
};
onmessage = function() {
    loop();
}
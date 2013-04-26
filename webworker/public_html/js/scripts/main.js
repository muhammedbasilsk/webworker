var worker = new Worker('js/scripts/tasks.js');

worker.onmessage = function(e) {
  $('#result').html(e.data);
};

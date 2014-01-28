/*! wweval 1.0.0 | Copyright 2014 Andrew Duthie | MIT License */
/* jshint evil: true */
;(function(global, factory) {
  // Use UMD pattern to expose exported functions
  if (typeof define === 'function' && define.amd) {
    // Expose to RequireJS
    define([ ], factory);
  } else {
    // Expose to global object (likely browser window)
    global.wweval = factory();
  }
}(this, function() {
  // Track running intervals
  var callbacks = [ ];

  // Fallback to prefixed URL if unsupported
  var URL = URL || webkitURL;

  // Construct worker object
  var process = 'onmessage = function(e) { postMessage({ "id": e.data.id, "eval": eval(e.data.expr) }); }',
    blob = new Blob([ process ], { type: 'application/javascript' }),
    worker = new Worker(URL.createObjectURL(blob));

  worker.onmessage = function(e) {
    if (callbacks[e.data.id]) {
      // Trigger callback when evaluation complete
      callbacks[e.data.id](e.data.eval);
      delete callbacks[e.data.id];
    }
  };

  return function (expr, callback) {
    // Fallback to eval if web workers unsupported
    if (!(URL && Blob && Worker)) {
      callback(eval(expr));
    }

    // Add callback to queue
    callbacks.push(callback || '');
    worker.postMessage({
      id: callbacks.length - 1,
      expr: expr
    });
  };
}));
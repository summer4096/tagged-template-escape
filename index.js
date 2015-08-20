function esc (safe, strings, values) {
  var maxLength = Math.max(strings.length, values.length);

  var output = '';
  for (var i = 0; i < maxLength; i++) {
    if (typeof strings[i] !== 'undefined') {
      output += strings[i];
    }
    if (typeof values[i] !== 'undefined') {
      output += safe(values[i]);
    }
  }

  return output;
}

module.exports = function (safe) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    var strings = args.shift();
    return esc(safe, strings, args);
  }
}

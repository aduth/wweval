# wweval [![Build Status](https://travis-ci.org/aduth/wweval.png?branch=master)](https://travis-ci.org/aduth/wweval)

wweval is an asynchronous `eval` using web workers, falling back to `eval` in browsers where web workers are unsupported.

```javascript
wweval('1 + 2', function(result) {
  console.log('1 + 2 = ' + result); // 3
});
```

## Usage

### Browser

Download wweval.js to your project or install using Bower (`bower install wweval`), then include the file using a `<script>` tag.

```html
<script src="/path/to/libs/wweval.js"></script>
<script>
wweval('1 + 2', function(result) {
  console.log('1 + 2 = ' + result); // 3
});
</script>
```

### RequireJS

Download wweval.js to your project or install using Bower (`bower install wweval`), then include the file as a dependency to your module.

```javascript
define([
  'path/to/libs/wweval'
], function(wweval) {
  wweval('1 + 2', function(result) {
    console.log('1 + 2 = ' + result); // 3
  });
});
```

## Attribution

This is largely inspired by the asynchronous `eval` example on MDN ([link](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers#Example_.231.3A_Create_a_generic_.22asynchronous_eval%28%29.22)), which unfortunately results in an same-origin violation error in modern browsers.

## License

Copyright 2014 Andrew Duthie.

Released freely under the MIT license (refer to LICENSE.txt).

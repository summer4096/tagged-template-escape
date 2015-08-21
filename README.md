# tagged-template-escape

Customizable escaping for es6 tagged template strings

### Get it

```console
npm install --save tagged-template-escape
```

### Escape stuff

```javascript
import templateEscaper from 'tagged-template-escape';

let urlEscape = templateEscaper(encodeURIComponent);

let somethingEvil = '\uD800\uDFFF';

window.location.href = urlEscape`http://mysite.com/?var=${somethingEvil}`;
```

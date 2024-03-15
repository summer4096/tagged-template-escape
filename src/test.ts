import stringEscape from '..';
import assert from 'assert';

let simpleEscape = (str: any) => `"${str}"`;

let simpleTag = stringEscape(simpleEscape);

assert.equal(simpleTag`Hello, ${5}`, 'Hello, "5"');

console.log('yay the tests passed')

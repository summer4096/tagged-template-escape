import stringEscape from '../';
import assert from 'assert';

let simpleEscape = str => `"${str}"`;

let simpleTag = stringEscape(simpleEscape);

assert.equal(simpleTag`Hello, ${5}`, 'Hello, "5"');

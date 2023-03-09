const rot47 = require('./index.js');

const text = 'Hello world! What\'s up?';
console.log(`Text: ${text}\n`);

const encoded = rot47.encode(text);
console.log(`Encoded: ${encoded}`);

const decoded = rot47.decode(encoded);
console.log(`Decoded: ${decoded}`);

const moduleVersion = rot47.version;
console.log(`\nModule version: ${moduleVersion}`);
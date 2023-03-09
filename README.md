# 🌀 ROT47
The **@sefinek/rot47** module is a simple Node.js module for encoding and decoding text in ROT47.

## 📥 Installation
To install the module, use the following command:
```shell
npm install @sefinek/rot47
```

## 🤔 Usage
To use the module, require it in your [Node.js](https://nodejs.org) application:
```js
const rot47 = require('@sefinek/rot47');
```

## 🔼 Encoding text in ROT47
To encode a string in ROT47, use the encode function:
```js
const encoded = rot47.encode('Hello world!');
console.log(encoded); // "w6==@ H@C=5P"
```

## 🔽 Decoding text from ROT47
To decode a string from ROT47, use the decode function:
```js
const decoded = rot47.decode('w6==@ H@C=5P');
console.log(decoded); // "Hello world!"
```

## 🤝 Contributing
Contributions are always welcome! If you have any ideas or suggestions for improving this module, feel free to open an issue or submit a [Pull request](https://github.com/sefinek24/rot47/pulls).

## 📝 License
This module is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
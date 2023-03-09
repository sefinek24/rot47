const { version } = require('./package.json');

const MIN_CHAR_CODE = 33;
const MAX_CHAR_CODE = 126;
const CHAR_CODE_OFFSET = 47;
const CHAR_CODE_RANGE = MAX_CHAR_CODE - MIN_CHAR_CODE + 1;

const ROT47 = {
	/**
	 * Decodes a string using the ROT47 algorithm.
	 * @param {string} str - The string to decode.
	 * @returns {string} The decoded string.
	 */
	decode: str => {
		if (typeof str !== 'string') {
			throw new Error('Input must be a string.');
		}

		let decoded = '';
		for (const char of str) {
			let charCode = char.charCodeAt(0);
			if (charCode >= MIN_CHAR_CODE && charCode <= MAX_CHAR_CODE) {
				charCode -= CHAR_CODE_OFFSET;
				if (charCode < MIN_CHAR_CODE) {
					charCode += CHAR_CODE_RANGE;
				}
			}
			decoded += String.fromCharCode(charCode);
		}
		return decoded;
	},


	/**
	 * Encodes a string using the ROT47 algorithm.
	 * @param {string} str - The string to encode.
	 * @returns {string} The encoded string.
	 */
	encode: str => {
		if (typeof str !== 'string') {
			throw new Error('Input must be a string.');
		}

		let encoded = '';
		for (const char of str) {
			let charCode = char.charCodeAt(0);
			if (charCode >= MIN_CHAR_CODE && charCode <= MAX_CHAR_CODE) {
				charCode += CHAR_CODE_OFFSET;
				if (charCode > MAX_CHAR_CODE) {
					charCode -= CHAR_CODE_RANGE;
				}
			}
			encoded += String.fromCharCode(charCode);
		}
		return encoded;
	},


	/**
	 * Show module version.
	 * @returns Module version as a string.
	 */
	version,
};

module.exports = ROT47;
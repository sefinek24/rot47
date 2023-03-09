const rot47 = require('../index.js');
const { version } = require('../package.json');

describe('rot47', () => {
	test('encode and decode are reversible', () => {
		const input = 'This is a test string.';
		const encoded = rot47.encode(input);
		const decoded = rot47.decode(encoded);
		expect(decoded).toEqual(input);
	});

	test('encodes and decodes a long string', () => {
		const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tincidunt massa. Fusce sagittis sapien ut tellus tincidunt posuere. Sed quis dolor vel nunc sollicitudin faucibus. Nulla vitae quam id lorem maximus porttitor ac eu dolor. Fusce fermentum lectus ut mi venenatis, nec iaculis libero blandit. Sed aliquet, velit vitae vehicula posuere, turpis sapien imperdiet mi, sed efficitur justo orci eget ipsum. Sed varius, leo a venenatis imperdiet, ipsum felis pulvinar tellus, quis bibendum nisl lorem et eros. Ut sed tristique mauris, nec sagittis mi.';
		const encodedString = rot47.encode(longString);
		const decodedString = rot47.decode(encodedString);

		expect(decodedString).toBe(longString);
	});

	test('encodes and decodes a string containing all printable ASCII characters', () => {
		const inputString = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
		const encodedString = rot47.encode(inputString);
		const decodedString = rot47.decode(encodedString);

		expect(decodedString).toBe(inputString);
	});

	test('encode and decode do not modify non-ASCII characters', () => {
		const input = '日本語';
		const encoded = rot47.encode(input);
		const decoded = rot47.decode(encoded);

		expect(decoded).toEqual(input);
	});


	describe('encode()', () => {
		it('should encode a string using ROT47 algorithm', () => {
			const input = 'Hello world!';
			const expectedOutput = 'w6==@ H@C=5P';
			const output = rot47.encode(input);

			expect(output).toEqual(expectedOutput);
		});

		it('should throw an error if input is not a string', () => {
			const output = rot47.encode('');

			expect(output).toEqual('');
		});

		it('should throw an error if input is not a string', () => {
			expect(() => rot47.encode(2137)).toThrow('Input must be a string.');
		});
	});


	describe('decode()', () => {
		it('should decode a string using ROT47 algorithm', () => {
			const input = 'w6==@ H@C=5P';
			const expectedOutput = 'Hello world!';
			const output = rot47.decode(input);
			expect(output).toEqual(expectedOutput);
		});

		it('should return an empty string for an empty input', () => {
			const output = rot47.decode('');

			expect(output).toEqual('');
		});

		it('should throw an error if input is not a string', () => {
			expect(() => rot47.decode(123)).toThrow('Input must be a string.');
		});
	});


	describe('version', () => {
		it('should return true for valid version', () => {
			expect(rot47.version).toBe(version);
		});
	});
});
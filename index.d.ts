declare module '@sefinek/rot47' {
    /**
     * Encodes a string in ROT47.
     *
     * @param input - The input string to be encoded.
     * @returns The ROT47-encoded string.
     */
    function encode(input: string): string;

    /**
     * Decodes a string from ROT47.
     *
     * @param input - The input string to be decoded.
     * @returns The ROT47-decoded string.
     */
    function decode(input: string): string;

    /**
     * The version of the @sefinek/rot47 module.
     */
    const version: string;

    export { encode, decode, version };
}
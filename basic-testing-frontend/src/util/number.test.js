import { describe, expect, it } from "vitest";

import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
	it("should transform a string number to a number of type number", () => {
		const input = "1";
		const result = transformToNumber(input);
		expect(result).toBeTypeOf("number");
	});

	it("should transform a string number to a number", () => {
		const input = "1";
		const result = transformToNumber(input);
		expect(result).toBe(+input);
	});

	it("should yield NaN for non-transformable values", () => {
		const input = "invalid";
		const input2 = {};
		const input3 = [];

		const result = transformToNumber(input);
		const result2 = transformToNumber(input2);
		const result3 = transformToNumber(input3);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
		expect(result3).toBeNaN();
	});
});

describe("cleanNumbers()", () => {
	it("should return an array of number values if an array of string number values is provided", () => {
		const numberValues = ["1", "2"];
		const result = cleanNumbers(numberValues);
		expect(result[0]).toBeTypeOf("number");
	});

	it("should throw an error if an array with at least one empty string is provided", () => {
		const numberValues = ["", 1];
		const cleanFn = () => cleanNumbers(numberValues);
		expect(cleanFn).toThrow();
	});
});

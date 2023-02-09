import { expect, it } from "vitest";

import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as a value", () => {
	const textInput = "";
	const validationFn = () => validateNotEmpty(textInput);
	expect(validationFn).toThrow();
});

it("should throw an error if an empty string is provided as a value", () => {
	const textInput = "  ";
	const validationFn = () => validateNotEmpty(textInput);
	expect(validationFn).toThrow();
});

it("should throw an error with the provided error message", () => {
	const textInput = "";
	const textErrorMessage = "Test";
	const validationFn = () => validateNotEmpty(textInput, textErrorMessage);
	expect(validationFn).toThrow(textErrorMessage);
});

import { expect, it } from "vitest";

import { add } from "./math";

it("should summarize all number values in an array", () => {
	const numbers = [1, 2, 3]; // Arrange

	const result = add(numbers); // Act

	// Assert
	const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
	expect(result).toBe(expectedResult);
});

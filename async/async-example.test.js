import { describe, expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
	it("should generate a token value", (done) => {
		const userEmail = "test@test.com";
		generateToken(userEmail, (err, token) => {
			try {
				expect(token).toBeDefined();
				done();
			} catch (err) {
				done(err);
			}
		});
	});
});

describe("generateTokenPromise()", () => {
	it("should generate a token value", () => {
		const userEmail = "test@test.com";
		return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
	});

	it("should generate a token value", async () => {
		const userEmail = "test@test.com";
		const token = await generateTokenPromise(userEmail);
		expect(token).toBeDefined();
	});
});

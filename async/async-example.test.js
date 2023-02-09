import { describe, expect, it } from "vitest";

import { generateToken } from "./async-example";

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

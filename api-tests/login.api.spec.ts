import { expect, test } from "@playwright/test";
import { ConfigReader } from "../config-reader/config.reader";

test.describe("API login tests", () => {

  test("Post: Verify login with valid details", async ({ request }) => {
    const response = await request.post("verifyLogin", {
      form: {
        email: ConfigReader.EMAIL,
        password: ConfigReader.PASSWORD,
      },
    });
    const responseBody = await response.json();
    expect(responseBody.message).toBe("User exists!");
});

test("Post: Verify login without email", async ({ request }) => {
  const response = await request.post("verifyLogin", {
    form: {
      password: ConfigReader.PASSWORD,
    },
  });
  const responseBody = await response.json();
  expect(responseBody.message).toBe("Bad request, email or password parameter is missing in POST request.");
});

test("Post: Verify login with invalid credentials", async ({ request }) => {
  const response = await request.post("verifyLogin", {
    form: {
      email: "invalidEmail",
      passowrd: "invalidPassword"
    },
  });
  const responseBody = await response.json();
  expect(responseBody.message).toBe("Bad request, email or password parameter is missing in POST request.");
});

});


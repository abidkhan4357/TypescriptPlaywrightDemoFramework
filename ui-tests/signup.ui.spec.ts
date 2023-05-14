import { test } from '../fixtures/base.page'
import { SignupBuilder } from '../testData/signup.data';

test.beforeEach(async ({ signupPage, context }) => {
    context.clearCookies();
    await signupPage.goto();
});

//sign up test case with random data using builder pattern
test('should successfully sign up new user with random user data', async ({ signupPage})  => {
    const randomSignupData = SignupBuilder.getRandomUserSignupData();
    await signupPage.signupNewUser(randomSignupData);
    await signupPage.assertAccountCreatedTextToBeVisible();
});

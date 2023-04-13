import { LoginPage } from '../pageobjects/login.page';
import { SecurePage}  from '../pageobjects/secure.page';

describe('My Login application', () => {
    let loginPage: LoginPage;
    let securePage: SecurePage;
    beforeEach(() => {
      loginPage = new LoginPage();
      securePage = new SecurePage();
    });
    it('should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});



class LoginPage {


    constructor(page)
    {
        this.page = page;
        const framePage = this.page.frameLocator("#frame");
        this.username = framePage.locator("input[name='username']");
        this.nextButton = framePage.locator("button:has-text('Next')");
        this.password = framePage.locator("input[name*='password']");
        this.loginButton = framePage.locator("button:has-text('Log In')");
    }




    async goTo()
    {
        //const browser = await chromium.launch({ headless: false, slowMo: 300 });
        //const page = await browser.newPage();
        //await this.page.goto("https://staging-platform.productsup.com/login");
        await this.page.goto("https://platform.productsup.com/login");
    }


    async validLogin(usernameData,passwordData)
    {


           await this.username.type(usernameData);
           await this.nextButton.click();
           await this.password.type(passwordData);
           await this.loginButton.click();
           
           
           //await this.page.pause();
          


    }



}

export default { LoginPage };
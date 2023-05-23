package com.orangehrmlive.demo.steps;

import com.orangehrmlive.demo.pages.DashboardPage;
import com.orangehrmlive.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginSteps {
    @When("^I enter the username$")
    public void iEnterTheUsername() {
        new LoginPage().loginToApplication();
    }

    @And("^I enter the password$")
    public void iEnterThePassword() {
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
    }

    @Then("^I can see 'WelCome' Message$")
    public void iCanSeeWelComeMessage() {
        Assert.assertEquals(new DashboardPage().verifyDashboardMessage(),"Dashboard","Error");
    }

    @And("^I can see the Logo$")
    public void iCanSeeTheLogo() {
        Assert.assertEquals(new LoginPage().verifyLogoIsDisplayed(),"orangehrm-logo","Error");
    }

    @When("^I login to the application$")
    public void iLoginToTheApplication() {
        new LoginPage().loginToApplication();
    }

    @And("^I click on user profile logo$")
    public void iClickOnUserProfileLogo() {
        new DashboardPage().clickOnUserProfileLogo();
    }

    @And("^I mouse hover on 'Logout' and click$")
    public void iMouseHoverOnLogoutAndClick() {
        new DashboardPage().mouseHoverOnLogOutAndClick();
    }

    @Then("^I can see the text 'Login Panel'$")
    public void iCanSeeTheTextLoginPanel() {
        Assert.assertEquals(new LoginPage().getTextLoginPanel(),"Login","Error");
    }
}

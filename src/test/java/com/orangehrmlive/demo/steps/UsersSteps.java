package com.orangehrmlive.demo.steps;

import com.orangehrmlive.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class UsersSteps {
    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() {
    }

    @When("^I login to application$")
    public void iLoginToApplication() {
        new LoginPage().loginToApplication();
    }

    @And("^I click on 'Admin tab'$")
    public void iClickOnAdminTab() {
        new HomePage().clickOnAdminTab();
    }

    @Then("^I can see 'System Users' Text$")
    public void iCanSeeSystemUsersText() {
        Assert.assertEquals(new ViewSystemUsersPage().verifySystemUsersText(),"System Users","Error");
    }

    @And("^I click on 'Add' button$")
    public void iClickOnAddButton() {
        new ViewSystemUsersPage().clickOnAddButton();
    }

    @Then("^I can see 'Add User' Text$")
    public void iCanSeeAddUserText() {
        Assert.assertEquals(new AddUserPage().verifyAddUserText(),"Add User","Error");
    }

    @And("^I select User role 'Admin'$")
    public void iSelectUserRoleAdmin() {
        new AddUserPage().selectUserRoll();
    }

    @And("^I enter employee name$")
    public void iEnterEmployeeName() throws InterruptedException {
        new AddUserPage().enterEmployeeName();
        Thread.sleep(2000);
    }

    @And("^I enter username$")
    public void iEnterUsername() {
        new AddUserPage().enterUserName();
    }

    @And("^I select status 'Disable'$")
    public void iSelectStatusDisable() {
        new AddUserPage().selectStatusDisabled();
        new AddUserPage().selectDisableInStatusDropdown();
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new AddUserPage().enterPassword();
    }

    @And("^I Confirm Password$")
    public void iConfirmPassword() {
        new AddUserPage().confirmPassword();
    }

    @And("^I click on 'Save' button$")
    public void iClickOnSaveButton() {
        new AddUserPage().clickOnSaveButton();
    }

    @Then("^I can see message 'Successfully saved'$")
    public void iCanSeeMessageSuccessfullySaved() {
        Assert.assertEquals(new AdminPage().verifySaveSuccessfully(),"Successfully Saved","Error");
    }

    @And("^I enter the Username$")
    public void iEnterTheUsername() {
        new ViewSystemUsersPage().enterUserName();
    }

    @And("^I select User role$")
    public void iSelectUserRole() {
        new ViewSystemUsersPage().selectUserRole();
    }

    @And("^I select status$")
    public void iSelectStatus() {
        new ViewSystemUsersPage().selectStatus();
    }

    @And("^I click on 'Search' button$")
    public void iClickOnSearchButton() {
        new ViewSystemUsersPage().clickOnSearchButton();
    }

    @Then("^I can see the User in Result list$")
    public void iCanSeeTheUserInResultList() {
        Assert.assertEquals(new ViewSystemUsersPage().verifyUserShouldBeInResultList(),"Admin","Error");
    }

    @And("^I click on check box$")
    public void iClickOnCheckBox() {

    }

    @And("^I click on delete button$")
    public void iClickOnDeleteButton() {
    }

    @And("^popup will display$")
    public void popupWillDisplay() {
    }

    @And("^I click on ok button on popup$")
    public void iClickOnOkButtonOnPopup() {
    }

    @Then("^I can see message 'Successfully Deleted'$")
    public void iCanSeeMessageSuccessfullyDeleted() {
    }

    @Then("^I can see message 'No records found'$")
    public void iCanSeeMessageNoRecordsFound() {
        Assert.assertEquals(new ViewSystemUsersPage().verifyNoRecordsFoundText(),"No Records Found","Error");
    }
}

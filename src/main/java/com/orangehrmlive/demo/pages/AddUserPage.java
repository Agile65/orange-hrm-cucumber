package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddUserPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddUserPage.class.getName());

    public AddUserPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1])")
    WebElement userRollDropDown;
    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Type for hints...']")
    WebElement employeeName;
    @CacheLookup
    @FindBy(css = ".oxd-autocomplete-option span")
    WebElement lisa;
    @CacheLookup
    @FindBy(xpath = "(//input[@autocomplete='off'])[1]")
    WebElement userName;
    @CacheLookup
    @FindBy(xpath = "//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]")
    WebElement statusDropDown;
    @CacheLookup
    @FindBy(xpath = "(//input[@type='password'])[1]")
    WebElement password;
    @CacheLookup
    @FindBy(xpath = "(//input[@type='password'])[2]")
    WebElement confirmPassword;
    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement saveButton;
    @CacheLookup
    @FindBy(css = ".oxd-button.oxd-button--medium.oxd-button--ghost")
    WebElement cancelButton;
    @CacheLookup
    @FindBy(xpath = "//h6[normalize-space()='Add User']")
    WebElement textAddUser;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Disabled']")
    WebElement disableStatus;

    public String verifyAddUserText() {
        log.info("Verify add user text : " + textAddUser.toString());
        return getTextFromElement(textAddUser);
    }

    public void selectUserRoll() {
        clickOnElement(userRollDropDown);
        log.info("User roll dropdown : " + userRollDropDown.toString());
        userRollDropDown.sendKeys(Keys.DOWN, Keys.TAB);
    }

    public void enterEmployeeName() {
        sendTextToElement(employeeName, "Lisa  Andrews");
        clickOnElement(lisa);
        log.info("Employee name : " + lisa.toString());
    }

    public void enterUserName() {
        sendTextToElement(userName, "LisaA");
        log.info("Employee name : " + userName.toString());
    }

    public void selectStatusDisabled() {//Check with Dhara
        clickOnElement(statusDropDown);
        statusDropDown.sendKeys(Keys.DOWN, Keys.DOWN, Keys.ENTER);

        log.info("Select status dropdown  : " + statusDropDown.toString());
    }

    public void selectDisableInStatusDropdown() {
        clickOnElement(disableStatus);
        log.info("Select disabled in status dropdown  : " + disableStatus.toString());
    }

    public void enterPassword() {
        sendTextToElement(password, "Temp@123");
        log.info("Password Entered  : " + password.toString());
    }

    public void confirmPassword() {
        sendTextToElement(confirmPassword, "Temp@123");
        log.info("Confirm password : " + confirmPassword.toString());
    }

    public void clickOnSaveButton() {
        clickOnElement(saveButton);
        log.info("Click on save button : " + statusDropDown.toString());
    }
}

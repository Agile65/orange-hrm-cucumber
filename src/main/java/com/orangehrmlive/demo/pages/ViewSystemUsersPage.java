package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ViewSystemUsersPage extends Utility {

    private static final Logger log = LogManager.getLogger(ViewSystemUsersPage.class.getName());

    public ViewSystemUsersPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css =".oxd-text.oxd-text--h5")
    WebElement textSystemUsers;
    @CacheLookup
    @FindBy(xpath ="//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
    WebElement userNameField;
    @CacheLookup
    @FindBy(xpath ="//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]")
    WebElement userRollDropDown;
    @CacheLookup
    @FindBy(xpath ="//div[contains(text(),'-- Select --')]")
    WebElement statusDropDown;
   // By employeeNameField=By.xpath("//input[@placeholder='Type for hints...']");
    @CacheLookup
    @FindBy(xpath ="//button[@type='submit']")
    WebElement searchButton;
    @CacheLookup
    @FindBy(xpath ="//button[normalize-space()='Search']")
    WebElement searchButton1;

    //By resetButton=By.cssSelector(".oxd-button.oxd-button--medium.oxd-button--ghost");
    By addButton=By.cssSelector("button[class='oxd-button oxd-button--medium oxd-button--secondary']");
    @CacheLookup
    @FindBy(xpath ="//span[normalize-space()='No Records Found']")
    WebElement textNoRecordsFound;
    @CacheLookup
    @FindBy(xpath ="(//div[contains(text(),'Admin')])[1]")
    WebElement textUserAdmin;
    //By deleteButton;

    public String verifySystemUsersText(){
        log.info("Click on overnight duffle : " + textSystemUsers.toString());
        return getTextFromElement(textSystemUsers);
    }
    public void enterUserName(){
        sendTextToElement(userNameField,"Admin");
        log.info("Send text to element " + userNameField.toString());
    }
    public void selectUserRole(){
        clickOnElement(userRollDropDown);
        userRollDropDown.sendKeys(Keys.DOWN,Keys.TAB);
        log.info("Select user role " + userRollDropDown.toString());
    }
    public void selectStatus(){
        clickOnElement(statusDropDown);
        statusDropDown.sendKeys(Keys.DOWN,Keys.TAB);
        log.info("Select status " + statusDropDown.toString());
    }
    public void clickOnSearchButton(){
        clickOnElement(searchButton);
        log.info("Select status " + searchButton.toString());
    }
    public void clickOnAddButton(){
        clickOnElement(addButton);
        log.info("Select status " + addButton.toString());
    }
    public String verifyNoRecordsFoundText(){
        log.info("Select status " + textNoRecordsFound.toString());
        return getTextFromElement(textNoRecordsFound);
    }
    public void clickOnSearchButton1(){
        log.info("Select status " + searchButton1.toString());
        clickOnElement(searchButton1);
    }
    public String verifyUserShouldBeInResultList(){
        log.info("Select status " + textUserAdmin.toString());
        return getTextFromElement(textUserAdmin);
    }
}

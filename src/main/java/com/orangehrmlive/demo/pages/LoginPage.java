package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(name="username")
    WebElement userName;
    @CacheLookup
    @FindBy(name="password")
    WebElement password;
    @CacheLookup
    @FindBy(xpath="//button[@type='submit']")
    WebElement loginButton;
    @CacheLookup
    @FindBy(xpath="//div[@class='orangehrm-login-logo']//img[@alt='orangehrm-logo']")
    WebElement hrForAllLogo;
    @CacheLookup
    @FindBy(xpath="//h5[normalize-space()='Login']")
    WebElement textLoginPanel;

    public void loginToApplication(){
        sendTextToElement(userName,"Admin");
        sendTextToElement(password,"admin123");
        clickOnElement(loginButton);
        log.info("Click on login button : " + loginButton.toString());
    }
    public String getTextLoginPanel(){
        log.info("Login panel text : " + textLoginPanel.toString());
        return getTextFromElement(textLoginPanel);
    }
    public String verifyLogoIsDisplayed() {
        return getAttributeValue(hrForAllLogo,"alt");
    }
}

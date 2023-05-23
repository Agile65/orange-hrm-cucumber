package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage extends Utility {
    private static final Logger log = LogManager.getLogger(DashboardPage.class.getName());

    public DashboardPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath="//h6[normalize-space()='Dashboard']")
    WebElement textDashboard;
    @CacheLookup
    @FindBy(xpath="//p[@class='oxd-userdropdown-name']")
    WebElement userProfileLogo;
    @CacheLookup
    @FindBy(xpath="//a[normalize-space()='Logout']")
    WebElement linkLogOut;

    public void clickOnUserProfileLogo(){
        log.info("Verify add user text : " + userProfileLogo.toString());
        clickOnElement(userProfileLogo);
    }
    public String verifyDashboardMessage(){
        log.info("Verify Dashboard message : " + textDashboard.toString());
        return getTextFromElement(textDashboard);
    }
    public void mouseHoverOnLogOutAndClick(){
        clickOnElement(linkLogOut);
        log.info("Verify add user text : " + linkLogOut.toString());
    }
}

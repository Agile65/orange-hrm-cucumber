package com.orangehrmlive.demo.pages;

import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdminPage extends Utility {
    private static final Logger log = LogManager.getLogger(AdminPage.class.getName());

    public AdminPage() {
        PageFactory.initElements(driver, this);
    }
    //By userManagement=By.xpath("//span[normalize-space()='User Management']");
    //By job=By.xpath("//span[normalize-space()='Job']");
    //By organizationTab=By.xpath("//span[normalize-space()='Organization']");
    @CacheLookup
    @FindBy(xpath="//div[@class='oxd-toast oxd-toast--success oxd-toast-container--toast']")
    WebElement saveMessage;
    public String verifySaveSuccessfully(){
        return getTextFromElement(saveMessage);
    }
}

package com.orangehrmlive.demo.pages;


import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath="//span[normalize-space()='Admin']")
    WebElement admin;
   // By search=By.xpath("//input[@placeholder='Search']");
    //By PIM=By.xpath("//span[normalize-space()='PIM']");
    //By leave=By.xpath("//span[normalize-space()='Leave']");
    By dashboard=By.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Dashboard']");

    public void clickOnAdminTab(){
        log.info("Click on overnight duffle : " + admin.toString());
        clickOnElement(admin);
    }
    public String verifyDashboardMessage(){
        log.info("Click on overnight duffle : " + dashboard.toString());
        return getTextFromElement(dashboard);
    }
}

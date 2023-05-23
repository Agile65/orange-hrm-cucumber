$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginfeature.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4747490500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 141010800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should login successFully",
  "description": "",
  "id": "login-test;verify-user-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I enter the username",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see \u0027WelCome\u0027 Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iEnterTheUsername()"
});
formatter.result({
  "duration": 440693700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterThePassword()"
});
formatter.result({
  "duration": 26500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanSeeWelComeMessage()"
});
formatter.result({
  "duration": 1006533000,
  "status": "passed"
});
formatter.after({
  "duration": 71800,
  "status": "passed"
});
formatter.before({
  "duration": 3639008100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that the logo display on Login Page",
  "description": "",
  "id": "login-test;verify-that-the-logo-display-on-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I can see the Logo",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iCanSeeTheLogo()"
});
formatter.result({
  "duration": 653099500,
  "status": "passed"
});
formatter.after({
  "duration": 46100,
  "status": "passed"
});
formatter.before({
  "duration": 3295051900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 427500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user should log out successfully",
  "description": "",
  "id": "login-test;verify-user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I login to the application",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on user profile logo",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on \u0027Logout\u0027 and click",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can see the text \u0027Login Panel\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iLoginToTheApplication()"
});
formatter.result({
  "duration": 1757277000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 515695100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iMouseHoverOnLogoutAndClick()"
});
formatter.result({
  "duration": 1531464600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanSeeTheTextLoginPanel()"
});
formatter.result({
  "duration": 217975700,
  "status": "passed"
});
formatter.after({
  "duration": 57100,
  "status": "passed"
});
formatter.uri("userfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Users Test",
  "description": "",
  "id": "users-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3580673300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Admin should add user successfully",
  "description": "",
  "id": "users-test;admin-should-add-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I login to application",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Admin tab\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can see \u0027System Users\u0027 Text",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \u0027Add\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see \u0027Add User\u0027 Text",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I select User role \u0027Admin\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter employee name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter username",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select status \u0027Disable\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can see message \u0027Successfully saved\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 692852300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 3007793400,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeSystemUsersText()"
});
formatter.result({
  "duration": 397907900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 454536000,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeAddUserText()"
});
formatter.result({
  "duration": 233736700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 64392200,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//div[@class\u003d\u0027oxd-select-text-input\u0027][normalize-space()\u003d\u0027-- Select --\u0027])[1]) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//div[@class\u003d\u0027oxd-select-text-input\u0027][normalize-space()\u003d\u0027-- Select --\u0027])[1])\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [49305c45040192699a4f0cf5392e3f32, findElement {using\u003dxpath, value\u003d(//div[@class\u003d\u0027oxd-select-text-input\u0027][normalize-space()\u003d\u0027-- Select --\u0027])[1])}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\janih\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63182}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63182/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 49305c45040192699a4f0cf5392e3f32\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.clickOnElement(Utility.java:52)\r\n\tat com.orangehrmlive.demo.pages.AddUserPage.selectUserRoll(AddUserPage.java:60)\r\n\tat com.orangehrmlive.demo.steps.UsersSteps.iSelectUserRoleAdmin(UsersSteps.java:42)\r\n\tat ✽.And I select User role \u0027Admin\u0027(userfeature.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UsersSteps.iEnterEmployeeName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iEnterUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iSelectStatusDisable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UsersSteps.iCanSeeMessageSuccessfullySaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 364510800,
  "status": "passed"
});
formatter.before({
  "duration": 3300261700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the user created and verify it",
  "description": "",
  "id": "users-test;search-the-user-created-and-verify-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    },
    {
      "line": 22,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I login to application",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Admin tab\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can see \u0027System Users\u0027 Text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I enter the Username",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select User role",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can see the User in Result list",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1957250900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1657824600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeSystemUsersText()"
});
formatter.result({
  "duration": 391933800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iEnterTheUsername()"
});
formatter.result({
  "duration": 418481200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 185164800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectStatus()"
});
formatter.result({
  "duration": 128599500,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 95390300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeTheUserInResultList()"
});
formatter.result({
  "duration": 57341400,
  "status": "passed"
});
formatter.after({
  "duration": 65100,
  "status": "passed"
});
formatter.before({
  "duration": 4336451300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 90900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that admin should delete the user successFully",
  "description": "",
  "id": "users-test;verify-that-admin-should-delete-the-user-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I login to application",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on \u0027Admin tab\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I can see \u0027System Users\u0027 Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I enter the Username",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select User role",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can see the User in Result list",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "popup will display",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on ok button on popup",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I can see message \u0027Successfully Deleted\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1403967800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1452103000,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeSystemUsersText()"
});
formatter.result({
  "duration": 504246200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iEnterTheUsername()"
});
formatter.result({
  "duration": 536186600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 186713300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectStatus()"
});
formatter.result({
  "duration": 255541200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 170275500,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeTheUserInResultList()"
});
formatter.result({
  "duration": 72980100,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnCheckBox()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 269700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.popupWillDisplay()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeMessageSuccessfullyDeleted()"
});
formatter.result({
  "duration": 46100,
  "status": "passed"
});
formatter.after({
  "duration": 39400,
  "status": "passed"
});
formatter.before({
  "duration": 4833581900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "UsersSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 53100,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Search the deleted user and verify the message no record found",
  "description": "",
  "id": "users-test;search-the-deleted-user-and-verify-the-message-no-record-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I login to application",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click on \u0027Admin tab\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I can see \u0027System Users\u0027 Text",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I enter the Username",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select User role",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on \u0027Search\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I can see message \u0027No records found\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "UsersSteps.iLoginToApplication()"
});
formatter.result({
  "duration": 1414459800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 3678887800,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeSystemUsersText()"
});
formatter.result({
  "duration": 287299000,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iEnterTheUsername()"
});
formatter.result({
  "duration": 348963600,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 154270900,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iSelectStatus()"
});
formatter.result({
  "duration": 119493700,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 124336400,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iCanSeeMessageNoRecordsFound()"
});
formatter.result({
  "duration": 24936846400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //span[normalize-space()\u003d\u0027No Records Found\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.orangehrmlive.demo.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.orangehrmlive.demo.pages.ViewSystemUsersPage.verifyNoRecordsFoundText(ViewSystemUsersPage.java:79)\r\n\tat com.orangehrmlive.demo.steps.UsersSteps.iCanSeeMessageNoRecordsFound(UsersSteps.java:130)\r\n\tat ✽.Then I can see message \u0027No records found\u0027(userfeature.feature:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3995300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.127)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [53838ffbacb8e3aef019724f8ff4ef45, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\janih\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63295}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63295/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 53838ffbacb8e3aef019724f8ff4ef45\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.orangehrmlive.demo.utility.Utility.getScreenshot(Utility.java:340)\r\n\tat com.orangehrmlive.demo.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});
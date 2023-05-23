Feature: Login Test

  Background:
    Given I am on the homepage

  @sanity @regression
  Scenario: Verify user should login successFully
    When I enter the username
    And  I enter the password
    And  I click on login button
    Then I can see 'WelCome' Message

  @smoke @regression
  Scenario: Verify that the logo display on Login Page
    And I can see the Logo

  @regression
  Scenario: Verify user should log out successfully
    When I login to the application
    And  I click on user profile logo
    And  I mouse hover on 'Logout' and click
    Then I can see the text 'Login Panel'
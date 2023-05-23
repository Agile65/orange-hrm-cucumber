Feature: Users Test

  Background:
    Given I am on the homepage

  @sanity @regression
  Scenario: Admin should add user successfully
    When I login to application
    And  I click on 'Admin tab'
    Then I can see 'System Users' Text
    And  I click on 'Add' button
    Then I can see 'Add User' Text
    And  I select User role 'Admin'
    And  I enter employee name
    And  I enter username
    And  I select status 'Disable'
    And  I enter password
    And  I Confirm Password
    And  I click on 'Save' button
    Then I can see message 'Successfully saved'

  @smoke @regression
  Scenario: Search the user created and verify it
    When I login to application
    And  I click on 'Admin tab'
    Then I can see 'System Users' Text
    And  I enter the Username
    And  I select User role
    And  I select status
    And  I click on 'Search' button
    Then I can see the User in Result list

  @regression
  Scenario: Verify that admin should delete the user successFully
    When I login to application
    And  I click on 'Admin tab'
    Then I can see 'System Users' Text
    And  I enter the Username
    And  I select User role
    And  I select status
    And  I click on 'Search' button
    Then I can see the User in Result list
    And  I click on check box
    And  I click on delete button
    And  popup will display
    And  I click on ok button on popup
    Then I can see message 'Successfully Deleted'

  @regression
  Scenario: Search the deleted user and verify the message no record found
    When I login to application
    And  I click on 'Admin tab'
    Then I can see 'System Users' Text
    And  I enter the Username
    And  I select User role
    And  I select status
    And  I click on 'Search' button
    Then I can see message 'No records found'





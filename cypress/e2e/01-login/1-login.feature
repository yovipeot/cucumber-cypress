Feature: Login

Scenario: [Login] Login with Invalid Credentials
    Given I open the login page
    When I enter invalid credentials
    Then I should not be logged in
    
Scenario: [Login] Show Password
    When I click on the eye button
    Then I should see the password
    
Scenario: [Login] Login with Valid Credentials
    Given I open the login page
    When I enter valid credentials
    Then I should be logged in successfully

Scenario: [Logout] Logout Account
    When I click on the logout button
    Then I should be logged out
Feature: Authentication tests
  Scenario: [Negative] User should not be able to register without a recaptcha verification
    When I visit the registration page
    And I fill up the registration form
    And I ignore the captcha verification and try to submit
    Then An Error message should be displayed prompting the user for captcha verification

  Scenario: [Negative] Should not be able to log in with incorrect credentials
    When I visit the login page
    And I enter credentials not stored in the DB
    Then I get an error message saying incorrect username and password

# Using API request to bypass the captcha verification step
  Scenario: User should be able to create a new account via API
    Given I send an API request with credentials to create a new account successfully.

  Scenario: User should be able to log in with the newly created account credentials
    Given I am on the login page
    When I use the login credentials from the previous test to log in
    Then I should be able to log in successfully
Feature: Delete account tests

    Scenario: User should be able to cancel deleting their user account
        Given I am on the profile page
        And I click the delete account button
        But I click the cancel button on the confirmation modal
        Then I should still be signed into the account I was trying to delete

    Scenario: Should be able to delete user account
        When I click on the delete account button
        And I confirm delete account on the confirmation modal
        Then I get an alert saying the account has been deleted
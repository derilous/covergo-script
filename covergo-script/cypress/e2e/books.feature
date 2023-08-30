Feature: Book CRUD tests

    Scenario: Should be able to add multiple books to profile collection
			Given I navigate to the book store page
			Then I add multiple books to the collection
			When I go to my profile page
			Then My added books should be visible

    Scenario: [Negative] Should not be able to add an already added book to profile
			Given I navigate to the book store page again
			Then I select a book that has already been added to collection
			When I try to add aforementioned book to collection again
			Then I get an error alert saying Book has already been added to collection

    Scenario: User should be able to cancel deleting a book
			Given I am on the profile page
			Then I click the delete icon on the first book
			But I click cancel on the confirmation modal
			Then The book should still be visible in the collection

		Scenario: Should be able to delete a single book from profile
			When I click the delete icon on the first book again
			And I confirm the action on the confirmation modal
			Then The book should be deleted from the user collection
			
		Scenario: Should be able to be able to delete all added books at once
			When I click on the Delete All Books button
			And I confirm on the confirmation modal
			Then All books in the collection must be deleted
		
		Scenario: [Negative] Delete all books should not work when no books are added to account
			When I click the delete all books button after there are no books in the collection
			And I click confirm on the confirmation modal
			Then I get an error alert reporting there are no books available in collection to be deleted
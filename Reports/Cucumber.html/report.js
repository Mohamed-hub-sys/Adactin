$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.Feature");
formatter.feature({
  "line": 1,
  "name": "Booking Functionality in the adactin application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": Verify the user is able to login in the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid username in the \"\u003cusername\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid password in the \"\u003cpassword\u003e\" field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;1"
    },
    {
      "cells": [
        "aaa",
        "111"
      ],
      "line": 13,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;2"
    },
    {
      "cells": [
        "bbb",
        "222"
      ],
      "line": 14,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;3"
    },
    {
      "cells": [
        "ccccccccccccccccc",
        "747474747447474747447"
      ],
      "line": 15,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;4"
    },
    {
      "cells": [
        "Mohamed78",
        "123456789"
      ],
      "line": 16,
      "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": ": Verify the user is able to login in the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid username in the \"aaa\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid password in the \"111\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 4918382596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_username_in_the_field(String)"
});
formatter.result({
  "duration": 7408522,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_username_in_the_field(StepDefinition.java:62)\r\n\tat ✽.When user enters the valid username in the \"aaa\" field(src/test/java/com/adactin/feature/Adactin.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_password_in_the_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": ": Verify the user is able to login in the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid username in the \"bbb\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid password in the \"222\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 626079368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbb",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_username_in_the_field(String)"
});
formatter.result({
  "duration": 529730,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_username_in_the_field(StepDefinition.java:62)\r\n\tat ✽.When user enters the valid username in the \"bbb\" field(src/test/java/com/adactin/feature/Adactin.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_password_in_the_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": ": Verify the user is able to login in the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid username in the \"ccccccccccccccccc\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid password in the \"747474747447474747447\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 391095243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ccccccccccccccccc",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_username_in_the_field(String)"
});
formatter.result({
  "duration": 854015,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_username_in_the_field(StepDefinition.java:62)\r\n\tat ✽.When user enters the valid username in the \"ccccccccccccccccc\" field(src/test/java/com/adactin/feature/Adactin.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "747474747447474747447",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_password_in_the_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": ": Verify the user is able to login in the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;:-verify-the-user-is-able-to-login-in-the-application;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid username in the \"Mohamed78\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters the valid password in the \"123456789\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 400363354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohamed78",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_username_in_the_field(String)"
});
formatter.result({
  "duration": 501343,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_valid_username_in_the_field(StepDefinition.java:62)\r\n\tat ✽.When user enters the valid username in the \"Mohamed78\" field(src/test/java/com/adactin/feature/Adactin.Feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 39
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_password_in_the_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Verify user is in the Search Hotel Page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-the-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user selects the location in the location field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user selects the hotel in the hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user selects the room type in the room type field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user selects the number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user selects the check in date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user selects the check out date",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user selects adult per room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user selects children per room",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user clicks on the search button to search the given details",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user verifies whether the Search Hotel page navigates to Select a Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_location_in_the_location_field()"
});
formatter.result({
  "duration": 7670261,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_selects_the_location_in_the_location_field(StepDefinition.java:85)\r\n\tat ✽.When user selects the location in the location field(src/test/java/com/adactin/feature/Adactin.Feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_hotel_in_the_hotel_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_the_room_type_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_in_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_out_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_adult_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_children_per_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_search_button_to_search_the_given_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Search_Hotel_page_navigates_to_Select_a_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Verify user in the Select a Hotel Page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-in-the-select-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user clicks on the Selected radio button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user clicks on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user verifies whether the select a hotel page navigates to book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_Selected_radio_button()"
});
formatter.result({
  "duration": 1186480,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_clicks_on_the_Selected_radio_button(StepDefinition.java:145)\r\n\tat ✽.When user clicks on the Selected radio button(src/test/java/com/adactin/feature/Adactin.Feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_select_a_hotel_page_navigates_to_book_a_hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Verify user is in the Book a hotel page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-the-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user enters the firstname in the FirstName field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user enters the lastname in the LastName field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enters the billing address in the Billing Address field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enters the credit card type in the Credit card type field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user selects the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user selects the expiry date of the credit card",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user selects the expiry year of the credit card",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user enters the cvv in the Cvv field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user clicks the book button to book the room",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user verifies whether the Book a hotel page navigates to Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_firstname_in_the_FirstName_field()"
});
formatter.result({
  "duration": 1310612,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enters_the_firstname_in_the_FirstName_field(StepDefinition.java:161)\r\n\tat ✽.When user enters the firstname in the FirstName field(src/test/java/com/adactin/feature/Adactin.Feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_lastname_in_the_LastName_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_billing_address_in_the_Billing_Address_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_credit_card_type_in_the_Credit_card_type_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_credit_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_date_of_the_credit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_expiry_year_of_the_credit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_cvv_in_the_Cvv_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_book_button_to_book_the_room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Book_a_hotel_page_navigates_to_Booking_Confirmation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 47,
  "name": "Verify user is in Booking Confirmation page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "user verify and clicks the LogoutButton",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user succesfuly logout the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_verify_and_clicks_the_LogoutButton()"
});
formatter.result({
  "duration": 435909,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactin.stepdefinition.StepDefinition.user_verify_and_clicks_the_LogoutButton(StepDefinition.java:220)\r\n\tat ✽.When user verify and clicks the LogoutButton(src/test/java/com/adactin/feature/Adactin.Feature:48)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_succesfuly_logout_the_webpage()"
});
formatter.result({
  "status": "skipped"
});
});
const config = {
    "screens": [
      {
        "name": "HomeScreen",
        "title": "Boat Inspection",
        "type": "home",
        "items": [
          {
            "type": "section",
            "label": "Sailboat Checklist",
            "navigationTarget": "SailboatStep0",
            "subScreens": [
              {
                "name": "SailboatStep0",
                "title": "Table of Content",
                "type": "step0",
                "items": [
                  {
                    "type": "section",
                    "label": "Common Information",
                    "navigationTarget": "SailboatStep1",
                    "subScreens": [
                      {
                        "name": "SailboatStep1",
                        "title": "Sailboat Common Info",
                        "type": "step1",
                        "items": [
                          {
                            "type": "textInput",
                            "label": "Name",
                            "objectName": "nameObj",
                            "placeholder": "Enter your name"
                          },
                          {
                            "type": "textInput",
                            "label": "BoatName",
                            "objectName": "boatNameObj",
                            "placeholder": "Enter Boat name"
                          },
                          {
                            "type": "textInputEmail",
                            "label": "Email",
                            "objectName": "emailObj"
                          },
                          {
                            "type": "counterInput",
                            "label": "Fenders qty?",
                            "objectName": "fendersObj"
                          },
                          {
                            "type": "counterInput",
                            "label": "Captains qty?",
                            "objectName": "cptObj"
                          },
                          {
                            "type": "checkbox",
                            "label": "Test checkbox",
                            "objectName": "checkboxObj"
                          },
                          {
                            "type": "dateInput",
                            "label": "Select Date",
                            "objectName": "dateObj"
                          },
                          {
                            "type": "photoPicker",
                            "title": "Internal Overview",
                            "objectName": "internalOverviewObj"
                          },
                          {
                            "type": "photoPicker",
                            "title": "Internal Damages",
                            "objectName": "internalDamagesObj"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "section",
                    "label": "Internal Equipment",
                    "navigationTarget": "SailboatStep2",
                    "subScreens": [
                      {
                        "name": "SailboatStep2",
                        "title": "Sailboat Step 2",
                        "type": "step2",
                        "items": [
                          // Add items for SailboatStep2 here
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "history",
            "label": "Inspection History",
            "navigationTarget": "History"
          }
        ]
      }
    ]
  }
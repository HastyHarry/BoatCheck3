export default config = {
    "title": "Boat Inspection",
    "items": [
        {
            "title": "Sailboat Checklist",
            "items": [
                {
                    "type": "section",
                    "title": "Sailboat Common Info",
                    "items": [
                        {
                            "type": "textInput",
                            "title": "Name",
                            "objectName": "nameObj",
                            "placeholder": "Enter your name"
                        },
                        {
                            "type": "textInput",
                            "title": "BoatName",
                            "objectName": "boatNameObj",
                            "placeholder": "Enter Boat name"
                        },
                        {
                            "type": "textInputEmail",
                            "title": "Email",
                            "objectName": "emailObj"
                        },
                        {
                            "type": "counterInput",
                            "title": "Fenders qty?",
                            "objectName": "fendersObj"
                        },
                        {
                            "type": "counterInput",
                            "title": "Captains qty?",
                            "objectName": "cptObj"
                        },
                        {
                            "type": "checkbox",
                            "title": "Test checkbox",
                            "objectName": "checkboxObj"
                        },
                        {
                            "type": "dateInput",
                            "title": "Select Date",
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
                },
                {
                    "type": "section",
                    "title": "Internal Equipment",
                    "subScreens": [
                        {
                            "title": "Sailboat Step 2",
                            "items": [
      
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
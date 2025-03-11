export default config = {
    "title": "Main",
    "items": [
        {
            "title": "",
            "items": [
                {   
                    "type": "mainSection",
                    'icon': 'sail-boat',
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
                                    "title": "Dumbasses on board?",
                                    "objectName": "dumbassesObj"
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
                            "items": [
                                {
                                    "title": "Sailboat Step 2",
                                    "items": [

                                    ]
                                }
                            ]
                        },
                        {
                            "type": "section",
                            "title": "Sails",
                            "items": [

                            ]
                        }
                    ]
                },
                {
                    "type": "mainSection",
                    'icon': 'history',
                    "title": "History",
                    "items": []
                },
                {
                    "type": "mainSection",
                    'icon': 'history',
                    "title": "History2",
                    "items": []
                }
            ]
        }
    ]
}
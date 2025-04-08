export const config = {
    "type": "mainSection",
    'icon': 'ferry',
    "title": "Catamaran Checklist",
    "name": "Catamaran",
    "inspectionType": "catamaran",
    "items": [
        {
            "type": "section",
            "title": "Catamaran Common Info",
            'subTitle': "Boat name, company, etc.",
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
                    "objectName": "emailObj",
                    "placeholder": "Enter your email"
                },
                {
                    "type": "counterInput",
                    "title": "Hulls counted",
                    "objectName": "hullsObj"
                },
                {
                    "type": "checkbox",
                    "title": "Has trampoline",
                    "objectName": "trampolineObj"
                },
                {
                    "type": "dateInput",
                    "title": "Inspection Date",
                    "objectName": "dateObj"
                },
                {
                    "type": "photoPicker",
                    "title": "External Overview",
                    "objectName": "externalOverviewObj"
                }
            ]
        },
        {
            "type": "section",
            "title": "Hull Condition",
            'subTitle': "Check both hulls",
            "items": [
                {
                    "type": "checkbox",
                    "title": "Port hull intact",
                    "objectName": "portHullObj"
                },
                {
                    "type": "checkbox",
                    "title": "Starboard hull intact",
                    "objectName": "starboardHullObj"
                },
                {
                    "type": "photoPicker",
                    "title": "Hull Damage Photos",
                    "objectName": "hullDamageObj"
                }
            ]
        },
        {
            "type": "section",
            "title": "Bridge/Cabin",
            'subTitle': "Central structure condition",
            "items": [
                {
                    "type": "checkbox",
                    "title": "Bridge structure sound",
                    "objectName": "bridgeStructureObj"
                },
                {
                    "type": "photoPicker",
                    "title": "Bridge Photos",
                    "objectName": "bridgePhotosObj"
                }
            ]
        }
    ]
}
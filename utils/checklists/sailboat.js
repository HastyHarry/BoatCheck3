export const config = {
  "type": "mainSection",
  "icon": "sail-boat",
  "title": "Sailboat Checklist",
  "name": "Sailboat",
  "inspectionType": "Sailboat",
  "items": [
    {
      "type": "section",
      "title": "Sailboat Information",
      "subTitle": "General information about the yacht and charter",
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
          "placeholder": "Enter boat name"
        },
        {
          "type": "textInputEmail",
          "title": "Email",
          "objectName": "emailObj",
          "placeholder": "Enter your email"
        },
        {
          "type": "dateInput",
          "title": "Inspection Date",
          "objectName": "dateObj"
        },
        {
          "type": "photoPicker",
          "title": "Overview Photos",
          "objectName": "overviewPhotosObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Equipment and Documents",
      "subTitle": "Check all required documentation and equipment",
      "items": [
        {
          "type": "checkbox",
          "title": "Registration",
          "objectName": "registrationObj"
        },
        {
          "type": "checkbox",
          "title": "Insurance",
          "objectName": "insuranceObj"
        },
        {
          "type": "checkbox",
          "title": "Charter Agreement",
          "objectName": "charterAgreementObj"
        },
        {
          "type": "checkbox",
          "title": "Transit Log",
          "objectName": "transitLogObj"
        },
        {
          "type": "checkbox",
          "title": "Crew List",
          "objectName": "crewListObj"
        },
        {
          "type": "checkbox",
          "title": "Skipper's License",
          "objectName": "skippersLicenseObj"
        },
        {
          "type": "checkbox",
          "title": "VHF Radio License",
          "objectName": "vhfRadioLicenseObj"
        },
        {
          "type": "checkbox",
          "title": "First Aid Kit and Manual",
          "objectName": "firstAidKitObj"
        },
        {
          "type": "checkbox",
          "title": "Life Jackets",
          "objectName": "lifeJacketsObj"
        },
        {
          "type": "checkbox",
          "title": "Life Lines/Safety Harnesses",
          "objectName": "lifeLinesObj"
        },
        {
          "type": "checkbox",
          "title": "Fire Extinguishers",
          "objectName": "fireExtinguishersObj"
        },
        {
          "type": "checkbox",
          "title": "Life Raft",
          "objectName": "lifeRaftObj"
        },
        {
          "type": "checkbox",
          "title": "VHF Radio with Distress Button",
          "objectName": "vhfRadioObj"
        },
        {
          "type": "checkbox",
          "title": "Chartplotter with Charts",
          "objectName": "chartplotterObj"
        },
        {
          "type": "checkbox",
          "title": "Nautical Charts (Paper)",
          "objectName": "nauticalChartsObj"
        },
        {
          "type": "counterInput",
          "title": "Number of Fenders",
          "objectName": "fendersCountObj"
        },
        {
          "type": "counterInput",
          "title": "Number of Mooring Lines",
          "objectName": "mooringLinesCountObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Inside the Boat",
      "subTitle": "Interior equipment check",
      "items": [
        {
          "type": "checkbox",
          "title": "Water Pump Working",
          "objectName": "waterPumpObj"
        },
        {
          "type": "checkbox",
          "title": "Bilge Pump Working",
          "objectName": "bilgePumpObj"
        },
        {
          "type": "checkbox",
          "title": "Navigation Systems Working",
          "objectName": "navigationSystemsObj"
        },
        {
          "type": "checkbox",
          "title": "All Lights Working",
          "objectName": "lightsObj"
        },
        {
          "type": "checkbox",
          "title": "Refrigerator Working",
          "objectName": "refrigeratorObj"
        },
        {
          "type": "checkbox",
          "title": "Battery Charger Working",
          "objectName": "batteryChargerObj"
        },
        {
          "type": "checkbox",
          "title": "Hatches in Good Condition",
          "objectName": "hatchesObj"
        },
        {
          "type": "checkbox",
          "title": "Cushions Clean and Undamaged",
          "objectName": "cushionsObj"
        },
        {
          "type": "checkbox",
          "title": "Toilet Pumps Working",
          "objectName": "toiletPumpsObj"
        },
        {
          "type": "checkbox",
          "title": "Gas Stove Working",
          "objectName": "gasStoveObj"
        },
        {
          "type": "photoPicker",
          "title": "Interior Damage Photos",
          "objectName": "interiorDamagePhotosObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Engine and Steering",
      "subTitle": "Engine and steering system check",
      "items": [
        {
          "type": "checkbox",
          "title": "Engine Clean",
          "objectName": "engineCleanObj"
        },
        {
          "type": "checkbox",
          "title": "Oil Levels Correct",
          "objectName": "oilLevelsObj"
        },
        {
          "type": "checkbox",
          "title": "Coolant Level Correct",
          "objectName": "coolantLevelObj"
        },
        {
          "type": "checkbox",
          "title": "Alternator Belt in Good Condition",
          "objectName": "alternatorBeltConditionObj"
        },
        {
          "type": "checkbox",
          "title": "Engine Starts Properly",
          "objectName": "engineStartsObj"
        },
        {
          "type": "checkbox",
          "title": "Forward/Reverse Gears Working",
          "objectName": "gearsObj"
        },
        {
          "type": "checkbox",
          "title": "Steering Ropes in Good Condition",
          "objectName": "steeringRopesObj"
        },
        {
          "type": "textInput",
          "title": "Engine Hours",
          "objectName": "engineHoursObj",
          "placeholder": "Enter current engine hours"
        }
      ]
    },
    {
      "type": "section",
      "title": "Outside the Boat",
      "subTitle": "Exterior inspection",
      "items": [
        {
          "type": "photoPicker",
          "title": "Hull Damage Photos",
          "objectName": "hullDamagePhotosObj"
        },
        {
          "type": "checkbox",
          "title": "Guardrails in Good Condition",
          "objectName": "guardrailsObj"
        },
        {
          "type": "checkbox",
          "title": "Navigation Lights Working",
          "objectName": "navLightsObj"
        },
        {
          "type": "checkbox",
          "title": "Anchor System Working",
          "objectName": "anchorSystemObj"
        },
        {
          "type": "checkbox",
          "title": "Windlass Working",
          "objectName": "windlassObj"
        },
        {
          "type": "checkbox",
          "title": "Outboard Engine Working",
          "objectName": "outboardEngineObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Navigation Equipment",
      "subTitle": "Test all navigation instruments",
      "items": [
        {
          "type": "checkbox",
          "title": "Echo Sounder Working",
          "objectName": "echoSounderObj"
        },
        {
          "type": "checkbox",
          "title": "Boat Speed Indicator Working",
          "objectName": "boatSpeedObj"
        },
        {
          "type": "checkbox",
          "title": "Autopilot Working",
          "objectName": "autopilotObj"
        },
        {
          "type": "checkbox",
          "title": "Wind Indicator Working",
          "objectName": "windexObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Rigging",
      "subTitle": "Check all deck hardware",
      "items": [
        {
          "type": "checkbox",
          "title": "Winches Working Properly",
          "objectName": "winchesObj"
        },
        {
          "type": "checkbox",
          "title": "Ropes in Good Condition",
          "objectName": "ropesObj"
        },
        {
          "type": "checkbox",
          "title": "Clutches Working Properly",
          "objectName": "clutchesObj"
        },
        {
          "type": "checkbox",
          "title": "Blocks in Good Condition",
          "objectName": "blocksObj"
        },
        {
          "type": "checkbox",
          "title": "Boom in Good Condition",
          "objectName": "boomObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Sails",
      "subTitle": "Check all sails for damage",
      "items": [
        {
          "type": "photoPicker",
          "title": "Sail Damage Photos",
          "objectName": "sailDamagePhotosObj"
        },
        {
          "type": "checkbox",
          "title": "Jib/Genoa in Good Condition",
          "objectName": "jibConditionObj"
        },
        {
          "type": "checkbox",
          "title": "Mainsail in Good Condition",
          "objectName": "mainsailConditionObj"
        },
        {
          "type": "checkbox",
          "title": "Battens in Good Condition",
          "objectName": "battensObj"
        },
        {
          "type": "checkbox",
          "title": "Furling Systems Working (if applicable)",
          "objectName": "furlingSystemObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Optional Equipment",
      "subTitle": "Check any additional equipment",
      "items": [
        {
          "type": "checkbox",
          "title": "Generator Working",
          "objectName": "generatorObj"
        },
        {
          "type": "checkbox",
          "title": "Air Conditioner Working",
          "objectName": "airConditionerObj"
        },
        {
          "type": "checkbox",
          "title": "Watermaker Working",
          "objectName": "watermakerObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Safety Equipment",
      "subTitle": "Check all safety gear",
      "items": [
        {
          "type": "counterInput",
          "title": "Number of Life Jackets",
          "objectName": "lifeJacketsCountObj"
        },
        {
          "type": "checkbox",
          "title": "Life Raft Inspection Date Valid",
          "objectName": "lifeRaftInspectionObj"
        },
        {
          "type": "checkbox",
          "title": "Distress Signals Not Expired",
          "objectName": "distressSignalsObj"
        },
        {
          "type": "checkbox",
          "title": "Fire Extinguishers Not Expired",
          "objectName": "fireExtinguishersObj"
        },
        {
          "type": "checkbox",
          "title": "First Aid Kit Complete",
          "objectName": "firstAidKitCompleteObj"
        }
      ]
    },
    {
      "type": "section",
      "title": "Charter Manager Communication",
      "subTitle": "Final information to get from charter company",
      "items": [
        {
          "type": "checkbox",
          "title": "Problems Discussed with Manager",
          "objectName": "problemsDiscussedObj"
        },
        {
          "type": "checkbox",
          "title": "Engine Operating Information Received",
          "objectName": "engineInfoObj"
        },
        {
          "type": "checkbox",
          "title": "Required Documents List Received",
          "objectName": "requiredDocsObj"
        },
        {
          "type": "checkbox",
          "title": "Emergency Contacts Recorded",
          "objectName": "emergencyContactsObj"
        },
        {
          "type": "textInput",
          "title": "Notes",
          "objectName": "notesObj",
          "placeholder": "Enter any additional notes"
        }
      ]
    }
  ]
}
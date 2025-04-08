import { config as sailboatConfig } from './checklists/sailboat'
import { config as catamaranConfig } from './checklists/catamaran'

export const config = () => {

    const saveButton = {
        "type": "saveButton",
        // 'icon': 'history',
        "title": "Submit",
        "items": []
    }


    // Check if a save button already exists

    if (!sailboatConfig.items.some(item => item.type === "saveButton")) {
        sailboatConfig.items.push(saveButton);
    }
    
    if (!catamaranConfig.items.some(item => item.type === "saveButton")){
        catamaranConfig.items.push(saveButton);
    }

    const mainConf = {
        "title": "Main",
        "items": [
            {
                "title": "",
                "items": [
                    sailboatConfig,
                    catamaranConfig,
                    {
                        "type": "mainSection",
                        'icon': 'history',
                        "title": "History",
                        "items": [
                            {
                                "type": "historyScreen",
                                "title": "History",
                                "items": []
                            }
                        ]
                    },
                ]
            }
        ]
    }

    return mainConf

}




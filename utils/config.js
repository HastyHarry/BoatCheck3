import { config as sailboatConfig } from './checklists/sailboat'

export const config = () => {

    const saveButton = {
        "type": "saveButton",
        // 'icon': 'history',
        "title": "Submit",
        "items": []
    }
    sailboatConfig.items.push(saveButton);

    const mainConf = {
        "title": "Main",
        "items": [
            {
                "title": "",
                "items": [
                    sailboatConfig,
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




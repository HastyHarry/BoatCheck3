

const sheetStructure1 = {
    items: [
        {
            type: 'textInput',
            label: 'Name',
            objectName: 'nameObj',
            placeholder: 'Enter your name'
        },
        {
            type: 'textInput',
            label: 'BoatName',
            objectName: 'boatNameObj',
            placeholder: 'Enter Boat name'
        },
        {
            type: 'textInputEmail',
            label: 'Email',
            objectName: 'emailObj',
        },
        {
            type: 'counterInput',
            label: 'Fenders qty?',
            objectName: 'fendersObj',
        },
        {
            type: 'counterInput',
            label: 'captans qty?',
            objectName: 'cptObj',
        },
        {
            type: 'checkbox',
            label: 'test checkbox',
            objectName: 'checkboxObj',
        },
        {
            type: 'dateInput',
            label: 'Select Date',
            objectName: 'dateObj',
        },
        {
            type: 'photoPicker',
            title: 'Internal Overview',
            objectName: 'internalOverviewObj',
        },
        {
            type: 'photoPicker',
            title: 'Internal Damages',
            objectName: 'internalDamagesObj',
        }
    ]
}

const tableOfContents = {
    title: "Common Information",
    subTitle: 'Boat Name, Year, Port, etc...',
    onPress: () => navigation.navigate('SailboatStep1'),
    theme: theme,
    cardWidth: theme.cardWidth
}
let serviceElementsSelector = '.serviceElements';

let app = new Application();

app.bindService(new PopupService({
    popupContainerSelector: serviceElementsSelector
}));

app.bindService(new Menu({
    menuSelector: '.header .menu'
}));

app.bindService(new Theme({
    currentTheme: 'one',
    themes: {
        'one': {
            name: 'one',
            themeClass: 'themeOne'
        },
        'two': {
            name: 'two',
            themeClass: 'themeTwo'
        }
    }
}));

/**
 * @returns {PopupService|Service}
 */
function popup() {
    return app.getService('popup');
}

/**
 * Серсви popup
 */
class PopupService extends Service {

    bootstrap(options = {}) {
        super.bootstrap(options);

        if (options.hasOwnProperty('popupContainerSelector')) {
            this.popupContainer = options.popupContainerSelector;
        }

        let popupElement = this.createPopup();

        $(this.popupContainer).append(popupElement);
    }

    /**
     * @returns {HTMLElement}
     */
    createPopup() {
        let that = this;
        let popup = HTMLHelper.createElement(
            'div',
            {
                class: 'popup'
            }
        )
        let closer = HTMLHelper.createElement(
            'span',
            {
                class: 'closer',
                innerText: 'X'
            }
        );

        $(closer).click(function () {
            that.closePopup();
        })

        let popupContent = HTMLHelper.createElement(
            'div',
            {
                class: 'popupContent'
            }
        );

        popup.append(closer);
        popup.append(popupContent);

        return popup;
    }

    showPopup() {
        $('.popup').show();
    }

    showPopupWithContent(content) {
        this.clearPopupContent();

        $('.popup .popupContent').html(content);

        this.showPopup();
    }

    clearPopupContent() {
        $('.popup .popupContent').html('');
    }

    closePopup() {
        $('.popup').hide();
    }

    /**
     * Возвращает имя сервиса
     *
     * @returns {string}
     */
    getServiceName() {
        return 'popup';
    }
}

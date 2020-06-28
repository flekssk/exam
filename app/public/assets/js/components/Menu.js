class Menu extends Service {
    /**
     * @param options
     */
    bootstrap(options = {}) {
        super.bootstrap(options);

        if (options.hasOwnProperty('menuSelector')) {
            this.menuSelector = options.menuSelector;
        }

        let that = this;

        $(this.menuSelector + ' ul li').click(function () {
            that.openMenuPopup($(this).data('target-url'));
        });
    }

    openMenuPopup(url) {
        $.ajax({
            url: url,
            success: function (response) {

                popup().showPopupWithContent(response);
            }
        });
    }
}

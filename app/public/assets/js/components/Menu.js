class Menu extends Service {
    /**
     * @param options
     */
    bootstrap(options = {}) {
        super.bootstrap(options);
        let that = this;

        if (options.hasOwnProperty('menuSelector')) {
            this.menuSelector = options.menuSelector;
        }

        $(this.menuSelector + ' ul li').click(function () {
            that.openMenuPopup($(this).data('target-url'));
        });

        $('.shuffleMenu').click(function () {
            that.shuffleMenuItems();
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

    shuffleMenuItems() {
        let items = $(this.menuSelector + ' ul li');

        $(this.menuSelector + ' ul').html('');

        items.sort(function() {return 0.5 - Math.random()})

        $(this.menuSelector + ' ul').append(items);
    }

    getServiceName() {
        return 'menu';
    }
}

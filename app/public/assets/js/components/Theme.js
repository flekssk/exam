class Theme extends Service {

    bootstrap(options = {}) {
        super.bootstrap(options);

        this.themes = [];
        if (options.hasOwnProperty('themes')) {
            this.themes = options.themes;
        }

        if (options.hasOwnProperty('currentTheme')) {
            this.currentTheme = options.currentTheme;
        }

        this.applyTheme(this.currentTheme);
        let themeToggle = this.createThemeToggle();

        $('.leftColumn').append(themeToggle);
    }

    applyTheme(themeName) {

        let that = this;
        $('body').addClass('blur');

        setTimeout(function () {
                that.disableTheme();
                let themeConfig = that.themes[themeName];
                $('.mainContainer').addClass(themeConfig.themeClass);

                $('body').removeClass('blur');
            },
            500
        );
    }

    createThemeToggle() {
        let container = HTMLHelper.createElement(
            'div',
            {
                class: 'themeToggles'
            }
        );

        let that = this;

        $(container).append(
            HTMLHelper.createElement('h4', {innerText: 'Смена тем'})
        );

        $.each(
            this.themes,
            function (id, name) {
                let button = HTMLHelper.createElement(
                    'span',
                    {
                        innerText: name.name,
                        class: 'themeToggle button',
                        theme: id,
                    }
                );

                $(button).click(function () {
                    that.applyTheme(id);
                })

                container.append(
                    button
                );
            }
        );

        return container;
    }

    disableTheme() {
        $.each(this.themes, function (id, config) {
            $('.mainContainer').removeClass(config.themeClass);
        })
    }
}

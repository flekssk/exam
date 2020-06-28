/**
 * Базовый класс для js сервисов
 */
class Service {
    /**
     * Конст конструктор сервиса
     *
     * @param options {{}}
     */
    constructor(options = {}) {
        if (options.hasOwnProperty('events')) {
            this.events = options.events;
        }

        this.bootstrap(options);
    }

    /**
     * Возвращает объект содержащий список событий AseJSApplication и callback для них
     *
     * <code>
     * return {
     *      'aseJSApplicationEventName': function() {
     *
     *      },
     * };
     * </code>
     *
     * @returns {{}}
     */
    getEvents() {
        return {};
    }

    /**
     * Возвращает имя сервиса
     *
     * @returns {string}
     */
    getServiceName() {
        return '';
    }

    /**
     * Метод загрузки сервисы, вызывается в constructor
     */
    bootstrap(options = {}) {
    }
}

/**
 * Класс контейнер для JS сервисов
 */
class Application {
    constructor() {
        this.bootstrap();
    }

    /**
     * Возвращает интсанс придожения
     *
     * @returns {Application}
     */
    static instance() {
        if (!this.object) {
            this.object = new Application();
        }

        return this.object;
    }

    /**
     * Преинициализация приложения
     */
    bootstrap() {
        this.services = {};
    }

    /**
     * Добавляем сервис в контейнер
     *
     * @param service
     */
    bindService(service) {
        if (!this.isValidService(service)) {
            return;
        }

        this.services[service.getServiceName()] = service;
    }

    /**
     * Возвращает сервис
     *
     * @param serviceName
     *
     * @returns Service
     */
    getService(serviceName) {
        return this.services[serviceName];
    }

    /**
     * Проверка объекта является ли он сервисом
     *
     * @param service {Service}
     * @returns {boolean}
     */
    isValidService(service) {
        let result = true;

        if (typeof service !== 'object') {
            result = false;
        }

        return result;
    }
}

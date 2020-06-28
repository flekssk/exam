class HTMLHelper {
    /**
     *
     * @param tag {string}
     * @param attributes {
     *      {
     *      }
     * }
     */
    static createElement(tag, attributes = {}) {
        let element = document.createElement(tag);

        $.each(attributes, function (attributeName, attributeValue) {
            element.setAttribute(attributeName, attributeValue);
        });

        if (attributes.hasOwnProperty('innerText')) {
            element.innerText = attributes.innerText;
        }

        return element;
    }

    static createSingleTag(tag, attributes = {}) {
        let element = document.createElement(tag);

        $.each(attributes, function (attributeName, attributeValue) {
            element.setAttribute(attributeName, attributeValue);
        });

        return element;
    }

    static createButton(value, attributes = {}) {
        if (!attributes.hasOwnProperty('type')) {
            attributes.type = 'button';
        }

        let button = HTMLHelper.createElement('button', attributes);

        button.innerText = value;

        return button;
    }

    static createElementWithElements(tag, elements, options = {}) {
        let container = HTMLHelper.createElement(tag, options);

        $.each(elements, function (id, element) {
            container.appendChild(element);
        });

        return container;
    }

    static createHint(text, options = {}) {
        let elementClass = 'hint';

        if (options.hasOwnProperty('class')) {
            elementClass += ' ' + options.class;
        }

        options.class = elementClass;
        options.innerText = text;

        return HTMLHelper.createElement('span', options);
    }

    static createDivHint(text, options = {}) {
        let elementClass = 'hint';

        if (options.hasOwnProperty('class')) {
            elementClass += ' ' + options.class;
        }

        options.class = elementClass;
        options.innerText = text;

        return HTMLHelper.createElement('div', options);
    }

    static createAnchor(url, options = {}) {

        options.href = url;

        return HTMLHelper.createElement('a', options)
    }
}
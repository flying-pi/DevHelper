var aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor(...args) {
            super(...args);
            mixins.forEach((mixin) => {
                copyProps(this, new mixin);
            });
        }
    }

    let copyProps = (target, source) => {
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (
                    typeof(prop)  !== 'symbol' &&
                    !prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)
                )
                    Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
            })
    };
    mixins.forEach((mixin) => {
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

var importDoc = document.currentScript.ownerDocument;

class BaseComponentElement extends HTMLElement{
    constructor(templateID) {
        super();
        this.base = this;
        const template = importDoc.querySelector(templateID);
        const clone = document.importNode(template.content, true);
        const root = this.createShadowRoot();
        root.appendChild(clone);
    }

}
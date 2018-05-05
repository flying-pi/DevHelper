class CommonContentWrapper extends HTMLElement {
    constructor() {
        super();
        const link = document.createElement('link');
        link.rel = 'import';
        link.href = '/';
        link.onload = this.onIndexPageLoad;
        link.onerror = this.onIndexPageLoadFail;
        document.head.appendChild(link);
    }

    onIndexPageLoad(e) {
        let template_body = e.target.import.getElementById('common-wrapper');
        var clone = document.importNode(template_body, true).cloneNode(true);
        this.createShadowRoot().innerHTML = clone.innerHTML

        const shadowRoot = this.attachShadow({mode: 'open'});
        // shadowRoot.innerHTML = clone.innerHTML;
        shadowRoot.innerHTML =  `<strong>Shadow dom super powers for the win!</strong>`;
    }

    onIndexPageLoadFail() {
        //  TODO Implement me !!!
    }
}

window.customElements.define('common-content-wrapper', CommonContentWrapper);
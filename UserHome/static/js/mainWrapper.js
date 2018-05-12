class AuthButton extends HTMLElement {
    constructor() {
        super();
        this.isLogin = $.cookie("session_id") !== undefined;
        this.createShadowRoot().innerHTML = `
        <div>
            <h3>${this.isLogin ? 'logout' : 'login'}</h3>
        </div>
        `;
        this.onclick = this.onClickAction
    }

    onClickAction() {
        console.log("booo");
        if (!this.isLogin) {
            window.location.replace('/login')
        }
    }
}

customElements.define('auth-button', AuthButton);


class LoginStatusMixin {
    connectedCallback() {
        console.log(this.getAttribute('for-authorized'))

        var link = document.createElement('link');
        link.rel = 'import';
        link.href = '/home/authorized';
        link.onload = ev => {
            if(this.shadowRoot.querySelector('content').childElementCount > 0)
                return;
            let content = ev.target.import;
            content.querySelectorAll('body *').forEach((e)=>this.append(e));
        };
        link.onerror = ev => {
            console.log(ev)
        };
        document.head.appendChild(link);
    }
}
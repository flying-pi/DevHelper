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
        if(!this.isLogin){
            window.location.replace('/login')
        }
    }
}

customElements.define('auth-button', AuthButton);

import React from "react";
import './LoginButton.css';

class LoginButton extends React.Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login() {
        this.props.onClick();
    }

    render() {
        return (
            <div className="LoginDiv">
                <button className="LoginButton" onClick={this.login}>Login to Spotify</button>
            </div>
        )
    }
}

export default LoginButton;
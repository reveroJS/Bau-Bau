import "./UserAccount.css";
import React, { Component } from "react"
import { Link } from "react-router-dom"


class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);

    }

    focusTextInput() {

        this.textInput.current.focus();


        if (this.textInput.current.className == "active") {
            this.textInput.current.className = "menu"
        } else {
            this.textInput.current.className = "active"

        }

    }



    render() {

        return (
            <div className="action" >
                <div className="profile" onClick={this.focusTextInput}>
                    <img src="/userImg/hurby.jpg" />
                </div>
                <div className="menu" ref={this.textInput}>
                    <h3>{this.props.email}</h3>
                    <ul>
                        <li><img src="/userImg/user.png" /><Link to="/profile">My Profile</Link></li>
                        <li><img src="/userImg/edit.png" /><Link to="">Edit Profile</Link></li>
                        <li><img src="/userImg/settings.png" /><Link to="">Settings</Link></li>
                        <li><img src="/userImg/question.png" /><Link to="">Help</Link></li>
                        <li><img src="/userImg/log-out.png" /><Link to="#">Logout</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default UserAccount;
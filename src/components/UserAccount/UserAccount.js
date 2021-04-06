import "./UserAccount.css";
import React, { Component } from "react"


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
                        <img src="/userImg/pexels-tran-huynh-nam-3134555.jpg" />
                    </div>
                    <div className="menu" ref={this.textInput}>
                        <h3>Someone Famous</h3>
                        <ul>
                            <li><img src="/userImg/user.png" /><a href="#">My Profile</a></li>
                            <li><img src="/userImg/edit.png" /><a href="">Edit Profile</a></li>
                            <li><img src="/userImg/envelope.png" /><a href="">Inbox</a></li>
                            <li><img src="/userImg/settings.png" /><a href="">Settings</a></li>
                            <li><img src="/userImg/question.png" /><a href="">Help</a></li>
                            <li><img src="/userImg/log-out.png" /><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>
        );
    }
}


export default UserAccount;
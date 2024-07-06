import React, {Component} from "react";
import {IUsers} from "../module/IUsers";
import {getUserPost} from "../servise/userServise";
import {IPosts} from "../module/IPosts";

interface UserProps{
    user:IUsers
}
class UserComponent extends Component<UserProps, {}>{

    render() {
        const getPost =  (id:number) => {getUserPost(id).then(value => this.setState({posts: value.posts}))}
        return (<div>
            {this.props.user.id} {this.props.user.firstName} {this.props.user.lastName} {this.props.user.maidenName} age
            - {this.props.user.age}
            <button onClick={() => {
                this.props.getPost(this.props.user.id)
            }}>Click
            </button>
        </div>);
    }
}

export default UserComponent
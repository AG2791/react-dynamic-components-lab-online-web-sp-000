//your code here
import React, { Component } from 'react';



export default class Comment extends Compoent {
    render(){
        return(
            <div class = "comment">
                {this.props.commentText}
            </div>
        )

    }

}
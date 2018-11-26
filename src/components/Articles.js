import React, { Component } from 'react';
import './Articles.css'

class Articles extends Component {

    render() {
      return (
      <div className ="Articles">
        <div className = "Article">
          <h2> Hello WatchKit </h2> 
          <p> Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.The WatchKit framework enables the developers to create Apple Watch apllications.In this article we are going to foucus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p>
          <div className = "commentLikeBar">
            <p>12 comments </p>
            <p>124 likes</p >
          </div> 
        </div> 
        <div className = "Article">
          <h2> Introduction to Swift </h2> 
          <p>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX apllications.Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction.This article will revolve around the basic concepts in the Swift language and how you can get started.</p> 
          <div className = "commentLikeBar">
              <p>15 comments </p>
              <p>45 likes</p>
          </div> 
        </div>
      </div>
        )
    }
}

export default Articles

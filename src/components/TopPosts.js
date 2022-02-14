import React from "react"
import StoryCard from "./StoryCard"

export default class TopPosts extends React.Component{
    render() {
         let posts = this.props.posts.map(el => {
             return <StoryCard post={el} key={el.id}/>
        })
        return posts
    }
}
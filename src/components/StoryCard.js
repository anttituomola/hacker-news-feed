import React from "react"
import dayjs from "dayjs"

export default class StoryCard extends React.Component{
    render() {
        let post = this.props.post
        
        return <div className="storyCard">
            <h3>{post.title}</h3>
            <p>by {post.by}</p>
            <p>Score: {post.score}</p>
            <p>Created at: {dayjs.unix(post.time).format("DD.MM.YYYY")}</p>
            <p>Read more: <a href={post.url}>{post.url}</a></p>
        </div>
    }
}
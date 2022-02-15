import React from "react"
import dayjs from "dayjs"
import Modal from "./Modal"

export default class StoryCard extends React.Component{
    state = {
        showModal: false,
        authorData: {
            id: "",
            createdAt: Date,
            karma: Number,
            submittedInteractions: Number
        }
    }
    componentDidMount = () => {
        let post = this.props.post
        fetch(`https://hacker-news.firebaseio.com/v0/user/${post.by}.json`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    authorData: {
                        id: data.id,
                        createdAt: dayjs.unix(data.created).format("DD.MM.YYYY"),
                        karma: data.karma,
                        submittedInteractions: data.submitted.length
                    }
                })
            })
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    
    render() {
        let post = this.props.post

        return <div className="storyCard">
            <Modal show={this.state.showModal} hideModal={this.hideModal} authorData={this.state.authorData} />      
            <h3>{post.title}</h3>
            <p onClick={this.showModal} className="authorLink">by {post.by}</p>
            <p>Score: {post.score}</p>
            <p>Created at: {dayjs.unix(post.time).format("DD.MM.YYYY")}</p>
            <p>Read more: <a href={post.url}>{post.url}</a></p>
        </div>
    }
}
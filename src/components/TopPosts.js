import React from "react"
import StoryCard from "./StoryCard"

export default class TopPosts extends React.Component{
    state = {
        sortBy: ""
    }

    sort = (event) => {
        this.setState({
            sortBy: event.target.value
        })
    }

    render() {
        let sortedPosts = []
        let sorter = this.state.sortBy
        if (sorter === "by") {
            sortedPosts = [].concat(this.props.posts).sort((a,b) => a[sorter].localeCompare(b[sorter]))
        } else {
            sortedPosts = [].concat(this.props.posts).sort((a,b) => a[sorter] < b[sorter] ? 1 : -1)
        }


        let posts = sortedPosts.map(el => {
            return <StoryCard post={el} key={el.id}/>
        })
        return <>
        <div id="sort" onChange={this.sort}>
            <input type="radio" value="by" name="sort" /> By author
            <input type="radio" value="time" name="sort" /> By date
            <input type="radio" value="score" name="sort" /> By score
        </div>
        <div id="filter">
            
        </div>
        <div id="results">{posts}</div>
        </>
    }
}
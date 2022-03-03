import React from "react"
import StoryCard from "./StoryCard"

export default class TopPosts extends React.Component{
    state = {
        sortBy: "",
        filterBy: 0,
        searchBy: ""
    }

    sort = (event) => {
        this.setState({
            sortBy: event.target.value
        })
    }

    filter = (event) => {
        this.setState({
            filterBy: event.target.value
        })
    }

    search = (event) => {
        this.setState({
            searchBy: event.target.value
        })
    }

    render() {
        let sortedPosts = []
        let sorter = this.state.sortBy

        // Sorting strings
        if (sorter === "by") {
            sortedPosts = [].concat(this.props.posts).sort((a,b) => a[sorter].localeCompare(b[sorter]))
        
        // Sorting numbers
        } else {
            sortedPosts = [].concat(this.props.posts).sort((a,b) => a[sorter] < b[sorter] ? 1 : -1)
        }

        let posts = sortedPosts.map(el => {
            return <StoryCard post={el} key={el.id}/>
        })
console.log(posts)
        // Filter
        if (this.state.filterBy) {
             posts = posts.filter((post) => {
                return post.props.post.score > this.state.filterBy
                })
        }

        // Search
        if (this.state.searchBy) {
            posts = posts.filter(post => post.props.post.title.toLowerCase().indexOf(this.state.searchBy.toLowerCase()) !== -1 )
        }

        return <>
        <div id="sort" onChange={this.sort}>
            SORT BY
            <input type="radio" value="by" name="sort" /> author
            <input type="radio" value="time" name="sort" /> date
            <input type="radio" value="score" name="sort" /> score
        </div>
        <div id="filter">
            <input type="number" onChange={this.filter} /> Minimum score
        </div>
        <div id="search">
            <input type="text" onChange={this.search} /> Search for title
        </div>
        <div id="results">{posts}</div>
        </>
    }
}
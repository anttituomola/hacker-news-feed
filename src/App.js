import "./App.css"
import React from "react"
import TopPosts from "./components/TopPosts"

export default class App extends React.Component {
  state = {
    topIds: [],
    topPosts: []
  }

  componentDidMount() {
    // Get the top 20 post ids
    fetch("https://hacker-news.firebaseio.com/v0/beststories.json")
      .then(res => res.json())
      .then(json => {
        let topIds = json.slice(0, 20)
        this.setState({
          topIds: topIds
        })
        return topIds
      })

      // Get the posts based on the ids
      .then(ids => {
        ids.forEach(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(data => {
              let thisPost = data
              this.setState({
                topPosts: [...this.state.topPosts, thisPost]
              })
            })
        })
      })
  }

  render() {
    return <div className="App">
      <h1>Hacker News</h1>
      <TopPosts posts={this.state.topPosts} />
    </div>
  }
}

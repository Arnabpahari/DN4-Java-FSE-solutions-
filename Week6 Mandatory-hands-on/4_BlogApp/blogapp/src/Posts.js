import React from "react";
import Post from "./Post";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postData = data.map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts: postData });
      });
  }
  componentDidMount() {
    this.loadPosts();
  }

    render() {
        return (
        <div>
            <h1>Posts</h1>
            <ul>
            {this.state.posts.map((post) => (
                <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </li>
            ))}
            </ul>
        </div>
        );
    }

    componentDidCatch(error, info) {
    alert("Something went wrong!");
  }
}



export { Posts };

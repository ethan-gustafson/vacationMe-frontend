import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class Posts extends React.Component{

    findUser = searchedUser => {
        const user = this.props.users.find(user => user.id == searchedUser)
        if (user){
            return user.username
        } else {
            return null
        }
      }

    render(){
        return (
        <div id="posts">
            <div id="post-container">
                {this.props.posts.map((post, index) => { 
                    return (
                        <>
                        <Post post={post} index={index} findUser={this.findUser} comments={this.props.comments}/>
                        {/* <CommentForm currentUser={this.props.currentUser} postId={post.id} createComment={this.props.createComment}/> */}
                    </>) 
                })}
            </div>
        </div>
        )
    }
}

export default connect(state => ({posts: state.posts, users: state.users, comments: state.comments}))(Posts)

/*  1. Posts.js should be a container component responsible for rendering a Post component for each post
    and it should be responsible for rendering the comments component & the comment form component.
    2. Post should send down props to comment component since comment component should be a functional stateless component.
    3. Post should pass down props to commentForm for the current user, the post id and the createComment Dispatcher.
    4. Posts should be the component that defines the dynamic routes that are defined in App.js.
    5. To show most recent posts, you have to create a variable, slice state and then reverse the array so that you don't mutate state.
    6. Post.js Should have defaultProps.
*/
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';


const HeaderContainer = (props) => {
    return (
        <Header 
            posts={props.posts}
        />
    )
}
const mapStateToProps = (state) => ({
    posts: state.postPage.posts
})

export default connect(mapStateToProps)(HeaderContainer)
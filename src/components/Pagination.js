import React from "react";
import {connect} from "react-redux";
import Post from "./Post";
import {toSaveNumOfPages} from "../redux/actions";
import {Loader} from "./Loader";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let elements = document.getElementsByClassName("page-link");
    for (let i = 0, len = elements.length; i < len; i += 1) {
      elements[i].classList.remove('active');
    }

    event.target.classList.add('active');
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  test(num) {
    this.props.toSaveNumOfPages(num);
  }

  render() {
    let {currentPage, postsPerPage} = this.state;

    // Logic for displaying page numbers
    let pageNumbers = [];
    let quantityOfPosts = this.props.filtered ? this.props.filteredPosts.length : this.props.fetchedPosts.length;
    for (let i = 1; i <= Math.ceil(quantityOfPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    if (pageNumbers.length > 0 && currentPage > pageNumbers.length) {
      currentPage = 1;
      document.querySelector(".page-link").classList.add('active');
    }

    // Logic for displaying current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = this.props.fetchedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const filteredPosts = this.props.filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    let showPosts = this.props.filtered ? filteredPosts : currentPosts;

    const renderPosts = showPosts.map((post, index) => {
      return <Post key={post.id} post={post}/>
    });

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li className={"page-item page-link " + (number === 1 ? 'active' : '')} key={number} id={number}
            onClick={this.handleClick}>{number}</li>
      );
    });

    if (this.props.loading) {
      return <Loader/>
    }

    return (
      <div>
        <ul className="mt-5 mb-5">
          {renderPosts}
        </ul>
        <nav>
          <ul className="pagination pagination-lg mb-5" id="page-numbers">
            {renderPageNumbers}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchedPosts: state.posts.fetchedPosts,
    filteredPosts: state.posts.filteredPosts,
    filtered: state.posts.filtered,
    loading: state.app.loading
  }
};

export default connect(mapStateToProps, null)(Pagination)
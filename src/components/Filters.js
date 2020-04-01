import React from 'react';
import {connect} from "react-redux";
import {filterPosts, resetFilterPosts} from "../redux/actions";

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.filterPosts = this.filterPosts.bind(this);
    this.resetFilterPosts = this.resetFilterPosts.bind(this);
  }

  state = {
    active: {
      '1': '',
      '2': '',
      '3': '',
      '4': 'active',
    }
  };

  clearFilters() {
    let newState = {};
    Object.keys(this.state.active).forEach(key => {
      newState[key] = '';
    });
    return newState;
  }

  filterPosts(user) {
    this.props.filterPosts(user);
    let newState = this.clearFilters();
    this.setState(() => ({
      active: {
        ...newState,
        [user]: 'active'
      }
    }))
  }

  resetFilterPosts() {
    this.props.resetFilterPosts();
    let newState = this.clearFilters();
    this.setState(() => ({
      active: {
        ...newState,
        4: 'active'
      }
    }))
  }

  render() {
    return (
      <React.Fragment>
        {this.props.filtered ?
          <h1>Filtered components <span className="badge badge-info">{this.props.filteredPosts.length}</span>
          </h1> : <h1>Components <span className="badge badge-info">{this.props.fetchedPosts.length}</span></h1>}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className={"btn btn-secondary choose-filter " + this.state.active[1]}
                  onClick={() => this.filterPosts('1')}>User 1
          </button>
          <button type="button" className={"btn btn-secondary choose-filter " + this.state.active[2]}
                  onClick={() => this.filterPosts('2')}>User 2
          </button>
          <button type="button" className={"btn btn-secondary choose-filter " + this.state.active[3]}
                  onClick={() => this.filterPosts('3')}>User 3
          </button>
          <button type="button" className={"btn btn-secondary choose-filter " + this.state.active[4]}
                  onClick={this.resetFilterPosts}>Reset filter
          </button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchedPosts: state.posts.fetchedPosts,
    filteredPosts: state.posts.filteredPosts,
    filtered: state.posts.filtered
  }
};
const mapDispatchToProps = {
  filterPosts, resetFilterPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
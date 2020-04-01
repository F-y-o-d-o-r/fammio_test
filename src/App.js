import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "./redux/actions";
import Pagination from "./components/Pagination";
import Filters from "./components/Filters";
import {Loader} from './components/Loader';

function App(props) {

  useEffect(() => {
    props.fetchPosts()
  });

  if (props.loading) {
    return <Loader />
  }

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <h3 className="mb-3">Fammio test</h3>
          <Filters/>
          <br/>
          <Pagination/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    syncPosts: state.posts.sort,
    // loading: state.app.loading
  }
};
const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

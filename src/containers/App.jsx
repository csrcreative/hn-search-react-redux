import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";
import SearchHistory from "../components/SearchHistory";

class App extends React.Component {
    searchRequest = (term) => {
        this.props.actions.requestPosts(term);
        this.props.actions.saveTerm(term);
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={term => this.searchRequest(term)} />

                {(this.props.terms.term.length > 0) && (
                    <SearchHistory terms={this.props.terms.term} />
                )}

                {(this.props.posts.data.length > 0) && (
                    <Results posts={this.props.posts.data} />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        terms: state.terms
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

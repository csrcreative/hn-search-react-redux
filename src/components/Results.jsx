import Result from "../components/Result";

import React from "react";

class Results extends React.Component {
    render() {
        return (
            <div className="results">
                {this.props.posts.map((i, index) => {
                    return <Result info={i.title} key={index} />;
                })}
            </div>
        );
    }
}

export default Results;

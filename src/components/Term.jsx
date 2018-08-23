import React from "react";

const termStyles = {
    paddingRight: "5px"
};

class Term extends React.Component {
    render() {
        return (
            <span className="term" style={termStyles}>
                {this.props.term}
            </span>
        );
    }
}

export default Term;

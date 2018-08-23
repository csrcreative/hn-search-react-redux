import React from "react";

const resultStyles = {
    padding: "8px",
    borderBottom: "1px solid #cccccc"
};

class Result extends React.Component {
    render() {
        return (
            <div className="result" style={resultStyles}>
                {this.props.info}
            </div>
        );
    }
}

export default Result;

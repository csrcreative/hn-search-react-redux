import React from 'react';
import Term from "./Term";

const historyStyles = {
  padding: '8px',
};

class SearchHistory extends React.Component {

  render() {
    return (
        <div className="history" style={historyStyles}>
        Search History:&nbsp;
        {this.props.terms.map((i, index) => {
            return <Term term={i} key={index} />;
        })}
    </div>
    );
  }
}

export default SearchHistory;
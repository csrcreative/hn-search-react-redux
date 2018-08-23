import React from "react";

class SearchBar extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };
    }

    onInputChange = (term) => {
        this.setState({ value: term });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onTermChange(this.state.value);
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        placeholder="Search Hacker News"
                        onChange={event =>
                            this.onInputChange(event.target.value)
                        }
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SearchBar;

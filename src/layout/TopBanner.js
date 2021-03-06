import React from "react";

class TopBanner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="topbanner-class position-relative text-center">
                <h1 className="title-banner">{this.props.title}</h1>
            </div>
        );
    }
}

export default TopBanner;
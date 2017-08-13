import React, { Component } from 'react';
import Moment from 'moment';

class ByLinePublishTimeSection extends Component {

    render() {

        return (
            <h5 style={{marginBottom:'0px'}}>
                <span className="author-info">
                    {this.props.by}
                </span>
                {'  '}
                <span className="published-time">
                    { Moment(this.props.publishdate).format("MMMM DD  - hh:mm A") }
                </span>
            </h5>
        );
    }
}

export default ByLinePublishTimeSection;





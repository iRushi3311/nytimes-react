import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppConstants from '../../constants/app-constants.js';
import _ from 'lodash';

const BreadCrumbWrapper = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

const BreadCrumbSpan = styled.span`
    font-size: 16px;
`;


class Breadcumb extends Component {

    constructor(props){
        super(props);
    };

    findDisplayName(backName) {
        const items = _.get(AppConstants.SECTIONBARITEMS, 'sections');
        const foundItem =  _.filter(items, (item) => {
            return item.value === backName;
        });
        return !!foundItem.length ? foundItem[0].display : backName;
    }

    render() {
        const {backName, currentName} = this.props;
        const displayBackName = this.findDisplayName(backName);

        return (
            <BreadCrumbWrapper>
                <BreadCrumbSpan>
                    <Link to="/"> {displayBackName} </Link>
                    {'  '} > {'  '}
                    <a>{currentName}</a>
                    {

                    }
                </BreadCrumbSpan>
            </BreadCrumbWrapper>
        );
    }
}

export default Breadcumb;

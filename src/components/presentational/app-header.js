import React, { Component } from 'react';
import styled from 'styled-components';
import translationEN from '../../constants/translation/en.js';
import SearchComponent from '../container/search-component.js';

const HeaderDiv = styled.div`
    background-color: #222;
    height: 70px;
    padding: 20px;
    color: white;
    margin-bottom: 10px;
    text-align: center;
`;


const HeaderTextDiv = styled.div`
    font-size: 24px;
`;

class AppHeader extends Component {

    render() {
        return (
            <HeaderDiv>
                <HeaderTextDiv> {translationEN.appTitle} </HeaderTextDiv>
                <SearchComponent />
            </HeaderDiv>
        );
    }
}

export default AppHeader;

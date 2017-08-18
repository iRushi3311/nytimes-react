import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppConstants from '../../constants/app-constants.js';

const HorizontalUL = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f5f5f5;
    border-bottom: 2px solid #9a9a9a;
`;

const ListItem = styled.li`
    float: left;
    display: block;
    color: ##525252;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 17px;
    width: 150px;
    cursor: pointer;
`;

class SectionBar extends Component {

    constructor(props){
        super(props);
        this.state= {
            selectedSection: 'home',
        };
        this._handleListItemSelection = this._handleListItemSelection.bind(this);
    };

    _handleListItemSelection(eve, value){
        this.setState({
            selectedSection: value
        });
        this.props.reflectChange(value);
    }

    render() {
        const {SECTION_BAR_ITEMS} = AppConstants;
        return (
            <HorizontalUL>
                {
                    SECTION_BAR_ITEMS.sections.map(item =>
                        <ListItem
                            key={item.value}
                            className={this.state.selectedSection === item.value ? 'selected-section' : ''}
                            onClick={(eve) => this._handleListItemSelection(eve, item.value)}>
                            <Link to="/" replace> {item.display} </Link>
                        </ListItem>
                )}
            </HorizontalUL>

        );
    }
}

export default SectionBar;

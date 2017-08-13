import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import styled from 'styled-components';

const SearchBox = styled.div`
    width:250px;
    position: relative;
    top: -35px;
`;

const FormGroupV2 = styled(FormGroup)`
    margin-bottom: 0px;
`;

class SearchComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            qs:'',
        };

        this._handleSearch = this._handleSearch.bind(this);
        this._handleQueryString = this._handleQueryString.bind(this);
    }

    _handleSearch(event){
        debugger;
        console.log("Search Event value :" + this.state.qs);
        //this.props.history.push('/search/q/' + this.state.qs);
        window.location.hash = '/search/q/' + this.state.qs;
    }

    _handleQueryString(event){
        this.setState({
            qs: event.target.value,
        });
    }

    render() {
        return (

                <SearchBox className='pull-right'>
                    <form onSubmit={this._handleSearch}>
                        <FormGroupV2>
                            <InputGroup>
                                <InputGroup.Addon className="override-border">
                                    <span className="glyphicon glyphicon-search"></span>
                                </InputGroup.Addon>
                                <FormControl type="text"
                                             className="override-border"
                                             placeholder="Search"
                                             onChange={this._handleQueryString}
                                />
                            </InputGroup>
                        </FormGroupV2>
                    </form>
                </SearchBox>

        );
    }
}

export default SearchComponent;

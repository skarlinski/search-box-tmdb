import React from 'react'; // Every file that uses React.Component needs to import this
import { Form } from 'react-bootstrap';
import './LiveSearchBox.css';

// This component is a GENERIC search box that shows results immediatly when the
// user is typing (like google search)
// Props
//    placeholderText - string
//    results - array of strings - options / results for the current text
//
// Event props / handler
//      searchTextChanged - function - invoked for each text change in the input
//      resultSelected - funciton - invoked when the user selects(clicks) on one of the
//      results, will send the index of the result
// State
//      searchText - string - the current value of the input

class LiveSearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }
    render(){

        // const placeholder = this.props.placeholder
        // const results = this.props.results
        // Extract variables from an object
        const {placeholderText} = this.props;
        //const {searchText} = this.state;

        return (
            <div className="c-live-search-box">
               <Form.Control type="search" placeholder={placeholderText} />
            </div>
        )
    }
}

export default LiveSearchBox;
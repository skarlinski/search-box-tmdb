import React from 'react'; // Every file that uses React.Component needs to import this
import { Form, ListGroup } from 'react-bootstrap';
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
    handleInputChange = (event) => {
        // this will get the value of the input, and will update the state
        this.setState({
            searchText: event.target.value
        });
        this.props.searchTextChanged(event.target.value);
    }
    render(){

        // const placeholder = this.props.placeholder
        // const results = this.props.results
        // Extract variables from an object
        const {placeholderText} = this.props;
        //const {searchText} = this.state;
        const resultsElements = this.props.results.map((item, index) => {
            return <ListGroup.Item key={index}>{item}</ListGroup.Item>
        })
        return (
            <div className="c-live-search-box">
               <Form.Control type="search" onChange={this.handleInputChange} placeholder={placeholderText} value={this.state.searchText}/>
                <ListGroup className="search-results">
                    {resultsElements}
                </ListGroup>
                <p>This should be hidden</p>
            </div>
        )
    }
}

export default LiveSearchBox;
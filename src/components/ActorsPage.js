import React from 'react'; // Every file that uses React.Component needs to import this
import LiveSearchBox from './LiveSearchBox';
import './ActorsPage.css'
import ActorCard from './ActorCard';
// Renders the whole page with the search box and gallery
// state
//  
class ActorsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            selectedActors: []
        }
        this.staticActorsJson = ['Agam Rodberg', 'Johnny Depp', 'David Blaine']; // later we will bring from TMDB

    }
    addActor = (index) => {
        const actor = this.state.results[index]; // David... schwartzneger
         this.setState({
             selectedActors: this.state.selectedActors.concat(actor),
             results: []
            })
    }
    searchActors = (searchText) => {
        if( ! searchText ) {
            this.setState({
                results: []
            })
            return;
        }
        // Array.filter -> An array method
        // Takes a callback
        // for each item in the array -> the callback is run with a different item
        // if the callback returns true, the item stays
        // if false it is not in the new array
        // Returns a new filtered array, does not effect the original array
        const searchResults = this.staticActorsJson.filter( (actor) => {
            return actor.toLowerCase().includes(searchText.toLowerCase());
        })
        this.setState(
            {results: searchResults}
        )
    }
    render(){
        const actorCards = this.state.selectedActors.map( (actor, index) => {
            return <ActorCard actorName={actor}></ActorCard>
        } )
        return (
            <div className="c-actors-page">
                <LiveSearchBox 
                searchTextChanged={this.searchActors}
                resultSelected={this.addActor}
                placeholderText="Search for Actor" 
                results={this.state.results} />

                <div>{actorCards}</div>
            </div>
        )
    }
}

export default ActorsPage;
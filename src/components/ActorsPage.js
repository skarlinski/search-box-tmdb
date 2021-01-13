import React from 'react'; // Every file that uses React.Component needs to import this
import LiveSearchBox from './LiveSearchBox';
import './ActorsPage.css'

class ActorsPage extends React.Component{
    render(){
        return (
            <div className="c-actors-page">
                <LiveSearchBox placeholderText="Search for Actor"/>
            </div>
        )
    }
}

export default ActorsPage;
import React from 'react'; // Every file that uses React.Component needs to import this
import LiveSearchBox from './LiveSearchBox';

class ActorsPage extends React.Component{
    render(){
        return (
            <div>
                <LiveSearchBox />
            </div>
        )
    }
}

export default ActorsPage;
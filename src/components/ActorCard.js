import { Card } from "react-bootstrap"

const ActorCard = function(props){
    const {actorName} = props
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{actorName}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ActorCard
import { useState } from 'react';

import {
	Row, Card, CardBody, CardTitle, CardText, CardHeader
} from 'reactstrap';

import './flipcard.scss';

export default function FlipCard({ idx, team }) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
        <Row className='scoretable-body-mobile' key={idx}>
            <Card className='my-2 card-container' onClick={() => setIsFlipped(!isFlipped)}>
                <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                    <div className='card-front'>
                        <CardBody>
                            <CardHeader className='d-flex justify-content-center'>
                                <span className='card-span position'>{idx + 1}</span>
                            </CardHeader>
                            <CardTitle>{team.name}</CardTitle>
                            <CardText>
                                <span>
                                    <p className='m-0'>Team members:</p>
                                    <p>{team.members.join(', ')}</p>
                                </span><br />
                                <span className='card-span total'>Score total: {team.scores.total}</span>
                            </CardText>
                        </CardBody>
                    </div>
                    <div className='card-back'>
                        <CardBody>
                            <CardTitle>Additional Info</CardTitle>
                            {/* Add your additional info here */}
                            <CardText>
                                <p>More details about the team...</p>
                            </CardText>
                        </CardBody>
                    </div>
                </div>
            </Card>
        </Row>
    );
}

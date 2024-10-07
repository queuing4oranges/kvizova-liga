import { useState } from 'react';
import {
	Row, Col, Card, CardBody, CardTitle, CardText, CardHeader
} from 'reactstrap';
import data from '../../data.json';

import './scoretable.scss';

export default function ScoreTable() {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<>
			<Row className='scoretable-header'>
				<Col md='1'><span className='header-span position'></span></Col>
				<Col md='3'><span className='shadow header-span'>Team</span></Col>
				<Col md='3'><span className='header-span'>Team members</span></Col>
				<Col md='4' className='d-flex'>
					{[...Array(8)].map((_, idx) => (
						<span key={idx} className='header-span round'>{idx + 1}</span>
					))}
				</Col>
				<Col md='1'>
					<span className='header-span total d-flex justify-content-center'>Total</span>
				</Col>
			</Row>
			{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
			<Row className='scoretable-body' key={idx}>
				<Col md='1' className='d-flex justify-content-end'>
					<span className='body-span position'><p className='m-0'>{idx + 1}</p></span>
				</Col>
				<Col md='3'><span className='body-span team'>{team.name}</span></Col>
				<Col md='3'><span className='body-span'>{team.members}</span></Col>
				<Col md='4' className='d-flex'>
					{Object.keys(team.scores).map((round, idx) => (
						<span key={idx} className='body-span round'>{team.scores[round]}</span>
					))}
				</Col>
				<Col md='1'>
					<span className='body-span total d-flex justify-content-center'>{team.total}</span>
				</Col>
			</Row>
			))}

			{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
			<Row className='scoretable-body-mobile' key={idx}>
				<Card className={`my-2 flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
					{!isFlipped ?
						<CardBody>
							<CardHeader className='py-3 d-flex justify-content-center'>
								<span className='card-span position'>{idx + 1}</span>
							</CardHeader>
							<CardTitle>{team.name}</CardTitle>
							<CardText>
								<span>
									<p className='m-0'>Team members:</p>
									<p>{team.members}</p>
								</span><br />
								<span className='card-span total'>Score total: {team.total}</span>
							</CardText>
						</CardBody>
						:
						<CardBody>
							<CardHeader className='py-3 d-flex justify-content-center'>
								<span className='card-span back'>Score card</span>
							</CardHeader>
							<CardTitle className='text-center'>{team.name}</CardTitle>
							<CardText>
								<Row>
									<Col xs={4}>Round 1:</Col>
									<Col xs={2}>{team.scores.round1}</Col>
									<Col xs={4}>Round 5:</Col>
									<Col xs={2}>{team.scores.round5}</Col>
								</Row>
								<Row>
									<Col xs={4}>Round 2:</Col>
									<Col xs={2}>{team.scores.round2}</Col>
									<Col xs={4}>Round 6:</Col>
									<Col xs={2}>{team.scores.round6}</Col>
								</Row>								<Row>
									<Col xs={4}>Round 3:</Col>
									<Col xs={2}>{team.scores.round3}</Col>
									<Col xs={4}>Round 7:</Col>
									<Col xs={2}>{team.scores.round7}</Col>
								</Row>
								<Row>
									<Col xs={4}>Round 4:</Col>
									<Col xs={2}>{team.scores.round4}</Col>
									<Col xs={4}>Round 8:</Col>
									<Col xs={2}>{team.scores.round8}</Col>
								</Row>

							</CardText>
						</CardBody>
					}
				</Card>
			</Row>
			))}
		</>
	);
}

import { useState } from 'react';
import {
	Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, Table
} from 'reactstrap';
import data from '../../data.json';

import './scoretable.scss';

export default function ScoreTable() {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<>
			<Row>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Team</th>
							<th>Team members</th>
							{[...Array(8).keys()].map((num) => (
								<th key={num + 1}>{num + 1}</th>
							))}
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
						<tr key={idx} className='header-span round'>
							<td>{idx + 1}</td>
							<td>{team.name}</td>
							<td>{team.members}</td>
							{Object.keys(team.scores).map((round, idx) => (
								<td key={idx} className='body-span round'>{team.scores[round]}</td>
							))}
							<td>{team.total}</td>
						</tr>
						))}
					</tbody>
				</Table>
			</Row>

			{/* This is the render for mobile version */}
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

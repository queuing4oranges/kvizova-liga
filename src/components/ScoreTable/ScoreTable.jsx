import { useState } from 'react';
import {
	Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, Button,
} from 'reactstrap';
import data from '../../data.json';

import './scoretable.scss';

export default function ScoreTable() {
	const [flippedCards, setFlippedCards] = useState({});

	const handleCardFlip = (idx) => {
		setFlippedCards((prevFlippedCards) => ({
			...prevFlippedCards,
			[idx]: !prevFlippedCards[idx]
		}));
	};

	return (
		<>
			<table className='table'>
				<thead className='scoretable-header'>
					<tr>
						<th className='hidden-element'></th>
						<th>Team</th>
						<th>Team members</th>
						{[...Array(8).keys()].map((num) => (
							<th className='th-rounds' key={num + 1}>{num + 1}</th>
						))}
						<th className='th-total'>Total</th>
					</tr>
				</thead>
				<tbody>
					{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
					<tr className='tb-rows' key={idx}>
						<td className='d-flex justify-content-end'><span className='header-span-round'>{idx + 1}</span></td>
						<td className='align-middle team-name-column'>{team.name}</td>
						<td className='team-members-column align-middle'>{team.members}</td>
						{Object.keys(team.scores).map((round, idx) => (
							<td className='team-rounds align-middle text-center' key={idx}>{team.scores[round]}</td>
						))}
						<td className='team-totals align-middle text-center fw-bold fs-4'>{team.total}</td>
					</tr>
					))}
				</tbody>
			</table>

			{/* This is the render for mobile version */}
			{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
			<Row className='scoretable-body-mobile' key={idx}>
				<Card className={`my-2 flip-card ${flippedCards[idx] ? 'flipped' : ''}`} >
					{flippedCards[idx] ?
						<CardBody className='p-2 px-0 card-body-front position-relative'>
							<CardHeader className='py-1 d-flex justify-content-center'>
								<span className='card-span position'>{idx + 1}</span>
							</CardHeader>
							<CardTitle>{team.name}</CardTitle>
							<CardText>
								<span className='d-flex flex-column'>
									<span>Team members:</span>
									<span>{team.members}</span>
								</span><br />
								<span className='fs-5 card-span total'>Total: {team.total} points</span>
							</CardText>
							<div className='d-flex justify-content-center position-absolute bottom-0 start-0'>
								<Button className='mb-3' color='info' onClick={() => handleCardFlip(idx)}>
									<i className='bi bi-bar-chart-line pe-2' />
									Scores
								</Button>
							</div>
						</CardBody>
						:
						<CardBody className='p-2 px-0 card-body-back position-relative'>
							<CardHeader className='py-1 px-0'>
								<CardTitle className='m-0'>
									<span className='card-span back'>{team.name}</span>
								</CardTitle>
							</CardHeader>
							<CardText className='mt-2'>
								<Row className='my-2 fs-5'>
									<Col xs={4}>Round 1:</Col>
									<Col xs={2}>{team.scores.round1}</Col>
									<Col xs={4}>Round 5:</Col>
									<Col xs={2}>{team.scores.round5}</Col>
								</Row>
								<Row className='my-2 fs-5'>
									<Col xs={4}>Round 2:</Col>
									<Col xs={2}>{team.scores.round2}</Col>
									<Col xs={4}>Round 6:</Col>
									<Col xs={2}>{team.scores.round6}</Col>
								</Row>
								<Row className='my-2 fs-5'>
									<Col xs={4}>Round 3:</Col>
									<Col xs={2}>{team.scores.round3}</Col>
									<Col xs={4}>Round 7:</Col>
									<Col xs={2}>{team.scores.round7}</Col>
								</Row>
								<Row className='my-2 fs-5'>
									<Col xs={4}>Round 4:</Col>
									<Col xs={2}>{team.scores.round4}</Col>
									<Col xs={4}>Round 8:</Col>
									<Col xs={2}>{team.scores.round8}</Col>
								</Row>
							</CardText>
							<div className='d-flex justify-content-center position-absolute bottom-0 start-0'>
								<Button className='mb-3' color='info' onClick={() => handleCardFlip(idx)}>
									<i className='bi bi-chevron-double-left' />
									Back
								</Button>
							</div>
						</CardBody>
					}
				</Card>
			</Row>
			))}
		</>
	);
}

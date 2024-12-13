import { useEffect, useState } from 'react';
import {
	Row, Col, Card, CardBody, CardTitle, CardHeader, Button,
} from 'reactstrap';
import data from '../../data.json';

import './scoretable.scss';

export default function ScoreTable() {
	const [flippedCards, setFlippedCards] = useState({});
	const [updatedTeams, setUpdatedTeams] = useState([]);

	useEffect(() => {
		if (data.teams) {
			const teamsWithTotals = updateTeamTotals(data.teams);
			setUpdatedTeams(teamsWithTotals);
		}
	}, []);

	const handleCardFlip = (idx) => {
		setFlippedCards((prevFlippedCards) => ({
			...prevFlippedCards,
			[idx]: !prevFlippedCards[idx]
		}));
	};

	// Function to update the total scores for each team and calculate ranks
	const updateTeamTotals = (teams) => {

		// Calculate total scores and add a `total` property
		const scoredTeams = teams.map(team => {
			const totalScore = Object.values(team.scores).reduce((acc, score) => acc + score, 0);
			return { ...team, total: totalScore };
		});

		// Sort teams by total scores in descending order
		scoredTeams.sort((a, b) => b.total - a.total);

		// Calculate ranks, ensuring teams with the same score share the same rank
		let currentRank = 1;
		return scoredTeams.map((team, index, array) => {
			if (index > 0 && array[index].total === array[index - 1].total) {
				team.rank = array[index - 1].rank; // Share rank with the previous team
			} else {
				team.rank = currentRank; // Assign the current rank
			}
			currentRank++;
			return team;
		});
	};

	return (
		<>
			<table className='table'>
				<thead className='scoretable-header'>
					<tr>
						<th className='hidden-element'></th>
						<th>Team</th>
						{[...Array(8).keys()].map((num) => (
							<th className='th-rounds' key={num + 1}>{num + 1}</th>
						))}
						<th className='th-total'>Total</th>
					</tr>
				</thead>
				<tbody>
					{updatedTeams.map((team, idx) => (
					<tr className='tb-rows' key={idx}>
						<td className='position-column d-flex justify-content-end align-items-center'><span className='header-span-round'>{team.rank}</span></td>
						<td className='align-middle team-name-column'>{team?.name}</td>
						{Object.keys(team?.scores).map((round, idx) => (
							<td className='team-rounds align-middle text-center' key={idx}>{team?.scores[round]}</td>
						))}
						<td className='team-totals align-middle text-center fw-bold fs-4'>{team.total}</td>
					</tr>
					))}
				</tbody>
			</table>

			{/* This is the render for mobile version */}
			{updatedTeams.map((team, idx) => (
			<Row className='scoretable-body-mobile' key={idx}>
				<Card className={`my-2 flip-card ${flippedCards[idx] ? 'flipped' : ''}`} >
					{!flippedCards[idx] ?
						<CardBody className='p-2 px-0 card-body-front position-relative d-flex flex-column justify-content-start align-items-center'>
							<span className={`position mt-5 ${idx === 0 ? 'fs-1' : 'card-span'}`}>
								{(idx === 0) ? '👑' : (idx+1)}
							</span>
							<h1 className='mt-4 fw-5'>{team.name}</h1>
							<span className='fs-5 card-span total'>Total: {team?.total} points</span>
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
									<span className='card-span back'>{team?.name}</span>
								</CardTitle>
							</CardHeader>
							<span className='mt-2'>
								<Row className='my-2'>
									<Col xs={4}>Round 1:</Col>
									<Col xs={2}>{team?.scores?.round1}</Col>
									<Col xs={4}>Round 5:</Col>
									<Col xs={2}>{team.scores.round5}</Col>
								</Row>
								<Row className='my-2'>
									<Col xs={4}>Round 2:</Col>
									<Col xs={2}>{team?.scores?.round2}</Col>
									<Col xs={4}>Round 6:</Col>
									<Col xs={2}>{team?.scores?.round6}</Col>
								</Row>
								<Row className='my-2'>
									<Col xs={4}>Round 3:</Col>
									<Col xs={2}>{team?.scores?.round3}</Col>
									<Col xs={4}>Round 7:</Col>
									<Col xs={2}>{team?.scores?.round7}</Col>
								</Row>
								<Row className='my-2d'>
									<Col xs={4}>Round 4:</Col>
									<Col xs={2}>{team?.scores?.round4}</Col>
									<Col xs={4}>Round 8:</Col>
									<Col xs={2}>{team?.scores?.round8}</Col>
								</Row>
							</span>
							<div className='d-flex justify-content-center position-absolute bottom-0 start-0'>
								<Button className='pt-1 mb-3' color='info' onClick={() => handleCardFlip(idx)}>
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

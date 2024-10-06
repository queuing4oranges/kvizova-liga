import { Row, Col } from 'reactstrap';
import data from '../../data.json';

import './scoretable.scss';

export default function ScoreTable() {

	return (
		<>
			<Row className='scoretable-header'>
				<Col md='1'><span className='header-span position'></span></Col>
				<Col md='3'><span className='header-span'>Team</span></Col>
				<Col md='3'><span className='header-span'>Team members</span></Col>
				<Col md='1'><span className='header-span first'>1st round</span></Col>
				<Col md='1'><span className='header-span second'>2nd round</span></Col>
				<Col md='1'><span className='header-span third'>3rd round</span></Col>
				<Col md='1'><span className='header-span fourth'>4th round</span></Col>
				<Col md='1'><span className='header-span total'>Total</span></Col>
			</Row>
			{data && Array.isArray(data.teams) && data.teams.map((team, idx) => (
			<Row className='scoretable-body' key={idx}>
				<Col md='1' className='d-flex justify-content-end'>
					<span className='body-span position'><p className='m-0'>{idx + 1}</p></span>
				</Col>
				<Col md='3'><span className='body-span team'>{team.name}</span></Col>
				<Col md='3'><span className='body-span'>{team.members}</span></Col>
				<Col md='1'><span className='body-span first'>{team.scores.round1}</span></Col>
				<Col md='1'><span className='body-span second'>{team.scores.round2}</span></Col>
				<Col md='1'><span className='body-span third'>{team.scores.round3}</span></Col>
				<Col md='1'><span className='body-span fourth'>{team.scores.round4}</span></Col>
				<Col md='1'><span className='body-span total'>{team.scores.total}</span></Col>
			</Row>
			))}
		</>
	);
}

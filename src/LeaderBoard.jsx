import { Container, Row } from 'reactstrap';
import Navbar from './components/Navbar/Navbar';
import Heading from './components/AnimatedHeading/Heading';
import backgroundImage from '../src/assets/quiz-league-background.png'

import './leaderboard.scss';
import ScoreTable from './components/ScoreTable/ScoreTable';

export default function LeaderBoard() {
	return (
		<Container
			fluid
			className='h-100 w-100 m-0'
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<Row className='p-3 d-flex align-items-center'>
				<Navbar />
			</Row>
			<Row className='p-3'>
				<Heading />
			</Row>
			<Row className='p-3 score-table-row d-flex justify-content-center'>
				<ScoreTable />
			</Row>
		</Container>
	)
}

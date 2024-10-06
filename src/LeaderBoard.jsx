import { Container, Row } from 'reactstrap';
import Navbar from './components/Navbar/Navbar/Navbar';
import Heading from './components/Navbar/AnimatedHeading/Heading';
import backgroundImage from '../src/assets/quiz-league-background.png'

import './leaderboard.scss';

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
			<Row className='p-3'>
				<Navbar />
			</Row>
			<Row className='p-3'>
				<Heading />
			</Row>
			<Row className='p-3'>
				{/* something about 1-3 place */}
			</Row>
			<Row className='p-3'>
				{/* some leaderboard table */}
			</Row>
		</Container>
	)
}

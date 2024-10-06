import { Container, Row } from 'reactstrap';

import './leaderboard.scss';
import Navbar from './components/Navbar/Navbar';

export default function LeaderBoard() {
	return (
		<Container fluid className='h-100 w-100 m-0'>
			<Row>
				<Navbar />
			</Row>
			<Row>
				{/* some heading */}
			</Row>
			<Row>
				{/* something about 1-3 place */}
			</Row>
			<Row>
				{/* some leaderboard table */}
			</Row>
		</Container>
	)
}

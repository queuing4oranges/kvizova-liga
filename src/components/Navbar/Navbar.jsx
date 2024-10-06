import { Col } from 'reactstrap';
import KvirtivityLogo from '../../KvirtivityLogo';

import './navbar.scss';

export default function Navbar() {
  return (
	<>
		<Col>
			<KvirtivityLogo height={10} width={51}/>
		</Col>
		<Col>
			<span className='d-flex justify-content-end'>
				<a className='me-3' href='mailto:kvirtivity@gmail.com' target='_blank' rel='noreferrer'>
					<i className='bi bi-envelope' />
				</a>
				<a className='me-3' href='https://www.instagram.com/kvirtivity'target='_blank' rel='noreferrer'>
					<i className='bi bi-instagram' />
				</a>
				<a href='https://www.facebook.com/profile.php?id=61564294108931'target='_blank' rel='noreferrer'>
					<i className='bi bi-facebook' />
				</a>
			</span>
		</Col>
	</>
  )
}

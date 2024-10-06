import { Col } from 'reactstrap';
import KvirtivityLogo from '../../../KvirtivityLogo';

import './navbar.scss';

export default function Navbar() {
  return (
	<>
		<Col>
			<KvirtivityLogo height={40} width={160}/>
		</Col>
		<Col>
			<span className='d-flex justify-content-end align-items-center'>
				<a className='me-3' title='Contact us!'  href='mailto:kvirtivity@gmail.com' target='_blank' rel='noreferrer'>
					<i className='bi bi-envelope' />
				</a>
				<a className='me-3'title='Instagram' href='https://www.instagram.com/kvirtivity'target='_blank' rel='noreferrer'>
					<i className='bi bi-instagram' />
				</a>
				<a title='Facebook' href='https://www.facebook.com/profile.php?id=61564294108931'target='_blank' rel='noreferrer'>
					<i className='bi bi-facebook' />
				</a>
			</span>
		</Col>
	</>
  )
}

import { useNavigate, useParams } from 'react-router';
import profile from '../assets/profile.jpg';
import logo from '../assets/icons/logo.svg';
import "../styling/header.css"

export default function MainHeader() {
	const navigate = useNavigate()

	function changePage(to) {
		navigate(to)
	}

	return (
		<header className={"first-header " + useParams().page}>
			<figure>
				<img src={logo} alt="logo" id="logo" onClick={() => changePage("/")} />
				<figcaption>
					Order your favourite food!
				</figcaption>
			</figure>

			<img src={profile} alt="profile icon" />
		</header>
	)
}
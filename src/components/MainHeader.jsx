import logo from '../assets/logo.svg';
import profile from '../assets/profile.jpg';

export default function MainHeader() {
	return (
		<header className="first-header">
			<figure>
				<img src={logo} alt="logo" id="logo" />
				<figcaption>
					Order your favourite food!
				</figcaption>
			</figure>

			<img src={profile} alt="profile icon" />
		</header>
	)
}
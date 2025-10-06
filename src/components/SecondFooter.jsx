import LogoutIcon from "../assets/logout.svg"
import EditIcon from "../assets/edit.svg"

export default function SecondFooter({ menu }) {
	if (menu) {
		return (
			<footer className="second-footer">
				<button className="medium-red">$9.99</button>
				<button className="large-gray">ORDER NOW</button>
			</footer>
		)
	} else {
		return (
			<footer className="second-footer">
				<button className="large-gray">Edit Profile <img src={EditIcon} alt="edit icon" /></button>
				<button className="large-red">Log out <img src={LogoutIcon} alt="logout" /></button>
			</footer>
		)
	}
}
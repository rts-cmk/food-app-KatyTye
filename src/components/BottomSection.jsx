import LogoutIcon from "../assets/logout.svg"
import EditIcon from "../assets/edit.svg"
import { useNavigate } from "react-router"

export default function BottomSection({ menu, port, product }) {
	const navigate = useNavigate()

	function addOrder(name, amount) {
		if (localStorage.getItem("order")) {
			localStorage.setItem("order", `${window.localStorage.getItem("order")},${name}-${amount}`)
		} else {
			localStorage.setItem("order", `${name}-${amount}`)
		}
		navigate("/profile/order")
	}

	if (menu) {
		return (
			<section className="last-section">
				<p className="medium-red">${(product.price * port).toFixed(2)}</p>
				<button className="large-gray" onClick={() => addOrder(product.food.replace(" ", ""), port)}>ORDER NOW</button>
			</section>
		)
	} else {
		return (
			<section className="last-section">
				<button className="large-gray profile">Edit Profile <img src={EditIcon} alt="edit icon" /></button>
				<button className="large-red profile">Log out <img src={LogoutIcon} alt="logout" /></button>
			</section>
		)
	}
}
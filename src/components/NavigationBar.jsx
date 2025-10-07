import { useNavigate } from "react-router"
import BBack from "../assets/icons/back_black.svg"
import Settings from "../assets/icons/settings.svg"
import Search from "../assets/icons/search.svg"
import Back from "../assets/icons/back.svg"

export default function NavigationBar({ black }) {
	const navigate = useNavigate()

	function changePage(to) {
		navigate(to)
	}

	if (black) {
		return (
			<nav className="navigation-bar">
				<button onClick={() => changePage("/")}><img src={BBack} alt="back icon" /></button>
				<button><img src={Search} alt="search icon" /></button>
			</nav>
		)
	} else {
		return (
			<nav className="navigation-bar">
				<button onClick={() => changePage("/")}><img src={Back} alt="back icon" /></button>
				<button onClick={() => changePage("/profile/settings")}><img src={Settings} alt="settings icon" /></button>
			</nav>
		)
	}
}
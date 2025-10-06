import { useNavigate } from "react-router"
import BBack from "../assets/back_black.svg"
import Settings from "../assets/settings.svg"
import Search from "../assets/search.svg"
import Back from "../assets/back.svg"

export default function SecondHeader({ black }) {
	const navigate = useNavigate()

	function changePage(to) {
		navigate(to)
	}

	if (black) {
		return (
			<header className="second-header">
				<button onClick={() => changePage("/")}><img src={BBack} alt="back icon" /></button>
				<button><img src={Search} alt="search icon" /></button>
			</header>
		)
	} else {
		return (
			<header className="second-header">
				<button onClick={() => changePage("/")}><img src={Back} alt="back icon" /></button>
				<button onClick={() => changePage("/profile/settings")}><img src={Settings} alt="settings icon" /></button>
			</header>
		)
	}
}
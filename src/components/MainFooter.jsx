import { useNavigate } from "react-router"
import ProfileIcon from "../assets/profile.svg"
import HomeIcon from "../assets/home.svg"
import ChatIcon from "../assets/chat.svg"
import LikeIcon from "../assets/like.svg"
import AddIcon from "../assets/add.svg"
import "../styling/footer.css"

export default function MainFooter() {
	const navigate = useNavigate()

	function changePage(to) {
		navigate(to)
	}

	return (
		<footer className="bottom-footer">
			<div className="white-wrapper">
				<button><img src={AddIcon} alt="Add icon" /></button>
			</div>
			<nav>
				<button onClick={() => changePage("/")}><img src={HomeIcon} alt="Home icon" /></button>
				<button onClick={() => changePage("/profile/info")}><img src={ProfileIcon} alt="Profile icon" /></button>
				<span className="space"></span>
				<button onClick={() => changePage("/profile/orders")}><img src={ChatIcon} alt="Chat icon" /></button>
				<button onClick={() => changePage("/profile/liked")}><img src={LikeIcon} alt="Like icon" /></button>
			</nav>
		</footer>
	)
}
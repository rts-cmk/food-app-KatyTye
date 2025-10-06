import ProfileIcon from "../assets/profile.svg"
import HomeIcon from "../assets/home.svg"
import ChatIcon from "../assets/chat.svg"
import LikeIcon from "../assets/like.svg"
import AddIcon from "../assets/add.svg"

export default function MainFooter() {
	return (
		<footer className="first-footer">
			<button><img src={AddIcon} alt="Add icon" /></button>
			<nav>
				<button><img src={HomeIcon} alt="Home icon" /></button>
				<button><img src={ProfileIcon} alt="Profile icon" /></button>
				<button><img src={ChatIcon} alt="Chat icon" /></button>
				<button><img src={LikeIcon} alt="Like icon" /></button>
			</nav>
		</footer>
	)
}
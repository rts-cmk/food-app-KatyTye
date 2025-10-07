import NavigationBar from "../components/NavigationBar"
import BurgerMenu from "../components/BurgerMenu"
import MainHeader from "../components/MainHeader"
import MainFooter from '../components/MainFooter'
import { useParams } from "react-router"
import "../styling/menu.css"

function Menu() {
	return (
		<>
			<MainHeader />
			<main className="page-content">
				<NavigationBar black={true} />
				<BurgerMenu search={useParams()} />
			</main>
			<MainFooter />
		</>
	)
}

export default Menu

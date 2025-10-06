import SecondHeader from "../components/SecondHeader"
import MainFooter from '../components/MainFooter'
import { useParams } from "react-router"
import BurgerMenu from "../components/BurgerMenu"

function Menu() {
	return (
		<>
			<SecondHeader black={true} />
			<BurgerMenu search={useParams()} />
			<MainFooter />
		</>
	)
}

export default Menu

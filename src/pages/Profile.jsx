import NavigationBar from "../components/NavigationBar"
import MainHeader from "../components/MainHeader"
import MainFooter from '../components/MainFooter'
import InfoMenu from "../components/InfoMenu"
import DataList from "../components/DataList"
import { useParams } from "react-router"
import "../styling/profile.css"

function returnElements(param) {
	if (param == "info") {
		return <InfoMenu />
	} else if (param == "orders") {
		return <DataList local="order" name="Orders:" />
	} else if (param == "liked") {
		return <DataList local="fav" name="Favorites" />
	}

	return <p id="error">Could Not Find Page.</p>
}

function Profile() {
	return (
		<>
			<MainHeader />
			<main className={"page-content profile " + useParams().page}>
				<NavigationBar />
				{returnElements(useParams().page)}
			</main>
			<MainFooter />
		</>
	)
}

export default Profile

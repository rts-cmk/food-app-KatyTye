import BottomSection from "../components/BottomSection"
import SecondHeader from "../components/SecondHeader"
import MainFooter from '../components/MainFooter'
import { useParams } from "react-router"

function returnElements(param) {
	if (param == "info") {
		return <BottomSection />
	} else if (param == "order") {

	}

	return <p id="error">Could Not Find Page</p>
}

function Profile() {
	return (
		<>
			<SecondHeader />

			{returnElements(useParams().page)}
			<MainFooter />
		</>
	)
}

export default Profile

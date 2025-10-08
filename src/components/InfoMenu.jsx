import BottomSection from "./BottomSection"
import InputField from "./InputField"
import UserImage from "../assets/profile.jpg"

function InfoMenu() {
	return (
		<>
			<section className="fields">
				<figure id="profile">
					<img src={UserImage} alt="user icon" />
				</figure>
				<InputField name={"Name"} type={"text"} placeholder={"Daniel Espinosa"} required={true} />
				<InputField name={"Email"} type={"mail"} placeholder={"daniel_espinosa@gmail.com"} required={true} />
				<InputField name={"Delivery Address"} type={"address"} placeholder={"123 Nothing Street"} required={true} />
				<InputField name={"Password"} type={"password"} placeholder={"123456"} required={true} />
			</section>
			<BottomSection />
		</>
	)
}

export default InfoMenu
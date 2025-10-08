import "../styling/InputField.css"

export default function InputField({ name, type, placeholder, required }) {
	function returnElement() {
		if (required == true) {
			return (<input type={type} name={name} id={"field-" + name} placeholder={placeholder} required />)
		}

		return (<input type={type} name={name} id={"field-" + name} placeholder={placeholder} />)
	}

	return (
		<div className={"input-field " + name}>
			<p>{name}</p>
			{returnElement()}
		</div>
	)
}
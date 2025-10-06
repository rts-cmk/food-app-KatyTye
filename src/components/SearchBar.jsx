import { useNavigate } from "react-router-dom"
import FilterIcon from "../assets/filter.svg"
import SearchIcon from "../assets/search.svg"

export default function SearchBar() {
	const navigate = useNavigate();

	function searchEvent(evt) {
		evt.preventDefault()
		if (evt.target[1].value !== "") {
			navigate(`/menu/${evt.target[1].value}`)
		}
	}

	return (
		<form action="#" className="search-bar" onSubmit={searchEvent}>
			<div className="container">
				<button><img src={SearchIcon} alt="search button" /></button>
				<input type="text" name="search" id="search" />
			</div>
			<button>
				<img src={FilterIcon} alt="filter button" />
			</button>
		</form>
	)
}
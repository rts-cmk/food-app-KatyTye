import { useNavigate } from "react-router"
import FilterIcon from "../assets/filter.svg"
import SearchIcon from "../assets/search.svg"
import "../styling/searchbar.css"

export default function SearchBar() {
	const navigate = useNavigate();

	function searchEvent(evt) {
		evt.preventDefault()
		if (evt.target[1].value !== "") {
			navigate(`/menu/${evt.target[1].value.replace(" ", "")}`)
		}
	}

	return (
		<form action="#" className="search-bar" onSubmit={searchEvent}>
			<div className="container">
				<button><img src={SearchIcon} alt="search button" /></button>
				<input type="text" name="search" id="search" placeholder="Search" required />
			</div>
			<button>
				<img src={FilterIcon} alt="filter button" />
			</button>
		</form>
	)
}
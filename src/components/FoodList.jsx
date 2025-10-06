import HeartBlack from "../assets/like_black.svg";
import HeartRed from "../assets/like_red.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Star from "../assets/star.svg";
import "../styling/foodlist.css"

export default function FoodList({ source }) {
	const [fetchedJSON, setFetchedJSON] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		import("../datasets/food.json")
			.then((module) => setFetchedJSON(module.default))
			.catch((err) => console.log("Could not load JSON: " + err))
	}, [source])

	const [images, setImages] = useState({});

	useEffect(() => {
		async function fetchImages() {
			const newImages = {};
			for (const item of fetchedJSON) {
				try {
					const module = await import(`../assets/${item.image}.jpg`);
					newImages[item.food] = module.default;
				} catch (err) {
					console.log("Could not load IMAGE: " + err);
				}
			}
			setImages(newImages);
		}
		if (fetchedJSON.length > 0) {
			fetchImages();
		}
	}, [fetchedJSON]);

	function changePage(to) {
		navigate(`/menu/${to}`)
	}

	function returnHeart(name) {
		if (localStorage.getItem("fav") && localStorage.getItem("fav").includes(name.replace(" ", ""))) {
			return HeartRed
		}
		return HeartBlack
	}

	async function updateHeart(target, item) {
		if (localStorage.getItem("fav") && localStorage.getItem("fav").includes(item.food.replace(" ", ""))) {
			localStorage.setItem("fav", localStorage.getItem("fav").replace(item.food.replace(" ", ""), ""))
		} else if (localStorage.getItem("fav")) {
			localStorage.setItem("fav", `${localStorage.getItem("fav")}${item.food.replace(" ", "")}`)
		} else {
			localStorage.setItem("fav", `${item.food.replace(" ", "")}`)
		}
		const heart = await returnHeart(item.food)
		target.src = heart
	}

	function returnListedItems() {
		return fetchedJSON.map((item, idx) => {
			const itemImage = images[item.food]
			const HeartImage = returnHeart(item.food)
			if (itemImage) {
				return (
					<li title={`${item.name} ${item.price}$`} key={"item.name" + idx}>
						<figure>
							<img src={itemImage} alt="image of food" />
						</figure>
						<p onClick={() => changePage(item.name)}><span>{item.name}</span> {item.food}</p>
						<div className="sides">
							<figure>
								<img src={Star} alt="star icon" />
								<figcaption>{item.rated}</figcaption>
							</figure>
							<button>
								<img onClick={event => updateHeart(event.target, item)} src={HeartImage} alt="like icon" />
							</button>
						</div>
					</li>
				);
			}
			return null;
		});
	}

	return <ol className="food-list">{returnListedItems()}</ol>
}

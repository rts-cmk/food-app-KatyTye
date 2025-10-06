import { useEffect, useState } from "react";
import HeartBlack from "../assets/like_black.svg";
import Star from "../assets/star.svg";

export default function FoodList({ source }) {
	const [fetchedJSON, setFetchedJSON] = useState([]);

	useEffect(() => {
		import("../datasets/food.json")
			.then((module) => setFetchedJSON(module.default))
			.catch((err) => console.log("Could not load JSON: " + err));
	}, [source])

	function returnListedItems() {
		return fetchedJSON.map((item, idx) => {
			let itemImage = ""
			try {
				itemImage = import(`../assets/${item.image}.jpg`)
			} catch (err) {
				console.log("Could not load image: " + err)
			}

			if (itemImage != "") {
				return (
					<li className={item.name} key={"item.name" + idx}>
						<figure>
							<img src={itemImage} alt="image of food" />
							<figcaption>{item.name}</figcaption>
						</figure>
						<p>{item.food}</p>
						<div className="sides">
							<figure>
								<img src={Star} alt="star icon" />
								<figcaption>{item.rated}</figcaption>
							</figure>
							<button>
								<img src={HeartBlack} alt="like icon" />
							</button>
						</div>
					</li>
				);
			}
		});
	}

	return <ol className="food-list">{returnListedItems()}</ol>
}

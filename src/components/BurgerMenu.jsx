import BottomSection from "./BottomSection";
import { useState, useEffect } from "react";
import Star from "../assets/star.svg";

export default function BurgerMenu({ search }) {
	const [fetchedJSON, setFetchedJSON] = useState([]);
	const [portion, setPortion] = useState(1);
	const [images, setImages] = useState({});

	useEffect(() => {
		import("../datasets/food.json")
			.then((module) => setFetchedJSON(module.default))
			.catch((err) => console.log("Could not load JSON: " + err))
	}, []);

	useEffect(() => {
		async function fetchImages() {
			const newImages = {};
			for (const item of fetchedJSON) {
				try {
					const module = await import(`../assets/${item.image}.jpg`)
					newImages[item.food.replace(" ", "")] = module.default;
				} catch (err) {
					console.log("Could not load IMAGE: " + err)
				}
			}
			setImages(newImages);
		}
		if (fetchedJSON.length > 0) {
			fetchImages()
		}
	}, [fetchedJSON])

	function addPortion() {
		setPortion((p) => p + 1);
	}

	function removePortion() {
		setPortion((p) => (p > 1 ? p - 1 : p));
	}

	const item = fetchedJSON.find((item) => item.food.replace(" ", "") === search.name);
	const itemImage = item ? images[item.food.replace(" ", "")] : null;

	if (!item || !itemImage) return null;

	return (
		<>
			<section className="product-info" key={item.name}>
				<figure>
					<img src={itemImage} alt="product image" />
				</figure>
				<h2>
					{item.name} {item.food}
				</h2>
				<div className="contrainer">
					<figure>
						<img src={Star} alt="star icon" />
						<figcaption>{item.rated}</figcaption>
					</figure>
					<p>- {item.delivery}</p>
				</div>
				<p>{item.information}</p>
				<div className="rows">
					<div className="row-one"></div>
					<div className="row-two">
						<p>Portion</p>
						<div className="buttons">
							<button onClick={removePortion} className="small-red">-</button>
							<p>{portion}</p>
							<button onClick={addPortion} className="small-red">+</button>
						</div>
					</div>
				</div>
			</section>
			<BottomSection menu={true} port={portion} product={item} />
		</>
	);
}

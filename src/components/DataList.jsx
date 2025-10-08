import { useEffect, useState } from "react";
import "../styling/foodlist.css"

export default function DataList({ source, local, name }) {
	const [fetchedJSON, setFetchedJSON] = useState([])

	useEffect(() => {
		import(/* @vite-ignore */ source)
			.then((module) => setFetchedJSON(module.default))
			.catch((err) => console.log("Could not load JSON: " + err))
	}, [source])

	const [images, setImages] = useState({})

	useEffect(() => {
		async function fetchImages() {
			const newImages = {}
			for (const item of fetchedJSON) {
				try {
					const module = await import(`../assets/${item.image}.jpg`)
					newImages[item.food] = module.default
				} catch (err) {
					console.log("Could not load IMAGE: " + err)
				}
			}
			setImages(newImages)
		}
		if (fetchedJSON.length > 0) {
			fetchImages();
		}
	}, [fetchedJSON]);

	function findAmount(food, price, type) {
		let amount = 0

		localStorage.getItem(local).split(",").forEach((item) => {
			if (item.includes(food.replace(" ", ""))) {
				amount += Number(item.split("-")[1])
			}
		})

		if (type) {
			return amount
		}

		return `Price: ${(price * amount).toFixed(2)}$`
	}

	function removeItem(food, target) {
		let newLocalStorage = localStorage.getItem(local)

		newLocalStorage.split(",").forEach((item) => {
			if (item.includes(food.replace(" ", ""))) {
				if (item.includes(",")) {
					newLocalStorage = newLocalStorage.replace(`${item},`, "")
				} else {
					newLocalStorage = newLocalStorage.replace(`${item}`, "")
				}
			}
		})

		localStorage.setItem(local, newLocalStorage)
		target.parentElement.remove()
	}

	function returnListedItems() {
		return fetchedJSON.map((item, idx) => {
			const itemImage = images[item.food]
			if (itemImage && localStorage.getItem(local).includes(item.food.replace(" ", ""))) {
				return (
					<li key={"item.name" + idx}>
						<figure>
							<img src={itemImage} alt="image of food" />
						</figure>
						<button title={`Click here to remove item.`} onClick={event => removeItem(item.food.replace(" ", ""), event.target)} className="small-red">X</button>
						<p><span>{findAmount(item.food, 0, true) + "x " + item.food}</span> {findAmount(item.food, item.price)}</p>
					</li>
				);
			}
			return null
		});
	}

	function renderListedItemsOrEmpty() {
		const elements = returnListedItems()
		const hasItems = elements.some(item => item !== null)

		if (hasItems) {
			return (
				<>
					<h2>{name}</h2>
					<ol className="food-list">
						{elements}
					</ol>
				</>
			)
		}

		return (<p id="error">You have not ordered anything.</p>);
	}

	return (
		<>
			{renderListedItemsOrEmpty()}
		</>
	)
}

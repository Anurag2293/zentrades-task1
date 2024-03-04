
import { useState, useEffect } from "react"
import axios from "axios"

import {Table, TableHead, TableRow, TableCell} from "./components/Table"

type Product = {
	subcategory: string,
	title: string,
	price: string,
	popularity: string,
}

function App() {
	const [products, setProducts] = useState<Product[]>([])

	useEffect(() => {
		axios.get("https://s3.amazonaws.com/open-to-cors/assignment.json")
			.then(response => {
				const productsObject = response.data.products;
				const productsArray = Object.keys(productsObject).map(key => productsObject[key])
				productsArray.sort((a, b) => Number(b.popularity) - Number(a.popularity))
				setProducts(productsArray)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])

	return (
		<div className="p-8">
			<h1 className="text-3xl font-bold mb-4">
				Products
			</h1>
			<Table>
				<TableRow>
					<TableHead>S.No.</TableHead>
					<TableHead>Subcategory</TableHead>
					<TableHead>Title</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Popularity</TableHead>
				</TableRow>
				{products.map((product, index) => (
					<TableRow key={index}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{product.subcategory}</TableCell>
						<TableCell>{product.title}</TableCell>
						<TableCell>{product.price}</TableCell>
						<TableCell>{product.popularity}</TableCell>
					</TableRow>
				))}
			</Table>
		</div>
	)
}

export default App

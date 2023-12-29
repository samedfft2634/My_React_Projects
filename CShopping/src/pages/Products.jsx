import { useProducts } from "../context/ProductProvider";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Products = () => {
	// const [products, setProducts] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [search, setSearch] = useState(""); //? inputlarda initialin bos string olmasi onemli

	// const getData = async () => {
	// 	setLoading(true);
	// 	try {
	// 		const { data } = await axios(
	// 			`https://dummyjson.com/products/search?q=${search}`
	// 		);
	// 		setProducts(data.products);
	// 	} catch (error) {
	// 		console.log(error);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	getData();
	// }, [search]);
	const {products,loading} = useProducts()
	return (
		<div className="container">
			<SearchInput />
			<h2 className="text-2xl font-bold mt-8 tracking-tight text-gray-900">
				All Products
			</h2>
			{loading ? (
				<Loading />
			) : products.length ? (
				<div className="card-div">
          {products.map((item) =>( <ProductCard key={item.id} item={item}/>))}
        </div>
			) : (
				<h2 className="text-center text-3xl text-red-600 mt-32">
					No Products
				</h2>
			)}
		</div>
	);
};

export default Products;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";


const AppRouter = () => {
	return (
		<>
  
			<Routes>
				<Route path="/" element={<Login />} /> {/* sayfa ilk acildiginda login page i acilacak*/} 
				<Route path="/dashboard" element={<PrivateRouter />}>
					<Route path="" element={<Home />} /> {/* Path boş çünkü private router süzgecinden geçilirse varsayılan olarak bu sayfa açılacak. Dashboardın ana sayfasıda denebilir.*/} 
					<Route path="/dashboard/products" element={<Products />} /> {/*  path="products" halinde olabilir */}
					<Route path="products/:title" element={<ProductDetail />} /> {/* :name burada use paramsla veri cekmek icin iki nokta kullandik */}
					<Route path="about" element={<About />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default AppRouter;

//? Browser Router index.js te App.js'i sarmalladigi icin buradan router olusturmaya devam ediyoruz.
//? <Outlet /> componenti ise, nested (iç içe) route'lar için kullanılıyor. yani, bir üst route'un içinde başka route'lar varsa, bu iç route'ların gösterileceği yer <Outlet /> tarafından belirlenir. kodunda <Outlet /> göremiyorum ama şöyle bir durum var: <PrivateRouter /> componenti içinde bir <Outlet /> olması lazım. çünkü, /dashboard altındaki route'lar (Home, Products, ProductDetail, About) bu <Outlet /> içinde render edilecek.  

//# böylece, <PrivateRouter /> içinde bir <Outlet /> olursa, /dashboard'a gittiğinde <Home /> gözükür, /dashboard/products dediğinde <Products /> gözükür, ve böyle devam eder. bu sayede, /dashboard'ın kendine has bir layout'u olabilir, ve içindeki sayfalar bu layout içinde değişir. işte bu yüzden react router ile bu kadar çok oynuyoruz, her şeyi kendi istediğimiz gibi ayarlayabiliyoruz!

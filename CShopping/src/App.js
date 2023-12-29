import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<div>
			<AuthProvider>
				<ProductProvider>
					<AppRouter />
				</ProductProvider>
			</AuthProvider>
		</div>
	);
}

export default App;

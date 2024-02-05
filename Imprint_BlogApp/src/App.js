import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";


function App() {
	return (
		<>
			
				<PersistGate persistor={persistor}>
					<Provider store={store}>
						<AppRouter />
					</Provider>
				</PersistGate>

				<ToastContainer />
			
		</>
	);
}

export default App;

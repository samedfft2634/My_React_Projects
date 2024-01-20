import { blueGrey, grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: grey["900"],
			},
			secondary: {
				main: blueGrey["900"],
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
			<ToastContainer />
		</ThemeProvider>
	);
}

export default App;

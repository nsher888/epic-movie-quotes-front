import { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/stores/store";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default appWithTranslation(MyApp);

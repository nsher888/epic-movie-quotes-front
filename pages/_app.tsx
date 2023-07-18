import { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/stores/store";
import { appWithTranslation } from "next-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	);
}

export default appWithTranslation(MyApp);

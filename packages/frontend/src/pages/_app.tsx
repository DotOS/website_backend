import "tailwindcss/tailwind.css";
import "@/styles/style.css";
import "@/styles/autocomplete.css";
import "@/styles/loader.css";

import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ThemeProvider attribute="class">
		<Component {...pageProps} />
	</ThemeProvider>
);

export default App;

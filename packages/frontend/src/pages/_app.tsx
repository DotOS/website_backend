import "tailwindcss/tailwind.css";
import "@/styles/style.css";
import "@/styles/autocomplete.css";
import "@/styles/loader.css";

import React from "react";

import type { AppProps } from "next/app";
const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<Component {...pageProps} />
);

export default App;

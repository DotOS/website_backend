import Head from "next/head";
import { ReactNode, useEffect } from "react";

type Props = {
	children?: ReactNode;
	title?: string;
};

const HeadLayout = ({ children, title = "dotOS" }: Props) => (
	<div>
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/assets/images/icon.webp" />
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content="A beautiful custom ROM based on AOSP" />
			<meta name="keywords" content="dotos,aosp,rom,custom,beautiful" />
			<meta name="robots" content="index, follow" />
			<meta name="language" content="English" />
			<meta property="og:url" content="https://droidontime.com/" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta
				property="og:description"
				content="A beautiful custom ROM based on AOSP, which endeavors the essence of Simple, Unique, Secure."
			/>
			<meta property="og:image" content="/assets/images/icon.webp" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="droidontime.com" />
			<meta property="twitter:url" content="https://droidontime.com/" />
			<meta name="twitter:title" content={title} />
			<meta
				name="twitter:description"
				content="A beautiful custom ROM based on AOSP, which endeavors the essence of Simple, Unique, Secure."
			/>
			<meta name="twitter:image" content="/assets/images/icon.webp" />
		</Head>
		{children}
	</div>
);

export default HeadLayout;

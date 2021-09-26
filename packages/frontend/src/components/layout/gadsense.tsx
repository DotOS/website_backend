import { useEffect } from "react";

type Props = {
	position?: "horizontal" | "vertical";
};

declare global {
	interface Window {
		adsbygoogle: { [key: string]: unknown }[];
	}
}

const GAdsense = ({ position = "horizontal" }: Props) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<>
			{position === "horizontal" ? (
				<ins
					className="adsbygoogle"
					style={{ display: "block", width: "100% !important" }}
					data-ad-client="ca-pub-7766514239546616"
					data-ad-slot="5281788940"
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
			) : (
				<ins
					className="adsbygoogle"
					style={{ display: "block", width: "100% !important" }}
					data-ad-client="ca-pub-7766514239546616"
					data-ad-slot="3421861451"
					data-ad-format="auto"
					data-full-width-responsive="true"
				/>
			)}
		</>
	);
};

export default GAdsense;

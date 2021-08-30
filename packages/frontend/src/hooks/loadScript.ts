import { useEffect } from "react";

const loadScript = (url: string) => {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = url;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [url]);
};

export default loadScript;

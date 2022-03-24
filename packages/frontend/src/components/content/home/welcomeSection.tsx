import Link from "next/link";

const WelcomeSection = () => (
	<>
		<div className="md:mx-auto grid-item-1 place-self-center">
			<div className="isometric5 font-extrabold dark:text-gray-700">5</div>
			<h1
				className="
						text-6xl
						font-bold
						sm:text-4xl
						text-gray-900
						dark:text-white
						md:text-8xl
						lg:text-7xl
					"
			>
				dotOS
			</h1>
			<h3 className="hp1 text-2xl text-gray-800 dark:text-white sm:text-2xl md:text-4xl">
				5.2 release (2021)
			</h3>
			<div className="desc">
				<p className="text-base sm:text-base text-gray-800 dark:text-white md:text-2xl lg:text-2xl">
					<strong>Droid on Time</strong> | A beautiful custom ROM based on{" "}
					<b>AOSP</b>, which endeavors the essence of
				</p>
				<p style={{ textAlign: "justify" }} className="dark:text-white">
					"<b>Simple</b>", "<b>Unique</b>", "<b>Secure</b>".
				</p>
			</div>
			<div className="cta-input md:ml-0 lg:ml-0">
				<Link href="/devices">
					<button
						className="cta hover:bg-blue-700 rounded-md shadow-2xl"
						name="cta-input"
						placeholder="Search Your Device"
						id="cta"
					>
						Find your device
					</button>
				</Link>
			</div>
		</div>
		<div
			className="
					grid-item-2
					relative
					sm:place-self-center
					lg:place-self-start
					md:place-self-center
					lg:right-0 lg:top-10
					md:flex-shrink-0
				"
		>
			<img
				className="w-auto pointer-events-none"
				src="/assets/images/heroimage_cropped.webp"
				width="2480"
				height="3508"
				alt="Droid on time screenshot"
			/>
		</div>
	</>
);

export default WelcomeSection;

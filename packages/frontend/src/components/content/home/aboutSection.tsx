const AboutSection = () => (
	<>
		<section
			className="
				relative
				bg-white
				px-2
				py-4
				md:px-20
				lg:px-20
				md:py-8
				lg:py-8
				grid grid-flow-rows grid-cols-1
				md:grid-flow-col
				grid-wrap
				mb-10
			"
		>
			<div className="col-span-2 place-self-center">
				<h2 className="text-4xl text-gray-900 font-bold px-2 md:p-2 sm:p-0 lg:p-4">
					About dotOS
				</h2>
				<p
					className="
						font-normal
						text-xm
						sm:text-xm
						lg:text-xl
						md:text-xm
						px-2
						md:p-2
						sm:p-0.5
						lg:p-4 lg:w-11/12
					"
				>
					DroidOnTime is a custom Android firmware. It was launched with an aim
					to provide Unique user interface and Optimum performance that too
					keeping in mind the balance between performance and battery life.
					dotOS is based on Google's Android Open Source Project with
					Hand-picked goodies, innovative ideas and creative things that are
					added in the rom to enhance user experience!
				</p>
			</div>
			<div className="w-64 place-self-center">
				<img
					className="m-auto place-content-center py-4"
					alt="About"
					src="/assets/images/about.webp"
					width="851"
					height="917"
				/>
			</div>
		</section>
	</>
);

export default AboutSection;

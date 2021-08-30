const BannerSection = () => (
	<div>
		<div className="flex flex-col place-items-center my-auto mt-10">
			<h1 className="text-5xl md:text-7xl lg:text-8xl leading-normal font-bold">
				Support Us
			</h1>
			<p
				className="
							text-base
							w-10/12
							py-2
							tracking-widest
							font-normal
							leading-normal
							text-gray-500
							md:w-2/4
							lg:w-1/3
							my-4
							text-center
						"
			>
				If you like our work, Please Support us by making donations, that help
				us in adding support for more devices, domain maintainence and Inspires
				us to work constantly.
				<b>All donations are greatly appreciated!</b>
			</p>
		</div>
		<img
			className="heart1 hidden lg:flex absolute"
			src="/assets/images/icons/heart2.webp"
			alt="Heart2"
		/>
		<img
			className="heart2 left-60 mt-16 md:left-96 md:mt-4 absolute"
			src="/assets/images/icons/heart1.webp"
			alt="Heart"
		/>
	</div>
);

export default BannerSection;

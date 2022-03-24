const DonateSection = () => (
	<div
		className="
				container
				mx-auto
				grid grid-cols-1
				md:grid-cols-2
				gap-4
				place-items-center
				my-16
			"
	>
		<div
			className="
					shadow-lg
					flex flex-col
					place-items-center
					w-72
					h-72
					rounded-xl
				"
		>
			<img
				src="/assets/images/icons/paypal.svg"
				alt="PayPal"
				className="p-6 w-52"
				width="160"
				height="39"
			/>
			<p>Donate via Paypal</p>
			<button
				id="paypalDonation"
				className="
						bg-blue-500
						text-xl
						font-bold
						px-8
						py-4
						text-gray-100
						hover:bg-blue-700
						rounded-lg
						my-16
					"
			>
				<a href="https://www.paypal.com/paypalme/mohancm">Donate</a>
			</button>
		</div>
		<div
			className="
					shadow-lg
					flex flex-col
					place-items-center
					w-72
					h-72
					rounded-xl
					md:mt-16
					lg:mt-0
				"
		>
			<img className="p-6 w-40" src="/assets/images/icons/upi.webp" alt="UPI" />
			<p className="text-center">
				Donate via UPI
				<br />
				<br />
				<b>mohanmanjappa@okicici</b>
			</p>
		</div>
	</div>
);

export default DonateSection;

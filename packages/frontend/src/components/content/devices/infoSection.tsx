const InfoSection = () => (
	<div className="md:mx-28">
		<div className="desc">
			<p
				className="
							text-gray-800
							md:text-3xl
							text-3xl
							text-left
						"
			>
				These are the official devices supported by{" "}
				<span className="text-blue-500">DotOS</span> Team
				<br />
				<span
					className="
							text-gray-800
							md:text-xl
							text-xl
							text-left
						"
				>
					Note: All official builds are signed with strong{" "}
					<span className="text-blue-500">cryptographic signatures</span>.
				</span>
			</p>
		</div>
		<div className="desc">
			<p
				className="
							text-base
							sm:text-base
							text-gray-800
							text-left
						"
			>
				Is your device missing from our list? Do you want your device to be
				supported by our team?
				<br />
				Then the Interested Developer should apply for Maintainership or you can
				donate us to buy and support the device.
				<br />
				Are you <span className="text-blue-500">developer</span>? Click{" "}
				<a
					className="text-blue-500"
					href="https://blog.droidontime.com/blog/maintainership-form-dot5"
					rel="noreferrer"
				>
					here
				</a>{" "}
				to apply for device maintainership.
			</p>
		</div>
	</div>
);

export default InfoSection;

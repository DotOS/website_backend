const FeaturesSection = () => (
	<>
		<section className="grid mx-4 mb-8 md:mb-20 lg:mb-20 overflow-hidden">
			<div className="isom2">
				<h1
					className="
						text-4xl
						font-bold
						sm:text-4xl
						text-gray-900
						md:text-5xl
						lg:text-5xl
						mt-4
						md:mx-16
						lg:mx-16
					"
				>
					Features
				</h1>
				<p className="md:mx-16 lg:mx-16 py-4">
					Make your device look and feel great again
				</p>
				<div
					className="
						grid grid-cols-1
						rounded-xl
						bg-gray-100
						p-4
						m-0
						lg:ml-16
						md:ml-16 md: md:p-10
						lg:p-10
						gap-4
						md:grid-cols-1
						lg:grid-cols-2
						sm:grid-cols-1
					"
				>
					<div className="features-list flex flex-row flex-wrap">
						<img
							className="icons mt-2 fill-current"
							alt="layers"
							src="/assets/images/layers.svg"
							width="50"
							height="50"
						/>
						<h5 className="pl-4 text-gray-800 font-bold">
							Quick Settings redesign
						</h5>
						<p className="pl-11 md:pl-11 lg:pl-11">
							We want to keep the tradition going and we have released yet another redesign 
							of the most used menu on a phone.
						</p>
					</div>

					<div className="features-list flex flex-row flex-wrap">
						<img
							className="icons mt-2"
							alt="paint"
							src="/assets/images/paint.svg"
							width="50"
							height="50"
						/>
						<h5 className="pl-4 font-bold">New way to personalize</h5>
						<p className="pl-11 md:pl-11 lg:pl-11">
							With the dotOS 5.0.0 release, we introduced a new app to personalize
							your device called Customizations. You can now customize your
							device with your own icons, wallpaper, colors, and more. This is a
							great way to personalize your device. We hope you will enjoy it!
						</p>
					</div>
					<div className="features-list flex flex-row flex-wrap">
						<img
							className="icons mt-2"
							alt="settings"
							src="/assets/images/settings.svg"
							width="50"
							height="50"
						/>
						<h5 className="pl-4 font-bold">Settings design update</h5>
						<p className="pl-11 md:pl-11 lg:pl-11">
							Google did a great job with Settings app, but some stuff just
							needs some polish, and that’s what we’ve done.
						</p>
					</div>
					<div className="features-list flex flex-row flex-wrap">
						<img
							className="icons mt-2"
							alt="android"
							src="/assets/images/android.svg"
							width="50"
							height="50"
						/>
						<h5 className="pl-4 font-bold">Always up-to-date</h5>
						<p className="pl-11 md:pl-11 lg:pl-11">
							Security was always our concern, that’s why security patches are
							merged as soon as possible.
						</p>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default FeaturesSection;

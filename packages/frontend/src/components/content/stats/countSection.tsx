const CountSection = (props: { statistics?: StatisticsJSON }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 m-4">
			<div
				className="
						flex flex-row
						justify-between
						p-4
						place-items-center
						sm:place-content-center sm:flex-col sm:w-32
						h-32
						md:flex-col
						lg:flex-col
						bg-white
						shadow-lg
						md:place-content-center
						rounded-xl
						mt-2
						md:m-2
						w-full
						md:h-36 md:w-11/12
						lg:h-36 lg:w-11/12
					"
			>
				<p className="text-gray-600 uppercase text-center">Official</p>
				<h2 className="text-2xl font-bold text-blue-500 text-center">
					{props.statistics
						? props.statistics.buildCount.official
						: "Loading..."}
				</h2>
			</div>

			<div
				className="
						flex flex-row
						justify-between
						p-4
						place-items-center
						sm:place-content-center sm:flex-col sm:w-32
						h-32
						md:flex-col
						lg:flex-col
						bg-white
						shadow-lg
						md:place-content-center
						rounded-xl
						mt-2
						md:m-2
						w-full
						md:h-36 md:w-11/12
						lg:h-36 lg:w-11/12
					"
			>
				<p className="text-gray-600 uppercase text-center">Unofficial</p>
				<h2 className="text-2xl font-bold text-blue-500 text-center">
					{props.statistics
						? props.statistics.buildCount.unofficial
						: "Loading..."}
				</h2>
			</div>
			<div
				className="
						flex flex-row
						justify-between
						p-4
						place-items-center
						sm:place-content-center sm:flex-col sm:w-32
						h-32
						md:flex-col
						lg:flex-col
						bg-white
						shadow-lg
						md:place-content-center
						rounded-xl
						mt-2
						md:m-2
						w-full
						md:h-36 md:w-11/12
						lg:h-36 lg:w-11/12
					"
			>
				<p className="text-gray-600 uppercase text-center">Devices</p>
				<h2 className="text-2xl font-bold text-blue-500 text-center">
					{props.statistics
						? props.statistics.sortedJSONs.devices.length
						: "Loading..."}
				</h2>
			</div>

			<div
				className="
						flex flex-row
						justify-between
						p-4
						place-items-center
						sm:place-content-center sm:flex-col sm:w-32
						h-32
						md:flex-col
						lg:flex-col
						bg-white
						shadow-lg
						md:place-content-center
						rounded-xl
						mt-2
						md:m-2
						w-full
						md:h-36 md:w-11/12
						lg:h-36 lg:w-11/12
					"
			>
				<p className="text-gray-600 uppercase text-center">Total Installs</p>
				<h2 className="text-2xl font-bold text-blue-500 text-center">
					{props.statistics
						? props.statistics.buildCount.official +
						  props.statistics.buildCount.unofficial
						: "Loading..."}
				</h2>
			</div>
		</div>
	);
};

export default CountSection;

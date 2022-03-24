import CountryTable from "@/components/stats/countryTable";

const CountrySection = (props: { statistics: StatisticsJSON }) => (
	<div
		data-tab-content="country"
		style={{ display: "none" }}
		id="slideSource"
		className="mt-2 lg:mt-14 flex flex-col overflow-hidden w-full pb-10"
	>
		<div className="mx-4 lg:mx-24 md:mx-12 text-2xl font-bold pb-8">
			Popular Countries
		</div>
		<div className="mx-4 lg:mx-24 md:mx-12">
			<table
				className="
						shadow-xl
						table-auto
						w-full
						rounded-bl-xl rounded-br-xl
					"
			>
				<thead>
					<tr>
						<th
							className="
									text-gray-500
									rounded-tl-xl
									shadow
									w-16
									sm:w-28
									text-left
									p-2
									sm:p-4
								"
						>
							#
						</th>
						<th className="table-h-bg table-h-text text-left p-4 shadow">
							Devices
						</th>
						<th
							className="
									bg-blue-400
									text-blue-700 text-left
									p-4
									shadow
									rounded-tr-xl
								"
						>
							Installations
						</th>
					</tr>
				</thead>
				<tbody>
					{props.statistics.sortedJSONs.countries.map((country, index) => (
						<CountryTable
							country={country}
							index={index}
							key={`countryTable-${index}`}
						/>
					))}
					<tr className="shadow p-4">
						<td className="sm:p-4 p-2 text-gray-500 dark:text-gray-300 font-medium text-">
							{props.statistics.sortedJSONs.countries.length + 1}
						</td>
						<td className="p-2 sm:p-4 font-medium table-h-text">
							Unknown installations
						</td>
						<td className="font-medium sm:p-4 p-2 text-blue-900 dark:text-blue-500">
							{props.statistics.unknownCount.countries}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

export default CountrySection;

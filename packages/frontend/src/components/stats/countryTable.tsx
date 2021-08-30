const CountryTable = (props: { country: StatsCountry; index: number }) => (
	<tr className="shadow p-4">
		<td className="sm:p-4 p-2 text-gray-500 font-medium">{props.index + 1}</td>
		<td className="p-2 sm:p-4 font-medium table-h-text">
			{`${props.country.countryName} (${props.country.shortCode})`}
		</td>
		<td className="font-medium sm:p-4 p-2 text-blue-900">
			{props.country.installationCount}
		</td>
	</tr>
);

export default CountryTable;

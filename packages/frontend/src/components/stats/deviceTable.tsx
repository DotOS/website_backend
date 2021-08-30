const DeviceTable = (props: { device: StatsDevice; index: number }) => (
	<tr className="shadow p-4">
		<td className="sm:p-4 p-2 text-gray-500 font-medium">{props.index + 1}</td>
		<td className="p-2 sm:p-4 font-medium table-h-text">
			{`${props.device.brand} ${
				props.device.deviceName === "Unknown" ? "" : props.device.deviceName
			} (${
				Array.isArray(props.device.codename)
					? props.device.codename[0]
					: props.device.codename
			})`}
		</td>
		<td className="font-medium sm:p-4 p-2 text-blue-900">
			{typeof props.device.installationCount === "undefined"
				? 0
				: props.device.installationCount}
		</td>
	</tr>
);

export default DeviceTable;

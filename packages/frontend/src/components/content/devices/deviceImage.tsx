//* https://raw.githubusercontent.com/PixelExperience/official_devices/master/images/.thumbs/300/codename.png

const DeviceImage = (props: { deviceInfo: Device }) => (
	<img
		src={`/assets/images/devices/${props.deviceInfo.codename}.png`}
		alt={`deviceImage-${props.deviceInfo.codename}`}
		width="300"
		height="300"
		className="mx-auto
							flex-shrink-0 flex
							items-center
							justify-center
							h-12
							w-12
							sm:mx-0 sm:h-10 sm:w-10"
		style={{ marginRight: "5px" }}
	/>
);

export default DeviceImage;

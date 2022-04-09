import { API_URL } from "@/config/globals";
import GappsSection from "./gappsSection";
import LoadingSection from "../loadingSection";
import VanillaSection from "./vanillaSection";
import { fetcher } from "@/config/fetcher";
import loadScript from "@/hooks/loadScript";
import { useRouter } from "next/router";
import useSWR from "swr";

const DeviceSection = (props: { deviceInfo: Device }) => {
	loadScript("/assets/js/devices/device.js");

	const { query } = useRouter(),
		vanillaDetails = useSWR<MinimalisticDevice>(
			`${API_URL}/api/ota/${query.codename}/releases/vanilla`,
			fetcher
		).data,
		gappsDetails = useSWR<MinimalisticDevice>(
			`${API_URL}/api/ota/${query.codename}/releases/gapps`,
			fetcher
		).data,
		romSelection = (e: string) => {
			const vbtn = document.getElementById("vanilla"),
				gbtn = document.getElementById("gapps"),
				vdet = document.getElementById("vanilladetails"),
				gdet = document.getElementById("gappsdetails");

			switch (e) {
				case "vanilla":
					{
						vdet?.classList.remove("hidden");
						vbtn?.classList.add("bg-blue-500", "text-white");
						vbtn?.classList.remove("text-gray-700", "bg-blue-200");
						gdet?.classList.add("hidden");
						gbtn?.classList.remove("bg-blue-500", "text-white");
						gbtn?.classList.add("bg-blue-200", "text-gray-700");
					}
					break;

				case "gapps":
					{
						vdet?.classList.add("hidden");
						vbtn?.classList.remove("bg-blue-500", "text-white");
						vbtn?.classList.add("text-gray-700", "bg-blue-200");
						gdet?.classList.remove("hidden");
						gbtn?.classList.add("bg-blue-500", "text-white");
						gbtn?.classList.remove("bg-blue-200", "text-gray-700");
					}
					break;
			}
		};

	return (
		<div
			className="
					md:mx-4
					shadow
					w-full
					md:w-10/12
					lg:w-10/12
					mt-10
					md:mt-0
					rounded-xl
				"
			id="deviceSection"
		>
			<div className="justify-between p-4 md:p-2 lg:p-4 mx-2">
				{props.deviceInfo.discontinued ? (
					<div
						className="bg-red-500 text-white py-2 px-4 rounded-full flex flex-col text-sm font-medium"
						style={{ float: "right" }}
					>
						Discontinued
					</div>
				) : (
					<div
						className="bg-green-500 text-white py-2 px-4 rounded-full flex flex-col text-sm font-medium"
						style={{ float: "right" }}
					>
						Supported
					</div>
				)}
				<div
					className="text-left text-xl tracking-normal font-semibold flex items-center"
					style={{ order: -1 }}
				>
					{/*{!props.deviceInfo.deviceName.toLowerCase().includes("gsi") ? (
						<DeviceImage deviceInfo={props.deviceInfo} />
					) : null}*/}
					<p className="text-blue-500">
						{props.deviceInfo.brandName}{" "}
						<span className="text-black dark:text-white">
							{`${props.deviceInfo.deviceName} (${props.deviceInfo.codename})`}
						</span>
					</p>
				</div>
				<div className="text-sm md:text-md font-normal">
					{props.deviceInfo.maintainerInfo?.name ? (
						<p className="inline">
							Maintained by{" "}
							<a
								href={props.deviceInfo.maintainerInfo.profileURL as string}
								className="text-sm md:text-md font-normal text-blue-500"
							>
								{props.deviceInfo.maintainerInfo.name}
							</a>
							.
						</p>
					) : (
						<p className="inline">
							No maintainer. Apply{" "}
							<a
								className="text-blue-500"
								href="https://blog.droidontime.com/blog/maintainership-form-dot5"
								rel="noreferrer"
							>
								here
							</a>
							.
						</p>
					)}{" "}
					{props.deviceInfo.links.xda ? (
						<a
							href={props.deviceInfo.links.xda as string}
							className="text-sm md:text-md font-normal text-blue-500"
						>
							XDA Thread
						</a>
					) : null}
					{props.deviceInfo.links.xda && props.deviceInfo.links.telegram
						? ", "
						: " "}
					{props.deviceInfo.links.telegram ? (
						<a
							href={props.deviceInfo.links.telegram as string}
							className="text-sm md:text-md font-normal text-blue-500"
						>
							Telegram
						</a>
					) : null}
				</div>
				{props.deviceInfo.deviceInformation &&
				props.deviceInfo.deviceInformation?.show ? (
					<div
						className="bg-gray-700 rounded-full text-white px-4 py-3 mt-3"
						role="alert"
					>
						<div className="flex">
							<div className="py-1">
								<svg
									width="30px"
									className="fill-current h-6 w-6 text-black mr-4"
									xmlns="https://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path>
								</svg>
							</div>
							<div>
								<p className="font-bold">Note about this device</p>
								<p className="text-sm">
									{props.deviceInfo.deviceInformation.message}
								</p>
							</div>
						</div>
					</div>
				) : null}
			</div>
			<div
				className="
						flex flex-col
						lg:flex-row
						justify-between
						place-items-center
						shadow-lg
						mb-10
						px-4
					"
			>
				<button
					id="vanilla"
					onClick={() => romSelection("vanilla")}
					className="
							text-xl text-center
							my-2
							rounded-lg
							w-full
							mx-4
							p-4
							bg-blue-500
							hover:bg-blue-500
							text-white
						"
				>
					Vanilla
				</button>
				<button
					id="gapps"
					onClick={() => romSelection("gapps")}
					className="
							text-xl text-center
							my-2
							w-full
							mx-4
							rounded-lg
							text-gray-700
							hover:bg-blue-500 hover:text-white
							bg-blue-200
							p-4
						"
				>
					Gapps
				</button>
			</div>
			{/* Vanilla section */}
			{vanillaDetails ? (
				<VanillaSection vanillaDetails={vanillaDetails} />
			) : (
				<LoadingSection />
			)}
			{/* Vanilla Section */}

			{/* Gapps Section */}
			{gappsDetails ? <GappsSection gappsDetails={gappsDetails} /> : null}
			{/* Gapps Section */}
			<br />
			<br />
		</div>
	);
};

export default DeviceSection;

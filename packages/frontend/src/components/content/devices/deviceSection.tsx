import { useRouter } from "next/router";
import useSWR from "swr";

import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";
import loadScript from "@/hooks/loadScript";

import LoadingSection from "../loadingSection";
import DeviceImage from "./deviceImage";
import GappsSection from "./gappsSection";
import VanillaSection from "./vanillaSection";

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
					bg-white
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
						Active
					</div>
				)}
				<div
					className="text-left text-xl tracking-normal font-semibold flex items-center"
					style={{ order: -1 }}
				>
					{/*{!props.deviceInfo.deviceName.toLowerCase().includes("gsi") ? (
						<DeviceImage deviceInfo={props.deviceInfo} />
					) : null}*/}
					<span className="text-blue-500">{props.deviceInfo.brandName}</span>
					&nbsp;
					{`${props.deviceInfo.deviceName} (${props.deviceInfo.codename})`}
				</div>
				<div className="text-sm md:text-md font-normal">
					{props.deviceInfo.maintainerInfo?.name
						? `Maintained by ${" "}`
						: "No maintainer"}
					{props.deviceInfo.maintainerInfo?.name ? (
						<a
							href={props.deviceInfo.maintainerInfo.profileURL as string}
							className="text-sm md:text-md font-normal text-blue-500"
						>
							{props.deviceInfo.maintainerInfo.name}
						</a>
					) : null}
					.{" "}
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

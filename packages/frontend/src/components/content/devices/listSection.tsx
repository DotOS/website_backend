import Link from "next/link";
import useSWR from "swr";

import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";

const ListSection = () => {
	const { data } = useSWR(`${API_URL}/api/website/getDevices`, fetcher),
		devices = data as Record<string, any>,
		isBrowser = typeof window !== "undefined",
		selectDevice = (index: number) => {
			if (!isBrowser) return;
			const menulinks = document.getElementsByClassName("menelinks");
			for (let i = 0; i <= menulinks.length; i++) {
				if (index === i) menulinks[i - 1].classList.toggle("hidden");
			}
		};

	if (!devices) return null;

	return (
		<div
			className="
					container
					bg-white
					rounded-xl
					overflow-hidden
					h-3/4
					w-full
					md:w-1/3
					shadow
				"
			id="manufacturerList"
		>
			<h4
				className="
						text-2xl
						font-semibold
						p-3
						lg:p-4
						md:flex
						bg-white
						md:cursor-default
						cursor-pointer
					"
			>
				Manufacturer
			</h4>
			<div className="md:flex flex-col">
				{Object.keys(devices).map((brand: string, index) => (
					<div
						className="relative inline-block text-left w-full my-1"
						key={`brand-${index}`}
					>
						<div className="px-2">
							<button
								onClick={() => selectDevice(index + 1)}
								type="button"
								className="
									options
									inline-flex
									justify-between
									w-full
									text-left
									rounded-md
									px-4
									py-4
									text-gray-700 text-sm
									font-semibold
									hover:bg-blue-500 hover:text-white
									focus:outline-none focus:ring-indigo-500
								"
								id={`options-menu-${index + 1}`}
							>
								{brand}
								<svg
									className="-mr-1 ml-2 h-5 w-5"
									xmlns="https://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<div
							id="menelinks"
							className="
								menelinks
								origin-top-right
								w-full
								rounded-b-md
								bg-white
								ring-1 ring-black ring-opacity-5
								hidden
							"
						>
							<div
								className="mx-2"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby={`options-select-${index + 1}`}
							>
								{Object.keys(devices[brand]).map((codename: string, index) => (
									<Link
										href={`/devices/${codename}`}
										key={`device-link-${index}`}
									>
										<a
											className="
										block
										p-4
										text-sm text-gray-700
										focus:bg-blue-500 focus:text-white
										bg-blue-200
										hover:bg-blue-500 hover:text-white
									"
											role="menuitem"
										>
											{`${devices[brand][codename]} (${codename})`}
										</a>
									</Link>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListSection;

import { ReactNode } from "react";

import { getSize } from "@/util/getSize";

import NoBuildsFound from "./noBuildsFound";

const VanillaSection = (props: { vanillaDetails: MinimalisticDevice }) => {
	const selectVanilla = (e: number) => {
		const menulinks = document.getElementsByClassName("vbuildsinfo"),
			icon = document.querySelectorAll("[id=vanillaArrow]");

		for (let i = 0; i <= menulinks.length; i++) {
			if (e === i) {
				menulinks[i].classList.toggle("hidden");
				icon[i].classList.toggle("-rotate-90");
			}
		}
	};

	return (
		<div id="vanilladetails">
			{props.vanillaDetails &&
			props.vanillaDetails.releases &&
			props.vanillaDetails.releases.length !== 0 ? (
				props.vanillaDetails.releases.map((_, index) => (
					<div
						className="relative text-left w-full my-1"
						key={`vanilla-build-${index}`}
					>
						<div className="px-2 my-2 lg:px-6">
							<button
								type="button"
								onClick={() => selectVanilla(index)}
								className="
									buildoptions
									relative
									inline-flex
									w-full
									text-left
									rounded-md
									px-4
									py-4
									bg-white
									shadow-lg
									text-gray-700 text-sm
									md:font-semibold
									hover:bg-blue-500 hover:text-white
									focus:outline-none
								"
								id={`menu-option-${index + 1}`}
								aria-haspopup="true"
								aria-expanded="true"
							>
								<svg
									id="vanillaArrow"
									className="arrow transform -rotate-90 mr-2 md:mr-4 h-5 w-5"
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
								{props.vanillaDetails.releases
									? `${props.vanillaDetails.releases[index].version} - ${
											props.vanillaDetails.releases[index].type
												.charAt(0)
												.toUpperCase() +
											props.vanillaDetails.releases[index].type.slice(1)
									  } - ${new Date(
											props.vanillaDetails.releases[index].generatedAt * 1000
									  ).toDateString()}`
									: "None"}
							</button>

							<div
								id="menelinks"
								className="
									vbuildsinfo
									origin-top-right
									relative
									hidden
									w-full
									rounded-b-md
									bg-white
									ring-1 ring-black ring-opacity-5
									detailsDropdown
								"
							>
								<div className="flex flex-col shadow-lg">
									<h1 className="text-blue-500 font-semibold p-4">
										File Size:
										<span className="text-gray-700">
											{" "}
											{props.vanillaDetails.releases
												? getSize(props.vanillaDetails.releases[index].size)
												: 0}
										</span>
									</h1>

									<div className="flex flex-col mx-4 bg-gray-200 p-4">
										<p className="text-base text-blue-500">
											Version:
											<span className="text-gray-700">
												{" "}
												{props.vanillaDetails.releases
													? props.vanillaDetails.releases[index].version
													: "None"}
											</span>
										</p>
										<p className="text-base text-blue-500">
											File name:
											<span className="text-gray-700">
												{" "}
												{props.vanillaDetails.releases
													? props.vanillaDetails.releases[index].fileName
													: "None"}
											</span>
										</p>

										<p className="text-base text-blue-500">
											File hash:
											<span className="text-gray-700">
												{" "}
												{props.vanillaDetails.releases
													? props.vanillaDetails.releases[index].hash
													: "None"}
											</span>
										</p>

										{props.vanillaDetails.releases &&
										props.vanillaDetails.releases[index].images ? (
											<p className="text-base text-blue-500">
												Images:
												<span className="text-gray-700">
													{" "}
													{props.vanillaDetails.releases[
														index
													].images?.map<ReactNode>((image, index) => (
														<span key={`imgRecoveryBootVanilla-${index}`}>
															<br /> -{" "}
															<a href={image.url}>
																{image.url.substring(
																	image.url.lastIndexOf("/") + 1
																)}
															</a>
														</span>
													))}
												</span>
											</p>
										) : null}
									</div>
									<div
										className="
											flex flex-row
											justify-between
											mx-4
											place-items-center
										"
									>
										<div className="flex flex-col md:flex-row">
											<p className="flex place-items-center text-sm text-blue-500">
												<svg
													width="18"
													height="18"
													viewBox="0 0 28 29"
													fill="none"
													xmlns="https://www.w3.org/2000/svg"
												>
													<path
														d="M8.16667 13.3334H10.5V15.6667H8.16667V13.3334ZM24.5 7.50004V23.8334C24.5 25.1167 23.45 26.1667 22.1667 26.1667H5.83333C5.21449 26.1667 4.621 25.9209 4.18342 25.4833C3.74583 25.0457 3.5 24.4522 3.5 23.8334L3.51167 7.50004C3.51167 6.21671 4.53833 5.16671 5.83333 5.16671H7V2.83337H9.33333V5.16671H18.6667V2.83337H21V5.16671H22.1667C23.45 5.16671 24.5 6.21671 24.5 7.50004ZM5.83333 9.83337H22.1667V7.50004H5.83333V9.83337ZM22.1667 23.8334V12.1667H5.83333V23.8334H22.1667ZM17.5 15.6667H19.8333V13.3334H17.5V15.6667ZM12.8333 15.6667H15.1667V13.3334H12.8333V15.6667Z"
														fill="#0E6FFF"
													/>
												</svg>
												{props.vanillaDetails.releases
													? new Date(
															props.vanillaDetails.releases[index].generatedAt *
																1000
													  ).toDateString()
													: "None"}
											</p>
											<p
												id="downloadLink"
												className="
													flex
													place-items-center
													text-sm
													md:ml-8
													text-blue-500
												"
											>
												<svg
													width="18"
													height="18"
													viewBox="0 0 28 29"
													fill="none"
													xmlns="https://www.w3.org/2000/svg"
												>
													<path
														d="M21.8425 4.97085C19.9753 3.43783 17.6965 2.49119 15.2927 2.25V4.73693C17.0902 4.95854 18.7276 5.67261 20.0942 6.73141L21.8425 4.97085ZM23.8246 13.2688H26.3116C26.0653 10.7942 25.0804 8.5412 23.5907 6.71909L21.8302 8.46734C22.9162 9.85848 23.6054 11.5177 23.8246 13.2688ZM21.8302 20.5327L23.5907 22.2932C25.1217 20.4248 26.0681 18.1467 26.3116 15.7435H23.8246C23.603 17.4903 22.9139 19.1449 21.8302 20.5327ZM15.2927 24.2631V26.75C17.7673 26.5038 20.0204 25.5188 21.8425 24.0291L20.0819 22.2686C18.7276 23.3274 17.0902 24.0415 15.2927 24.2631ZM18.4814 12.7641L15.2927 15.9405V8.34422H12.8304V15.9405L9.64171 12.7518L7.90578 14.5L14.0616 20.6558L20.2173 14.5L18.4814 12.7641ZM12.8304 24.2631V26.75C6.61306 26.1344 1.75 20.8897 1.75 14.5C1.75 8.1103 6.61306 2.86558 12.8304 2.25V4.73693C7.96734 5.3402 4.21231 9.47688 4.21231 14.5C4.21231 19.5231 7.96734 23.6598 12.8304 24.2631Z"
														fill="#0E6FFF"
													/>
												</svg>
												{props.vanillaDetails.releases
													? props.vanillaDetails.releases[index].url
													: "None"}
											</p>
										</div>
										<div>
											<a
												className="
													block
													my-4
													w-28
													text-center text-gray-100
													p-2
													rounded-md
													bg-blue-500
													hover:bg-blue-700
												"
												href={
													props.vanillaDetails.releases
														? props.vanillaDetails.releases[index].url
														: ""
												}
											>
												Download
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<NoBuildsFound />
			)}
		</div>
	);
};

export default VanillaSection;

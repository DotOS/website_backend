import useSWR from "swr";

import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";

import FailedSection from "../failedSection";

const FaqSection = () => {
	const { data } = useSWR<faqJSON[]>(`${API_URL}/api/website/getFAQ`, fetcher),
		faqs = data,
		switchButton = (e: { currentTarget: any }) => {
			const main = e.currentTarget,
				element = main.parentElement.parentElement,
				andicators = main.querySelectorAll("svg"),
				child = element.querySelector("p");

			child.classList.toggle("hidden");
			if (child.classList.contains("hidden")) {
				andicators[0].style.display = "block";
				andicators[1].style.display = "none";
			} else {
				andicators[0].style.display = "none";
				andicators[1].style.display = "block";
			}
		};

	return (
		<>
			<section className="grid mx-4 mb-8 md:mb-20 lg:mb-20 overflow-hidden">
				<div>
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
						Frequently asked questions
					</h1>
					<p className="md:mx-16 lg:mx-16 py-4">
						Find <span className="text-blue-500 font-bold">answers</span> for
						most asked questions
					</p>
				</div>
				<div
					className="
					rounded-xl
					bg-gray-100
					p-4
					m-0
					lg:ml-16
					md:ml-16 md: md:p-10
					lg:p-10
					gap-4
				"
				>
					<ul>
						{faqs ? (
							faqs.map((faq, index) => (
								<li
									className="py-6 border-gray-200 border-solid border-b"
									key={index}
								>
									<div className="flex justify-between items-center">
										<h3 className="text-gray-500 font-medium text-left p-2">
											#{index + 1}
										</h3>
										<h2 className="text-gray-500 text-base md:text-xl xl:text-2xl w-10/12">
											<span className="text-blue-500 font-bold">Q:</span>{" "}
											{faqs[index].question}
										</h2>
										<button
											onClick={e => switchButton(e)}
											data-menu
											className="
									cursor-pointer
									focus:outline-none
									focus:ring-2
									focus:ring-offset-2
									focus:ring-gray-400
									rounded-full
								"
											id={"question-" + index}
											aria-label={"open-" + index}
										>
											<div>
												<svg
													className={
														(index + 1 === 1 ? "hidden" : "") +
														" icon icon-tabler icon-tabler-circle-plus"
													}
													width="36"
													height="36"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="#A0AEC0"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path stroke="none" d="M0 0h24v24H0z"></path>
													<circle cx="12" cy="12" r="9"></circle>
													<line x1="9" y1="12" x2="15" y2="12"></line>
													<line x1="12" y1="9" x2="12" y2="15"></line>
												</svg>
											</div>
											<div>
												<svg
													className={
														(index + 1 >= 2 ? "hidden" : "") +
														" icon icon-tabler icon-tabler-circle-minus"
													}
													width="36"
													height="36"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="#A0AEC0"
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path stroke="none" d="M0 0h24v24H0z"></path>
													<circle cx="12" cy="12" r="9"></circle>
													<line x1="9" y1="12" x2="15" y2="12"></line>
												</svg>
											</div>
										</button>
									</div>
									<p
										className={
											(index + 1 >= 2 ? "hidden" : "") +
											" pt-2 md:pt-3 lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base xl:text-lg rounded-b-lg"
										}
										style={{ transition: "max-height 0.3s" }}
										id={"question-text-" + index}
									>
										<span className="text-blue-500 font-bold">A:</span>{" "}
										{faqs[index].answer}
									</p>
								</li>
							))
						) : (
							<FailedSection />
						)}
					</ul>
				</div>
			</section>
		</>
	);
};

export default FaqSection;

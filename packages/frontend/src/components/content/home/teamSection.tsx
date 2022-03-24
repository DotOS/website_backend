import { API_URL } from "@/config/globals";
import FailedSection from "../failedSection";
import UsersModal from "@/components/modals/modalUser";
import { fetcher } from "@/config/fetcher";
import useSWR from "swr";

const TeamSection = () => {
	const { data } = useSWR<TeamMembers>(
			`${API_URL}/api/website/getMembers`,
			fetcher
		),
		teamMembers = data?.teamMembers,
		honorableMentions = data?.honorableMentions;

	//* Workaround for undefined `document` object.
	const isBrowser = typeof window !== "undefined",
		openModal = () => {
			if (!process.browser) return;
			const modal = document.getElementById("honorableMentions") as HTMLElement;
			modal.classList.remove("fadeOut");
			modal.classList.add("fadeIn");
			modal.classList.remove("hidden");
		};

	return (
		<>
			{honorableMentions ? (
				<UsersModal honorableMentions={honorableMentions} />
			) : null}
			<div
				id="team"
				className="ml-4 lg:mx-20 md:mx-20 sm:mx-4 md:mb-20 lg:mb-20"
			>
				<h5 className="mx-2 uppercase tracking-widest font-normal text-l text-gray-900 dark:text-white">
					Team
				</h5>
				<h1 className="mx-2 font-bold text-4xl text-gray-900 dark:text-white">
					Meet our <span className="text-blue-500">team</span>
				</h1>

				<div
					className={
						(teamMembers ? "grid" : "") +
						" my-4 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1"
					}
				>
					{teamMembers ? (
						teamMembers.map((member: TeamMemberOrHonorableMentions, index) => (
							<div
								className="
						max-w-none
						mr-4
						bg-gray-100
						dark:bg-gray-700
						shadow
						rounded-xl
						overflow-hidden
						lg:max-w-sm
						md:max-w-nono
					"
								key={index}
							>
								<div className="flex md:flex">
									<div className="md:flex-shrink-0">
										<img
											className="
									w-36
									sm:w-32
									md:h-36
									lg:w-36
									md:w-36
									rounded-3xl
									p-4
									object-cover
								"
											src={`https://github.com/${member.ghUsername}.png?size=256`}
											alt={member.fullName}
											width="256"
											height="256"
										/>
									</div>
									<div
										className="
								px-4
								place-self-center
								lg:place-self-center
								md:place-self-center
							"
									>
										<div className="tracking-wide text-base text-blue-500 font-semibold">
											<a
												href={`https://github.com/${member.ghUsername}`}
												className="cursor-pointer"
											>
												{member.fullName}
											</a>
										</div>

										<p className="mt-2 text-sm text-gray-900 dark:text-white">
											{member.role}
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<FailedSection />
					)}
					{honorableMentions && isBrowser ? (
						<div
							className="
					max-w-none
					mr-4
					bg-gray-100
					dark:bg-gray-700
					shadow
					rounded-xl
					overflow-hidden
					lg:max-w-sm
					md:max-w-nono
					"
						>
							<div className="flex md:flex">
								<div className="md:flex-shrink-0">
									<img
										className="
									w-36
									sm:w-32
									md:h-36
									lg:w-36
									md:w-36
									rounded-3xl
									p-4
									object-cover
								"
										src="/assets/images/icon.png"
										alt="dotOS logo"
										width="256"
										height="256"
									/>
								</div>
								<div
									className="
								px-4
								place-self-center
								lg:place-self-center
								md:place-self-center
							"
								>
									<div className="tracking-wide text-base text-blue-500 font-semibold">
										Honorable Mentions
									</div>

									<p className="mt-2 text-sm text-gray-900 dark:text-white">
										Click
										<a
											className="cursor-pointer text-blue-500 font-bold"
											onClick={openModal}
										>
											{" "}
											here{" "}
										</a>
										to see them!
									</p>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</>
	);
};

export default TeamSection;

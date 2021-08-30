import useSWR from "swr";

import Contributor from "@/components/content/contributors/contributor";
import Divider from "@/components/content/contributors/divider";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";
import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";

const ContributorsPage = () => {
	const { data } = useSWR<Contributors[]>(
		`${API_URL}/api/website/getContributors`,
		fetcher
	);

	return (
		<HeadLayout title="dotOS | Contributors">
			<AnnouncementLayout />
			<NavbarLayout />
			<div
				className="
				flex flex-col
				md:flex-row
				justify-between
				md:place-items-center
				text-xl
				tracking-widest
				md:mx-4 md:p-6
				lg:px-0 lg:mx-24
				font-normal
				text-gray-700
			"
			>
				<h3 className="hp1 text-2xl sm:text-2xl md:text-4xl mx-4 my-4 md:my-0 md:mx-0">
					<span className="text-blue-500">Contributors</span>
				</h3>
			</div>
			<div
				className="mx-4 mb-8 md:mb-20 lg:mb-20 overflow-hidden space-y-12
				"
			>
				{data &&
					data.map(divider => (
						<>
							<Divider divider={divider}>
								<div className="flex flex-row gap-x-12">
									{divider.members &&
										divider.members.map(contributor => (
											<Contributor contributor={contributor} />
										))}
								</div>
							</Divider>
						</>
					))}
			</div>
			<FooterLayout />
		</HeadLayout>
	);
};

export default ContributorsPage;

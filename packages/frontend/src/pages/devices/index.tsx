import { API_URL } from "@/config/globals";
import AnnouncementLayout from "@/components/layout/announcement";
import AutoCompleteSection from "@/components/content/devices/autoCompleteSection";
import FailedSection from "@/components/content/failedSection";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import InfoSection from "@/components/content/devices/infoSection";
import ListSection from "@/components/content/devices/listSection";
import NavbarLayout from "@/components/layout/navbar";
import Script from "next/script";
import { fetcher } from "@/config/fetcher";
import loadScript from "@/hooks/loadScript";
import useSWR from "swr";

const IndexPage = () => {
	const { data } = useSWR(`${API_URL}/api/ping`, fetcher);

	loadScript("/assets/js/autoComplete.js");

	return (
		<HeadLayout title="dotOS | Devices">
			<div className="dark:bg-gray-900 dark:text-white">
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
						<span className="text-blue-500">dotOS downloads</span>
					</h3>
				</div>
				{data ? <AutoCompleteSection /> : null}
				<div
					className={`${data ? "flex flex-col" : ""} p-4
				md:mx-4
				lg:mx-20
				md:p-4
				lg:p-4
				md:flex-row
				lg:flex-row
				mb-20`}
				>
					{data ? <ListSection /> : <FailedSection page={true} />}
					{data ? <InfoSection /> : null}
				</div>
				<Script src="/assets/js/devices/index.js" />
				<FooterLayout />
			</div>
		</HeadLayout>
	);
};

export default IndexPage;

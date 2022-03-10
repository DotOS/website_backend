import { API_URL } from "@/config/globals";
import AnnouncementLayout from "@/components/layout/announcement";
import CountSection from "@/components/content/stats/countSection";
import CountrySelection from "@/components/content/stats/countrySection";
import DeviceSection from "@/components/content/stats/deviceSection";
import FooterLayout from "@/components/layout/footer";
import GAdsense from "@/components/layout/gAdsenseBanner";
import HeadLayout from "@/components/layout/head";
import HeaderSection from "@/components/content/stats/headerSection";
import LoadingSection from "@/components/content/loadingSection";
import NavbarLayout from "@/components/layout/navbar";
import Script from "next/script";
import { fetcher } from "@/config/fetcher";
import useSWR from "swr";

const StatsPage = () => {
	const { data } = useSWR<StatisticsJSON>(
		`${API_URL}/api/website/getStatistics`,
		fetcher
	);

	return (
		<HeadLayout title="dotOS | Statistics">
			<AnnouncementLayout />
			<NavbarLayout />
			<div
				className="
				lg:px-24
				px-4
				md:px-10
				grid grid-cols-1
				sm:grid-cols-2
				md:grid-cols-2
				lg:grid-cols-2
			"
			>
				<HeaderSection />
				{<CountSection statistics={data} />}
			</div>
			{data ? <DeviceSection statistics={data} /> : <LoadingSection />}
			{data ? <CountrySelection statistics={data} /> : null}
			<FooterLayout />
			<Script src="/assets/js/stats/index.js" strategy="afterInteractive" />
		</HeadLayout>
	);
};

export default StatsPage;

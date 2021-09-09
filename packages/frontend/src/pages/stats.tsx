import Script from "next/script";
import useSWR from "swr";

import LoadingSection from "@/components/content/loadingSection";
import CountrySelection from "@/components/content/stats/countrySection";
import CountSection from "@/components/content/stats/countSection";
import DeviceSection from "@/components/content/stats/deviceSection";
import HeaderSection from "@/components/content/stats/headerSection";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";
import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";

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
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7766514239546616"
				crossOrigin="anonymous"
			></script>
		</HeadLayout>
	);
};

export default StatsPage;

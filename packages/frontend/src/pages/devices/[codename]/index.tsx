import { useRouter } from "next/router";
import Script from "next/script";
import useSWR from "swr";

import AutoCompleteSection from "@/components/content/devices/autoCompleteSection";
import DeviceSection from "@/components/content/devices/deviceSection";
import ListSection from "@/components/content/devices/listSection";
import NoDeviceFound from "@/components/content/devices/noDeviceFound";
import FailedSection from "@/components/content/failedSection";
import LoadingSection from "@/components/content/loadingSection";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import GAdsense from "@/components/layout/gAdsenseBanner";
import HeadLayout from "@/components/layout/head";
import LoadingPage from "@/components/layout/loading";
import NavbarLayout from "@/components/layout/navbar";
import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";
import loadScript from "@/hooks/loadScript";

const DeviceSpecificPage = () => {
	const { query } = useRouter(),
		codeName = query.codename;

	loadScript("/assets/js/autoComplete.js");

	const pingData = useSWR(`${API_URL}/api/ping`, fetcher).data,
		{ data } = useSWR<Device | ErrorJSON>(
			typeof codeName !== "undefined" ? `${API_URL}/api/ota/${codeName}` : null,
			fetcher
		);

	if ((data as ErrorJSON)?.error === "Device not found.")
		return <NoDeviceFound />;

	return codeName ? (
		<HeadLayout title={`dotOS | ${codeName}`}>
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
					<span className="text-blue-500">
						dotOS <span className="text-gray-500">|</span> {codeName}
					</span>
				</h3>
			</div>
			<GAdsense />
			{pingData ? <AutoCompleteSection /> : null}
			<div
				className={`${pingData ? "flex flex-col" : ""} p-4
				md:mx-4
				lg:mx-20
				md:p-4
				lg:p-4
				md:flex-row
				lg:flex-row
				mb-20`}
			>
				{pingData ? (
					<ListSection />
				) : typeof codeName === "undefined" ? (
					<FailedSection page={true} />
				) : (
					<LoadingSection />
				)}
				{data ? <DeviceSection deviceInfo={data as Device} /> : null}
			</div>
			<GAdsense />
			<FooterLayout />
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7766514239546616"
				crossOrigin="anonymous"
			></script>
		</HeadLayout>
	) : (
		<LoadingPage />
	);
};

export default DeviceSpecificPage;

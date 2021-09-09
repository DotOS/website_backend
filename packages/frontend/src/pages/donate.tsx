import BannerSection from "@/components/content/donate/bannerSection";
import DonateSection from "@/components/content/donate/donateSection";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";

const DonatePage = () => (
	<HeadLayout title="dotOS | Support Us">
		<style>
			{`
				body {
					--tw-bg-opacity: 1;
					background-color: rgba(254, 242, 242, var(--tw-bg-opacity));
				}
			`}
		</style>
		<div className="relative flex flex-col overflow-hidden place-self-center bg-red-50">
			<div className="bg-support relative">
				<AnnouncementLayout />
				<NavbarLayout />
				<BannerSection />
			</div>
			<DonateSection />
		</div>
		<FooterLayout />
		<script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7766514239546616"
			crossOrigin="anonymous"
		></script>
	</HeadLayout>
);

export default DonatePage;

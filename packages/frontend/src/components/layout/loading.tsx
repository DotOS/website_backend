import LoadingSection from "@/components/content/loadingSection";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";

const LoadingPage = () => (
	<HeadLayout title="dotOS | Loading...">
		<AnnouncementLayout />
		<NavbarLayout />
		<div
			className="p-4
				md:mx-4
				lg:mx-20
				md:p-4
				lg:p-4
				md:flex-row
				lg:flex-row
				mb-20"
		>
			<LoadingSection />
		</div>
		<FooterLayout />
	</HeadLayout>
);

export default LoadingPage;

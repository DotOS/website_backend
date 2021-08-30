import AboutSection from "@/components/content/home/aboutSection";
import DonateSection from "@/components/content/home/donateSection";
import FaqSection from "@/components/content/home/faqSection";
import FeaturesSection from "@/components/content/home/featuresSection";
import TeamSection from "@/components/content/home/teamSection";
import WelcomeSection from "@/components/content/home/welcomeSection";
import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";

const IndexPage = () => (
	<HeadLayout title="dotOS | HomePage">
		<style>
			{`
				.active {
					display: block;
				}
				.animated {
					-webkit-animation-duration: 1s;
					animation-duration: 1s;
					-webkit-animation-fill-mode: both;
					animation-fill-mode: both;
				}
				.animated.faster {
					-webkit-animation-duration: 0.5s;
					animation-duration: 0.5s;
				}
				.fadeIn {
					-webkit-animation-name: fadeIn;
					animation-name: fadeIn;
				}
				.fadeOut {
					-webkit-animation-name: fadeOut;
					animation-name: fadeOut;
				}
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				@-webkit-keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}
				@keyframes fadeOut {
					from {
						opacity: 1;
					}
					to {
						opacity: 0;
					}
				}
				@-webkit-keyframes fadeOut {
					from {
						opacity: 1;
					}
					to {
						opacity: 0;
					}
				}
			`}
		</style>
		<AnnouncementLayout />
		<NavbarLayout />
		<div
			className="
				relative
				px-4
				bg-white
				sm:mx-4
				md:mx-20
				lg:mx-20
				overflow-hidden
				grid grid-cols-1
				md:grid-cols-1
				lg:grid-cols-2
				sm:grid-cols-1
				pb-4
			"
		>
			<WelcomeSection />
		</div>
		<FeaturesSection />
		<AboutSection />
		<TeamSection />
		<FaqSection />
		<DonateSection />
		<FooterLayout />
	</HeadLayout>
);

export default IndexPage;

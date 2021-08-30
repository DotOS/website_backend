import AnnouncementLayout from "@/components/layout/announcement";
import FooterLayout from "@/components/layout/footer";
import HeadLayout from "@/components/layout/head";
import NavbarLayout from "@/components/layout/navbar";

const NoDeviceFound = () => (
	<HeadLayout title="dotOS | Not Found">
		<meta httpEquiv="refresh" content="5; url=/devices" />
		<AnnouncementLayout />
		<NavbarLayout />
		<div className="object-center mx-auto">
			<img
				src="/assets/images/notfound.png"
				className="object-center mx-auto"
				alt="by Icons8"
				width="196"
				height="196"
				style={{ marginTop: "54px", marginBottom: "20px" }}
			/>
			<p className="text-2xl text-center">
				Device that you are trying to find,
				<br />
				<b className="text-2xl text-blue-500 font-semibold">
					doesn't exist in our database
				</b>
				.
				<br />
			</p>
			<p
				className="text-xl text-center"
				style={{ marginTop: "20px", marginBottom: "54px" }}
			>
				You will be redirected in{" "}
				<span className="text-xl text-blue-500 font-semibold underline">
					5 seconds
				</span>{" "}
				to select a different device from the list.
			</p>
		</div>
		<FooterLayout />
	</HeadLayout>
);

export default NoDeviceFound;

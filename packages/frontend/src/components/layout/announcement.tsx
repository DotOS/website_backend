import useSWR from "swr";

import { fetcher } from "@/config/fetcher";
import { API_URL } from "@/config/globals";

interface announcementType {
	showBanner: boolean;
	badgeMsg: string;
	message: string;
	redirectLink: string;
}

const AnnouncementLayout = () => {
	const { data } = useSWR<announcementType>(
		`${API_URL}/api/website/getAnnouncement`,
		fetcher
	);
	if (!data || !data.showBanner) return null;

	return (
		<div>
			<div className="bg-blue-500 text-center py-2 lg:px-2">
				<a href={data.redirectLink}>
					<div
						className="
				p-2
				bg-blue-800
				items-center
				text-blue-100
				leading-none
				rounded-full
				flex
				lg:inline-flex
			"
						role="alert"
					>
						<span
							className="
					flex
					rounded-full
					bg-blue-500
					uppercase
					px-2
					py-1
					text-xs
					font-bold
					mr-3
				"
						>
							{data.badgeMsg}
						</span>
						<span className="font-semibold mr-2 text-left flex-auto">
							{data.message}
						</span>
						<svg
							className="fill-current opacity-75 h-4 w-4"
							xmlns="https://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
						</svg>
					</div>
				</a>
			</div>
		</div>
	);
};

export default AnnouncementLayout;

import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	contributor: MembersEntity;
};

const Contributor = ({ contributor }: Props) => (
	<>
		<div className="text-center">
			<img
				src={`https://github.com/${contributor.links.github.substring(
					contributor.links.github.lastIndexOf("/") + 1
				)}.png?size=256`}
				className="rounded-md shadow-md mb-4"
			/>
			<p className="text-2xl mx-4 my-4 md:my-0 md:mx-0 text-blue-500">
				{contributor.name}
			</p>
			<div className="flex flex-row gap-x-4 items-center justify-center">
				{contributor.links.github ? (
					<a href={contributor.links.github} className="hover:text-blue-500">
						<FontAwesomeIcon icon={faGithub} size="1x" width="26" height="26" />
					</a>
				) : null}
				{contributor.links.telegram ? (
					<a href={contributor.links.telegram} className="hover:text-blue-500">
						<FontAwesomeIcon
							icon={faTelegram}
							size="1x"
							width="26"
							height="26"
						/>
					</a>
				) : null}
			</div>
		</div>
	</>
);

export default Contributor;

type Props = {
	page?: boolean;
};

const FailedSection = ({ page = false }: Props) => (
	<div>
		<img
			src="/assets/images/icons/error.svg"
			className="object-center mx-auto"
			alt="by Icons8"
			width="215"
			height="215"
		/>
		<p className="text-base text-center">
			We couldn't load this{" "}
			<b className="text-base text-blue-500 font-semibold">
				{page ? "page" : "section"}
			</b>
			.
			<br />
			Please try again{" "}
			<b className="text-base text-blue-500 font-semibold">later</b>.
		</p>
	</div>
);

export default FailedSection;

import Link from "next/link";

const DonateSection = () => (
	<>
		<div className="grid h-full mt-10">
			<div
				className="
					flex
					md:flex-row
					lg:flex-row
					flex-col-reverse flex-wrap
					md:mx-10 md:p-10
					lg:mx-10 lg:p-10
					p-2
					sm:p-2
				"
			>
				<div
					className="
						flex-1
						md:place-self-start
						lg:place-self-start
						place-self-center
					"
				>
					<img
						className="md:w-52 lg:w-52 w-40 pb-4"
						alt="Support"
						src="/assets/images/support.webp"
						width="512"
						height="512"
					/>
				</div>
				<div className="flex-1 place-self-center p-4">
					<h3
						className="
							text-4xl
							font-semibold
							text-gray-900 text-center
							dark:text-white
							md:text-left
							lg:text-left
						"
					>
						Donate
					</h3>
					<p
						className="
							text-xl text-gray-900
							dark:text-white
							flex-grow
							text-center
							md:text-left
							lg:text-left
						"
					>
						Do you like our project? Support us by
						<Link href="/donate">
							<a className="text-xl font-semibold text-blue-500"> donating</a>
						</Link>
					</p>
				</div>
			</div>
		</div>
	</>
);

export default DonateSection;

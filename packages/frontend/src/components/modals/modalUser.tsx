import React from "react";

const UsersModal = (props: {
	honorableMentions: TeamMemberOrHonorableMentions[];
}) => {
	//* Workaround for undefined `document` object.
	const isBrowser = typeof window !== "undefined",
		modalClose = () => {
			if (!isBrowser) return;
			const modal = document.getElementById("honorableMentions") as HTMLElement;
			modal.classList.remove("fadeIn");
			modal.classList.add("fadeOut");
			setTimeout(() => {
				modal.classList.add("hidden");
			}, 500);
		};

	return (
		<div
			className="
		fixed
		z-10
		inset-0
		overflow-y-auto
		animated
		fadeIn
		faster
		hidden
		backdrop-filter backdrop-blur-lg
	"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
			id="honorableMentions"
		>
			<div
				className="
			flex
			items-end
			justify-center
			min-h-screen
			pt-4
			px-4
			pb-20
			text-center
			sm:block sm:p-0
		"
			>
				<div className="fixed inset-0" aria-hidden="true"></div>

				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<div
					className="
				inline-block
				align-bottom
				rounded-lg
				text-left
				overflow-hidden
				shadow-xl
				transform
				transition-all
				bg-white
				dark:bg-gray-700
				sm:my-8 sm:align-middle max-w-sm w-full
			"
				>
					<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div
								className="
							mx-auto
							flex-shrink-0 flex
							items-center
							justify-center
							h-12
							w-12
							rounded-full
							sm:mx-0 sm:h-10 sm:w-10
						"
							>
								<img
									src="/assets/images/icon.png"
									width="256"
									height="256"
									alt="dotOS logo"
								/>
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									className="text-lg leading-6 font-medium text-gray-900 dark:text-white"
									id="modal-title"
								>
									Honorable Mentions
								</h3>
								<div className="mt-2">
									{props.honorableMentions &&
										props.honorableMentions.map((honorableMember, index) => (
											<p className="text-sm text-gray-500" key={index}>
												<a
													href={`https://github.com/${honorableMember.ghUsername}`}
													className="text-blue-500"
												>
													{honorableMember.fullName}
												</a>
												<br />
											</p>
										))}
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gray-50 dark:bg-gray-600 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="
						mt-3
						w-full
						inline-flex
						justify-center
						rounded-md
						border border-gray-300
						shadow-sm
						px-4
						py-2
						text-base
						font-medium
						text-gray-700
						dark:text-white
						focus:outline-none
						focus:ring-2
						focus:ring-offset-2
						focus:ring-blue-500
						sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
					"
							onClick={modalClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UsersModal;

import Link from "next/link";

const FooterLayout = () => (
	<>
		<footer className="bg-gray-200 pt-10 md:px-20 lg:px-20 px-2 sm:px-2 pb-8 bottom-1">
			<Link href="/">
				<a className="uppercase m-4 tracking-widest pointer text-gray-600 text-2xl">
					droidontime
				</a>
			</Link>
			<div
				className="
			grid grid-cols-2
			sm:grid-cols-2
			md:grid-cols-2
			lg:grid-cols-4
			bg-gray-200
			mx-2
		"
			>
				<div className="flex flex-col my-2">
					<Link href="/devices">
						<a className="font-normal text-gray-600 text-l p-2 hover:text-blue-700">
							Devices
						</a>
					</Link>
					<a
						className="font-normal text-gray-600 text-l p-2 hover:text-blue-700"
						href="https://blog.droidontime.com/"
						rel="noreferrer"
					>
						Blog
					</a>
					<Link href="/#team">
						<a className="font-normal text-gray-600 text-l p-2 hover:text-blue-700">
							Team
						</a>
					</Link>
					<Link href="/donate">
						<a className="font-normal text-gray-600 text-l p-2 hover:text-blue-700">
							Donate
						</a>
					</Link>
					<Link href="/contributors">
						<a className="font-normal text-gray-600 text-l p-2 hover:text-blue-700">
							Contributors
						</a>
					</Link>
				</div>

				<div className="flex flex-col">
					<ul>
						<li>
							<Link href="/stats">
								<a className="flex p-2 place-items-center hover:text-blue-700">
									<span>
										<svg
											className="mx-2"
											width="16"
											height="16"
											fill="white"
											xmlns="https://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M1.143 16h13.714c.629 0 1.143-.514 1.143-1.143V1.143C16 .514 15.486 0 14.857 0H1.143C.514 0 0 .514 0 1.143v13.714C0 15.486.514 16 1.143 16zm5.714-3.429c0 .629.514 1.143 1.143 1.143s1.143-.514 1.143-1.143V3.43c0-.629-.514-1.143-1.143-1.143S6.857 2.8 6.857 3.429v9.142zm-4.571 0c0 .629.514 1.143 1.143 1.143.628 0 1.142-.514 1.142-1.143V6.857c0-.628-.514-1.143-1.142-1.143-.629 0-1.143.515-1.143 1.143v5.714zm10.285 1.143a1.146 1.146 0 01-1.143-1.143v-2.285c0-.629.515-1.143 1.143-1.143.629 0 1.143.514 1.143 1.143v2.286c0 .628-.514 1.142-1.143 1.142z"
												fill="gray"
											></path>
										</svg>
									</span>
									Statistics
								</a>
							</Link>
						</li>
						<li>
							<a
								className="flex p-2 place-items-center hover:text-blue-700"
								href="https://github.com/dotos"
								rel="noreferrer"
								target="_blank"
							>
								<span>
									<svg
										className="mx-2"
										width="17"
										height="16"
										fill="gray"
										xmlns="https://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8.202 0A8.2 8.2 0 000 8.202a8.197 8.197 0 005.608 7.782c.41.072.564-.174.564-.39 0-.194-.01-.84-.01-1.527-2.06.38-2.594-.502-2.758-.964-.092-.236-.492-.963-.84-1.158-.288-.154-.698-.534-.011-.544.646-.01 1.107.595 1.261.841.738 1.24 1.917.892 2.389.677.072-.534.287-.892.523-1.097-1.825-.205-3.732-.913-3.732-4.05 0-.892.318-1.63.84-2.205-.081-.205-.369-1.045.083-2.173 0 0 .687-.216 2.255.84a7.611 7.611 0 012.05-.276 7.61 7.61 0 012.051.276c1.57-1.066 2.256-.84 2.256-.84.451 1.128.164 1.968.082 2.173.523.575.84 1.302.84 2.205 0 3.147-1.916 3.845-3.741 4.05.297.256.553.748.553 1.517 0 1.097-.01 1.979-.01 2.256 0 .215.154.471.564.39a8.215 8.215 0 005.588-7.783A8.2 8.2 0 008.202 0z"
											fill="gray"
										></path>
									</svg>
								</span>
								GitHub
							</a>
						</li>
						<li>
							<a
								className="flex p-2 place-items-center hover:text-blue-700"
								href="https://review.droidontime.com/"
								rel="noreferrer"
								target="_blank"
							>
								<span>
									<svg
										className="mx-2"
										width="16"
										height="17"
										fill="white"
										xmlns="https://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												d="M11.077.5H1.23C.55.5 0 1.051 0 1.73v9.847c0 .68.551 1.23 1.23 1.23h9.847c.68 0 1.23-.55 1.23-1.23V1.73c0-.68-.55-1.231-1.23-1.231z"
												fill="#606060"
											></path>
											<path
												d="M14.77 4.192H4.922c-.68 0-1.23.551-1.23 1.231v9.846c0 .68.55 1.231 1.23 1.231h9.846c.68 0 1.231-.551 1.231-1.23V5.422c0-.68-.551-1.23-1.23-1.23z"
												fill="white"
											></path>
											<path
												d="M5.538 7.27h3.693V8.5H5.538V7.27zM10.461 7.27h3.693V8.5H10.46V7.27zM5.538 11.577H6.77v-1.23H8v1.23h1.23v1.23H8v1.232H6.77v-1.231H5.537v-1.231zM10.461 11.577h1.231v-1.23h1.231v1.23h1.23v1.23h-1.23v1.232h-1.23v-1.231H10.46v-1.231z"
												fill="#343434"
											></path>
										</g>
										<defs>
											<clipPath id="clip0">
												<path fill="gray" d="M0 .5h16v16H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</span>
								Gerrit Code Review
							</a>
						</li>
						<li>
							<a
								className="flex p-2 place-items-center hover:text-blue-700"
								href="https://translations.droidontime.com/"
								rel="noreferrer"
								target="_blank"
							>
								<span>
									<svg
										className="mx-2"
										height="16"
										viewBox="0 0 512 512"
										width="16"
										fill="gray"
										xmlns="https://www.w3.org/2000/svg"
									>
										<path
											className="bg-gray-700"
											d="m456.835938 208.867188h-192.800782c-30.417968 0-55.164062 24.746093-55.164062 55.164062v104.75l-49.953125 35.679688c-3.941407 2.8125-6.28125 7.359374-6.28125 12.203124 0 4.847657 2.339843 9.394532 6.28125 12.207032l50.554687 36.109375c3.949219 26.570312 26.914063 47.019531 54.5625 47.019531h192.800782c30.417968 0 55.164062-24.746094 55.164062-55.167969v-192.800781c0-30.417969-24.746094-55.164062-55.164062-55.164062zm-64.828126 210.773437c-3.535156 0-6.265624-1.121094-7.066406-4.175781l-6.109375-21.371094h-36.796875l-6.101562 21.371094c-.804688 3.054687-3.535156 4.175781-7.070313 4.175781-5.625 0-13.175781-3.53125-13.175781-8.671875 0-.324219.160156-.964844.320312-1.609375l31.011719-101.0625c1.445313-4.820313 7.390625-7.074219 13.335938-7.074219 6.105469 0 12.050781 2.253906 13.496093 7.074219l31.011719 101.0625c.160157.644531.320313 1.125.320313 1.609375 0 4.976562-7.550782 8.671875-13.175782 8.671875zm0 0"
										></path>
										<path d="m346.375 377.703125h27.960938l-13.984376-49.324219zm0 0"></path>
										<path d="m178.871094 264.03125c0-20.140625 7.042968-38.65625 18.773437-53.253906-17.113281 0-32.992187-5.355469-46.082031-14.453125-13.089844 9.101562-28.96875 14.453125-46.085938 14.453125-4.667968 0-8.457031-3.789063-8.457031-8.460938s3.789063-8.457031 8.457031-8.457031c11.988282 0 23.207032-3.320313 32.8125-9.070313-11.585937-12.503906-19.289062-28.648437-21.152343-46.515624h-11.65625c-4.671875 0-8.460938-3.785157-8.460938-8.457032s3.789063-8.460937 8.460938-8.460937h37.628906v-20.539063c0-4.675781 3.785156-8.460937 8.457031-8.460937s8.457032 3.785156 8.457032 8.460937v20.539063h37.628906c4.671875 0 8.460937 3.789062 8.460937 8.460937s-3.789062 8.457032-8.460937 8.457032h-11.65625c-1.863282 17.867187-9.566406 34.011718-21.152344 46.515624 9.601562 5.757813 20.824219 9.070313 32.808594 9.070313 4.464844 0 8.113281 3.460937 8.429687 7.847656 15.214844-14.15625 35.585938-22.839843 57.957031-22.839843h39.09375v-35.648438l49.953126-35.679688c3.9375-2.8125 6.277343-7.359374 6.277343-12.203124 0-4.847657-2.339843-9.394532-6.277343-12.207032l-50.554688-36.109375c-3.953125-26.570312-26.917969-47.019531-54.566406-47.019531h-192.796875c-30.421875 0-55.167969 24.746094-55.167969 55.164062v192.804688c0 30.417969 24.746094 55.164062 55.167969 55.164062h123.703125zm0 0"></path>
										<path d="m151.5625 174.21875c9.257812-9.605469 15.542969-22.078125 17.382812-35.941406h-34.761718c1.839844 13.863281 8.128906 26.335937 17.378906 35.941406zm0 0"></path>
									</svg>
								</span>
								Translate
							</a>
						</li>
						<li>
							<a
								className="flex p-2 place-items-center hover:text-blue-700"
								href="https://t.me/dotOSchannel"
								rel="noreferrer"
								target="_blank"
							>
								<span>
									<svg
										className="mx-2 place-self-center"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="white"
										xmlns="https://www.w3.org/2000/svg"
									>
										<path
											d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
											fill="gray"
										></path>
										<path
											d="M6.53334 11.6667C6.27414 11.6667 6.31821 11.5688 6.22881 11.322L5.46667 8.81384L11.3333 5.33337"
											fill="#fff"
										></path>
										<path
											d="M6.53333 11.6666C6.73333 11.6666 6.82166 11.5751 6.93332 11.4666L7.99999 10.4294L6.66946 9.62708"
											fill="#fff"
										></path>
										<path
											d="M6.66932 9.62735L9.89332 12.0093C10.2613 12.2123 10.5267 12.1072 10.6184 11.6678L11.9307 5.48355C12.0651 4.94488 11.7254 4.70048 11.3734 4.86028L3.66739 7.83168C3.14139 8.04268 3.14452 8.33615 3.57152 8.46688L5.54905 9.08415L10.1273 6.19581C10.3434 6.06475 10.5418 6.13515 10.379 6.27968"
											fill="#fff"
										></path>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="10.672"
												y1="2.672"
												x2="6.672"
												y2="12"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="white"></stop>
												<stop offset="1" stopColor="white"></stop>
											</linearGradient>
										</defs>
									</svg>
								</span>
								Telegram Channel
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p
				className="
			text-base
			lg:text-xl
			md:text-xl
			text-gray-500
			mx-4
			mt-4
			flex flex-row
		"
			>
				Made with
				<svg
					className="mx-1 mt-1 heart"
					width="16"
					height="16"
					viewBox="0 0 22 20"
					fill="none"
					xmlns="https://www.w3.org/2000/svg"
				>
					<path
						d="M21.4355 4.2008C21.0952 3.41277 20.6045 2.69866 19.9908 2.09846C19.3767 1.49646 18.6526 1.01806 17.858 0.689276C17.034 0.346993 16.1503 0.171792 15.258 0.173846C14.0063 0.173846 12.785 0.516619 11.7236 1.16408C11.4697 1.31896 11.2285 1.48908 11 1.67443C10.7715 1.48908 10.5303 1.31896 10.2764 1.16408C9.21504 0.516619 7.99375 0.173846 6.74199 0.173846C5.84062 0.173846 4.96719 0.346502 4.14199 0.689276C3.34473 1.01935 2.62617 1.49416 2.00918 2.09846C1.39472 2.69798 0.90387 3.41226 0.564453 4.2008C0.211523 5.02092 0.03125 5.89182 0.03125 6.7881C0.03125 7.63361 0.203906 8.51467 0.54668 9.41096C0.833594 10.16 1.24492 10.9369 1.77051 11.7215C2.60332 12.9631 3.74844 14.258 5.17031 15.5707C7.52656 17.7467 9.85996 19.2498 9.95898 19.3108L10.5607 19.6967C10.8273 19.8668 11.1701 19.8668 11.4367 19.6967L12.0385 19.3108C12.1375 19.2473 14.4684 17.7467 16.8271 15.5707C18.249 14.258 19.3941 12.9631 20.227 11.7215C20.7525 10.9369 21.1664 10.16 21.4508 9.41096C21.7936 8.51467 21.9662 7.63361 21.9662 6.7881C21.9688 5.89182 21.7885 5.02092 21.4355 4.2008V4.2008Z"
						fill="#FF0000"
					/>
				</svg>
				by
				<a
					className="mx-1 text-blue-500"
					href="https://instagram.com/thegeekflux"
					target="_blank"
				>
					Manish Bajpai
				</a>
				&
				<a
					className="mx-1 text-blue-500"
					href="https://github.com/ririxidev"
					target="_blank"
				>
					ririxi
				</a>
			</p>
			<p
				className="
			text-base
			lg:text-xm
			md:text-xm
			text-gray-500
			mx-4
			mt-4
			flex flex-row
		"
			>
				© dotOS 2017-{new Date().getFullYear()} All Rights Reserved.&nbsp;
				<span>
					Powered by
					<a
						className="text-base font-bold hover:text-blue-500"
						href="https://metal.equinix.com/"
						target="_blank"
					>
						{" "}
						Equinix metal
					</a>
					.
				</span>
			</p>
		</footer>
	</>
);

export default FooterLayout;

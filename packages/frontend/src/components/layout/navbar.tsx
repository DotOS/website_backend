import Link from "next/link";
import Script from "next/script";

const NavbarLayout = () => (
	<>
		<nav className="p-4 lg:mx-20 md:p-4 md:mx-5" id="myTopnav">
			<div className="logo justify-between md:justify-between flex flex-row">
				<span
					id="logo"
					className="
				place-self-cener
				hover:text-gray-500
				text-xl text-blue-500
				md:pl-0
				lg:pl-0
			"
				>
					<Link href="/">#droidontime</Link>
				</span>

				<button
					id="hamburgerbtn"
					className="menu lg:hidden absolute md:right-8 right-4"
					aria-label="Dropdown menu"
				>
					<svg
						width="34"
						height="30"
						viewBox="0 0 57 57"
						fill="none"
						xmlns="https://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.55005 19.95C8.55005 19.1941 8.85032 18.4692 9.38479 17.9348C9.91927 17.4003 10.6442 17.1 11.4 17.1H45.6001C46.3559 17.1 47.0808 17.4003 47.6153 17.9348C48.1498 18.4692 48.4501 19.1941 48.4501 19.95C48.4501 20.7059 48.1498 21.4308 47.6153 21.9653C47.0808 22.4997 46.3559 22.8 45.6001 22.8H11.4C10.6442 22.8 9.91927 22.4997 9.38479 21.9653C8.85032 21.4308 8.55005 20.7059 8.55005 19.95Z"
							fill="#808080"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8.55005 37.05C8.55005 36.2941 8.85032 35.5692 9.38479 35.0348C9.91927 34.5003 10.6442 34.2 11.4 34.2H45.6001C46.3559 34.2 47.0808 34.5003 47.6153 35.0348C48.1498 35.5692 48.4501 36.2941 48.4501 37.05C48.4501 37.8059 48.1498 38.5308 47.6153 39.0653C47.0808 39.5997 46.3559 39.9 45.6001 39.9H11.4C10.6442 39.9 9.91927 39.5997 9.38479 39.0653C8.85032 38.5308 8.55005 37.8059 8.55005 37.05Z"
							fill="#808080"
						/>
					</svg>
				</button>
			</div>
			<div className="nav-links z-10 hidden md:hidden lg:flex" id="mobileMenu">
				<ul
					className="
				font-normal
				hover:text-blue-700
				text-gray-600 text-l
				place-self-center
				p-2
			"
				>
					<a className="p-2 inline-flex" href="https://blog.droidontime.com">
						<svg
							className="place-self-center mx-2 hover:fill-current"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="https://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5 13H3V11C4.11 11 5 11.89 5 13ZM3 3V4C5.38695 4 7.67613 4.94821 9.36396 6.63604C11.0518 8.32387 12 10.6131 12 13H13C13 7.48 8.52 3 3 3ZM3 7V8C5.75 8 8 10.25 8 13H9C9 9.69 6.31 7 3 7Z"
								fill="#808080"
							/>
						</svg>
						Blog
					</a>
				</ul>
				<ul
					className="
				font-normal
				hover:text-blue-700
				text-gray-600 text-l
				place-self-center
				p-2
			"
				>
					<a className="p-2 inline-flex" href="https://t.me/dotOSchannel">
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
						Telegram Channel
					</a>
				</ul>
				<ul
					className="
				font-normal
				hover:text-blue-700
				text-gray-600 text-l
				place-self-center
				p-2
			"
				>
					<Link href="/#team">
						<a className="p-2 inline-flex">
							<svg
								className="place-self-center mx-2 hover:fill-current"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="https://www.w3.org/2000/svg"
							>
								<path
									d="M12.8782 10.9359C12.4871 10.5445 12.0301 10.2251 11.5282 9.99219C12.236 9.41875 12.6875 8.54375 12.6875 7.5625C12.6875 5.83125 11.2438 4.41094 9.51254 4.4375C7.80785 4.46406 6.43441 5.85313 6.43441 7.5625C6.43441 8.54375 6.88754 9.41875 7.59379 9.99219C7.09177 10.2249 6.63476 10.5444 6.24379 10.9359C5.39066 11.7906 4.90629 12.9187 4.87504 14.1219C4.87462 14.1386 4.87755 14.1551 4.88364 14.1707C4.88974 14.1862 4.89888 14.2004 4.91053 14.2123C4.92218 14.2242 4.9361 14.2337 4.95147 14.2402C4.96684 14.2467 4.98336 14.25 5.00004 14.25H5.87504C5.94223 14.25 5.99848 14.1969 6.00004 14.1297C6.02973 13.2234 6.39691 12.375 7.04223 11.7312C7.37245 11.3993 7.76523 11.1361 8.19784 10.9569C8.63045 10.7778 9.0943 10.6862 9.56254 10.6875C10.5141 10.6875 11.4094 11.0578 12.0829 11.7312C12.7266 12.375 13.0938 13.2234 13.125 14.1297C13.1266 14.1969 13.1829 14.25 13.25 14.25H14.125C14.1417 14.25 14.1582 14.2467 14.1736 14.2402C14.189 14.2337 14.2029 14.2242 14.2146 14.2123C14.2262 14.2004 14.2353 14.1862 14.2414 14.1707C14.2475 14.1551 14.2505 14.1386 14.25 14.1219C14.2188 12.9187 13.7344 11.7906 12.8782 10.9359ZM9.56254 9.5625C9.02816 9.5625 8.52504 9.35469 8.14848 8.97656C7.9595 8.78907 7.81022 8.56544 7.70955 8.319C7.60888 8.07256 7.55888 7.80837 7.56254 7.54219C7.56723 7.02969 7.77191 6.53438 8.12973 6.16719C8.50473 5.78281 9.00629 5.56875 9.54223 5.5625C10.0719 5.55781 10.586 5.76406 10.9641 6.13438C11.3516 6.51406 11.5641 7.02188 11.5641 7.5625C11.5641 8.09688 11.3563 8.59844 10.9782 8.97656C10.7927 9.16296 10.572 9.31072 10.329 9.4113C10.086 9.51187 9.82552 9.56327 9.56254 9.5625ZM5.64848 7.975C5.63441 7.83906 5.6266 7.70156 5.6266 7.5625C5.6266 7.31406 5.65004 7.07188 5.69379 6.83594C5.70473 6.77969 5.67504 6.72188 5.62348 6.69844C5.41098 6.60313 5.21566 6.47188 5.04691 6.30625C4.84807 6.11345 4.6916 5.88132 4.58748 5.62466C4.48337 5.36801 4.4339 5.09247 4.44223 4.81563C4.45629 4.31406 4.65785 3.8375 5.00941 3.47813C5.39535 3.08281 5.9141 2.86719 6.46566 2.87344C6.9641 2.87813 7.44535 3.07031 7.80941 3.41094C7.93285 3.52656 8.0391 3.65469 8.12816 3.79219C8.15941 3.84063 8.22035 3.86094 8.27348 3.84219C8.54848 3.74688 8.8391 3.67969 9.13754 3.64844C9.22504 3.63906 9.27504 3.54531 9.23598 3.46719C8.72816 2.4625 7.69066 1.76875 6.49066 1.75C4.75785 1.72344 3.3141 3.14375 3.3141 4.87344C3.3141 5.85469 3.76566 6.72969 4.47348 7.30313C3.9766 7.53281 3.51879 7.85 3.12191 8.24688C2.26566 9.10156 1.78129 10.2297 1.75004 11.4344C1.74962 11.4511 1.75255 11.4676 1.75864 11.4832C1.76474 11.4987 1.77388 11.5129 1.78553 11.5248C1.79718 11.5367 1.8111 11.5462 1.82647 11.5527C1.84184 11.5592 1.85836 11.5625 1.87504 11.5625H2.7516C2.81879 11.5625 2.87504 11.5094 2.8766 11.4422C2.90629 10.5359 3.27348 9.6875 3.91879 9.04375C4.37816 8.58438 4.94066 8.26563 5.55473 8.11094C5.61566 8.09531 5.65629 8.0375 5.64848 7.975V7.975Z"
									fill="#808080"
								/>
							</svg>
							Team
						</a>
					</Link>
				</ul>
				<ul
					className="
				font-normal
				hover:text-blue-700
				text-gray-600 text-l
				place-self-center
				p-2
			"
				>
					<Link href="/donate">
						<a className="p-2 inline-flex">
							<svg
								className="place-self-center mx-2 hover:fill-current"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="https://www.w3.org/2000/svg"
							>
								<path
									d="M11.4998 10.2575C11.4998 7.95 9.60984 7.687 8.09134 7.476C6.43634 7.246 5.49984 7.046 5.49984 5.621C5.49984 4.425 6.75334 4 7.82684 4C8.36181 3.98272 8.89323 4.09285 9.37728 4.32131C9.86133 4.54977 10.2841 4.89002 10.6108 5.314L11.3888 4.686C11.039 4.23608 10.6036 3.85976 10.1078 3.57865C9.61203 3.29755 9.06556 3.11721 8.49984 3.048V1.5H7.49984V3.011C5.69234 3.121 4.49984 4.141 4.49984 5.621C4.49984 7.986 6.41484 8.2525 7.95334 8.466C9.57984 8.6925 10.4998 8.887 10.4998 10.2575C10.4998 11.7735 8.93334 12 7.99984 12C6.28484 12 5.56084 11.518 4.88884 10.686L4.11084 11.314C4.50722 11.8363 5.01989 12.2591 5.60817 12.5487C6.19645 12.8384 6.84414 12.9869 7.49984 12.9825V14.5H8.49984V12.9775C10.3628 12.8255 11.4998 11.814 11.4998 10.2575V10.2575Z"
									fill="#808080"
								/>
							</svg>
							Donate
						</a>
					</Link>
				</ul>
				<ul
					className="
				font-normal
				hover:text-blue-700
				text-gray-600 text-l
				place-self-center
				p-2
			"
				>
					<Link href="/stats">
						<a className="p-2 inline-flex">
							<svg
								className="place-self-center mx-2 hover:fill-current"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="https://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1.143 16h13.714c.629 0 1.143-.514 1.143-1.143V1.143C16 .514 15.486 0 14.857 0H1.143C.514 0 0 .514 0 1.143v13.714C0 15.486.514 16 1.143 16zm5.714-3.429c0 .629.514 1.143 1.143 1.143s1.143-.514 1.143-1.143V3.43c0-.629-.514-1.143-1.143-1.143S6.857 2.8 6.857 3.429v9.142zm-4.571 0c0 .629.514 1.143 1.143 1.143.628 0 1.142-.514 1.142-1.143V6.857c0-.628-.514-1.143-1.142-1.143-.629 0-1.143.515-1.143 1.143v5.714zm10.285 1.143a1.146 1.146 0 01-1.143-1.143v-2.285c0-.629.515-1.143 1.143-1.143.629 0 1.143.514 1.143 1.143v2.286c0 .628-.514 1.142-1.143 1.142z"
									fill="gray"
								></path>
							</svg>
							Stats
						</a>
					</Link>
				</ul>

				<ul
					className="
				text-center
				mx-4
				font-normal
				bg-blue-600
				hover:bg-blue-500
				text-gray-100
				rounded-md
				px-4
				text-l
				place-self-center
				p-2
			"
				>
					<Link href="/devices">
						<a className="devices">Download</a>
					</Link>
				</ul>
			</div>
		</nav>
		<Script src="/assets/js/navbar.js" />
	</>
);

export default NavbarLayout;
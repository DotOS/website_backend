import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	divider: Contributors;
};

const Divider = ({ children, divider }: Props) => (
	<div className="flex flex-col items-center justify-center">
		<div className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md mb-3 divide-y divide-green-500">
			<p>{divider.name}</p>
		</div>
		<p className="text-base italic gap-y-6 mb-6">{divider.subtitle}</p>
		{children}
	</div>
);

export default Divider;

import Link from 'next/link';

const Header = ({ title, linkHref, linkTitle }) => {
	return (
		<div className="p-4 flex items-center justify-between">
			<h1 className="text-2xl font-semibold border p-2 bg-indigo-400 text-white rounded-md">
				{title}
			</h1>
			{linkHref && linkTitle ? (
				<Link
					href={linkHref}
					className="border p-2 bg-indigo-400 text-white rounded-md"
				>
					{linkTitle}
				</Link>
			) : null}
		</div>
	);
};

export default Header;

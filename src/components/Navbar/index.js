import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
	return (
		<header className="bg-indigo-400">
			<div className="flex justify-between p-4 md:flex-row gap-3 flex-col ">
				<Link href="/" className="font-bold text-2xl text-white">
					Axel Anime List
				</Link>
				<InputSearch />
			</div>
		</header>
	);
};

export default Navbar;

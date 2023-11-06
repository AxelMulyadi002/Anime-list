'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useEffect } from 'react';

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	useEffect(() => {
		document.addEventListener('keydown', detectKeyDown, true);
	}, []);

	const handleSearch = (event) => {
		event.preventDefault();
		const keyword = searchRef.current.value;
		router.push(`/search/${keyword}`);
		console.log(e.key);
	};

	return (
		<div className="relative">
			<input
				placeholder="Cari Anime"
				className="p-2 rounded-md w-full"
				ref={searchRef}
			/>

			<button className="absolute top-2 end-2" onClick={handleSearch}>
				<MagnifyingGlass size={24} />
			</button>
		</div>
	);
};

export default InputSearch;

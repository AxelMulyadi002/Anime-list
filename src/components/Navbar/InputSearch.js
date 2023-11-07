'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (event) => {
		event.preventDefault();
		const keyword = searchRef.current.value;
		router.push(`/search/${keyword}`);
		searchRef.current.value = '';
	};

	return (
		<div className="relative">
			<form onSubmit={handleSearch}>
				<input
					placeholder="Cari Anime"
					className="p-2 rounded-md w-full"
					ref={searchRef}
				/>

				<button className="absolute top-2 end-2" type="submit">
					<MagnifyingGlass size={24} />
				</button>
			</form>
		</div>
	);
};

export default InputSearch;

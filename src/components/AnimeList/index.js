import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-4 sm:grid-cols-3 px-4">
			{api.data.map((anime) => {
				return (
					<div
						key={anime.mal_id}
						className="cursor-pointer hover:transition-all hover:scale-105 hover:ease-in-out hover:duration-200"
					>
						<Link href={`/${anime.mal_id}`}>
							<Image
								src={anime.images.webp.image_url}
								alt="gambar"
								width={350}
								height={350}
								className="w-full max-h-64 object-cover"
							/>
							<h3 className="font-bold text-md p-4 md:text-xl text-center">
								{anime.title}
							</h3>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default AnimeList;

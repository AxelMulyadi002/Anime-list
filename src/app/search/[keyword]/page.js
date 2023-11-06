import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

const Home = async ({ params }) => {
	const keyword = decodeURIComponent(params.keyword);
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
	);
	const searchAnime = await response.json();

	return (
		<>
			<section>
				<Header title={`Pencarian untuk ${keyword}`} linkHref="" linkTitle="" />
				<AnimeList api={searchAnime} />
			</section>
		</>
	);
};

export default Home;

import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

import { CardsContainer } from "./styles";

export type Anime = {
  attributes: {
    canonicalTitle: string;
    description: string;
    posterImage: { original: string };
  };
};

const VISIBLE_PAGES = 6;
const CARDS_PER_PAGE = 4;

function App() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const totalCards = useRef<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=${CARDS_PER_PAGE}&page[offset]=${
        (currentPage - 1) * 4
      }`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        totalCards.current = res.meta.count;
        setAnimes(res.data);
      });
  }, [currentPage]);

  return (
    <>
      <CardsContainer>
        {animes.map((ani) => {
          return (
            <Card
              image={ani.attributes.posterImage?.original}
              title={ani.attributes.canonicalTitle}
              description={ani.attributes.description}
            />
          );
        })}
      </CardsContainer>
      <Pagination
        totalPages={Math.ceil(totalCards.current / VISIBLE_PAGES)}
        currentPage={currentPage}
        visiblePages={VISIBLE_PAGES}
        change={(newPage) => {
          setCurrentPage(newPage);
        }}
      />
    </>
  );
}

export default App;

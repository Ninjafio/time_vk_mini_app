import React from "react";

import FilmCard from "../filmCard/FilmCard";
import { $fetchedFilms, $searchByTxt, $selectedSearchFilm } from "../../store/ModalStates";
import { useUnit } from "effector-react";

const SearchList: React.FC = () => {

  
  const fetchedFilm = useUnit($fetchedFilms);
  const searchByTxt = useUnit($searchByTxt);
  const selectedSearchFilm = useUnit($selectedSearchFilm);

  const filteredFetchedFilm = fetchedFilm.filter(film => {
    return film.title.toLowerCase().includes(searchByTxt.toLowerCase());
  });

  return (
    <div>
        {filteredFetchedFilm.map((film) => (
          <FilmCard onClick={() => selectedSearchFilm.push(film)} key={film.id} film={film} />
        ))}
    </div>
  )
};

export default SearchList;

import React from "react";

import FilmCard from "../filmCard/FilmCard";
import { handleCardClick } from "../../App";
import { $fetchedFilms } from "../../store/ModalStates";
import { useUnit } from "effector-react";

const FilmList: React.FC = () => {

  
  const fetchedFilm = useUnit($fetchedFilms);

  return (
    <div>
        {fetchedFilm.map((film) => (
          <FilmCard onClick={() => handleCardClick(film)} key={film.id} film={film} />
        ))}
    </div>
  )
};

export default FilmList;

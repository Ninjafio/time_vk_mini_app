import React from "react";

import { handleCardClick } from "../../App";
import { $selectedSearchFilm } from "../../store/ModalStates";
import { useUnit } from "effector-react";
import SelectedSearchFilmCard from "../selectedSearchFilmCard/SelectedSearchFilmCard";

const FilmList: React.FC = () => {

  
  const selectedSearchFilm = useUnit($selectedSearchFilm);

  return (
    <div>
        {selectedSearchFilm.map((film, index) => (
          <SelectedSearchFilmCard onClick={() => 0} key={index} film={film} />
        ))}
    </div>
  )
};

export default FilmList;

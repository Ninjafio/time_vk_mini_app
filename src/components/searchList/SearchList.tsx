import React from "react";

import FilmCard from "../filmCard/FilmCard";
import {
  $fetchedFilms,
  $isSearchByTag,
  $searchByTag1,
  $searchByTag2,
  $searchByTxt,
  $selectedSearchFilm,
  setActiveModal,
} from "../../store/ModalStates";
import { useUnit } from "effector-react";
import { handleCardClick } from "../../App";
import { IFilm } from "../../types/films";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

const SearchList: React.FC = () => {
  const routeNavigator = useRouteNavigator();
  const fetchedFilm = useUnit($fetchedFilms);
  const searchByTxt = useUnit($searchByTxt);
  const selectedSearchFilm = useUnit($selectedSearchFilm);
  const isSearchByTag = useUnit($isSearchByTag);
  const searchByTag1 = useUnit($searchByTag1);
  const searchByTag2 = useUnit($searchByTag2);

  const filteredFetchedFilmByTag = fetchedFilm.filter((film) => {
    return film.genre.split(" ").includes(searchByTag1 || searchByTag2);
  });
  const filteredFetchedFilm = fetchedFilm.filter((film) => {
    return film.title.toLowerCase().includes(searchByTxt.toLowerCase());
  });

  const handleCardClickByTxt = (film: IFilm) => {
    if (selectedSearchFilm.find((f) => f.id === film.id)) {
    } else {
      selectedSearchFilm.push(film);
    }
    routeNavigator.back();
    setActiveModal("create_list_modal_page");
    // если такого фильма нет в списке, то добавляем его
  };

  return (
    <div>
      {isSearchByTag
        ? filteredFetchedFilmByTag.map((film) => (
            <FilmCard
              onClick={() => handleCardClick(film)}
              key={film.id}
              film={film}
            />
          ))
        : filteredFetchedFilm.map((film) => (
            <FilmCard
              onClick={() => handleCardClickByTxt(film)}
              key={film.id}
              film={film}
            />
          ))}
    </div>
  );
};

export default SearchList;

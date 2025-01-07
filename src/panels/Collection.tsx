import { FC, useEffect } from "react";
import {
  Card,
  CardGrid,
  Group,
  Image,
  NavIdProps,
  Panel,
  Spacing,
  Tabbar,
  TabbarItem,
  Text,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { RouterLink, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { $collection, $collectionTitle, $fetchedFilms, setIsCollection } from "../store/ModalStates";
import { useUnit } from "effector-react";
import SelectedSearchFilmCard from "../components/selectedSearchFilmCard/SelectedSearchFilmCard";
import { handleCardClick } from "../App";

export interface CaseIdProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Collection: FC<CaseIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const fetchedFilm = useUnit($fetchedFilms);
  const collection = useUnit($collection);
  const collectionTitle = useUnit($collectionTitle);
  
  const collectionList = fetchedFilm.filter((film) => {
    return (
      film.title === collection.split("=")[0] ||
      film.title === collection.split("=")[1] ||
      film.title === collection.split("=")[2] ||
      film.title === collection.split("=")[3] ||
      film.title === collection.split("=")[4] ||
      film.title === collection.split("=")[5]
    );
  });
  const handleClickBack = () => {
    setIsCollection(false);
    routeNavigator.back();
  }
  return (
    <Panel id={id} style={{ marginTop: 20 }}>
      <Tabbar
        style={{
          zIndex: 20,
          top: 0,
          flexDirection: "column",
          display: "flex",
          msFlexDirection: "row",
        }}
        plain={true}
      >
        <Spacing size={16} />
        <div style={{ display: "flex", width: "90%" }}>
          <Text
            style={{
              margin: "0 0 0 30px",
              fontSize: 17,
              color: "#2F37FF",
              cursor: "pointer",
            }}
            onClick={() => handleClickBack()}
          >
            Назад
          </Text>
          <Text
            style={{
              margin: "0 auto",
              fontSize: 20,
              fontWeight: "600",
              justifySelf: "center",
            }}
          >
            {collectionTitle}
          </Text>
        </div>
      </Tabbar>
      <CardGrid size="l">
        {collectionList.map((film) => (
          <SelectedSearchFilmCard
            onClick={() => handleCardClick(film)}
            key={film.id}
            film={film}
          />
        ))}
      </CardGrid>
    </Panel>
  );
};

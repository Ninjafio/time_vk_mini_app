import { FC, useEffect } from "react";
import {
  Panel,
  Group,
  NavIdProps,
  Search,
  Tabbar,
  TabbarItem,
  Text,
  Spacing,
  ButtonGroup,
  Button,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { RouterLink, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import React from "react";
import {
  Icon16BookmarkOutline,
  Icon28MessageOutline,
  Icon28NewsfeedOutline,
} from "@vkontakte/icons";
import FilmList from "../components/filmList/FilmList";
import { loadFilmsFx, setSearchByTag1, setSearchByTag2, setSearchByTagCounter } from "../store/ModalStates";
import { TagButton } from "../components/tagButton/TagButton";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const SearchPanel: FC<HomeProps> = ({ id }) => {
  
  const routeNavigator = useRouteNavigator();
  useEffect(() => {
    setSearchByTag1("");
    setSearchByTag2("");
    setSearchByTagCounter(0);
    console.log("Параметры поиска очистились")
  }, [])
  return (
    <Panel id={id} style={{ marginTop: 70 }}>
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
          
      <Text style={{ margin: "0 0 0 30px", fontSize: 17, color: "#2F37FF", cursor: "pointer" }} onClick={() => routeNavigator.back()}>
        Назад
      </Text>
        <Text style={{ margin: "0 auto", fontSize: 20, fontWeight: "600", justifySelf: "center" }}>
          Поиск
        </Text>
        </div>
      </Tabbar>
      <Group separator="hide" style={{ marginTop: 30 }}>
        <ButtonGroup style={{ marginLeft: 16, display: "flex", flexWrap: "wrap", gap: 4 }}>
          <TagButton children="#комедия" />
          <TagButton children="#драма" />
          <TagButton children="#фантастика" />
          <TagButton children="#триллер" />
          <TagButton children="#боевик" />
          <TagButton children="#романтика" />
          <TagButton children="#детектив" />
          <TagButton children="#мультфильм" />
          <TagButton children="#ужасы" />
        </ButtonGroup>
      </Group>
    </Panel>
  );
};

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
import { loadFilmsFx } from "../store/ModalStates";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id }) => {
  //const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  const [search, setSearch] = React.useState("");

  const onChange = (e: any) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    loadFilmsFx();
  }, []);

  return (
    <Panel id={id} style={{ marginTop: 70 }}>
      {/* {fetchedUser && (
      <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
        <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
          {`${first_name} ${last_name}`} 
        </Cell>
      </Group>
    )} */}
      <Tabbar
        style={{
          position: "fixed",
          maxWidth: "100%",
          zIndex: 20,
          top: 0,
          flexDirection: "column",
          height: 100,
        }}
        plain={true}
      >
        <Spacing size={16} />
        <Text
          style={{
            margin: "0 auto",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Фильм вслепую
        </Text>
        <Spacing size={16} />
        <RouterLink to="/searchpanel">
        <Search
          value={search}
          after={null}
          placeholder="Поиск по тегам"
        />
        </RouterLink>
      </Tabbar>
      <Group separator="hide" style={{ paddingBottom: 100 }}>
        <FilmList />
      </Group>
      <Tabbar
        style={{ position: "fixed", margin: "10px 0", bottom: -20, height: 70, display: "flex", justifyContent: "space-around" }}
      >
        <RouterLink to="/">
        <TabbarItem
          selected={true}
          style={{ color: "#2F37FF" }}
          onClick={() => 0}
          text="Фильм вслепую"
        >
          <Icon28NewsfeedOutline style={{ color: "#2F37FF" }} />
        </TabbarItem>
        </RouterLink>
        <RouterLink to="/list">
          <TabbarItem
            selected={false}
            text="Списки"
            onClick={() => routeNavigator.replace("/list")}
          >
            <Icon16BookmarkOutline style={{ width: 28, height: 30 }} />
          </TabbarItem>
        </RouterLink>
        <RouterLink to="/home">
        <TabbarItem selected={false} onClick={() => 0} text="Подборки">
          <Icon28MessageOutline />
        </TabbarItem>
        </RouterLink>
      </Tabbar>
    </Panel>
  );
};

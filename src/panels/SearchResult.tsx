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
import {
  Icon28NewsfeedOutline,
  Icon16BookmarkOutline,
  Icon28MessageOutline,
} from "@vkontakte/icons";
import { AddCircle24 } from "../img";
import { handleCreateListClick } from "../App";
import SearchList from "../components/searchList/SearchList";

export interface CaseIdProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const SearchResult: FC<CaseIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

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
          
      <Text style={{ margin: "0 0 0 30px", fontSize: 17, color: "#2F37FF", cursor: "pointer" }} onClick={() => routeNavigator.back()}>
        Назад
      </Text>
        <Text style={{ margin: "0 auto", fontSize: 20, fontWeight: "600", justifySelf: "center" }}>
          Результаты поиска
        </Text>
        </div>
      </Tabbar>

      <Group separator="hide" style={{ paddingBottom: 100 }}>
        <SearchList />
      </Group>

      <Tabbar
        style={{
          position: "fixed",
          margin: "10px 0",
          bottom: -20,
          height: 70,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <RouterLink to="/">
          <TabbarItem selected={false} text="Фильм вслепую">
            <Icon28NewsfeedOutline style={{ color: "#99A2AD" }} />
          </TabbarItem>
        </RouterLink>
        <RouterLink to="/list">
          <TabbarItem
            selected={true}
            style={{ color: "#2F37FF" }}
            onClick={() => 0}
            text="Списки"
          >
            <Icon16BookmarkOutline
              style={{ width: 28, height: 30, color: "#2F37FF" }}
            />
          </TabbarItem>
        </RouterLink>
        <RouterLink to="/">
          <TabbarItem selected={false} onClick={() => 0} text="Подборки">
            <Icon28MessageOutline />
          </TabbarItem>
        </RouterLink>
      </Tabbar>
    </Panel>
  );
};

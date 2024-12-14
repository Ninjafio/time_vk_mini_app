import { FC, useEffect } from "react";
import {
  Card,
  CardGrid,
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

export interface CaseIdProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const List: FC<CaseIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  useEffect(() => {}, []);

  return (
    <Panel id={id} style={{ marginTop: 20 }}>
      <Tabbar
        style={{
          position: "fixed",
          maxWidth: "100%",
          zIndex: 20,
          top: 0,
          flexDirection: "column",
        }}
        plain={true}
      >
        <Spacing size={16} />
        <Text style={{ margin: "0 auto", fontSize: 20, fontWeight: "600" }}>
          Списки
        </Text>
      </Tabbar>
      <CardGrid size="l">
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 45,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 14,
            fontWeight: "600",
            height: 36,
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() => handleCreateListClick()}
        >
          <Image src={AddCircle24} noBorder style={{ width: 24, height: 24 }} />
          Создать
        </Card>
      </CardGrid>

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

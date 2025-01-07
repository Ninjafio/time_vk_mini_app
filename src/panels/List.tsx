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
import { AddCircle24, Collection, Home } from "../img";
import { handleCreateListClick } from "../App";
import ListsList from "../components/listsList/ListsList";
import { $filmUser } from "../store/ModalStates";
import { useUnit } from "effector-react";

export interface CaseIdProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const List: FC<CaseIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const filmUser = useUnit($filmUser);

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
      <Group>
        <ListsList />
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
            <Image noBorder src={Home} style={{ width: 28, height: 30 }} />
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
        <RouterLink to="/collections">
          <TabbarItem selected={false} onClick={() => 0} text="Подборки">
            <Image
              noBorder
              src={Collection}
              style={{ width: 28, height: 30 }}
            />
          </TabbarItem>
        </RouterLink>
      </Tabbar>
    </Panel>
  );
};

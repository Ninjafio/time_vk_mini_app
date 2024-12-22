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
import {
  $isSearchByTag,
  $searchByTagCounter,
  setIsSearchByTag,
  setSearchByTag1,
  setSearchByTag2,
  setSearchByTagCounter,
} from "../store/ModalStates";
import { TagButton } from "../components/tagButton/TagButton";
import { useUnit } from "effector-react";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const SearchPanel: FC<HomeProps> = ({ id }) => {
  const searchByTagCounter = useUnit($searchByTagCounter);
  const isSearchByTag = useUnit($isSearchByTag);
  const routeNavigator = useRouteNavigator();

  useEffect(() => {
    setSearchByTag1("");
    setSearchByTag2("");
    setSearchByTagCounter(0);
  }, []);

  const handleOnClick = () => {
    setIsSearchByTag(true);
    routeNavigator.push("/searchresult");
  };

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
          <Text
            style={{
              margin: "0 0 0 30px",
              fontSize: 17,
              color: "#2F37FF",
              cursor: "pointer",
            }}
            onClick={() => routeNavigator.back()}
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
            Поиск
          </Text>
        </div>
      </Tabbar>
      <Search after={null} placeholder="Поиск по тегам" disabled />
      <Group separator="hide" style={{ marginTop: 0 }}>
        <Text style={{ marginLeft: 16, marginBottom: 16 }}>
          {searchByTagCounter}/2 выбрано
        </Text>
        <ButtonGroup
          style={{ marginLeft: 16, display: "flex", flexWrap: "wrap", gap: 4 }}
        >
          <TagButton children="комедия" />
          <TagButton children="драма" />
          <TagButton children="фантастика" />
          <TagButton children="триллер" />
          <TagButton children="боевик" />
          <TagButton children="романтика" />
          <TagButton children="детектив" />
          <TagButton children="мультфильм" />
          <TagButton children="ужасы" />
        </ButtonGroup>
      </Group>
      <Group separator="hide">
        <ButtonGroup style={{ marginTop: "40%" }} stretched>
          <Button
            stretched
            size="m"
            style={{ margin: 12, backgroundColor: "#2F37FF" }}
            disabled={searchByTagCounter ? false : true}
            onClick={() => handleOnClick()}
          >
            Найти
          </Button>
        </ButtonGroup>
      </Group>
    </Panel>
  );
};

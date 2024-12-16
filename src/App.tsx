import { useState, useEffect, ReactNode } from "react";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import {
  View,
  SplitLayout,
  SplitCol,
  ScreenSpinner,
  ModalRoot,
  ModalCard,
  Button,
  ButtonGroup,
  Title,
  Text,
  Spacing,
  Image,
  FormLayoutGroup,
  FormItem,
  Input,
} from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { List, Home, SearchResult } from "./panels";
import { DEFAULT_VIEW_PANELS } from "./routes";
import React from "react";
import FilmModalPage from "./components/filmModalPage/FilmModalPage";
import { IFilm } from "./types/films";
import { useUnit } from "effector-react";
import {
  $selectedFilm,
  setSelectedFilm,
  $storeActiveModal,
  setActiveModal,
  $searchByTxt,
  setSearchByTxt,
} from "./store/ModalStates";
import CreateListModalPage from "./components/createListModalPage/CreateListModalPage";
import { RouterLink, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { Cross24 } from "./img";
import { SearchPanel } from "./panels/SearchPanel";

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();
      const routeNavigator = useRouteNavigator();
  const [films, setFilms] = React.useState<
    {
      title: string;
      img: string;
      id: number;
      descr: string;
      year: number;
      tags: string;
      isViewed: boolean;
      lists: string;
      age: number;
      genre: string;
      country: string;
    }[]
  >([]);
  const selectedFilm = useUnit($selectedFilm);
  const activeModal = useUnit($storeActiveModal);
  const search = useUnit($searchByTxt);

  const SEARCH = "search";
  const GUIDE_FIRST = "guide_first";
  const GUIDE_SECOND = "guide_second";
  const GUIDE_THIRD = "guide_third";
  const GUIDE_FOURTH = "guide_fourth";
  const GUIDE_FIFTH = "guide_fifth";

  const [fetchedUser, setUser] = useState<UserInfo | undefined>(); //user данные из vk
  const [filmUser, setFilmUser] = useState<IFilm | undefined>(); //user данные из api
  const [popout, setPopout] = useState<ReactNode | null>(
    <ScreenSpinner size="large" />
  );

  useEffect(() => {
    const userId = fetchedUser?.id;
    fetch(`http://localhost:3001/user/${userId}`, {
      method: "GET",
    })
      .then((responce) => responce.json())
      .then((data) => {
        setFilmUser(data);
      })
      .catch((err) => console.error(err));
  }, []); // проверяем есть ли пользователь

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedFilm(films[0]);
  };
  const handleOnChange = (e: any) => {
    setSearchByTxt(String(e.target.value));
    console.log(search);
  };
  const handleOnClicnkSearch = () => {
    routeNavigator.push("/searchresult")
    setActiveModal("");
  };


  const modal = (
    <ModalRoot activeModal={activeModal}>
      <FilmModalPage
        film={selectedFilm}
        onClose={handleCloseModal}
        id="film_modal_page"
      />
      <CreateListModalPage
        onClose={handleCloseModal}
        id="create_list_modal_page"
      />
      <ModalCard id={SEARCH} style={{ marginTop: "-50vh" }}>
        <Spacing size={10} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level="1" style={{ margin: "0 auto 16px auto" }}>
            Введите название
          </Title>
          <Image
            src={Cross24}
            noBorder
            style={{
              width: 24,
              height: 24,
              cursor: "pointer",
              marginBottom: 20,
            }}
            onClick={() => handleCreateListClick()}
          />
        </div>
        <Spacing size={10} />
        <FormLayoutGroup>
          <FormItem htmlFor="search">
            <Input
              placeholder="Введите..."
              style={{ height: 45 }}
              required
              autoFocus
              onChange={(e) => handleOnChange(e)}
            />
          </FormItem>
        </FormLayoutGroup>
        <ButtonGroup mode="horizontal">
          <Button
            size="l"
            style={{
              backgroundColor: "#2F37FF",
              maxWidth: "92%",
              margin: "0 auto",
            }}
            stretched={true}
            onClick={() => handleOnClicnkSearch()}
          >
            Поиск
          </Button>
        </ButtonGroup>
      </ModalCard>

      <ModalCard id={GUIDE_FIRST} style={{ marginTop: "-50vh" }}>
        <Text weight="2" style={{ marginTop: -10, opacity: 0.5 }}>
          1/5
        </Text>
        <Spacing size={10} />
        <Title level="1" style={{ marginBottom: 16 }}>
          Давай начнем!
        </Title>
        <Text weight="2" style={{ opacity: 0.8 }}>
          «Фильм вслепую» — быстрый способ найти фильм, опираясь на жанры и
          захватывающие элементы
        </Text>
        <Spacing size={10} />
        <ButtonGroup mode="horizontal" gap="m">
          <Button
            onClick={() => setActiveModal("")}
            size="l"
            mode="secondary"
            stretched={true}
          >
            Пропустить
          </Button>
          <Button
            onClick={() => setActiveModal("guide_second")}
            size="l"
            style={{ backgroundColor: "#4A50DF" }}
            stretched={true}
          >
            Далее
          </Button>
        </ButtonGroup>
      </ModalCard>

      <ModalCard
        id={GUIDE_SECOND}
        style={{ marginTop: "-50vh" }}
        preventClose={true}
      >
        <Text weight="2" style={{ marginTop: -10, color: "#A1A1A1" }}>
          2/5
        </Text>
        <Spacing size={10} />
        <Text weight="2">
          Названий нет! Выбирай, что по душе, и нажимай, чтобы узнать подробнее
        </Text>
        <Spacing size={10} />
        <Button
          onClick={() => setActiveModal("guide_third")}
          size="l"
          style={{ backgroundColor: "#4A50DF" }}
        >
          Далее
        </Button>
      </ModalCard>

      <ModalCard
        id={GUIDE_THIRD}
        style={{ marginTop: "-50vh" }}
        preventClose={true}
      >
        <Text weight="2" style={{ marginTop: -10, color: "#A1A1A1" }}>
          3/5
        </Text>
        <Spacing size={10} />
        <Text weight="2">Создавай списки и добавляй в них фильмы</Text>
        <Spacing size={10} />
        <Button
          onClick={() => setActiveModal("guide_fourth")}
          size="l"
          style={{ backgroundColor: "#4A50DF" }}
        >
          Далее
        </Button>
      </ModalCard>

      <ModalCard
        id={GUIDE_FOURTH}
        style={{ marginTop: "-50vh" }}
        preventClose={true}
      >
        <Text weight="2" style={{ marginTop: -10, color: "#A1A1A1" }}>
          4/5
        </Text>
        <Spacing size={10} />
        <Text weight="2">Смотри готовые подборки от разработчиков</Text>
        <Spacing size={10} />
        <Button
          onClick={() => setActiveModal("guide_fifth")}
          size="l"
          style={{ backgroundColor: "#4A50DF" }}
        >
          Далее
        </Button>
      </ModalCard>

      <ModalCard
        id={GUIDE_FIFTH}
        style={{ marginTop: "-50vh" }}
        preventClose={true}
      >
        <Text weight="2" style={{ marginTop: -10, color: "#A1A1A1" }}>
          5/5
        </Text>
        <Spacing size={10} />
        <Title level="1" style={{ marginBottom: 16 }}>
          Приятного просмотра!
        </Title>
        <Text weight="2">Ищи фильмы и делись ими с друзьями</Text>
        <Spacing size={10} />
        <Button
          onClick={() => setActiveModal("")}
          size="l"
          style={{ backgroundColor: "#4A50DF" }}
        >
          Закрыть
        </Button>
      </ModalCard>
    </ModalRoot>
  );

  return (
    <SplitLayout
      popout={popout}
      modal={modal}
      style={{ maxHeight: "100%" }}
    >
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
          <List id="list" />
          <SearchPanel id="searchpanel" />
          <SearchResult id="searchresult" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};


export const handleCardClick = (film: IFilm) => {
  setSelectedFilm(film);
  setActiveModal("film_modal_page");
};

export const handleCreateListClick = () => {
  setActiveModal("create_list_modal_page");
};

export const handleSearchClick = () => {
  setActiveModal("search");
};

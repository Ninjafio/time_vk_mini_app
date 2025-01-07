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
import { AddCircle24, CollectionActive, Home } from "../img";
import ListsList from "../components/listsList/ListsList";
import {
  $collection,
  $fetchedFilms,
  $filmUser,
  setCollection,
  setCollectionTitle,
  setIsCollection,
} from "../store/ModalStates";
import { useUnit } from "effector-react";
import { handleCardClick } from "../App";

export interface CaseIdProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Collections: FC<CaseIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const fetchedFilm = useUnit($fetchedFilms);

  const handleCardClick = (col: string, tit: string) => {
    setCollectionTitle(tit);
    setIsCollection(true);
    routeNavigator.push("/collection");
    setCollection(col);
  };

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
          Подборки
        </Text>
      </Tabbar>
      <CardGrid size="l" style={{paddingBottom: 100}}>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 45,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Мимино=Терминал=Эйс Вентура: розыск домашних животных=Джентельмены=Хэнкок",
              "Вечер со смехом"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[7].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Вечер со смехом</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "А в душе я танцую=Слёзы капали=Достучаться до небес=Собачья жизнь=Землетрясение",
              "Погрустить"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[3].img.split(" ")[1]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Погрустить</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Багровый пик=Паразиты=Синяя бездна=В пасти океана=Чужой: Ромул",
              "Ночь ужасов"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[13].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Ночь ужасов</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "500 дней лета=Виноваты звёзды=Всё закончится на нас=Ла-Ла Ленд=Фокус=Мой любимый враг",
              "Романтичное настроение"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[28].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Романтичное настроение</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Всё везде и сразу=Скала=Без лица=Джон Уик=Майор Гром: Игра",
              "Боевик и экшн"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[41].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Боевик и экшн</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Мираж на льду=Рокки=Живая сталь=Чёрный лебедь=Тоня против всех",
              "Спортивная драма"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[23].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Спортивная драма</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Покровские ворота=Тик-так... БУМ!=На высоте мечты=Вестсайдская история=Величайший шоумен",
              "Мюзиклы"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[53].img.split(" ")[3]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Мюзиклы</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Королева бензоколонки=Старики-разбойники=Весна на Заречной улице=Большая перемена=Покровские ворота",
              "Родом из СССР"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[49].img.split(" ")[0]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Родом из СССР</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Интерстеллар=Прибытие=Эффект бабочки=Ошибка времени=Связь",
              "Вопрос времени"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[54].img.split(" ")[1]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Вопрос времени</Text>
          <Spacing size={12} />
        </Card>
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 13,
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            fontWeight: "600",
            gap: 8,
            cursor: "pointer",
          }}
          onClick={() =>
            handleCardClick(
              "Доктор Дулиттл=Собачья жизнь=Пальма=Остров собак=Бесподобный мистер Фокс",
              "Про животных"
            )
          }
        >
          <Image
            noBorder
            src={fetchedFilm[8].img.split(" ")[1]}
            style={{ width: "100%", height: 145 }}
          />
          <Spacing size={2} />
          <Text style={{ paddingLeft: 16 }}>Про животных</Text>
          <Spacing size={12} />
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
            <Image noBorder src={Home} style={{ width: 28, height: 30 }} />
          </TabbarItem>
        </RouterLink>
        <RouterLink to="/list">
          <TabbarItem selected={false} onClick={() => 0} text="Списки">
            <Icon16BookmarkOutline style={{ width: 28, height: 30 }} />
          </TabbarItem>
        </RouterLink>
        <RouterLink to="/collections">
          <TabbarItem
            selected={true}
            style={{ color: "#2F37FF" }}
            onClick={() => 0}
            text="Подборки"
          >
            <Image
              noBorder
              src={CollectionActive}
              style={{ width: 28, height: 30 }}
            />
          </TabbarItem>
        </RouterLink>
      </Tabbar>
    </Panel>
  );
};

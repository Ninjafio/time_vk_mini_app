import React from "react";
import { Button, ButtonGroup, ModalPage, Spacing, Text, Title } from "@vkontakte/vkui";
import { IFilm } from "../../types/films";

// импорт Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, FreeMode } from "swiper/modules";
import { Image } from "@vkontakte/vkui";
import { MarkExclamation } from "../../img/index";

import "swiper/css";
import "swiper/css/pagination";
import "./FilmModalPage.css";

interface FilmCardProps {
  film: IFilm | null;
  onClose?: () => void;
  id: string;
}

const FilmModalPage: React.FC<FilmCardProps> = ({ film, onClose, id }) => {
  return (
    <ModalPage id={id} settlingHeight={100}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 16,
          alignItems: "center",
        }}
      >
        <Title style={{ alignSelf: "center", marginLeft: 120, fontSize: 21 }}>
          Подробнее
        </Title>
        <Text
          onClick={onClose}
          style={{ color: "#2F37FF", fontWeight: "600", fontSize: 17 }}
        >
          Закрыть
        </Text>
      </div>
      <Spacing size={16} />
      <div style={{ width: 400 }}>
        <Swiper
          modules={[Pagination, A11y, FreeMode]}
          freeMode={true}
          pagination={{ clickable: true }}
          style={{ padding: 16, maxWidth: 430, width: "100%" }}
          spaceBetween={15}
          draggable={true}
          slidesPerView={1}
        >
          <SwiperSlide style={{ maxWidth: 405, width: "100%" }}>
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  (film && film.img.split(" ")[1]) || ""
                })`,
                height: 350,
                width: 400,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: 430,
              width: "100%",
            }}
          >
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  (film && film.img.split(" ")[2]) || ""
                })`,
                height: 350,
                width: 400,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: 430,
              width: "100%",
            }}
          >
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  (film && film.img.split(" ")[3]) || ""
                })`,
                height: 350,
                width: 400,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Spacing size={4} />
      <Text
        style={{
          paddingLeft: 28,
          opacity: 0.5,
          fontWeight: "600",
          fontSize: 12,
        }}
      >
        {film && film.country.replace(/\s/g, " · ") + " · "}
        {film && film.year}
      </Text>
      <Spacing size={4} />
      <Text style={{ paddingLeft: 28, fontWeight: "600", fontSize: 17 }}>
        {film && film.title}
      </Text>
      <Spacing size={4} />
      <Text
        style={{
          paddingLeft: 28,
          paddingRight: 28,
          fontWeight: "400",
          fontSize: 16,
        }}
      >
        {film && film.descr}
      </Text>
      <Spacing size={10} />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          src={MarkExclamation}
          alt="huh"
          style={{ width: 17, height: 17, marginLeft: 28 }}
          noBorder
        />
        <Text
          style={{
            paddingLeft: 8,
            fontWeight: "400",
            fontSize: 16,
            opacity: 0.7,
          }}
        >
          Возрастной рейтинг: {film && film.age + "+"}
        </Text>
      </div>
      <Spacing size={20} />
      <ButtonGroup>
        <Button style={{
          marginLeft: 16,
          backgroundColor: "#2F37FF"
        }}>
          Хочу посмотреть
        </Button>
        <Button mode="outline" style={{
          color: "#2F37FF",
          boxShadow: "inset 0 0 0 1px #2F37FF"
        }}>
          Просмотренно
        </Button>
      </ButtonGroup>
      <Spacing size={20} />
    </ModalPage>
  );
};

export default FilmModalPage;

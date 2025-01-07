import React, { useEffect } from "react";
import { Card, CardGrid, Spacing, Text, Image } from "@vkontakte/vkui";
import { IFilm } from "../../types/films";
import {
  $isCollection,
  $selectedSearchFilm,
  setActiveModal,
} from "../../store/ModalStates";
import { useUnit } from "effector-react";
import { RemoveCircle24 } from "../../img";

interface FilmCardProps {
  film: IFilm;
  onClick: () => void;
}

const SelectedSearchFilmCard: React.FC<FilmCardProps> = ({ film, onClick }) => {
  const selectedSearchFilm = useUnit($selectedSearchFilm);
  const isCollection = useUnit($isCollection);

  const handleDelClick = (film: IFilm) => {
    selectedSearchFilm.splice(selectedSearchFilm.indexOf(film), 1);
    setActiveModal("");
    setTimeout(() => setActiveModal("create_list_modal_page"), 1);
  };

  return (
    <div>
      <CardGrid
        size="l"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 13,
          flexDirection: "row",
          flexWrap: "nowrap",
          marginTop: 12,
          marginLeft: 13,
        }}
      >
        {!isCollection && (
          <Image
            src={RemoveCircle24}
            noBorder
            onClick={() => handleDelClick(film)}
            style={{ width: 24, height: 24, cursor: "pointer" }}
          />
        )}
        {isCollection ? (
          <Card
            mode="shadow"
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 30,
              height: 100,
            }}
            onClick={onClick}
          >
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgb(34, 34, 34) 0%, #000000 100%)",
                borderRadius: 10,
                height: 100,
                overflow: "hidden",
              }}
            >
              <img
                src={film.img.split(" ")[0]}
                alt={film.title}
                className="filmCard__img"
                style={{
                  width: "100%",
                  borderRadius: 10,
                  opacity: 0.5,
                  marginTop: -50,
                }}
              />
            </div>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                color: "#818C99",
                fontSize: 11,
                padding: 10,
                paddingBottom: 25,
              }}
            >
              {film.year}
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                color: "white",
                fontSize: 17,
                padding: 10,
              }}
            >
              {film.title}
            </Text>
          </Card>
        ) : (
          <Card
            mode="shadow"
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: 0,
              maxWidth: 300,
              height: 100,
            }}
            onClick={onClick}
          >
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgb(34, 34, 34) 0%, #000000 100%)",
                borderRadius: 10,
                height: 100,
                overflow: "hidden",
              }}
            >
              <img
                src={film.img.split(" ")[0]}
                alt={film.title}
                className="filmCard__img"
                style={{
                  width: "100%",
                  borderRadius: 10,
                  opacity: 0.5,
                  marginTop: -50,
                }}
              />
            </div>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                color: "#818C99",
                fontSize: 11,
                padding: 10,
                paddingBottom: 25,
              }}
            >
              {film.year}
            </Text>
            <Text
              style={{
                position: "absolute",
                bottom: 0,
                color: "white",
                fontSize: 17,
                padding: 10,
              }}
            >
              {film.title}
            </Text>
          </Card>
        )}
      </CardGrid>
    </div>
  );
};

export default SelectedSearchFilmCard;

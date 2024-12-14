import React from "react";
import { Card, CardGrid, Spacing, Text } from "@vkontakte/vkui";
import { IFilm } from "../../types/films";

interface FilmCardProps {
  film: IFilm;
  onClick: () => void;
}

const FilmCard: React.FC<FilmCardProps> = ({ film, onClick }) => {
  return (
    <div>
      <CardGrid size="l">
        <Card
          mode="shadow"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: 35,
            display: film.isViewed ? "none" : "block",
          }}
          onClick={onClick}
        >
          <img
            src={film.img.split(" ")[0]}
            alt={film.title}
            className="filmCard__img"
            style={{
              width: "100%",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <Spacing size={16} />
          <Text
            weight="2"
            style={{
              marginLeft: 16,
              marginRight: 16,
              opacity: 0.5,
              fontSize: 11,
            }}
          >
            ФИЛЬМ ВСЛЕПУЮ
          </Text>
          <Text
            weight="2"
            style={{ marginLeft: 16, marginRight: 16, fontSize: 17 }}
          >
            {film.tags.replace(/\s/g, ", ")} <br />
            <Spacing size={16} />
            <div style={{lineHeight: 3}}>
            {film.genre.split(" ").map((genre, index) => (
              <span
                style={{
                  backgroundColor: "#2F37FF",
                  marginRight: 5,
                  color: "white",
                  padding: "5px 15px 8px 15px",
                  borderRadius: 10,
                  whiteSpace: "nowrap",
                  marginTop: 5,
                }}
                key={index}
              >
                #{genre}
              </span>
            ))}
              
            </div>
          </Text>
          <Spacing size={20} />
        </Card>
      </CardGrid>
    </div>
  );
};

export default FilmCard;

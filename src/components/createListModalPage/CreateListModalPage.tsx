import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardGrid,
  FormItem,
  FormLayoutGroup,
  Image,
  Input,
  ModalPage,
  Spacing,
  Text,
  Title,
} from "@vkontakte/vkui";
import { IFilm } from "../../types/films";

// импорт Swiper React components

import "swiper/css";
import "swiper/css/pagination";
import { AddCircle24, Cross24 } from "../../img";
import { handleSearchClick } from "../../App";
import { useUnit } from "effector-react";
import { $createListDescr, $createListTitle, setCreateListTitle, setCreateListDescr } from "../../store/ModalStates";

interface FilmCardProps {
  onClose?: () => void;
  id: string;
}

const CreateListModalPage: React.FC<FilmCardProps> = ({ onClose, id }) => {
  const title = useUnit($createListTitle);
  const descr = useUnit($createListDescr);

  const handleOnChangeTitle = (e: any) => {
    setCreateListTitle(String(e.target.value));
  };
  const handleOnChangeDescr = (e: any) => {
    setCreateListDescr(String(e.target.value));
  };

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
        <Image
          onClick={onClose}
          src={Cross24}
          noBorder
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
        <Title style={{ fontSize: 21 }}>Новый список</Title>
        <Text
          onClick={onClose}
          style={{ color: "#2F37FF", fontWeight: "600", fontSize: 17 }}
        >
          Готово
        </Text>
      </div>
      <Spacing size={13} />
      <FormLayoutGroup>
        <FormItem top="Название" htmlFor="title">
          <Input placeholder="Введите..." style={{ height: 45 }} required onChange={(e) => handleOnChangeTitle(e)} defaultValue={title} />
        </FormItem>
        <FormItem top="Описание" htmlFor="descr">
          <Input placeholder="Введите..." style={{ height: 65 }} onChange={(e) => handleOnChangeDescr(e)} defaultValue={descr} />
        </FormItem>
      </FormLayoutGroup>
        <Spacing size={30} />
      <CardGrid>
        <Card
          mode="shadow"
          
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            fontWeight: "600",
            height: 36,
            gap: 8,
            cursor: "pointer",
            width: "100%"
          }}
          onClick={() => handleSearchClick()}
        >
          <Image src={AddCircle24} noBorder style={{ width: 24, height: 24, marginLeft: 15 }} />
          <Text style={{ margin: "0 auto", fontWeight: "600", fontSize: 14 }}>
            Добавить фильм

          </Text>
        </Card>
      </CardGrid>
      <Spacing size={30} />
    </ModalPage>
  );
};

export default CreateListModalPage;

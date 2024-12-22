import { Button } from "@vkontakte/vkui";
import { useState } from "react";
import {
  $searchByTag1,
  $searchByTag2,
  $searchByTagCounter,
  setSearchByTag1,
  setSearchByTag2,
  setSearchByTagCounter,
} from "../../store/ModalStates";
import { useUnit } from "effector-react";

interface TagButtonProps {
  children: string;
}

export const TagButton = ({ children }: TagButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const searchByTag1 = useUnit($searchByTag1);
  const searchByTag2 = useUnit($searchByTag2);
  const searchByTagCounter = useUnit($searchByTagCounter);

  const handeOnClick = () => {
    if (isSelected) {
      if (searchByTag1 === children) {
        setSearchByTag1("");
        setSearchByTagCounter(searchByTagCounter - 1);
        setIsSelected(false);
      }
      if (searchByTag2 === children) {
        setSearchByTag2("");
        setSearchByTagCounter(searchByTagCounter - 1);
        setIsSelected(false);
      }
    } 
    else 
    {
      if (searchByTag1 === "") {
        setSearchByTag1(children);
        setSearchByTagCounter(searchByTagCounter + 1);
        setIsSelected(true);
      } else {
        if (searchByTag2 === "") {
          setSearchByTag2(children);
          setSearchByTagCounter(searchByTagCounter + 1);
          setIsSelected(true);
        }
      }
    }
  };

  return (
    <>
      <Button
        onClick={() => handeOnClick()}
        mode={isSelected ? "primary" : "outline"}
        style={
          isSelected
            ? { backgroundColor: "#2F37FF", margin: 0 }
            : {
                color: "#2F37FF",
                margin: 0,
                boxShadow: "inset 0 0 0 1px #2F37FF",
              }
        }
      >
        {"#" + children}
      </Button>
    </>
  );
};

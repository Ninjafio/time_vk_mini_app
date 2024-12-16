import { Button } from "@vkontakte/vkui";
import { useState } from "react";

interface TagButtonProps {
  children: string;
}

export const TagButton = ({ children }: TagButtonProps) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsSelected(!isSelected)}
        mode={isSelected ? "primary" : "outline"}
        style={
          isSelected ? { backgroundColor: "#2F37FF", margin: 0 } : { color: "#2F37FF", margin: 0, boxShadow: "inset 0 0 0 1px #2F37FF" }
        }
      >    
        {children}
      </Button>
    </>
  );
};

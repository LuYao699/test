import React, { useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import ModalIndex from "../../components/ModalIndex";
// 练习：使用useImperativeHandle
const Index: React.FC = () => {
  const modalRef = useRef<{ tips: { text: string; position: () => any; action: () => void }[] } | null>(null);
  const handleClick = (index: any) => {
    modalRef.current && modalRef.current.tips[index].action();
  };
  const [step, setSetp] = useState(-1);

  return (
    <Box>
      <ModalIndex ref={modalRef} />
      <Text
        sx={{
          position: "absolute",
          height: "60px",
          top: `${modalRef.current?.tips[step].position().top + 60}px`,
          left: `${modalRef.current?.tips[step].position().left + 60}px`,
        }}
      >
        zhangsang
      </Text>
      <Button
        mt="300px"
        onClick={() => {
          handleClick(0);
          setSetp(0);
        }}
      >
        聚焦
      </Button>
      <Button
        onClick={() => {
          handleClick(1);
          setSetp(1);
        }}
      >
        lis
      </Button>
    </Box>
  );
};
export default Index;

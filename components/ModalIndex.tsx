import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { Flex, Input } from "@chakra-ui/react";

const ModalIndex = React.forwardRef((props, ref) => {
  const inputRef = useRef<any>(null);
  const inputRef2 = useRef<any>(null);
  console.log(8888);
  console.log(9999);

  useImperativeHandle(
    ref,
    () => {
      return {
        tips: [
          {
            text: "聚焦",
            position: () => inputRef.current.getBoundingClientRect(),
            action: () => {
              inputRef.current.focus();
            },
          },
          {
            text: "聚焦2",
            position: () => inputRef2.current.getBoundingClientRect(),
            action: () => {
              inputRef2.current.focus();
            },
          },
        ],
      };
    },
    []
  );
  return (
    <Flex pos="relative">
      <Flex sx={{ "& input:focus": { color: "red" }, color: "black" }}>
        <Input ref={inputRef} defaultValue="李四"></Input>
        <Input ref={inputRef2} defaultValue="里斯"></Input>
      </Flex>
    </Flex>
  );
});

export default ModalIndex;

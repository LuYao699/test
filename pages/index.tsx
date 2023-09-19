import React from "react";
import { useRouter } from "next/router";
import { Center, Flex, Text, Square, Box, AspectRatio } from "@chakra-ui/react";
export const Index: React.FC = () => {
  const router = useRouter();
  console.log(router);
  const id = "3";
  return (
    <>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>
      {/*ratio: 图像的长宽比例*/}
      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </>
  );
};
export default Index;

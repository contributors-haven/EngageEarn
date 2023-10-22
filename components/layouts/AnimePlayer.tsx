import { Box, Flex, Image } from "@chakra-ui/react";

export default function AnimePlayer() {
  return (
    <Flex justifyContent={"center"} w={"auto"} h={"full"}>
      <Image src="/images/mu-bg.png" />
      {/* <MediaRenderer src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" /> */}
    </Flex>
  );
}

import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function TrendingAnime() {
  return (
    <Box mb={"3"}>
      <VStack alignItems={"flex-start"} pt={"20"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={4}>
          Trending Communities
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem
            w="22rem"
            h="22rem"
            border={"5px solid"}
            borderColor={"brand.yellow"}
          >
            <Image
              src="/images/communityList/Sismo.png"
              boxSize={"fit-content"}
            />
          </GridItem>
          <GridItem
            w="22rem"
            h="22rem"
            border={"5px solid"}
            borderColor={"brand.yellow"}
          >
            <Image
              src="/images/communityList/Tableland.png"
              boxSize={"fit-content"}
            />
          </GridItem>
          <GridItem
            w="22rem"
            h="22rem"
            border={"5px solid"}
            borderColor={"brand.yellow"}
          >
            <Image
              src="/images/communityList/EthGlobal.png"
              boxSize={"fit-content"}
            />
          </GridItem>
          <GridItem
            w="22rem"
            h="22rem"
            border={"5px solid"}
            borderColor={"brand.yellow"}
          >
            <Image
              src="/images/communityList/Spark Protocol.png"
              boxSize={"fit-content"}
            />
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
}

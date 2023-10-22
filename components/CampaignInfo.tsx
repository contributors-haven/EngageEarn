import {
  Box,
  HStack,
  Image,
  Text,
  Flex,
  VStack,
  Button,
  color,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

{
  /* <Image src="/images/globe.png" boxSize={"fit-content"} /> */
}

export default function CampaignInfo() {
  return (
    <Box>
      <Flex flexDirection={"column"} width={"98%"}>
        <HStack spacing={12}>
          <HStack>
            <Image src="/images/eye.png" boxSize={"fit-content"} />
            <Text>
              {" "}
              232,410,198 <strong>Views</strong>
            </Text>
          </HStack>
          <HStack>
            <Image src="/images/globe.png" boxSize={"fit-content"} />
            <Text>
              {" "}
              <strong>Updated</strong> 3 days ago
            </Text>
          </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} h={"10vh"}>
          <Text fontSize={"4xl"} fontWeight={"semibold"}>
            Spark Protocol
          </Text>
          <HStack gap={10}>
            <HStack gap={2}>
              <Image
                src="/images/sdai.png"
                boxSize={"fit-content"}
                width={"10"}
              />
              <VStack alignItems={"flex-start"}>
                <Text fontSize={"md"} fontWeight={"bold"}>
                  Spark Protocol
                </Text>
                <Text>20k Followers</Text>
              </VStack>
            </HStack>
            <Box>
              <Button
                // bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
                bg={"brand.blue"}
                rounded={"lg"}
                color={"white"}
                mt={2}
                fontWeight={700}
                _hover={{ bg: "blue.400" }}
              >
                Follow
              </Button>
            </Box>
          </HStack>
        </HStack>
        <HStack gap={"9rem"} alignItems={"baseline"}>
          <VStack
            gap={4}
            alignItems={"flex-start"}
            my={10}
            width={"73%"}
            fontSize={"1.2rem"}
          >
            <Text>
              <strong>Spark</strong> is on a mission to empower the DAI
              ecosystem. As part of the MakerDAO community, Spark builds and
              manages DeFi infrastructure.
            </Text>
            <Text>
              <strong>The 3 main DeFi infrastructure projects:</strong>
            </Text>
            <Text>
              - SparkLend: The DAI centric money market protocol. Combining the
              best liquidity directly from Maker and vertically integrating with
              the best DeFi protocols.
              <br /> - sDAI is a yield bearing stablecoin, representing DAI in
              the Dai Savings Rate (DSR) module, which distributes revenue from
              the Maker protocol to DAI holders.
              <br /> - SparkConduits allow for direct liquidity from Maker to
              protocols as part of the overall Maker Allocation System.
            </Text>
            <Text>
              <strong>SparkDAO </strong>is a Maker Allocator subDAO that owns
              and manages Spark through decentralised governance. Its launch,
              alongside the other subDAOs, is scheduled for May 2024.
            </Text>
          </VStack>
          <VStack alignItems={"baseline"} spacing={"10"}>
            <Heading>Links</Heading>
            <Text fontSize={"1.2rem"}>
              <strong>Homepage: </strong>
              <br />
              <Link href={"https://sparkprotocol.com/"}>
                https://sparkprotocol.com/
              </Link>{" "}
            </Text>
            <Text fontSize={"1.2rem"}>
              <strong>Twitter: </strong>
              <br />
              <Link href={"https://twitter.com/sparkdotfi"}>
                https://twitter.com/sparkdotfi
              </Link>{" "}
            </Text>
            <Text fontSize={"1.2rem"}>
              <strong>Github: </strong>
              <br />
              <Link href={"https://github.com/marsfoundation/"}>
                https://github.com/marsfoundation/
              </Link>{" "}
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}

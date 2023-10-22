import {
  Box,
  Image,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box
      bg={"brand.beige"}
      color={"gray.700"}
      mt={4}
      mb={4}
      fontWeight={"bold"}
    >
      <Box py={4}>
        {/* <Flex justifyContent={"center"} gap={4}>
          <Link href="https://twitter.com/">
            <Image src="/images/twitter.png" />
          </Link>
          <Text>|</Text>
          <Link href="https://t.me/+HtLsWa3PB6AwMDk9">
            <Image src="/images/telegram.png" />
          </Link>
        </Flex> */}
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          ⓒ 2023 EngageEarn. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}

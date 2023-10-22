import {
  Stack,
  Flex,
  Button,
  Text,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"90vh"}
      backgroundImage="url('/images/mu-bg.png')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      border={"12px solid"}
      borderColor={"brand.yellow"}
      opacity={"0.9"}
    >
      <VStack
        w={"md"}
        justify={"center"}
        align={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6} pl={10} pt={10}>
          <Heading
            color={"brand.white"}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: "7xl", md: "8xl" })}
          >
            Mu ChiangMai
          </Heading>
          <Text
            color={"brand.white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          >
            For someone who was temporarily given the job of being a shinigami
            (death god), Ichigo has done pretty well for himself. He has trained
            in martial arts since he was young and continued to grow as he’s
            learned about his new powers.
          </Text>

          <Button
            size={"lg"}
            // bgGradient="linear(to-l, #7928CA, brand.pink)"
            bg={"brand.blue"}
            p={"10"}
            fontSize={"2xl"}
            rounded={"lg"}
            color={"white"}
            fontWeight={700}
            _hover={{ bg: "brand.orange" }}
          >
            Check Community
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}

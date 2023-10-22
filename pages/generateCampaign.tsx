import MintingNFT from "@/components/MintingNFT";
import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Textarea,
  useBreakpointValue,
  useRadio,
} from "@chakra-ui/react";

export default function generateCampaign(props: any) {
  return (
    <Flex
      pb={10}
      width={"full"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Flex
        flexDirection={"row-reverse"}
        h={"auto"}
        width={"80%"}
        m={0}
        py={20}
        gap={"10vw"}
        color={"brand.white"}
        justifyItems={"center"}
      >
        <VStack width={"full"} alignItems={"flex-start"} height={"50vh"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Anime Preview
          </Text>
          <Box width={"15vw"} border={"2px dashed gray"} height={"15vw"}>
            <Image></Image>
          </Box>
        </VStack>
        <Flex
          flexDirection={"column"}
          width={"full"}
          height={"full"}
          gap={"2vw"}
        >
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>
              Title
            </Text>
            <Input placeholder="Anime Title"></Input>
          </VStack>
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Description
              </Text>
              <Textarea placeholder="Please put describe about the anime."></Textarea>
            </VStack>
            {/* <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
              <Text fontSize={"2xl"} fontWeight={"semibold"}>
                Audience
              </Text>
              <RadioGroup name="form-name">
                <Radio>Yes, It's for Kids</Radio>
                <Radio>No, It's not for kids</Radio>
              </RadioGroup>
            </VStack> */}
            <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
              <Box width={"30%"}>
                <Button
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
                  rounded={"lg"}
                  color={"white"}
                  mt={2}
                  fontWeight={700}
                  _hover={{ bg: "blue.400", shadow: "md" }}
                >
                  Generate Anime
                </Button>
              </Box>
            </VStack>
            <MintingNFT />
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

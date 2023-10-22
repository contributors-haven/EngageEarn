import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button, Image, Input, useBreakpointValue } from "@chakra-ui/react";
import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function MintingNFT() {
  const [uris, setUris] = useState<string[]>([]);
  console.log(uris);

  const { mutateAsync: upload } = useStorageUpload();
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const _uris = await upload({ data: acceptedFiles });
      setUris(_uris);
    },
    [upload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <VStack width={"100%"} alignItems={"flex-start"} paddingTop={"2vw"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          NFT Minting
        </Text>
        <VStack width={"full"} alignItems={"flex-start"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>
            Thumbnails(Temporary Image Mint Test)
          </Text>
          <Box
            width={"15vw"}
            border={"2px dashed gray"}
            height={"15vw"}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <button>Drop Files here</button>
          </Box>
          <Text>File Preview</Text>
          <Box>
            {uris.map((uri) => {
              return <MediaRenderer key={uri} src={uri} alt="image" />;
            })}
          </Box>
        </VStack>
        <HStack width={"full"} gap={"2vw"}>
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <Text>Max Supply</Text>
            <Input placeholder="1000"></Input>
          </VStack>
          <VStack width={"full"} alignItems={"flex-start"} gap={"1vw"}>
            <Text>Price Per NFT(Matic)</Text>
            <Input placeholder="1000"></Input>
          </VStack>
        </HStack>
        <Box width={"30%"} paddingTop={"1vw"}>
          <Button
            size={useBreakpointValue({ base: "md", md: "lg" })}
            bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
            rounded={"lg"}
            color={"white"}
            mt={2}
            fontWeight={700}
            _hover={{ bg: "blue.400", shadow: "md" }}
          >
            Mint Anime as NFT
          </Button>
        </Box>
      </VStack>
    </>
  );
}

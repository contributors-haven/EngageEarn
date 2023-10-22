"use client";

import { usePathname } from "next/navigation";

import { ReactNode } from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import ConnectButton from "../connectButton";
import { ConnectButton as RbConnectButton } from "@rainbow-me/rainbowkit";

const Links = [
  { name: "Home", param: "/" },
  { name: "Register Community", param: "/registerCommunity" },
  // { name: "Create Campaign", param: "/createCampaign" },
  { name: "Community List", param: "/" },
];

const NavLink = ({
  children,
  param,
  name,
}: {
  children?: ReactNode;
  param: string;
  name: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "orange.300",
    }}
    href={`${param}`}
  >
    {name}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pathname = usePathname();

  const hideSismoButton =
    pathname === "/" ||
    pathname === "/registerCommunity" ||
    pathname === "/registerCampaign" ||
    pathname === "/depositFund" ||
    pathname === "/createCampaign";

  return (
    <>
      <Box bg="brand.beige" px={4} py={2}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={6}
        >
          <Link href="/" _hover={{ opacity: 0.7 }}>
            <Image width={"18%"} src="/images/ee-logo2.png" alt="EngageEarn" />
          </Link>
          <Flex alignItems={"center"} width={"62%"} justifyContent={"end"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              spacing={8}
              alignItems={"center"}
              paddingRight={"6"}
              fontWeight={600}
              textColor={"gray.700"}
              fontSize={"1.15rem"}
            >
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink
                    key={link.name}
                    param={link.param}
                    name={link.name}
                  />
                ))}
              </HStack>
            </HStack>

            <Stack direction={"row"} spacing={7}>
              <Menu>
                {hideSismoButton ? <RbConnectButton /> : <ConnectButton />}
              </Menu>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} param={link.param} name={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react"
import { FiMoon } from "react-icons/fi"
import { TiWeatherSunny } from "react-icons/ti"

type Props = {}

export default function Header({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <>
      <Flex
        justifyContent={"end"}
        alignItems={"center"}
        px={10}
        py={6}
        position={"absolute"}
        right={0}
        gap={2}
      >
        <Icon as={TiWeatherSunny} boxSize={6} />
        <Switch
          colorScheme="teal"
          size="lg"
          isChecked={colorMode === 'dark' ? true: false}
          onChange={toggleColorMode}
        />
        <Icon as={FiMoon} boxSize={5} />
      </Flex>
    </>
  )
}

import { Link } from "@chakra-ui/next-js"
import {
  background,
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  keyframes,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react"
import MyContainer, {
  MySmallerContainer,
} from "./components/layout/MyContainer"
import { useState } from "react"

export default function Home() {
  return (
    <>
      <Hero />
      <Background />
      <Skills />
      <Experience />
    </>
  )
}
const waveAnimation = keyframes`
from {
			
			transform: none
	}

	15% {
			
			transform: translate3d(-20%,0,0) rotate3d(0,0,1,-10deg)
	}

	30% {
			
			transform: translate3d(10%,0,0) rotate3d(0,0,1,7deg)
	}

	45% {
			
			transform: translate3d(-15%,0,0) rotate3d(0,0,1,-10deg)
	}

	60% {
			
			transform: translate3d(10%,0,0) rotate3d(0,0,1,5deg)
	}

	75% {
			
			transform: translate3d(-5%,0,0) rotate3d(0,0,1,-2deg)
	}

	to {
			 
			transform: none
	}
`

const Hero = () => {
  const wave = `${waveAnimation} 1s`
  const [hover, setHover] = useState(false)
  return (
    // <MyContainer height={"100vh"}>
    <Flex
      flexDirection={"column"}
      justifyContent={"space-around"}
      maxWidth={"1440px"}
      marginX={"auto"}
      paddingX={{ base: "50px", md: "100px" }}
      paddingY={"120px"}
      height={"100vh"}
      gap={10}
    >
      <HStack spacing={4}>
        <Heading as={"h1"} variant={"h2"} fontWeight={"normal"}>
          Hello!{" "}
        </Heading>
        <Image
          width={{ base: "30px", md: "40px" }}
          src={"/assets/wave.png"}
          alt="Wave"
          animation={hover ? wave : ""}
          cursor={"pointer"}
          onMouseEnter={(e) => {
            setHover(true)
          }}
          onMouseLeave={(e) => {
            setHover(false)
          }}
          _selection={{
            background: "transparent",
          }}
        />
      </HStack>
      <MySmallerContainer ml={0} pl={0}>
        <Heading
          variant={"h2"}
          fontWeight={"normal"}
          letterSpacing={"2px"}
          lineHeight={"1.5"}
          display={"inline"}
        >
          I&apos;m{" "}
          <Heading as={"span"} variant={"h2"}>
            Brittany Chiang
          </Heading>
          , a design-minded front-end software engineer focused on building
          beautiful interfaces & experiences
        </Heading>
        <Image
          mx={2}
          display={"inline"}
          width={{ base: "30px", md: "40px" }}
          src={"/assets/technologist.png"}
          alt="To the right"
        />
      </MySmallerContainer>
      <Flex gap={2} alignItems={"center"} wrap={"wrap"}>
        <Text variant={"xl"} fontWeight={"medium"}>
          Get in touch
        </Text>
        <Image
          width={{ base: "25px", md: "30px" }}
          src={"/assets/pointing-right.png"}
          alt="To the right"
        />
        <Text
          as={Link}
          variant={"xl"}
          href={`mailto:therahulchaurasi@gmail.com`}
          borderBottom={"3px solid"}
          borderColor={"brand.primary"}
          position={"relative"}
          overflow={"hidden"}
          py={"2px"}
          px={"3px"}
          zIndex={10}
          whiteSpace={"nowrap"}
          _hover={{
            textDecoration: "none",
            color: "white",
            _before: {
              transform: "translateY(0%)",
              transition: "all 0.2s ease-in-out",
            },
          }}
          transition={"all 0.2s ease-in-out"}
          _before={{
            content: '""',
            zIndex: -1,
            width: "100%",
            height: "40px",
            bg: "brand.primary",
            position: "absolute",
            transform: "translateY(80%)",
            right: 0,
            transition: "all 0.2s ease-in-out",
          }}
          textDecoration={"none"}
        >
          therahulchaurasia@gmail.com
        </Text>
      </Flex>
    </Flex>
    // </MyContainer>
  )
}

const Background = () => {
  return (
    <MyContainer px={{ base: "50px", md: "0px", xl: "80px" }}>
      <Flex
        justifyContent={"center"}
        gap={{ base: 14 }}
        direction={{ base: "column", md: "row" }}
        px={{ base: 0, md: 10, xl: 32 }}
      >
        <Text
          textTransform={"uppercase"}
          letterSpacing={"2px"}
          variant={"md"}
          fontWeight={"bold"}
          color={"brand.primary"}
          minWidth={"200px"}
          alignSelf={"flex-start"}
          textAlign={{ base: "start", md: "end" }}
        >
          Background
        </Text>
        <Stack
          pl={{ base: 8, md: 0 }}
          spacing={4}
          fontWeight={"regular"}
          width={"100%"}
          maxW={"650px"}
        >
          <Text>
            I&apos;m currently an Engineer at Upstatement building things for
            the web with some awesome people. I recently graduated from
            Northeastern University after completing three awesome six-month
            co-ops at MullenLowe U.S., Starry, and Apple Music.
          </Text>
          <Text>
            As a software engineer, I enjoy bridging the gap between engineering
            and design — combining my technical knowledge with my keen eye for
            design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
          </Text>
          <Text>
            When I&apos;m not in front of a computer screen, I&apos;m probably
            snowboarding, cruising around on my penny board, or crossing off
            another item on my bucket list.
          </Text>
        </Stack>
      </Flex>
    </MyContainer>
  )
}

const Skills = () => {
  return (
    <MyContainer px={{ base: "50px", md: "0px", xl: "80px" }}>
      <Flex
        justifyContent={"center"}
        gap={{ base: 14 }}
        direction={{ base: "column", md: "row" }}
        px={{ base: 0, md: 10, xl: 32 }}
      >
        <Text
          textTransform={"uppercase"}
          letterSpacing={"2px"}
          variant={"md"}
          fontWeight={"bold"}
          color={"brand.primary"}
          minWidth={"200px"}
          alignSelf={"flex-start"}
          textAlign={{ base: "start", md: "end" }}
        >
          Skills
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap={"5vw"}
          pl={{ base: 8, md: 0 }}
        >
          {skillsData.map((skill, idx) => (
            <Stack key={idx}>
              <Text
                variant={"md"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                whiteSpace={"nowrap"}
              >
                {skill.title}
              </Text>
              {skill.data.map((data, idx) => (
                <Text key={idx} fontSize={"sm"}>
                  {data}
                </Text>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </MyContainer>
  )
}

const Experience = () => {
  return (
    <MyContainer px={{ base: "50px", md: "0px", xl: "80px" }}>
      <Flex
        justifyContent={"center"}
        gap={{ base: 14 }}
        direction={{ base: "column", md: "row" }}
        px={{ base: 0, md: 10, xl: 32 }}
      >
        <Text
          textTransform={"uppercase"}
          letterSpacing={"2px"}
          variant={"md"}
          fontWeight={"bold"}
          color={"brand.primary"}
          minWidth={"200px"}
          alignSelf={"flex-start"}
          textAlign={{ base: "start", md: "end" }}
        >
          Experience
        </Text>
        <Stack
          pl={{ base: 8, md: 0 }}
          spacing={4}
          fontWeight={"regular"}
          width={"100%"}
          maxW={"650px"}
        >
          {experienceData.map((exp, idx) => (
            <>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Stack spacing={0}>
                  <Text variant={"md"} fontWeight={"extrabold"}>
                    {exp.companyName}
                  </Text>
                  <Text variant={"md"}>{exp.position}</Text>
                </Stack>
                <Spacer />
                <Text fontSize={"sm"} fontFamily={"duration"}>
                  {exp.duration}
                </Text>
              </Flex>
            </>
          ))}
        </Stack>
      </Flex>
    </MyContainer>
  )
}

type SkillsData = {
  title: string
  data: string[]
}

const skillsData = [
  {
    title: "Languages",
    data: [
      "JavaScript (ES6)",
      "TypeScript",
      "HTML",
      "CSS/Sass",
      "Python",
      "SQL",
      "R",
    ],
  },
  {
    title: "Frameworks",
    data: [
      "Ember & Glimmer",
      "React",
      "Jekyll",
      "Node",
      "D3",
      "Wordpress",
      "Timber",
    ],
  },
  {
    title: "Tools",
    data: [
      "Bash",
      "Git & Github",
      "Gulp & Grunt",
      "Chrome DevTools",
      "Postman",
      " MongoDB",
    ],
  },
  {
    title: "Design",
    data: [
      "Sketch",
      "InDesign",
      "InVision",
      "Prototyping",
      "Wireframing",
      "User Testing",
    ],
  },
]

const experienceData = [
  {
    companyName: "Webenetic",
    position: "Software Developer",
    duration: "May 2023 - Present",
  },
  {
    companyName: "Webenetic",
    position: "Software Developer",
    duration: "May 2023 - Present",
  },
]

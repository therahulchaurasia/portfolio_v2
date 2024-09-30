import { CustomTextLink, ProjectLink } from "@/components/util/CustomLink"
import MetaHead from "@/components/util/MetaHead"
import { experienceData } from "@/data/experience.data"
import { featuredProjectsData } from "@/data/featuredProjects.data"
import { otherProjectsData } from "@/data/otherProjects.data"
import { skillsData } from "@/data/skills.data"
import { spacing12_14 } from "@/util/style.util"
import { Link } from "@chakra-ui/next-js"
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  keyframes,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react"
import { useState } from "react"
import MyContainer, { SectionContainer } from "../components/layout/MyContainer"

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

const formKey = process.env.NEXT_PUBLIC_TALLY_FORM_KEY

export default function Home() {
  return (
    <>
      <MetaHead
        title="Rahul Chaurasiya - Home"
        description="Design-minded software engineer with a goal to create websites that feel personal and inviting—because every pixel counts."
        url="/"
      >
        <script src="https://tally.so/widgets/embed.js" defer />
      </MetaHead>
      <Hero />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <ContactForm />
    </>
  )
}

const Hero = () => {
  const wave = `${waveAnimation} 1s`
  const [hover, setHover] = useState(false)
  return (
    // <MyContainer height={"100vh"}>

    <MyContainer
      as={Flex}
      flexDirection={"column"}
      justifyContent={"space-around"}
      maxWidth={"1440px"}
      marginX={"auto"}
      paddingX={{ base: "50px", md: "100px" }}
      paddingY={{ base: "70px", md: "120px" }}
      height={"100vh"}
      gap={10}
      maxW={{
        lg: "8xl",
      }}
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
      <Box maxW={"700px"} ml={0} pl={0}>
        <Heading
          variant={"h2"}
          fontWeight={"normal"}
          letterSpacing={"2px"}
          lineHeight={"1.5"}
          display={"inline"}
        >
          I&apos;m{" "}
          <Heading as={"span"} variant={"h2"}>
            {process.env.NEXT_PUBLIC_USER_NAME}
          </Heading>
          , a design-loving software engineer with a goal to create websites
          that feel personal and inviting—because every pixel counts.
        </Heading>
        <Image
          mx={2}
          display={"inline"}
          width={{ base: "30px", md: "40px" }}
          src={"/assets/technologist.png"}
          alt="To the right"
          _selection={{
            background: "transparent",
          }}
        />
      </Box>
      <Flex gap={2} alignItems={"center"} wrap={"wrap"}>
        <Text variant={"xl"} fontWeight={"medium"}>
          Get in touch
        </Text>
        <Image
          width={{ base: "25px", md: "30px" }}
          src={"/assets/pointing-right.png"}
          alt="To the right"
          _selection={{
            background: "transparent",
          }}
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
    </MyContainer>

    // </MyContainer>
  )
}

const Background = () => {
  const { colorMode } = useColorMode()

  return (
    <SectionContainer sectionText="Background">
      <Text>
        I&apos;m currently an Engineer at Webenetic Pvt Ltd where I work on our
        home grown CRM and websites for our clients. Meanwhile, I also freelance
        with the cool people at{" "}
        {/* <Text
          as={Link}
          href={"https://thezenlabs.in/"}
          fontWeight={"extrabold"}
          variant={"customLinkBlack"}
        >
          thezenlabs.
        </Text> */}
        <CustomTextLink
          label="thezenlabs"
          href={"https://thezenlabs.in/"}
          afterColor={colorMode === "dark" ? "white" : "brand.tertiary"}
          fontWeight={"extrabold"}
        />
      </Text>
      <Text>
        As a software engineer, I enjoy building software in the sweet spot
        where design and engineering meet—creating things that look good but are
        also built well under the hood. Starting new coding adventures is my
        superpower, but completing them often feels like slaying a dragon. With
        every line of code I write, I draw closer to victory, knowing that each
        finished project is not just a milestone, but a testament to my growth.
      </Text>
      <Text>
        <Text as={"span"} fontWeight={"extrabold"}>
          When I&apos;m not in front of a computer screen
        </Text>
        , I&apos;m probably taking a stroll around my neighborhood or getting
        lost in a good book.
      </Text>
    </SectionContainer>
  )
}

const Skills = () => {
  return (
    <SectionContainer
      sectionText="Skills"
      stackProps={{
        as: Flex,
        flexDirection: "row",
        justifyContent: "space-between",
        wrap: "wrap",
      }}
    >
      {skillsData.map((skill, idx) => (
        <Stack width={{ base: "47%", md: "auto" }} key={idx}>
          <Text variant={"md"} fontWeight={"bold"} textTransform={"uppercase"}>
            {skill.title}
          </Text>
          {skill.data.map((data, idx) => (
            <Text key={idx} fontSize={"sm"}>
              {data}
            </Text>
          ))}
        </Stack>
      ))}
    </SectionContainer>
  )
}

const Experience = () => {
  return (
    <SectionContainer
      sectionText="Experience"
      stackProps={{ spacing: { base: 16, md: 24 } }}
    >
      {experienceData.map((exp, idx) => (
        <Box key={idx}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Stack spacing={0}>
              <Text variant={"md"} fontWeight={"extrabold"}>
                {exp.companyName}
              </Text>
              <Text fontSize={"sm"} fontFamily={"incon"} hideFrom={"sm"}>
                {exp.duration}
              </Text>
              <Text variant={"md"}>{exp.position}</Text>
            </Stack>
            <Spacer />
            <Text fontSize={"sm"} hideBelow={"sm"} fontFamily={"incon"}>
              {exp.duration}
            </Text>
          </Flex>
        </Box>
      ))}
      <ProjectLink
        label="View my resume"
        href="/resume.pdf"
        iconProps={{ boxSize: 5 }}
      />
    </SectionContainer>
  )
}

const FeaturedProjects = () => {
  return (
    <SectionContainer
      sectionText="Featured Projects"
      stackProps={{ spacing: { base: 16, md: 24 } }}
    >
      {featuredProjectsData.map((project, idx) => (
        <Box
          key={idx}
          as={Link}
          href={project.href}
          target="_blank"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            alignItems={"start"}
            gap={4}
            justifyContent={"space-between"}
            cursor={"pointer"}
          >
            <Stack spacing={0}>
              <Image
                src={project.image}
                alt={project.description}
                width={"100%"}
                height={"100%"}
                objectFit={"cover"}
              />
            </Stack>
            <Spacer />
            <Stack>
              <Text fontWeight={"bold"}>{project.name}</Text>
              <Text fontSize={"sm"}>{project.description}</Text>
            </Stack>
          </Flex>
        </Box>
      ))}
    </SectionContainer>
  )
}

const OtherProjects = () => {
  return (
    <SectionContainer
      sectionText="Other Projects"
      stackProps={{ spacing: spacing12_14 }}
    >
      {otherProjectsData.map((project, idx) => (
        <Stack key={idx} spacing={3}>
          <ProjectLink
            label={project.name}
            href={project.href}
            headingProps={{ variant: "h6" }}
            iconProps={{ boxSize: 4 }}
          />
          <Text fontSize={"sm"} mb={3}>
            {project.description}
          </Text>
          <HStack wrap={"wrap"}>
            {project.tools.map((tool, idx) => (
              <Text
                p={1}
                color={"brand.primary"}
                fontFamily={"incon"}
                fontSize={"12px"}
                fontWeight={"bold"}
                border={"1px solid"}
                borderRadius={"4px"}
                textTransform={"capitalize"}
                key={idx}
              >
                {tool}
              </Text>
            ))}
          </HStack>
        </Stack>
      ))}
    </SectionContainer>
  )
}

const ContactForm = () => {
  return (
    <SectionContainer sectionText="Let's Connect">
      <Box>
        <iframe
          data-tally-src={`https://tally.so/embed/${formKey}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
          loading="lazy"
          width="100%"
          height="300"
          title="Let's Connect
"
        ></iframe>
      </Box>
    </SectionContainer>
  )
}

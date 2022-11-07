import { Box, Center, Heading, Text } from '@chakra-ui/react'

export default function MainVisual() {
  return (
    <Box
      bgImage="url('/images/header-background.webp')"
      bgSize="cover"
      px={[4, 8, 12, 20, 28]}
      py={[20, 20, 40]}
      mb={[4, 8, 12]}
      opacity="0.9"
    >
      <Box>
        <Center>
          <Heading as="h1" size={['lg', 'xl', '2xl', '3xl']} color="white">
            NPO 法人 MOTTAI
          </Heading>
        </Center>
        <Center>
          <Text as="b" fontSize={['md', 'xl', '2xl', '3xl']} color="white">
            当たり前の裏側にアクセスしやすい社会を創る
          </Text>
        </Center>
      </Box>
    </Box>
  )
}

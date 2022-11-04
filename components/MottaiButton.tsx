import { Button } from '@chakra-ui/react'

type Props = {
  text: string
}

export default function MottaiButton(props: Props) {
  return (
    <Button colorScheme="orange" variant="outline">
      {props.text}
    </Button>
  )
}

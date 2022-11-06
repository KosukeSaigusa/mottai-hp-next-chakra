import { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react'
import CategoryOption from './CategoryOption'

export default function ContactForm() {
  const actionUrl =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5DkYy22ThllQGH6AW6unb2NwJqKvytKcK7CGMkzF036UBIA/formResponse'
  const [value, setValue] = useState('')
  const categoryOptions = []
  for (const item of categoryOptionItems) {
    categoryOptions.push(<CategoryOption value={item} key={item} />)
  }
  return (
    <Box>
      <Center>
        <Box maxW={448}>
          <form action={actionUrl}>
            <FormControl pb={4} isRequired>
              <FormLabel>問い合わせ種別【必須】</FormLabel>
              <Select
                placeholder="選択してください"
                id="selectCategory"
                name="entry.725826341"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                }}
              >
                {categoryOptions}
              </Select>
            </FormControl>
            <Flex>
              <FormControl pb={4} pr={4} isRequired>
                <FormLabel>姓【必須】</FormLabel>
                <Input
                  id="inputLastName"
                  name="entry.896613129"
                  type="text"
                  placeholder="山田"
                  required
                />
              </FormControl>
              <FormControl pb={4} isRequired>
                <FormLabel>名【必須】</FormLabel>
                <Input
                  id="inputFirstName"
                  name="entry.1420828012"
                  type="text"
                  placeholder="太郎"
                />
              </FormControl>
            </Flex>
            <FormControl pb={4}>
              <FormLabel>会社・団体名など【任意】</FormLabel>
              <Input
                type="text"
                id="inputCompany"
                name="entry.1666260960"
                placeholder="株式会社 XXX"
              />
            </FormControl>
            <FormControl pb={4} isRequired>
              <FormLabel>電話番号【必須】</FormLabel>
              <Input
                type="phone"
                id="inputTel"
                name="entry.2019384655"
                placeholder="090-1234-5678"
              />
            </FormControl>
            <FormControl pb={4} isRequired>
              <FormLabel>Eメール【必須】</FormLabel>
              <Input
                type="email"
                id="inputEmail"
                name="entry.653387606"
                placeholder="npo-mottai@example.com"
              />
            </FormControl>
            <FormControl pb={4} isRequired>
              <FormLabel>件名【必須】</FormLabel>
              <Input
                id="inputTitle"
                name="entry.627760766"
                type="text"
                placeholder="XXX について"
              />
            </FormControl>
            <FormControl pb={4} isRequired>
              <FormLabel>本文【必須】</FormLabel>
              <Textarea
                id="inputContent"
                name="entry.152237501"
                placeholder="本文を入力"
                rows={10}
              />
            </FormControl>
            <Button colorScheme="orange" variant="outline" type="submit">
              送信する
            </Button>
            <Text pt={1}>※ 送信後Google Formsの完了画面に遷移します</Text>
          </form>
        </Box>
      </Center>
    </Box>
  )
}

const categoryOptionItems = [
  '各種活動について',
  '会員登録について',
  '寄付について',
  'プロボノやインターンについて',
  '講演依頼',
  '取材依頼',
  'その他',
]
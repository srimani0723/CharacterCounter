import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainBox,
  Box,
  RightBox,
  LeftBox,
  Heading,
  HeadingBox,
  CharactersList,
  Image,
  InputBox,
  Input,
  Button,
  List,
  Para,
} from './styledcomponents'

const CharacterCounter = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const onAdd = () => {
    const newLi = {
      id: uuidv4(),
      character: input,
      count: input.length,
    }

    setList(prev => [...prev, newLi])
    setInput('')
  }

  return (
    <MainBox>
      <Box>
        <LeftBox>
          <HeadingBox>
            <Heading color="#1e293b">
              Count the characters like a Boss...
            </Heading>
          </HeadingBox>
          {list.length === 0 ? (
            <Image
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <CharactersList>
              {list.map(each => (
                <List key={each.id}>
                  <Para>
                    {each.character} : {each.count}
                  </Para>
                </List>
              ))}
            </CharactersList>
          )}
        </LeftBox>
        <RightBox>
          <Heading color="#ffbf1f">Character Counter</Heading>
          <InputBox onSubmit={onAdd}>
            <Input
              onChange={e => setInput(e.target.value)}
              value={input}
              placeholder="Enter the Characters here"
            />
            <Button type="button" onClick={onAdd}>
              Add
            </Button>
          </InputBox>
        </RightBox>
      </Box>
    </MainBox>
  )
}

export default CharacterCounter

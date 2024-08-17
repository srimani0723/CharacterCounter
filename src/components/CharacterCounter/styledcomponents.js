import styled from 'styled-components'

export const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding: 5%;
`

export const Box = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`
export const CharactersList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
`
export const List = styled.li`
  list-style: none;
`
export const Para = styled.p`
  margin-bottom: 10px;
  color: #1e293b;
  font-size: large;
  font-weight: 500;
  font-family: 'Roboto';
`

export const Image = styled.img`
  width: 90%;
  margin-top: 50%;
`
export const InputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10%;
`

export const Input = styled.input`
  border: 0px;
  outline: none;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 65%;
  color: #1e293b;
  font-size: medium;
  font-weight: 500;
  font-family: 'Roboto';
`
export const Button = styled.button`
  padding: 15px;
  width: 20%;
  border: 0px;
  outline: none;
  cursor: pointer;
  color: #272c47;
  font-size: large;
  background-color: #ffc533;
  border-radius: 5px;
  margin-left: 10px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f172a;
  height: 100%;
  width: 50%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffc533;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
  height: 100%;
  width: 50%;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: x-large;
`
export const HeadingBox = styled.div`
  background-color: #ffbf1f;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
`

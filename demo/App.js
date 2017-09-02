import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Button, Input, Card, Link } from 'react-pasta'
import Box from 'react-box-size'

import { Wrapper } from '../src'

const Container = styled.div`
  padding: 100px 0;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

const App = () => (
  <Container>
    <Box mb={5}>
      <Wrapper name="purpose">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta turpis elementum tortor rutrum, at rutrum odio egestas. Etiam porta nulla sit amet aliquet aliquet. Vestibulum venenatis sit amet leo a sollicitudin. Etiam fermentum ligula eu purus condimentum hendrerit eu nec mi. Nunc dapibus tincidunt venenatis. Maecenas efficitur lorem eget leo consequat dignissim. Quisque laoreet est erat, efficitur dignissim est sagittis vel. Praesent suscipit tincidunt quam, at auctor nisl convallis vitae.</Text>
      </Wrapper>
    </Box>
    <Box mb={5}>
      <Wrapper name="text">
        <Heading level={1}>h1</Heading>
        <Heading level={2}>h2</Heading>
        <Heading level={3}>h3</Heading>
        <Heading level={4}>h4</Heading>
        <Heading level={5}>h5</Heading>
        <Heading level={6}>h6</Heading>
      </Wrapper>
    </Box>
    <Box mb={5}>
      <Wrapper name="buttons">
        <Button>Default Button</Button>
        <br />
        <br />
        <Button buttonType="blue">Blue Button</Button>
        <br />
        <br />
        <Button buttonType="red">Red Button</Button>
        <br />
        <br />
        <Button buttonType="green">Green Button</Button>
      </Wrapper>
    </Box>
    <Box mb={5}>
      <Wrapper name="inputs">
        <Text>Input without placeholder</Text>
        <Input />
        <br />
        <br />
        <Text>Input with placeholder</Text>
        <Input placeholder="Input" />
      </Wrapper>
    </Box>
    <Box mb={5}>
      <Wrapper name="cards">
        <Box mb={3}>
          <Card>
            <Text>
              <b>This is an example of a card without a title.</b>
              <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta turpis elementum tortor rutrum, at rutrum odio egestas. Etiam porta nulla sit amet aliquet aliquet. Vestibulum venenatis sit amet leo a sollicitudin. Etiam fermentum ligula eu purus condimentum hendrerit eu nec mi. Nunc dapibus tincidunt venenatis. Maecenas efficitur lorem eget leo consequat dignissim. Quisque laoreet est erat, efficitur dignissim est sagittis vel. Praesent suscipit tincidunt quam, at auctor nisl convallis vitae.</Text>
          </Card>
        </Box>
        <Card>
          <Box mb={1}>
            <Heading level={3}>Card with a title</Heading>
          </Box>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta turpis elementum tortor rutrum, at rutrum odio egestas. Etiam porta nulla sit amet aliquet aliquet. Vestibulum venenatis sit amet leo a sollicitudin. Etiam fermentum ligula eu purus condimentum hendrerit eu nec mi. Nunc dapibus tincidunt venenatis. Maecenas efficitur lorem eget leo consequat dignissim. Quisque laoreet est erat, efficitur dignissim est sagittis vel. Praesent suscipit tincidunt quam, at auctor nisl convallis vitae.</Text>
        </Card>
      </Wrapper>
    </Box>
    <Box mb={5}>
      <Wrapper name="links">
        <Link href="#">A link!</Link>
      </Wrapper>
    </Box>
  </Container>
)

export default App

import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import Example from "../index1";


const App1 = ({ children }) => (

  <Container style={{ margin: 20 }}>
    <Header as="h3">Tezos Farmer's Marketplace 😊</Header>
    <List bulleted>
      <List.Item
        as="a"
        content="Made using 💌 Conseil Js"
        href="https://github.com/Cryptonomic/ConseilJS"
        target="_blank"
      />
      <List.Item
        as="a"
        content="Thanks to Tezos"
        href="https://tezos.com/"
        target="_blank"
      />
    </List>

    {children}
    <Example />
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export default App1

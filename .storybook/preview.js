import React from "react";
import { MemoryRouter } from "react-router";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/style/GlobalStyle";

//addDecoratorは各storyを描画する関数を受け取る関数
addDecorator((storyFn) => (
  <MemoryRouter initialEntries={["/", "posts"]}>{storyFn()}</MemoryRouter>
));

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

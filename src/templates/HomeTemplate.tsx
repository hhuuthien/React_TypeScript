import React from "react";
import { Route } from "react-router-dom";

type Props = {
  component: React.ElementType; // Kiểu dữ liệu của component
  path: string;
  mobileComponent?: (props: React.ElementType) => React.FC<Props>;
};

export default function HomeTemplate(props: Props) {
  return (
    <Route
      path={props.path}
      render={() => {
        return (
          <>
            <header></header>
            <props.component />
            <footer></footer>
          </>
        );
      }}
    />
  );
}

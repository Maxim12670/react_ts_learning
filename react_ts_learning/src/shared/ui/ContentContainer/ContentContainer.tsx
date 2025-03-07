import { ReactElement } from "react";

interface ContentContainerProps {
  children: ReactElement;
}

const style = { display: "block", margin: "2rem auto", width: "144rem" };

function ContentContainer({ children }: ContentContainerProps) {
  return <div style={style}>{children}</div>;
}

export default ContentContainer;

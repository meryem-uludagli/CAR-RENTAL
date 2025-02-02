import { FC } from "react";

type Props = {
  children: JSX.Element | string;
};

const Warning: FC<Props> = ({ children }) => {
  return (
    <div className="padding-x max-width">
      <p className="home-error-container">{children}</p>
    </div>
  );
};

export default Warning;

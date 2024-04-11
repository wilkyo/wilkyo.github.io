import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="spinner-border text-info">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

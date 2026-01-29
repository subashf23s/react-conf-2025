import type { ComponentProps } from "react";

const Button = ({ ...props }: ComponentProps<"button">) => {
  return <button data-slot="button" {...props} />;
};

export default Button;

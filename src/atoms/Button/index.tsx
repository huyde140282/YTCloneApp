import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { name } = props;
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-[#0b3d72] rounded shadow hover:bg-[#083464] focus:outline-none focus:ring-2"
    >
      {name}
    </button>
  );
};

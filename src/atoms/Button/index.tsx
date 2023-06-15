import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { name } = props;
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 text-white bg-red-500 rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      {name}
    </button>
  );
};

import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
    const { name } = props
    return (
        <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            {name}
        </button>
    );
};
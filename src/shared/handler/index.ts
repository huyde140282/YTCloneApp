import { toast } from "react-toastify";

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
    });
};

export const showSuccessfullToast = (message: string) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
    });
};

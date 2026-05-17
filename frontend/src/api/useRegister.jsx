import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

export const useRegister = ({ onSuccess, onError }) => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/user/register", data);
            return response.data;
        },
        onSuccess,
        onError
    })
}
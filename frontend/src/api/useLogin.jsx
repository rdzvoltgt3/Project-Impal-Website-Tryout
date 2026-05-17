import { useMutation } from "@tanstack/react-query";
import api from "../lib/axios";

export const useLogin = ({ onSuccess, onError }) => {
    return useMutation({
        mutationFn: async (data) => {
            const response = await api.post("/user/login", data);
            return response.data;
        },
        onSuccess,
        onError
    })
}
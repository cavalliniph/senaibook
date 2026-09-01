import AsyncStorage from "@react-native-async-storage/async-storage";
import { buscarLivros } from "./buscarLivros";

export async function deletarLivro(id) {
    const token = await AsyncStorage.getItem("token");
    const url = `https://apps-api-livros.ucxocw.easypanel.host/livros/${id}`;
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(data?.mensagem);
    }
}

import AsyncStorage from "@react-native-async-storage/async-storage";

const token = process.env.EXPO_PUBLIC_TOKEN;

export async function fazerLogin(email, senha) {
    const res = await fetch("https://apps-api-livros.ucxocw.easypanel.host/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    });

    const data = await res.json();

    if (!res.ok) throw Error("erro " + data);

    await AsyncStorage.setItem("usuario", {
        id: data.usuario.id,
    });
    await AsyncStorage.setItem("token", data.token);

    return data;
}
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fazerLogin(email, senha) {
    const res = await fetch("https://apps-api-livros.ucxocw.easypanel.host/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            senha: senha,
        }),
    });

    const data = await res.json();

    if (!res.ok) throw Error("erro " + data);

    await AsyncStorage.setItem("usuario", JSON.stringify({
        id: data.usuario.id,
    }));
    await AsyncStorage.setItem("token", data.token);

    return data;
}
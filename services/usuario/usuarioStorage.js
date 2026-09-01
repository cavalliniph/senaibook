import AsyncStorage from "@react-native-async-storage/async-storage";

export async function salvarUsuario(id, nome, email) {
    await AsyncStorage.setItem("usuario", JSON.stringify({
        id: id,
        nome: nome,
        email: email,
    }));
}

export async function salvarToken(token) {
    await AsyncStorage.setItem("token", token);
}

export async function getUsuario() {
    var usuario = await AsyncStorage.getItem("usuario");

    if (!usuario || !usuario.length) {
        return false;
    }

    return usuario;
}

export async function getToken() {
    var token = await AsyncStorage.getItem("token");

    if (!token || !token.length) {
        return false;
    }

    return token;
}

export async function limparDados() {
    await AsyncStorage.removeItem("usuario");
    await AsyncStorage.removeItem("token");
}

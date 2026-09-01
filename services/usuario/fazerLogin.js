import { salvarToken, salvarUsuario } from "./usuarioStorage";

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
    
    if (!data.token || !data.token.length) {
           throw new Error("Email ou senha informados estão incorretos.");
    }

    await salvarUsuario(data.usuario.id, data.usuario.nome, data.usuario.email);
    await salvarToken(data.token);

    return data;
}
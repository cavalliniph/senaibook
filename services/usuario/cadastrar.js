export async function cadastrar(nome, email, senha) {
    const res = await fetch("https://apps-api-livros.ucxocw.easypanel.host/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
        }),
    });

    const data = await res.json();

    console.log(data);

    if (!res.ok) throw Error(data?.mensagem);

    return data;
}
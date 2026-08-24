const token = process.env.EXPO_PUBLIC_TOKEN;

export async function buscarLivro(setLivro, id) {
    const url = `https://apps-api-livros.ucxocw.easypanel.host/livros/${id}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await res.json();
    setLivro(data.livro);
}

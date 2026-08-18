export async function buscarLivros(setLivros) {
    const url = "https://apps-api-livros.ucxocw.easypanel.host/livros";
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",  
        },
    });

    const data = await res.json();
    setLivros(data.livros);
}

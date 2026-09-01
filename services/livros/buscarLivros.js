export async function buscarLivros(setLivros, filtro) {
    const query = filtro ? `&categoria=${filtro}` : "";
    const url = `https://apps-api-livros.ucxocw.easypanel.host/livros?limit=20${query}`;
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",  
        },
    });

    const data = await res.json();
    setLivros(data.livros);
}

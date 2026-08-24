export async function listarCategorias(setCategorias) {
    const url = "https://apps-api-livros.ucxocw.easypanel.host/categorias";
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",  
        },
    });

    const data = await res.json();
    setCategorias(data.categorias);
}

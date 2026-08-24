import { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView,
} from "react-native";

import CardLivro from "../components/CardLivro";
import Header from "../components/Header";
import Pesquisa from "../components/Pesquisa";
import Categoria from "../components/Categoria";

import { buscarLivros } from "../services/livros/buscarLivros";
import { listarCategorias } from "../services/categorias/listarCategorias";

export default function Home() {
    const [livros, setLivros] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [filtro, setFiltro] = useState();

    useEffect(() => {
        listarCategorias(setCategorias);
    }, []);

    useEffect(() => {
        buscarLivros(setLivros, filtro);
    }, [filtro]);

    return (
        <View style={styles.containerPrincipal}>
            <Header />

            <View style={styles.container}>
                <Pesquisa />

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerCategorias}
                    contentContainerStyle={styles.categoriasContent}
                >
                    {categorias.map((categoria, index) => (
                        <Categoria
                            key={index}
                            index={index}
                            categoria={categoria}
                            filtro={filtro}
                            setFiltro={setFiltro}
                        />
                    ))}
                </ScrollView>

                <FlatList
                    style={styles.lista}
                    data={livros}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <CardLivro livro={item} />
                    )}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.columnWrapper}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#fff",
    },

    container: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 40,
    },

    containerCategorias: {
        flexGrow: 0,
        flexShrink: 0,
    },

    categoriasContent: {
        paddingVertical: 5,
    },

    lista: {
        flex: 1,
        marginTop: 20,
    },

    listContent: {
        paddingHorizontal: 8,
        paddingBottom: 20,
    },

    columnWrapper: {
        justifyContent: "space-between",
    },
});
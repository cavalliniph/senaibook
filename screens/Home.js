import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import CardLivro from "../components/CardLivro";
import { buscarLivros } from "../services/livros/buscarLivros";
import Header from "../components/Header";
import Pesquisa from "../components/Pesquisa";

export default function Home() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        buscarLivros(setLivros);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <View style={styles.container}>
                <Pesquisa />
                <FlatList
                    style={{ marginTop: 20 }}
                    data={livros}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    renderItem={({ item }) => <CardLivro livro={item} />}
                    contentContainerStyle={styles.listContent}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: "90%",
        marginHorizontal: 20,
        marginBottom: 40
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: "900",
        color: "#0F172A",
        textAlign: "center",
        marginVertical: 16,
        letterSpacing: 1,
    },
    listContent: {
        paddingHorizontal: 8,
        paddingBottom: 20,
    },
    columnWrapper: {
        justifyContent: "space-between",
    }
});
import { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const corAleatoria = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

export default function Categoria({ index, categoria, filtro, setFiltro }) {

    const selecionado = filtro === categoria;
    const estiloSelecionado = selecionado && styles.selecionado;
    const cor = index % 4 == 0 ? "red" : index % 3 == 0 ? "green" : "blue"

    return (
        <Pressable style={{
            ...styles.button,
            ...estiloSelecionado,
            borderColor: cor,
            }} onPress={() => setFiltro(!selecionado && categoria)}>
            <Text style={styles.texto}>{categoria}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
    },
    texto: {
        color: "#000",
        fontSize: 20,
    },
    selecionado: {
        backgroundColor: "#0000ff40"
    },
});

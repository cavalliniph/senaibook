import { StyleSheet, Text, TextInput, View } from "react-native";
import { Search } from "lucide-react-native";

export default function Pesquisa() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Encontre seu próximo livro</Text>
            <Text style={styles.subtitle}>Conhecimento que inspira. Histórias que transformam.</Text>
            <View style={styles.input}>
                <Search size={20} color="#64748B" style={styles.icon} />
                <TextInput
                    style={{ width: "100%" }}
                    placeholder="Buscar livros..."
                    placeholderTextColor="#64748B"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#f0f"
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 5,
    },
    subtitle: {
        color: "#606060",
    },
    input: {
        marginTop: 30,
        padding: 5,
        borderWidth: 2,
        borderColor: "#d5d5d5",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        gap: 10,
    },
});

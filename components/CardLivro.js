import { Image, Text, View, Pressable, StyleSheet } from "react-native";

export default function CardLivro({ livro, onPress }) {
    return (
        <View style={styles.cardContainer}>
            {/* Imagem centralizada na parte superior */}
            <View style={styles.containerImagem}>
                <Image 
                    source={{ uri: livro.imagem }} 
                    style={styles.imagemLivro} 
                    resizeMode="cover"
                />
            </View>
            
            {/* Informações organizadas verticalmente */}
            <View style={styles.infoLivro}>
                <Text style={styles.categoria} numberOfLines={1}>
                    {livro.categoria?.toUpperCase()}
                </Text>
                <Text style={styles.titulo} numberOfLines={2}>
                    {livro.titulo}
                </Text>
                <Text style={styles.autor} numberOfLines={1}>
                    por {livro.autor}
                </Text>
            </View>

            {/* Botão de Ação */}
            <Pressable 
                style={({ pressed }) => [
                    styles.botaoDetalhes,
                    pressed && styles.botaoDetalhesPressionado
                ]}
                onPress={onPress}
            >
                <Text style={styles.textoBotao}>Ver detalhes</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#0F172A",
        padding: 12,
        margin: 6,
        justifyContent: "space-between",
        shadowColor: "#0F172A",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0,
        width: "50%",
        elevation: 3,
    },
    containerImagem: {
        alignItems: "center",
        marginBottom: 8,
    },
    imagemLivro: {
        width: "100%",
        aspectRatio: 3 / 4,
        borderWidth: 2,
        borderColor: "#0F172A", 
        backgroundColor: "#F1F5F9",
    },
    infoLivro: {
        flex: 1,
        marginBottom: 12,
    },
    categoria: {
        color: "#1D4ED8",
        fontSize: 10,
        fontWeight: "900",
        marginBottom: 2,
    },
    titulo: {
        color: "#0F172A",
        fontSize: 14,
        fontWeight: "800",
        lineHeight: 18,
    },
    autor: {
        color: "#475569",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 2,
    },
    botaoDetalhes: {
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#1D4ED8",
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    botaoDetalhesPressionado: {
        backgroundColor: "#EFF6FF",
    },
    textoBotao: {
        color: "#1D4ED8",
        fontSize: 12,
        fontWeight: "800",
        textTransform: "uppercase",
    },
});
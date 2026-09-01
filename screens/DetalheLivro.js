import { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    Animated,
    Pressable,
} from "react-native";

import Header from "../components/Header";

import { buscarLivro } from "../services/livros/buscarLivro";
import { deletarLivro } from "../services/livros/deletarLivro";

function useFadePulse() {
    const [opacity] = useState(new Animated.Value(0.3));

    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        );
        loop.start();
        return () => loop.stop();
    }, [opacity]);

    return opacity;
}

function SkeletonDetalheLivro() {
    const opacity = useFadePulse();

    return (
        <View style={styles.container}>
            <View style={styles.imagemWrapper}>
                <Animated.View style={[styles.imagem, { opacity }]} />
            </View>

            <Animated.View style={[styles.linhaSkeleton, styles.tituloSkeleton, { opacity }]} />
            <Animated.View style={[styles.linhaSkeleton, styles.autorSkeleton, { opacity }]} />

            <View style={styles.linhaBadges}>
                <Animated.View style={[styles.badgeSkeleton, { opacity }]} />
                <Animated.View style={[styles.badgeSkeleton, { opacity }]} />
            </View>

            <Animated.View style={[styles.linhaSkeleton, { opacity }]} />
            <Animated.View style={[styles.linhaSkeleton, { opacity }]} />
            <Animated.View style={[styles.linhaSkeleton, { width: "60%", opacity }]} />
        </View>
    );
}

export default function DetalheLivro({ route, navigation }) {
    const { id } = route.params;
    // const navigation = useNavigation();

    const [livro, setLivro] = useState(null);

    useEffect(() => {
        setLivro(null);
        buscarLivro(setLivro, id);
    }, [id]);

    useEffect(() => {
        if (livro?.titulo) navigation.setOptions({ title: livro.titulo });
    }, [livro, navigation]);

    const carregando = livro === null;

    return (
        <View style={styles.containerPrincipal}>
            <Header />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {carregando ? (
                    <SkeletonDetalheLivro />
                ) : (
                    <View style={styles.container}>
                        <View style={styles.imagemWrapper}>
                            <Image
                                source={{ uri: livro.imagem }}
                                style={styles.imagem}
                                resizeMode="cover"
                            />
                        </View>

                        <Text style={styles.titulo}>{livro.titulo}</Text>
                        <Text style={styles.autor}>{livro.autor}</Text>

                        <View style={styles.linhaBadges}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeTexto}>{livro.categoria}</Text>
                            </View>
                            <View style={styles.badge}>
                                <Text style={styles.badgeTexto}>{livro.faixa_etaria}</Text>
                            </View>
                        </View>

                        <Text style={styles.descricaoLabel}>Sinopse</Text>
                        <Text style={styles.descricao}>{livro.descricao}</Text>
                        <Pressable onPress={() => deletarLivro(livro.id)}>
                            <Text>Delete</Text>
                        </Pressable>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#fff",
    },

    scrollContent: {
        paddingBottom: 40,
    },

    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
    },

    imagemWrapper: {
        width: "100%",
        alignItems: "center",
    },

    imagem: {
        width: 220,
        height: 320,
        borderRadius: 8,
        backgroundColor: "#eee",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },

    titulo: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 16,
        color: "#1a1a1a",
    },

    autor: {
        fontSize: 16,
        color: "#666",
        marginTop: 4,
    },

    linhaBadges: {
        flexDirection: "row",
        marginTop: 12,
        gap: 8,
    },

    badge: {
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },

    badgeTexto: {
        fontSize: 12,
        fontWeight: "600",
        color: "#444",
    },

    descricaoLabel: {
        fontSize: 16,
        fontWeight: "700",
        marginTop: 24,
        marginBottom: 8,
        color: "#1a1a1a",
    },

    descricao: {
        fontSize: 14,
        lineHeight: 22,
        color: "#333",
    },

    // ---- Skeleton ----
    imagemSkeleton: {
        width: "100%",
        height: 320,
        borderRadius: 12,
        backgroundColor: "#e0e0e0",
    },

    linhaSkeleton: {
        height: 14,
        borderRadius: 6,
        backgroundColor: "#e0e0e0",
        marginTop: 12,
        width: "100%",
    },

    tituloSkeleton: {
        height: 22,
        width: "70%",
        marginTop: 20,
    },

    autorSkeleton: {
        width: "40%",
    },

    badgeSkeleton: {
        height: 26,
        width: 80,
        borderRadius: 20,
        backgroundColor: "#e0e0e0",
        marginRight: 8,
        marginTop: 16,
    },
});
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { fazerLogin } from "../services/usuario/fazerLogin";

export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [carregando, setCarregando] = useState(false);

    async function onFormSubmit() {
        if (!email.trim() || !senha) {
            Alert.alert("Campos obrigatórios", "Preencha seu e-mail e sua senha.");
            return;
        }

        try {
            setCarregando(true);
            await fazerLogin(email.trim(), senha);
            navigation.replace("Home");
        } catch(err) {
            console.log(err);
            Alert.alert("Não foi possível entrar", "Confira seus dados e tente novamente.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.marca}>
                        <Text style={styles.senai}>SENAI</Text>
                        <Text style={styles.book}> Book</Text>
                    </View>

                    <Text style={styles.titulo}>Bem-vindo de volta</Text>
                    <Text style={styles.subtitulo}>
                        Entre para acessar sua biblioteca{"\n"}e descobrir novos livros.
                    </Text>

                    <Image
                        source={require("../assets/login-books.png")}
                        style={styles.ilustracao}
                        resizeMode="contain"
                    />

                    <View style={styles.formulario}>
                        <View style={styles.campo}>
                            <Mail color="#53627C" size={22} strokeWidth={1.8} />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="E-mail"
                                placeholderTextColor="#71809A"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                returnKeyType="next"
                                style={styles.input}
                            />
                        </View>

                        <View style={styles.campo}>
                            <LockKeyhole color="#53627C" size={22} strokeWidth={1.8} />
                            <TextInput
                                value={senha}
                                onChangeText={setSenha}
                                placeholder="Senha"
                                placeholderTextColor="#71809A"
                                secureTextEntry={!senhaVisivel}
                                textContentType="password"
                                returnKeyType="done"
                                onSubmitEditing={onFormSubmit}
                                style={styles.input}
                            />
                            <Pressable
                                onPress={() => setSenhaVisivel((valor) => !valor)}
                                hitSlop={12}
                                accessibilityRole="button"
                                accessibilityLabel={senhaVisivel ? "Ocultar senha" : "Mostrar senha"}
                            >
                                {senhaVisivel ? (
                                    <EyeOff color="#53627C" size={22} strokeWidth={1.8} />
                                ) : (
                                    <Eye color="#53627C" size={22} strokeWidth={1.8} />
                                )}
                            </Pressable>
                        </View>

                        <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>

                        <Pressable
                            onPress={onFormSubmit}
                            disabled={carregando}
                            style={({ pressed }) => [
                                styles.botao,
                                pressed && styles.botaoPressionado,
                                carregando && styles.botaoDesabilitado,
                            ]}
                        >
                            {carregando ? (
                                <ActivityIndicator color="#FFFFFF" />
                            ) : (
                                <Text style={styles.botaoTexto}>Entrar</Text>
                            )}
                        </Pressable>

                        <View style={styles.cadastro}>
                            <Text style={styles.cadastroTexto}>Não tem conta? </Text>
                            <Text style={styles.cadastroLink}>Criar conta</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex: { flex: 1 },
    safeArea: { flex: 1, backgroundColor: "#FBFCFF" },
    container: {
        flexGrow: 1,
        alignItems: "center",
        paddingHorizontal: 28,
        paddingTop: 30,
        paddingBottom: 28,
    },
    marca: { flexDirection: "row", alignItems: "baseline" },
    senai: {
        color: "#0755D9",
        fontSize: 39,
        fontWeight: "900",
        fontStyle: "italic",
        letterSpacing: -2,
    },
    book: { color: "#0B132B", fontSize: 34, fontWeight: "500" },
    titulo: {
        marginTop: 24,
        color: "#0B132B",
        fontSize: 27,
        fontWeight: "700",
        letterSpacing: -0.4,
    },
    subtitulo: {
        marginTop: 8,
        color: "#667089",
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
    },
    ilustracao: { width: "100%", height: 225, marginTop: 8 },
    formulario: { width: "100%", marginTop: 4 },
    campo: {
        minHeight: 60,
        flexDirection: "row",
        alignItems: "center",
        gap: 13,
        paddingHorizontal: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#D9DFEA",
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
    },
    input: { flex: 1, color: "#15213A", fontSize: 16, paddingVertical: 16 },
    esqueciSenha: {
        alignSelf: "flex-end",
        marginTop: 1,
        color: "#0755D9",
        fontSize: 14,
        fontWeight: "500",
    },
    botao: {
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        borderRadius: 12,
        backgroundColor: "#0755D9",
        shadowColor: "#0755D9",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.22,
        shadowRadius: 12,
        elevation: 5,
    },
    botaoPressionado: { opacity: 0.86, transform: [{ scale: 0.99 }] },
    botaoDesabilitado: { opacity: 0.7 },
    botaoTexto: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
    cadastro: { flexDirection: "row", justifyContent: "center", marginTop: 28 },
    cadastroTexto: { color: "#53627C", fontSize: 15 },
    cadastroLink: { color: "#0755D9", fontSize: 15, fontWeight: "600" },
});

import * as LocalAuthentication from "expo-local-authentication";

export async function getBiometria() {
    try {
        const possuiBiometria = await LocalAuthentication.hasHardwareAsync();

        if (!possuiBiometria) {
            return false;
        }

        const biometriaCadastrada = await LocalAuthentication.isEnrolledAsync();

        if (!biometriaCadastrada) {
            return false;
        }

        const resultado = await LocalAuthentication.authenticateAsync({
            promptMessage: "Confirme sua identidade",
            cancelLabel: "Cancelar",
        });

        return resultado.success;
    } catch (error) {
        console.warn("Falha ao acessar a autenticação local:", error);
        return false;
    }
}

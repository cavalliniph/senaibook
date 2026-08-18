import { Bell } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}><Text style={styles.senai}>SENAI</Text> Book</Text>
                <Bell />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 35 },
    container: { width: '100%', marginTop: 40 },
    senai: { fontStyle: 'italic', fontWeight: '900', color: '#1D4ED8' },
    innerContainer: { marginHorizontal: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
});

import { Text, View, StyleSheet } from "react-native";

export default function WorkSection({ hero }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Work</Text>
            
            <View style={styles.row}>
                <Text style={styles.label}>Occupation:</Text>
                <Text style={styles.value}>{hero.work.occupation}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Base:</Text>
                <Text style={styles.value}>{hero.work.base}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 10 },
    title: { fontSize: 22, fontWeight: "bold", color: "#1f2937", marginBottom: 15, textAlign: "center" },
    row: { flexDirection: "column", marginBottom: 12 }, // En columna porque suelen ser textos largos
    label: { fontWeight: "bold", color: "#4b5563", marginBottom: 4 },
    value: { color: "#111827", flexShrink: 1, lineHeight: 20 }
});
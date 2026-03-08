import { Text, View, StyleSheet } from "react-native";

export default function ConnectionsSection({ hero }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connections</Text>
            
            <View style={styles.row}>
                <Text style={styles.label}>Group Affiliation:</Text>
                <Text style={styles.value}>{hero.connections["group-affiliation"]}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Relatives:</Text>
                <Text style={styles.value}>{hero.connections.relatives}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 10 },
    title: { fontSize: 22, fontWeight: "bold", color: "#1f2937", marginBottom: 15, textAlign: "center" },
    row: { flexDirection: "row", marginBottom: 12, flexWrap: "wrap" },
    label: { fontWeight: "bold", color: "#4b5563", marginRight: 5 },
    value: { color: "#111827", flexShrink: 1, lineHeight: 20 }
});
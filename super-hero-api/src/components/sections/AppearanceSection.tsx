import { Text, View, StyleSheet } from "react-native";

export default function AppearanceSection({ hero }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Appearance</Text>
            
            <View style={styles.row}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>{hero.appearance.gender}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Race:</Text>
                <Text style={styles.value}>{hero.appearance.race}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Height:</Text>
                <Text style={styles.value}>{hero.appearance.height[1] || hero.appearance.height[0]}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Weight:</Text>
                <Text style={styles.value}>{hero.appearance.weight[1] || hero.appearance.weight[0]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 10 },
    title: { fontSize: 22, fontWeight: "bold", color: "#1f2937", marginBottom: 15, textAlign: "center" },
    row: { flexDirection: "row", marginBottom: 10, flexWrap: "wrap" },
    label: { fontWeight: "bold", color: "#4b5563", marginRight: 5, textTransform: "capitalize" },
    value: { color: "#111827", flexShrink: 1 }
});
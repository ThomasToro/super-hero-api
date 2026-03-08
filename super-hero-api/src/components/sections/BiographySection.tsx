import { Text, View, StyleSheet } from "react-native";

export default function BiographySection({ hero }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Biography</Text>
            
            <View style={styles.row}>
                <Text style={styles.label}>Full Name:</Text>
                <Text style={styles.value}>{hero.biography["full-name"]}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Alter Egos:</Text>
                <Text style={styles.value}>{hero.biography["alter-egos"]}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Publisher:</Text>
                <Text style={styles.value}>{hero.biography.publisher}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Alignment:</Text>
                <Text style={styles.value}>{hero.biography.alignment}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 10 },
    title: { fontSize: 22, fontWeight: "bold", color: "#1f2937", marginBottom: 15, textAlign: "center" },
    row: { flexDirection: "row", marginBottom: 10, flexWrap: "wrap" },
    label: { fontWeight: "bold", color: "#4b5563", marginRight: 5 },
    value: { color: "#111827", flexShrink: 1, textTransform: "capitalize" }
});
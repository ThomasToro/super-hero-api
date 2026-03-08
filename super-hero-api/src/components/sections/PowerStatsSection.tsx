import { Text, View, StyleSheet } from "react-native";

export default function PowerStatsSection({ hero }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Power Stats</Text>
            
            <View style={styles.row}><Text style={styles.label}>Intelligence:</Text><Text style={styles.value}>{hero.powerstats.intelligence}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Strength:</Text><Text style={styles.value}>{hero.powerstats.strength}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Speed:</Text><Text style={styles.value}>{hero.powerstats.speed}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Durability:</Text><Text style={styles.value}>{hero.powerstats.durability}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Power:</Text><Text style={styles.value}>{hero.powerstats.power}</Text></View>
            <View style={styles.row}><Text style={styles.label}>Combat:</Text><Text style={styles.value}>{hero.powerstats.combat}</Text></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { paddingVertical: 10 },
    title: { fontSize: 22, fontWeight: "bold", color: "#1f2937", marginBottom: 15, textAlign: "center" },
    row: { flexDirection: "row", marginBottom: 8, justifyContent: "space-between", paddingHorizontal: 20 },
    label: { fontWeight: "bold", color: "#4b5563", textTransform: "capitalize" },
    value: { color: "#111827", fontWeight: "600" }
});
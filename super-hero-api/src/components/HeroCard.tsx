import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import HeroInfoModal from "./modal/HeroInfoModal";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// 1. Importamos todas las secciones
import AppearanceSection from "./sections/AppearanceSection";
import BiographySection from "./sections/BiographySection";
import ConnectionsSection from "./sections/ConnectionsSection"; 
import PowerStatsSection from "./sections/PowerStatsSection"; // NUEVO
import WorkSection from "./sections/WorkSection";             // NUEVO

export default function HeroCard({ hero }: any) {
    const [visible, setVisible] = useState(false);
    const [section, setSection] = useState("");

    const openSection = (type: string) => {
        setSection(type);
        setVisible(true);
    };

    const renderSection = () => {
        switch(section){
            case "appearance":
                return <AppearanceSection hero={hero} />;
            case "biography":
                return <BiographySection hero={hero} />;
            case "connections":
                return <ConnectionsSection hero={hero} />;
            // 2. Agregamos los casos para las nuevas secciones
            case "powerstats":
                return <PowerStatsSection hero={hero} />;
            case "work":
                return <WorkSection hero={hero} />;
            default:
                return <Text>No section selected</Text>;
        }
    };

    return(
        <View style={styles.cardContainer}> 

            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => openSection("appearance")}>
                <Ionicons name="body" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => openSection("biography")}>
                <Ionicons name="book" size={24} color="white" />
            </TouchableOpacity>

            {/* Le agregamos marginRight a connections para separarlo del que sigue */}
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => openSection("connections")}>
                <Ionicons name="people" size={24} color="white" />
            </TouchableOpacity>

            {/* 3. Nuevo icono para PowerStats (rayo) */}
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => openSection("powerstats")}>
                <Ionicons name="flash" size={24} color="white" />
            </TouchableOpacity>

            {/* 4. Nuevo icono para Work (maletín) - Este es el último, no necesita marginRight */}
            <TouchableOpacity onPress={() => openSection("work")}>
                <Ionicons name="briefcase" size={24} color="white" />
            </TouchableOpacity>

            <HeroInfoModal visible={visible} setVisible={setVisible}>
                {renderSection()}
            </HeroInfoModal>

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    }
});
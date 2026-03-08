import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function HeroInfoModal({ visible, setVisible, children }: any) {

    return(
        <Modal
            visible={visible}
            transparent={true}
            onRequestClose={() => setVisible(false)}
            animationType="fade"
        >
            <View style={styles.modalPrincipal}>
                <View style={styles.contenidoModal}>
                    
                    {children}

                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                    >
                        <Text>Close</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalPrincipal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenidoModal: {
        width: 300,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
});
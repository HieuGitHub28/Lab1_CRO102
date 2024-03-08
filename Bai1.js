import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Bai1 = () => {
    const HeaderView = ({ title }) => {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={"rgba(0,0,0,0.2)"} />
            <View>
                <HeaderView
                    title={"Header"}
                />
                <HeaderView
                    title={"Trang chủ"}
                />

                <HeaderView
                    title={"Bottom"}
                />
            </View>

        </SafeAreaView>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: 'yellow',
        height: 100
    },
    text: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 150

    },

})
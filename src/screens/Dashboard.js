import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import HeaderTablet from '../components/HeaderTablet';
import app from '../config/app';
import { fonts } from '../utils/fonts';
import color from '../utils/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Dashboard(props) {

    const [isOpenCard, setisOpenCard] = useState(false)

    const btnOpenCard = useCallback(() => {
        setisOpenCard(!isOpenCard)
    }, [isOpenCard])

    const btnCloseCard = useCallback(() => {
        setisOpenCard(!isOpenCard)
    }, [isOpenCard])

    return (
        <View style={styles.container}>
            <HeaderTablet
                textHeader={app.NAME}
                textStyleHeader={styles.txtHeader}
            // textProfile={"Admin"}
            // iconLeft={() => props.navigation.openDrawer()}
            />

            <View style={{ padding: 20 }}>
                <View style={styles.mainContainer}>
                    <View style={styles.headerMain}>
                        <Text style={[styles.txtHeaderWhite, { flex: 1 }]}>Penjualan Bulan {moment(new Date()).format("MMMM YYYY")} </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="chevron-back-outline" size={24} color={color.white} />
                            <View style={{ width: 8 }} />
                            <Ionicons name="chevron-forward-outline" size={24} color={color.white} />
                        </View>
                    </View>
                    {
                        isOpenCard && (
                            <View style={styles.contentMain}>
                                <Text style={[styles.txtHeaderWhite, { flex: 1, textAlign: 'center' }]}>Tap to open card</Text>
                                <TouchableOpacity activeOpacity={1} onPress={btnOpenCard}>
                                    <MaterialCommunityIcons name="arrow-expand-vertical" size={24} color={color.white} style={{ marginRight: 14 }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        !isOpenCard && (
                            <>
                                <View style={styles.contentSecMain}>
                                    <Text style={[styles.txtHeaderWhite, { flex: 1, fontSize: 33 }]}>273.000.000</Text>
                                    <TouchableOpacity activeOpacity={1} onPress={btnCloseCard}>
                                        <Entypo name="align-vertical-middle" size={24} color={color.white} style={{ marginRight: 14 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerBox}>
                                    <View style={styles.boxCard}>
                                        <Text style={styles.textWhiteHeader}>Piutang Dagang</Text>
                                        <Text style={[styles.textWhiteHeader, { fontWeight: "700", fontSize: 15 }]}>105.500.000</Text>
                                    </View>
                                    <View style={styles.boxCard}>
                                        <Text style={styles.textWhiteHeader}>Cash on Delivery</Text>
                                        <Text style={[styles.textWhiteHeader, { fontWeight: "700", fontSize: 15 }]}>105.500.000</Text>
                                    </View>
                                </View>
                                <View style={styles.containerSecBox}>
                                    <View style={styles.boxSecCard}>
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <Text style={styles.textWhiteHeader}>Jatuh Tempo</Text>
                                            <Text style={[styles.textWhiteHeader, { fontWeight: "700", fontSize: 15 }]}>105.500.000</Text>
                                        </View>
                                        <Ionicons name="chevron-forward-outline" size={24} color={color.white} style={{ alignSelf: 'center' }} />
                                    </View>
                                </View>
                            </>
                        )
                    }
                </View>
            </View>
        </View >
    );
}

const styles = {
    container: {
        backgroundColor: color.white,
        flex: 1,
    },
    txtHeader: {
        fontFamily: fonts.montserratBold,
        fontSize: 16,
        marginBottom: 16,
        color: color.black,
    },
    mainContainer: {
        backgroundColor: color.primary,
        borderRadius: 18,
    },
    headerMain: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.whiteColorRgba,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    contentMain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    contentSecMain: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    txtHeaderWhite: {
        fontSize: 14,
        color: color.white
    },
    containerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    boxCard: {
        backgroundColor: color.whiteColorRgba,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    containerSecBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    boxSecCard: {
        backgroundColor: color.whiteColorRgba,
        paddingLeft: 30,
        paddingRight: 15,
        paddingVertical: 20,
        borderRadius: 12,
        flexDirection: 'row'
    },
    textWhiteHeader: {
        fontSize: 12,
        color: color.white
    }
}
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './StyleSheet';

export default DrawerContent = (props) => {

    return (
        <>
            <View style={style.headerDrawerSection}>
                <Text style={{fontSize: 22, color: styles.BLACK_COLOR, fontWeight: 'bold'}}>DHRUV</Text>
                <Text style={{fontSize: 15, color: styles.BLACK_COLOR}}>Account and settings</Text>
            </View>
            
            <DrawerContentScrollView>
                <Pressable style={[style.drawerItem, style.activeItem]} onPress={() => props.navigation.navigate('Wallet')}>
                    <View>
                        <Text style={[style.itemText, style.activeText]}>Wallet</Text>
                        <Text style={{fontSize: 15, color: styles.WHITE_COLOR}}>Use your wallet to save on rides</Text>
                    </View>
                    <Icon name="chevron-right" size={35} color={styles.WHITE_COLOR} />
                </Pressable>

                <Pressable style={style.drawerItem} onPress={() => props.navigation.navigate('Wallet')}>
                    <Text style={[style.itemText]}>TIER Pass</Text>
                    <Icon name="chevron-right" size={35} color={styles.BLACK_COLOR} />
                </Pressable>

                <Pressable style={style.drawerItem} onPress={() => props.navigation.navigate('Wallet')}>
                    <Text style={[style.itemText]}>Vouchers and refferals</Text>
                    <Icon name="chevron-right" size={35} color={styles.BLACK_COLOR} />
                </Pressable>

                <Pressable style={style.drawerItem} onPress={() => props.navigation.navigate('Wallet')}>
                    <Text style={[style.itemText]}>Help & Safety</Text>
                    <Icon name="chevron-right" size={35} color={styles.BLACK_COLOR} />
                </Pressable>
            </DrawerContentScrollView>

            <View style={style.bottomDrawerSection}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 75}}>
                        <Text style={[styles.blackText, {backgroundColor: styles.PRIMARY_COLOR, fontSize: 8, fontWeight: 'bold', textAlign: 'right', padding: 2}]}>MY</Text>
                        <Text style={[styles.blackText, {fontSize: 15, fontWeight: 'bold', textAlign: 'right', letterSpacing: 4}]}>TIER</Text>
                    </View>
                    <Text style={[styles.blackText, {fontSize: 19, marginLeft: 20,}]}>Discover myTIER</Text>
                </View>
                <Icon name="chevron-right" size={30} color={styles.BLACK_COLOR} />
            </View>

        </>
    );
};


const style = StyleSheet.create({

    headerDrawerSection: {
        marginBottom: 7,
        padding: 20,
    },
    
    bottomDrawerSection: {
        flexDirection: 'row',
        align: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderTopWidth: 3,
        borderTopColor: styles.GRAY_COLOR,
    },

    drawerItem: {
        align: 'center',
        height: 90,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    activeItem: {
        backgroundColor: styles.SECONDARY_COLOR,
        marginBottom: 15,
    },

    activeText:{
        color: styles.PRIMARY_COLOR,
        fontWeight: 'bold',
        fontSize: 23,
    },

    itemText :{
        color: styles.BLACK_COLOR,
        fontSize: 20,
    }
})
import React, {useRef} from 'react';
import {View, StyleSheet, Pressable, Text, ImageBackground, Image} from 'react-native';
import {styles} from '../components/StyleSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '../components/BottomSheet';

export default HomeScreen = (props) => {

    console.log("Home Screen Loaded!!!");

    const bottomSheetRef=useRef();

    return (
        <>
            <ImageBackground source={require('../assets/images/map.png')} resizeMode="cover" style={style.image}>

                {/*----------------------------------MARKERS STARTS------------------- */}
                <Pressable style={[style.marker, {top: 100, left: 100}]}>
                    <Text style={style.markerText}>50+</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>

                <Pressable style={[style.marker, {top: 200, left: 50}]}>
                    <Text style={style.markerText}>23</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>

                <Pressable style={[style.marker, {top: 200, left: 300}]}>
                    <Text style={style.markerText}>50+</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>


                <Pressable style={[style.marker, {top: 450, left: 50}]}>
                    <Text style={style.markerText}>13</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>

                <Pressable style={[style.marker, {top: 400, left: 200}]}>
                    <Text style={style.markerText}>25</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>

                <Pressable style={[style.marker, {top: 20, left: 300}]}>
                    <Text style={style.markerText}>13</Text>
                    <Image style={style.imageStyle} source={require('../assets/images/scooter.png')} />
                </Pressable>

                {/*----------------------------------MARKERS ENDS------------------- */}

                <Pressable style={style.drawerButton} onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="equal" size={30} color={styles.BLACK_COLOR} />
                </Pressable>



                <Pressable style={style.scanButton} onPress={() => bottomSheetRef.current?.open()}>
                    <Icon name="qrcode-scan" size={25} color={styles.BLACK_COLOR} />
                    <Text style={[styles.subHeading, {fontWeight: 'bold', marginLeft: 10}]}>Scan to Start</Text>
                </Pressable>

                <BottomSheet reference={bottomSheetRef}/>
            </ImageBackground>
        </>
    );
};


const style = StyleSheet.create({
    
    drawerButton: {
        position: 'absolute',
        top: 20,
        left: 15,
        align: 'center',
        justifyContent: 'center',
        backgroundColor: styles.WHITE_COLOR,
        padding: 20,
        borderRadius: 13,
    },

    scanButton: {
        width: "90%",
        alignSelf: 'center',
        flexDirection: 'row', 
        position: 'absolute',
        bottom: 15,
        align: 'center',
        justifyContent: 'center',
        backgroundColor: styles.PRIMARY_COLOR,
        padding: 20,
        borderRadius: 13,
    },

    image :{
        width: "100%",
        height: "100%",
    },

    marker: {
        borderRadius: 13,
        paddingVertical: 5,
        paddingHorizontal: 9,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: styles.WHITE_COLOR,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },

    markerText:{
        color: styles.BLACK_COLOR,
        fontWeight: "bold",
        fontSize: 18,
    },

    imageStyle: {
        height: 30,
        width: 30,
    }
})
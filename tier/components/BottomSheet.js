import React from 'react';
import {View, Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import {styles} from './StyleSheet';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default BottomSheet = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <RBSheet ref={props.reference} 
            height={Dimensions.get('window').height-70}
            openDuration={500}
            customStyles={{
                container: {
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    backgroundColor: '#f6f7f9'
                }
            }}
            >
                <QRCodeScanner
                    cameraStyle={style.cameraStyle}
                    showMarker={true}
                    markerStyle={style.markerStyle}

                    bottomContent={
                        <TouchableOpacity>
                            <Text style={{fontSize: 20, color: styles.WHITE_COLOR, fontWeight: 'bold'}}>Scan code to begin ride</Text>
                        </TouchableOpacity>
                    }
                />
            </RBSheet>
        </View>
    );   
};


const style = StyleSheet.create({
    
    cameraStyle: {
        opacity: 1.0,
    },

    markerStyle:{
        borderRadius: 13,
        borderColor: styles.PRIMARY_COLOR,
        borderWidth: 5,
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
})
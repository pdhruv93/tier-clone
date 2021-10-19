import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {styles} from '../components/StyleSheet';

export default WalletScreen = () => {

    console.log("Wallet Screen Loaded!!!");

    return (
        <View style={{padding: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.subHeading}>Add passes and offers to ypur wallet to enjoy free rides</Text>

            <View style={[style.card, {backgroundColor: '#bad8fc'}]}>
                <Text style={style.cardTitle}>Promos</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={style.cardContent}>
                        Enjoy ride on us when you share pass with your friends
                    </Text>
                    <View>
                        <Image style={style.imageStyle} source={require('../assets/images/riding.png')} />
                    </View>
                </View>
            </View>


            <View style={[style.card, {backgroundColor: '#047a71'}]}>
                <Text style={[style.cardTitle, {color: styles.WHITE_COLOR}]}>Save with TIER pass</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[style.cardContent, {color: styles.WHITE_COLOR}]}>
                        Save money when you pay for your rides upfront
                    </Text>
                    <View>
                        <Image style={style.imageStyle} source={require('../assets/images/download.png')} />
                    </View>
                </View>
            </View>

        </View>
    );
};


const style = StyleSheet.create({
    
    card:{
        marginTop: 20,
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 13,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "900",
        marginBottom: 10,
        color: styles.BLACK_COLOR,
    },

    cardContent: {
        fontSize: 18,
        color: styles.BLACK_COLOR,
        width: "70%"
    }, 

    imageStyle: {
        height: 150, 
        aspectRatio: 1,
    }

})
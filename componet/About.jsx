import {View,Text, StyleSheet} from  'react-native'
export default function About(){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About shashi</Text>
        </View>
        
    )
}
 const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text:{
        fontSize: 20,
        color: 'red',
    }
})
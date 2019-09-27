import React, { Component } from 'react'
import { 
    StyleSheet, View, Image, ScrollView, 
    Dimensions, TouchableOpacity,
    FlatList, Modal, TextInput, ActivityIndicator, RefreshControl, 
    TouchableWithoutFeedback, BackHandler, ToastAndroid, Linking, Alert,Platform,Animated,Easing,Text
} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const { width, height } = Dimensions.get('screen')

class SettingScreen extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <View style= {{flex:1}}>
                <View style= {{flex:1,backgroundColor:'rgbA(255,255,255,0.8)',justifyContent:'center'}}>
                    <TouchableOpacity style = {{marginHorizontal:5,backgroundColor:'gold',justifyContent:'center',alignItems:'center'}}>
                        <Text style = {{fontSize:20,fontWidth:'bold'}} > No Resize </Text>
                    </TouchableOpacity>
                    <View style = {{marginLeft:5,marginTop:5,backgroundColor:'red',justifyContent:'center',alignItems:'center',width:100,height:300}}>

                    </View>
                </View>
                <View style= {{flex:1,backgroundColor:'gold',justifyContent:'center'}}>
                    
                    <TouchableOpacity style = {{marginHorizontal:moderateScale(5),backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
                        <Text style = {{fontSize:moderateScale(20),fontWidth:'bold'}}>Have Resize</Text>
                    </TouchableOpacity>
                    <View style = {{marginLeft:moderateScale(5),marginTop:moderateScale(5),backgroundColor:'red',justifyContent:'center',alignItems:'center',width:scale(100),height:verticalScale(300)}}>

                    </View>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingScreen)

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
    },
})
import React, { Component } from 'react'
import { 
    StyleSheet, View, Image, ScrollView, 
    Dimensions, TouchableOpacity,
    FlatList, Modal, TextInput, ActivityIndicator, RefreshControl, 
    TouchableWithoutFeedback, BackHandler, ToastAndroid, Linking, Alert,Platform,Animated,Easing,Text
} from 'react-native'
import MapView from 'react-native-maps';
import Images from "../../assets/images/Images";

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const { width, height } = Dimensions.get('screen')

class CampingScreen extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             active: 'all'
        }
    }

    renderHeader = () => {

        return (

            <View style={styles.headerContainer}>
                <View style = {styles.header}>
                    <View style = {{flex:2,flexDirection:'row',alignContent:'center',backgroundColor:'transparent'}}>
                        <View style = {{justifyContent:'center',alignItems:'center'}}>
                            <View style = {styles.location}>
                                <Image
                                    style = {{width: 14,height:14,tintColor:'#fff'}}
                                    source = {Images.iconLocationArrow}
                                />
                            </View>
                        </View>
                        <View style = {styles.options}>
                            <Text style = {{fontSize:12,color:'grey'}}>Detected Location</Text>
                            <Text style = {{fontSize:14,fontWidth:'300'}}>Northern Island</Text>
                        </View>
                    </View>
                    <View style = {{flex:1, alignItems: 'flex-end'}}>
                        <Image
                            style = {{width: 24,height:24}}
                            source = {Images.iconSetting}
                        />
                    </View>
                </View>
                {this.renderTabs()}
            </View>

        )

    }

    renderMap = () => {
        return (
            <View style = {styles.map}>
                    <MapView
                        style={{flex:1, height: height * 0.5, width: width}}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        >
                        </MapView>
                </View>
        )
    }

    renderTabs = () => {
        const {active} = this.state
        return(
            <View style = {styles.tabs}>
                <TouchableOpacity style = {[styles.tab, active === 'all' ? styles.activeTab : null]} onPress = {() => {
                        this.setState({
                            active:'all'
                        })
                    }}>
                    <Text style = {[styles.tabTitle, active === 'all' ? styles.activeTabTitle : null]}
                    >All spots</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.tab, active === 'tent' ? styles.activeTab : null]}
                onPress = {() => {
                        this.setState({
                            active:'tent'
                        })
                    }}>
                    <Text style = {[styles.tabTitle, active === 'tent' ? styles.activeTabTitle : null]}>Tenting</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.tab, active === 'rv' ? styles.activeTab : null]} onPress = {() => {
                        this.setState({
                            active:'rv'
                        })
                    }}>
                    <Text style = {[styles.tabTitle, active === 'rv' ? styles.activeTabTitle : null]}
                    >RV Camping</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    renderList = () => {

        return (
            <View>
                <Text>Camping Name</Text>
            </View>
        )

    }
    render() {
        return (
            <View style = {styles.container}>
                {this.renderHeader()}
                <ScrollView >
                    
                    
                    {this.renderMap()}

                    {this.renderList()}
                </ScrollView>
            </View>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CampingScreen)

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
    },

    contentContainer:{
        paddingTop:30
    },

    headerContainer: {
        top: 0,
        height: height * 0.15,
        width: width,
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        height:height * 0.15,
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 14,
    },
    location:{
        width:24,
        height:24,
        backgroundColor: 'orange',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    options:{
        flex:1,
        paddingHorizontal: 12,
    },
    map:{
        flex: 1,
    },
    tabs:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:height * 0.05,

    },
    tab:{
        paddingHorizontal: 14,
        justifyContent: 'flex-end',
    },
    tabTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 12,
    },
  activeTab: {
    borderBottomColor: '#FF7657',
    borderBottomWidth: 3,
  },
  activeTabTitle: {
    
    color: '#FF7657',
  },
})
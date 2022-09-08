import React from 'react'
import { View, Text, Image, Button, } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#FAFAFA"
        }}>

            <View style={{
                marginTop: 30,
                justifyContent: 'space-between',
                paddingHorizontal: 22,
            }}>
                <Image style={{
                    width: 350,
                    height: 150,
                    borderRadius: 10
                }}
                    source={require('../img/image/premium.png')} />
            </View>

            <View style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
            }}>
                <View>
                    <Text style={{
                        color: '#1F1F1F',
                        fontSize: 22,
                        fontWeight: '700'
                    }}>
                        Kimberly Evans
                    </Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#696969',
                        fontStyle: 'italic',
                        fontWeight: '700',
                    }}>
                        Edit profile
                    </Text>
                </View>
                <View style={{
                    height: 50,
                    width: 50,
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                }}>
                    <Image style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                    }} source={require('../img/image/Bitmap.png')} />
                </View>
            </View>

            <ScrollView
                style={{
                    flexDirection: 'row',
                    marginBottom: -80,
                    marginTop: 20,
                    width: 400,
                    height: 250,
                }}>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    paddingHorizontal: 28,
                    marginBottom: 2
                }}>
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#383838",
                        fontWeight: '700',
                        fontStyle: 'italic'
                    }}>My SoundCloud</Text>

                    <View style={{
                        width: 70,
                        height: 20,
                        backgroundColor: '#FF6D26',
                        justifyContent: 'center',
                        borderRadius: 5
                    }}>
                        <Text style={{
                            fontSize: 10,
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontWeight: '700',
                            fontStyle: 'italic'
                        }}>
                            Free User
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    paddingHorizontal: 28,
                    marginBottom: 2
                }}>
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#383838",
                        fontWeight: '700',
                        fontStyle: 'italic'
                    }}>Music quality</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    paddingHorizontal: 28,
                    marginBottom: 5
                }}>
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#383838",
                        fontWeight: '700',
                        fontStyle: 'italic'
                    }}>Help</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>

                {/* My playlists */}

                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: 5,
                    paddingLeft: 30
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 22,
                            color: "#1F1F1F",
                            fontWeight: '700'
                        }}>My playlists</Text>

                    </View>
                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity 
                        style={{
                            height: 140,
                            backgroundColor: "#FAFAFA",
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 0.5,
                            marginBottom: 10,
                            width: 116
                        }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5 }}
                            source={require('../img/image/Playlist1.png')}
                        />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingHorizontal: 10,
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Summer Vibes
                            </Text>
                        </View>
                        <Text style={{
                            fontSize: 8,
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#696969",
                            paddingTop: 3
                        }}>
                            1.300.231 FOLLOWERS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 140,
                        backgroundColor: "#FAFAFA",
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 0.5,
                        marginBottom: 10,
                        width: 116
                    }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5 }}
                            source={require('../img/image/Playlist2.png')}
                        />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Rap Zone
                            </Text>
                        </View>
                        <Text style={{
                            fontSize: 8,
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#696969",
                            paddingTop: 3
                        }}>
                            650.231 FOLLOWERS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 140,
                        backgroundColor: "#FAFAFA",
                        marginLeft: 10,
                        marginTop: 10,
                        borderRadius: 0.5,
                        marginBottom: 10,
                        width: 116
                    }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 5 }}
                            source={require('../img/image/Playlist3.png')}
                        />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Music Mix
                            </Text>
                        </View>
                        <Text style={{
                            fontSize: 8,
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            fontWeight: "bold",
                            color: "#696969",
                            paddingTop: 3
                        }}>
                            50.231 FOLLOWERS
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: 677 }}>
                <View style={{ width: 280, height: 2, backgroundColor: "#FF6D26" }} />
                <View style={{ width: 120, height: 2, backgroundColor: "#CAC9C9" }} />
            </View>

            <View style={{
                flexDirection: 'row',
                width: 390,
                height: 52,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
            }}>


                <View style={{
                    marginLeft: 160
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 13,
                        lineHeight: 13,
                        fontWeight: '700',
                        color: "#1F1F1F"
                    }}>
                        All Mine
                    </Text>
                    <Text style={{
                        color: "#FF7F41",
                        textAlign: 'center',
                        fontSize: 13,
                        fontWeight: '700',
                        fontStyle: 'italic'
                    }}>
                        Kanye West
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Player screen")}
                    style={{
                        marginLeft: 120
                    }}>
                    <Icon name="play-circle-outline" style={{ color: "#FF7634", }} size={30} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Profile;
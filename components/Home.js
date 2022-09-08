import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Home = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#F2F2F2",
            flex: 1
        }}>

            <StatusBar hidden={true} />
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20,
                    width: "100%"
                }}>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center"
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#FF6D26"
                    }}>Host now</Text>
                </View>
            </View>



            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 80 }}>

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist1.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
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

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist2.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#1F1F1F",
                            fontWeight: "bold"
                        }}>Rap Zone</Text>
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

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist3.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#1F1F1F",
                            fontWeight: "bold"
                        }}>Rap Zone</Text>
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
            </ScrollView>


            {/* Mood */}

            <View 
            style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                width: "100%",
                alignItems: "center",
                marginTop: -220,
            }}>
                <View style={{ width: "50%" }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#1F1F1F"
                    }}>Mood</Text>
                    <View style={{
                        height: 4,
                        width: 115,
                        marginTop: -5
                    }}>
                    </View>
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: -140 }}>
                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist4.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#1F1F1F",
                            fontWeight: "bold"
                        }}>Shower Time</Text>
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

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist5.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#1F1F1F",
                            fontWeight: "bold"
                        }}>Old School</Text>
                    </View>
                    <Text style={{
                        fontSize: 8,
                        textAlign: 'center',
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#696969",
                        paddingTop: 3
                    }}>
                        300.231 FOLLOWERS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#F2F2F2",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist6.png')} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#1F1F1F",
                            fontWeight: "bold"
                        }}>Rap Zone</Text>
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
            </ScrollView>




            {/* Popular artists */}
            <View>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: -230,
                }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 26,
                            color: "#1F1F1F"
                        }}>Popular artists</Text>
                        <View style={{
                            height: 4,
                            width: 115,
                            marginTop: -5
                        }}>
                        </View>
                    </View>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginBottom: -150 }}>

                    <TouchableOpacity
                        style={{
                            height: 110,
                            backgroundColor: "#F2F2F2",
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 0.5,
                            marginBottom: 10,
                            width: 85
                        }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={require('../img/image/Playlist7.png')} />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingTop: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Ed Sheeran</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 110,
                            backgroundColor: "#F2F2F2",
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 0.5,
                            marginBottom: 10,
                            width: 85
                        }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={require('../img/image/Playlist8.png')} />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingTop: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Rita Ora</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 110,
                            backgroundColor: "#F2F2F2",
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 0.5,
                            marginBottom: 10,
                            width: 80
                        }}>
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={require('../img/image/Playlist7.png')} />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingTop: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Eminem</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 110,
                            backgroundColor: "#F2F2F2",
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 0.5,
                            marginBottom: 10,
                            width: 80
                        }}
                    >
                        <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            source={require('../img/image/Playlist9.png')} />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "row",
                            paddingTop: 10,
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: "#1F1F1F",
                                fontWeight: "bold"
                            }}>Dua Lipa</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: 677 }}>
                <View style={{ width: 280, height: 2, backgroundColor: "#FF6D26" }} />
                <View style={{ width: 120, height: 2, backgroundColor: "#CAC9C9" }} />
            </View>

            <View style={{
                marginTop: -60,
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
        </View>

    )
}
export default Home;
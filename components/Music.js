import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';



const Music = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#FAFAFA",
            flex: 1
        }}>

            <View style={{
            }}>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
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
                    }}>Host now
                    </Text>
                </View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 80 }}>

                <TouchableOpacity
                    style={{
                        height: 200,
                        backgroundColor: "#FAFAFA",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 0.5,
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
                        }}>Summer Vibes</Text>
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
                        backgroundColor: "#FAFAFA",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 0.5,
                        marginBottom: 10,
                        width: 150
                    }}>
                    <Image
                        source={require('../img/image/Playlist10.png')} />
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
                        backgroundColor: "#FAFAFA",
                        marginLeft: 20,
                        marginTop: 10,
                        borderRadius: 0.5,
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

            {/* Recents */}
            <View>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: -100,
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 26,
                            color: "#1F1F1F"
                        }}>Recents</Text>

                    </View>
                </View>
            </View>
            <ScrollView
                style={{
                    flexDirection: 'row',
                    marginBottom: -80,
                    marginTop: -50,
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
                    padding: 16,
                    marginBottom: 5
                }}>
                    <Icon name="trending-up-outline" color={"#FF6D26"} size={20} />
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#000",
                        fontWeight: "bold",
                        marginLeft: 13
                    }}>Ranking</Text>

                    <View style={{
                        width: 50,
                        height: 20,
                        backgroundColor: '#FF6D26',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginLeft: 140
                    }}>
                        <Text style={{
                            fontSize: 10,
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontWeight: '700',
                            fontStyle: 'italic'
                        }}>
                            News
                        </Text>
                    </View>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                    marginBottom: 5

                }}>
                    <Icon name="bookmark-outline" color={"#FF6D26"} size={20} />
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#000",
                        fontWeight: "bold",
                        marginLeft: -145
                    }}>Weekly featured</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                    marginBottom: 5
                }}>
                    <Icon name="disc-outline" color={"#FF6D26"} size={20} />
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#000",
                        fontWeight: "bold",
                        marginLeft: -200
                    }}>Podcast</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                    marginBottom: 5
                }}>
                    <Icon name="mic-outline" color={"#FF6D26"} size={20} />
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#000",
                        fontWeight: "bold",
                        marginLeft: -228
                    }}>Live</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: "#FFFFFF",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                    marginBottom: 5
                }}>
                    <Icon name="clipboard-outline" color={"#FF6D26"} size={20} />
                    <Text style={{
                        justifyContent: "center",
                        alignItems: 'center',
                        fontSize: 16,
                        color: "#000",
                        fontWeight: "bold",
                        marginLeft: -195
                    }}>Concerts</Text>

                    <Icon name="chevron-forward-outline" style={{ fontSize: 22, }} />
                </TouchableOpacity>

                <View>
                    <View>
                        <Text style={{
                            paddingHorizontal: 20,
                            fontWeight: "bold",
                            fontSize: 26,
                            color: "#1F1F1F"
                        }}>Playlists</Text>
                    </View>
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
        </View>
    )
}
export default Music;
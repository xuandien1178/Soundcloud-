import React from 'react'
import { SafeAreaView, View, Image, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Search = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#FAFAFA', flex: 1 }}>

            <View style={{
                marginTop: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
            }}>
                <View style={style.searchInputContainer}>
                    <Icon style={{
                        paddingHorizontal: 10,
                    }} name="search-outline" color='#B9B9B9' size={25} />
                    <TextInput style={{
                        fontStyle: "italic",
                        fontWeight: "bold"
                    }} placeholder="Search that song!" color='#AFAFAF' size={15} />
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
                    }} source={require('../img/image/avarta.png')} />
                </View>
            </View>

            <View>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 20,
                    width: "100%",
                    alignItems: "center",
                    marginTop: 10,
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
                    marginTop: 10,
                    width: 400,
                    height: 40,
                }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 55,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song1.png')} />
                    <View style={{ marginLeft: -180 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Better Now</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Post Malone</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song2.png')} />
                    <View style={{ marginLeft: -120 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Kimberly Evans</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Calvin Harris, Dua Lipa</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song3.png')} />
                    <View style={{ marginLeft: -90 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>I Like It</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Cardi B, Bad Bunny, J Balvin
                        </Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song4.png')} />
                    <View style={{ marginLeft: -60 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Girls Like You (feat Cardi B)</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Maroon 5, Cardi B</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song5.png')} />
                    <View style={{ marginLeft: -170 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Back To You</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Selena Gomez</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song6.png')} />
                    <View style={{ marginLeft: -160 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Lucid Dreams</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Juice WRLD</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song7.png')} />
                    <View style={{ marginLeft: -110 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>No Tears Left To Cry</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Ariana Grande</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song8.png')} />
                    <View style={{ marginLeft: -160 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Nice For What</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Drake</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "#FAFAFA",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 390,
                    height: 60,
                    padding: 16,
                }}>
                    <Image style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                    }} source={require('../img/image/song9.png')} />
                    <View style={{ marginLeft: -170 }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#2C2C2C",
                            fontWeight: "bold",
                        }}>Youngblood</Text>
                        <Text style={{
                            fontSize: 14,
                            color: "#9F9F9F",
                            fontStyle: "italic"
                        }}>Edit profile</Text>
                    </View>
                    <Icon name="close-outline" style={{ fontSize: 18 }} />
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
    );
};

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
    },

});
export default Search;
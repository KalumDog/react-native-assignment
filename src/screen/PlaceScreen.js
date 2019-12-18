import React from 'react'
import {
    FlatList,
    SafeAreaView,
    View,
    Image
} from 'react-native'
import TopBar from '../component/common/TopBar'
import Footer from '../component/common/Footer'
import { searchPlace } from '../api/SearchPlaceAPI'
import PlaceItem from '../component/feature/Place/PlaceItem'

const styles = {
    container: {
        flex: 1,
    },
    txtInput: {
        height: 30,
        width: 200,
        borderColor: 'grey',
        borderWidth: 1
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 50,
        alignItems: 'center',
        paddingVertical: 20
    },
    btn: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontSize: 18
    },
    footerContainer: {
        width: '100%',
        marginTop: 'auto',
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    loadingContainer: {
        alignItems: 'center',
        paddingTop: 10
    },
    loading: {
        width: 44,
        height: 44
    }
}

export default class PlaceScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <TopBar title={'Place'} previousPage={() => navigation.goBack()}/>,
            headerLeft: null
        }
      };

    state = {
        data: [],
        pagetoken: '',
        isFirstLoad: true
    }

    componentDidMount() {
        searchPlace()
        .then(data => {
            this.setState({
                data: data.results,
                pagetoken: data.next_page_token,
                isFirstLoad: false
            })
        }).catch(err => {
            console.log('err', err)
            this.setState({ isFirstLoad: false })
        })
        
    }

    fetchNextPlace(pagetoken) {
        searchPlace({ pagetoken })
        .then(data => {
            this.setState({
                data: [...this.state.data, ...data.results],
                pagetoken: data.next_page_token
            })
        }).catch(err => {
            console.log('err', err)
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {
                    this.state.isFirstLoad &&
                    <View style={styles.loadingContainer}>
                        <Image style={styles.loading} source={{ uri: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif' }} />
                    </View>
                }
                <FlatList 
                    data={this.state.data}
                    renderItem={({ item }) => 
                    <PlaceItem 
                        name={item.name}
                        rating={item.rating}
                        user_ratings_total={item.user_ratings_total}
                        vicinity={item.vicinity}/>}
                    keyExtractor={item => item.id}
                    onEndReached={() => {
                        if(this.state.pagetoken) {
                            this.fetchNextPlace(this.state.pagetoken)
                        }
                     }}
                    onEndReachedThreshold={0.2}
                />
                <View style={styles.footerContainer}>
                    <Footer />
                </View>
            </SafeAreaView>
        )
    }
}

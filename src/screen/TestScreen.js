import React from 'react'
import {
    SafeAreaView,
    TextInput,
    Text,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import TopBar from '../component/common/TopBar'
import Footer from '../component/common/Footer'

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    txtInput: {
        height: 30,
        width: 200,
        borderColor: 'gray',
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
    txtIns: {
        fontWeight: 'bold',
        fontSize: 18
    },
    txtResult: {
        fontWeight: '500',
        fontSize: 16
    },
    footerContainer: {
        width: '100%',
        marginTop: 'auto',
        borderTopWidth: 1,
        borderColor: 'grey'
    }
}

export default class TestScreen extends React.Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <TopBar title={'Test'} nextPage={() => navigation.navigate('Place')}/>,
            headerLeft: null
        }
        
      };

    state = {
        result: 0,
        input: 0
    } 

    calculate(x) {
        const initialValue = 3
        let initialAdd = 2
        let result = x > 0 ? initialValue : 0

        for(var i = 1; i < x; i++) {
            result += initialAdd
            if(!Number.isSafeInteger(result)) {
                result = "The result over integer range!"
                break;
            }
            initialAdd += 2
        }

        this.setState({ result })
    
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.txtIns}>Find the next value in the given sequence</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.txtInput}
                            defaultValue={0}
                            onChangeText={input => this.setState({ input })}
                            autoFocus
                            keyboardType={'number-pad'} />
                        <TouchableOpacity style={styles.btn} onPress={() => this.calculate(this.state.input)}>
                            <Text style={styles.btnText}>Calculate</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.txtResult}>Calculation Result: {this.state.result}</Text>
                    <View style={styles.footerContainer}>
                        <Footer />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

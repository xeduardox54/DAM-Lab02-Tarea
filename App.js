import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Image
} from 'react-native';

export default class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: '',
      newUserValue: '',
      passwordValue: '',
      newPasswordValue: '',
      count: 0,
    }
  }

  changeTextUserInput = text => {
    this.setState({userValue: text});
  };
  changeTextPasswordInput = text => {
    this.setState({passwordValue: text});
  };

  onPress = () => {
    this.setState({
      newUserValue: this.state.userValue,
      newPasswordValue: this.state.passwordValue,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./img/logo2.png')}/>

        <Text style={styles.text}>
          Usuario:
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text=>this.changeTextUserInput(text)}
        />
        <Text style={styles.text}>
          Contraseña:
        </Text>
        <TextInput
          secureTextEntry={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text=>this.changeTextPasswordInput(text)}
        />

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Ingresar </Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          {this.state.newUserValue}
        </Text>
        <Text style={styles.text}>
          {this.state.newPasswordValue}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF'
  },
  image: {
    width: 340,
    resizeMode: 'contain'
  }
})
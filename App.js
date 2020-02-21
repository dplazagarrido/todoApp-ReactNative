import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo  = () => {
    var newTodo = this.state.text
    var arr = this.state.todo
    arr.push(newTodo)
    this.setState({todo: arr, text: ""})
  }
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text>{ t }</Text>
      )
    })
  }
  render(){
    return(
      <View style={style.viewStyle}>
        <Text>Todo App!</Text>
        <TextInput
          style={style.inputStyle}
          onChangeText={(text) => this.setState({text})}
          value = {this.state.text}
        />
        <Button
          title='Add Todo'
          color= 'green'
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const style = {
  viewStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  inputStyle: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1
  }
}

export default App 

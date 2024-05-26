import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Modal, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("")
  const [tareas, setTareas] = useState([{id:1,value:"Darle mimitos a Angie"}])

  const onHandlerChangeItem = (t) => setText(t)
  const addItem = () => {
    setTareas(tareasActuales => [
      ...tareasActuales,
      {id: Math.random().toString(), value:text}
    ])
    setText("")
  }
  const borrarTarea = (id) => {
    setTareas(tareasActuales => tareasActuales.filter(tarea => tarea.id !== id));
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.value}</Text>
      <Button title="Borrar" onPress={()=>borrarTarea(item.id)}/>
    </View>
  );

  return (
    <>
    <View style={styles.container}>
      <Text>Les dsapdosar agua</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput 
          placeholder='Pasear al perro?'
          onChangeText={onHandlerChangeItem}
          value={text}
          />
        <Button title="Agregar" onPress={addItem}/>
      </View>
      <FlatList
        data={tareas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton:{
    backgroundColor: 'aqua',
  },
  renglon:{
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 10,
  }
});

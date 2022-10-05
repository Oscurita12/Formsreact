import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form'; //Componentes que permiten la validación de la información de TextInput 

export default function App() {
  //Definir los datos del formulario 
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      salary: '',
      age: '',
      dateofbirth:'',
    }
  })
  //Metodo para capturar los datos - onSubmit 
  const onSubmit = data => console.log(data)
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Za-zÑñÁÉÚÍÓÚáéíóú ]+$/i, //Letras y espacios
          maxLength: 30,
          minLength:5
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="Nombre Completo"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="fullname" //Estado a validar 
      />
      {errors.fullname?.type == "required" && <Text style={{ color: 'red' }}>El nombre es obligatorio</Text>}
      {errors.fullname?.type == "pattern" && <Text style={{ color: 'red' }}>El nombre solo debe tener letras y/o espacios</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{color:'red'}}>El nombre no puede exceder de 30 caracteres</Text>}
      {errors.fullname?.type == "minLength" && <Text style={{color:'red'}}>El nombre debe tener mínimo 5 caracteres</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/, //Emails válidos
          maxLength: 200,
          minLength:7
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="Correo Electrónico"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email" //Estado a validar 
      />
      {errors.email?.type == "required" && <Text style={{ color: 'red' }}>El correo electrónico es obligatorio</Text>}
      {errors.email?.type == "pattern" && <Text style={{ color: 'red' }}>Ingrese un correo electrónico válido</Text>}
      


      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]*(\.?)[ 0-9]+$/, // Salario 
          max: 10000000,
          min:2000000
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="Ingrese salario"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="salary" //Estado a validar 
      />
      {errors.salary?.type == "required" && <Text style={{ color: 'red' }}>El salario es obligatorio</Text>}
      {errors.salary?.type == "pattern" && <Text style={{ color: 'red' }}>El salario es solo números</Text>}
      {errors.salary?.type == "max" && <Text style={{ color: 'red' }}>El salario no puede exceder los 10 millones</Text>}
      {errors.salary?.type == "min" && <Text style={{ color: 'red' }}>El salario no puede ser menor a 2 millones </Text>}



      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[0-9]*(\.?)[ 0-9]+$/, // Salario 
          max: 35,
          min:18
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="Edad"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="age" //Estado a validar 
      />
      {errors.age?.type == "required" && <Text style={{ color: 'red' }}>El salario es obligatorio</Text>}
      {errors.age?.type == "pattern" && <Text style={{ color: 'red' }}>El salario es solo números</Text>}
      {errors.age?.type == "max" && <Text style={{ color: 'red' }}>La edad no puede exceder los 35 años</Text>}
      {errors.age?.type == "min" && <Text style={{ color: 'red' }}>La edad no puede ser menor a los 18 años</Text>}



      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{8,15}/, // Salario 
          
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password" //Estado a validar 
      />
      {errors.password?.type == "required" && <Text style={{ color: 'red' }}>La contraseña es obligatoria</Text>}
      {errors.password?.type == "pattern" && <Text style={{ color: 'red' }}>Entre 8 y 15 caracteres, un caracter especial, un número y una letra mayúscula</Text>}


      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/, // Salario 
          
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            placeholder="aaaa-mm-dd"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="dateofbirth" //Estado a validar 
      />
      {errors.dateofbirth?.type == "required" && <Text style={{ color: 'red' }}>La fecha es obligatoria</Text>}
      {errors.dateofbirth?.type == "pattern" && <Text style={{ color: 'red' }}>El formato de fecha es aaaa-mm-dd</Text>}
      


      <TouchableOpacity
      style={{backgroundColor:'#800080', padding:10, borderRadius: 10, marginTop: 20}}
      onPress={handleSubmit(onSubmit)}
      >
        <Text style={{color:'white'}}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FF00FF',
    textAlign: 'center',
    borderRadius: 10,
    color: 'black',
    marginBottom:10
  }
});

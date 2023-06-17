import { StyleSheet} from 'react-native'

const screenStyle = StyleSheet.create({
    scrollView: {
        backgroundColor: '#21ADC3',
        flex: 1,
    },
    
    ekran: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8ddba',
        marginRight: 20,
    },
      lista: {
        alignItems: 'center',
      },
      input: {
        width: '50%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,  
      },
      inputLabel: {
          fontFamily: 'Verdana',
          fontSize: 17,
          marginBottom: 7,
      },
      heading: {
          fontFamily: 'Verdana',
          fontSize: 25,
      },
      podaci: {
          fontFamily: 'Verdana',
          fontSize: 14,
          marginBottom: 20,
      },
      flatList:{
        width: '100%',
        height:30,
        position: 'center'
      },
})

export default screenStyle;
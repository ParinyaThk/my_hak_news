// import 
// app regi
/// from react native
import { AppRegistry } from 'react-native'
// import
// app container
import AppContainer from './AppContainer'


// App registration and rendering
// app regi
// regi component
// MyApp
// () => AppContainer
AppRegistry.registerComponent('MyApp', () => AppContainer)

// app regi
// run app
// MyApp
// root tag
// doc get element by id
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') })

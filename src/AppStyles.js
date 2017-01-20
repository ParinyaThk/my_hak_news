// import style sheet react native
import { StyleSheet } from 'react-native'

// material design, basically it is android layout style
// import color from react native material design style
import { color } from 'react-native-material-design-styles'

// export default
// style sheet
// create
export default StyleSheet.create({
  // link with orange bold color and bold text
  aboutLink: {
    // orange color
    color: color.paperOrange600.color,
    // font bold
    fontWeight: 'bold',
    // padding 10
    padding: 10
  },
  
  // able to align in a smart way
  // card
  // flex 1
  // justify content
  // center
  card: {
    flex: 1,
    justifyContent: 'center'
  },
  
  // title weigth
  title: {
    // fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  
  // set small img
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  },
  
  // header orange 500
  header: {
    backgroundColor: color.paperBlue300.color
  },
  
  // flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'>
  // flex:1 means flex grow
  body: {
    flex: 1,
    // color
    backgroundColor: color.paperOrange300.color
  },
  
  // row center
  // space around
  row: {
    // align with other item center
    alignItems: 'center',
    
    // space around this row
    justifyContent: 'space-around',
    
    // dir row
    flexDirection: 'row' // display horizontal
    // height: 50,
  },
  
  // 
  buttonRow: {
    justifyContent: 'center', // center in the container 
    paddingBottom: 10
  },
  
  
  itemRow: {
    flexDirection: 'row', // row
    paddingTop: 10, // top 10
    padding: 2, // other 2

    // marginTop: 1,
    backgroundColor: 'rgb(223,223,223)', // color
    // justifyContent: 'space-between',
    
    alignItems: 'flex-start', // at the start of container
    
    flexWrap: 'wrap' // item too logn wrap
  },
  
  // sub row
  itemSubRow: {
    // back color
    backgroundColor: 'rgb(223,223,223)',
    // space around
    justifyContent: 'space-around',
    // row
    flexDirection: 'row',
    // border width 1
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  
  // column for direciton
  column: {
    // justifyContent: 'space-around',
    flexDirection: 'column'
  // flex: 1,
  // alignItems: 'center'
  },
  
  // box
  box: {
    alignItems: 'center', // center
    // flex: 1,
    // justifyContent: 'center',
    borderWidth: 1 // 1 borer
  // height: 20
  },
  
  // scrolll view container
  // flex-grow 1
  scrollViewContainer: {
    // height: 400,
    flex: 1
  },
  
  scrollViewStyle: {
    // borderWidth: 1
  },
  
  
  // scroll view
  // content style, some padding top and bottom
  scrollViewContentContainerStyle: {
    // pad 2
    paddingTop: 2,
    // pad bottom 2
    paddingBottom: 2
  },
  
  // button, top or latest
  button: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 20
  },
  
  
  // button orange
  // back color organge 500
  buttonOrange: {
    // borderColor:'orange',
    backgroundColor: color.googleRed500.color
  },
  
  
  // gray
  buttonGray: {
    // borderColor:'gray',
    borderWidth: 0, // no border
    backgroundColor: '#eee'
  }
})

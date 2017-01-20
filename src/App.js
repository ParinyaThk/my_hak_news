// import react from react
import React from 'react'

// import
// text
// view
// touch high light
// scroll view
// status bar
// activity indicator
// dimension
// platform
// image
// from react native
import { 
  Text, // text lots of text
  View, // view to hold text
  TouchableHighlight, 
  ScrollView,
  
  StatusBar, 
  ActivityIndicator, 
  Dimensions,
  Platform, 
  
  Image 
} 
from 'react-native'

// assets
// import color from react native material design style
import { color } from 'react-native-material-design-styles'
// logo
import logo from './y18.png'
// style
import styles from './AppStyles'

// utils
// domain url, get the domain name
import { domainUrl } from './utils'

// moment
import moment from 'moment'

// const
// card = function
// ( obj ) => <View>, from react native
// styles.card
// child, obj
// ComponentsmarginTop:
const Card = ({ children }) => <View style={styles.card}>{children}</View>

// pointer or nothing
// const
// cursor style
// platform.os
// === web
// cursor: pointer, obj
// :{}
const cursorStyle = Platform.OS === 'web' ? {cursor: 'pointer'} : {}

// children is a reserve keyword for sub elements
// const
// overlay, for what
// children, visible, obj
// (obj) => ();
const Overlay = ({children, visible}) => (
  // (visible) ?
  // ()
  (visible) ? (

    <View style={{
      position: 'absolute', 
      marginTop: (Platform.OS === 'ios') ? 48 : 28, 
      zIndex: 1}}
    >
      
      
      <br/>
      
      <View style={{
        padding: 10, 
        marginTop: -17, 
        width: Dimensions.get('window').width, 
        height: 400, 
        backgroundColor: 'rgba(255,255,255,80)'}}
      >
      {children}
      </View>
    </View>
    ) : <View />
)

// export
// default
// class
// app
// extends
// react component
export default class App extends React.Component {
  // constructor
  // props
  constructor (props) {
    // super
    // props
    super(props);
    
    // this scroll to top bind this
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  // this ref to app
  scrollToTop () {
    // ScrollView with ref
    // scroll to, build in method
    // x 0, y 0, animate true
    this.refs._scrollView.scrollTo({x: 0, y: 0, animated: true})
  }

  // render
  render () {
    // const
    const {
      items, // items
      errors, // errors
      loading, // loading
      filter, // filter
      
      overlayVisible, // overlay visible
      onLoadMore, // load more, on
      onLoadItems, // load item, on
      onOpenUrl, // open url, on
      onToggleOverlay // toggle overlay, on
    } = this.props; // this props???

    // return
    return (
      // card is just view with children inside
      <Card>
        {/* platform os is android */}
        {
          Platform.OS === 'android' ? (
            // don't use {/* */}, because it is not inside html tag
            // can use //, because part of programming
            // status bar
            // background color
            // #....
            <StatusBar backgroundColor={'#d25500'} />
          ) : 
          // other view
          <View />
        }
        
        {/* 
          view
          style
          style body
        */}
        <View style={styles.body}>
        
          {/* 
            overlay
            visible
            overlayVisible is a prop
          */}
          
          <Overlay visible={overlayVisible}>
          
            {/*
              text
              style
              front size
              18
            */}
            <Text style={{fontSize: 18}}>
            
              {/* 
                text
                style
                font weight
                bold
                inject text
              */}
              <Text style={{fontWeight: 'bold'}}>My Hak News</Text> is Hacker News reader built with React nattive.
            </Text>
            
            {/*
              text
              style
              font size 18
              marign top 20
            */}
            <Text style={{fontSize: 18, marginTop: 20}}>
              Made by
              {/*
                text
                // onPress
                // () => {}
                // open url
              */}
              <Text
                onPress={() => { onOpenUrl('https://github.com/kenpeter/my_hak_news') }}>
                
                {/* text style, array of style */}
                <Text style={[styles.aboutLink, cursorStyle]}>Source code</Text>
              </Text>
            </Text>
          </Overlay>

          {/*
            view
            style
            column, flex
            header color
            height: 75
            padding top: 20
          */}
          <View 
            style={
              [
                styles.column, // flex direction, column
                styles.header, // header means header color
                Platform.OS === 'ios' ? { height: 75, paddingTop: 20 } : {}
              ]
          }>
          
            {/* 
              view
              style
              style row, center, each row
              height: 50
            */}
            <View style={[styles.row, { height: 50 }]}>
              {/* 
                inside view, there is a view
                there are img, title, os
              */}
              <View style={styles.row}>
                
                <Image source={logo} style={{width: 20}} />
                <Text style={[{fontWeight: 'bold', paddingLeft: 4}]}>Hak</Text>
                <Text style={[{fontSize: 12, paddingLeft: 4}]}> {Platform.OS}</Text>
              </View>
              
              {/*
                touch able highlight, touch and highlight
                style
                style.button
                filter, we change it. It is a props
                under lay color, org200
                on press
                () => 
                  onLoadItems
                  all the way back to the top
              */}
              <TouchableHighlight
                style={[
                  styles.button, 
                  filter === 'Top' ? styles.buttonOrange : null
                ]}
                
                underlayColor={color.paperBlue100.color}
                
                onPress={() => { onLoadItems('Top'); this.scrollToTop() }}
              >
                
                {/* view style row */}
                <View style={styles.row}>
                  {/* 
                    text
                    style
                    color: white
                    font weight: bold
                    padding right 5
                    filter == top
                    it is loading
                    ActivityIndicator, a cycle running
                  */}
                  <Text style={{color: 'white', fontWeight: 'bold', paddingRight: 5}}>Top</Text>{ filter === 'Top' && loading ? <ActivityIndicator /> : null}
                </View>
              </TouchableHighlight>
              
              
              {/* 
                touch able hightlight
                style button
                filter ========== latest
                buttonOrange ....
              */}
              <TouchableHighlight
              
                style={[styles.button, filter === 'Latest' ? styles.buttonOrange : null]}
                
                underlayColor={color.paperBlue100.color}
                
                onPress={() => { onLoadItems('Latest'); this.scrollToTop() }}
              >
                <View style={styles.row}>
                  <Text style={{color: 'white', fontWeight: 'bold', paddingRight: 5}}>Latest</Text>{ filter === 'Latest' && loading ? <ActivityIndicator /> : null}
                </View>
              </TouchableHighlight>
              
              
              {/* the about button */}
              <TouchableHighlight
              
                underlayColor={color.paperBlue100.color}
                
                onPress={() => { onToggleOverlay() }}>
                
                <Text style={{color: 'white', fontWeight: 'bold', padding: 10}}>?</Text>
              </TouchableHighlight>
              
            </View>
            
            { 
              // object
              // keys
              // errors
              // len > 0
              Object.keys(errors).length > 0 ? (
                // view
                // style
                // style row
                // flex 1
                // backgroud red
                <View style={[styles.row, {flex: 1, backgroundColor: 'red'}]}>
                  { 
                    // obj key
                    // error
                    // map
                    // error, i
                    // text key, err
                    Object.keys(errors).map((error, i) => (
                      <Text key={i}>. {errors[error].message}</Text>
                    ))
                  }
                </View>
              ) : 
              null
            }

          </View>

          {/*
            view has scroll view
            scroll
            style
          */}
          <View style={styles.scrollViewContainer}>
          
            {/* 
              scroll view
              ref _scroll_view
              contentContainerStyle seems it is build in
              scrollEventThrottle 1 event per second
              scrollViewStyle none
            */}
            <ScrollView
              ref='_scrollView'
              
              className='scrollView'
              
              contentContainerStyle={styles.scrollViewContentContainerStyle}
              
              scrollEventThrottle={1} // 1 event per second
              
              style={styles.scrollViewStyle}
            >
              
              {items.map((item, i) => (
                <View key={i}>
                  <View style={styles.itemRow}>
                    <Text style={{flex: 1}}>
                      <Text
                        style={[{fontWeight: 'bold', fontSize: 18}, cursorStyle]}
                        onPress={() => onOpenUrl(item.url || `https://news.ycombinator.com/item?id=${item.objectID}`)}>{i + 1}. {item.title}</Text>
                      <Text style={[{flex: 1, color: '#979797'}, cursorStyle]}> {item.url && domainUrl(item.url)}</Text>
                    </Text>
                  </View>
                  <View style={styles.itemSubRow}>
                    <Text style={{padding: 2}}>{item.points} points </Text>
                    <Text style={{padding: 2}}> by {item.author}</Text>
                    <Text style={{padding: 2}}>| {item.num_comments} c. |</Text>
                    <Text
                      onPress={() => onOpenUrl(`https://news.ycombinator.com/item?id=${item.objectID}`)}
                      style={[{padding: 2, flex: 1, textDecorationLine: 'underline'}, cursorStyle]}> { moment(item.created_at).fromNow() }</Text>
                  </View>
                </View>

              ))}
              
              
              <View style={[styles.itemRow, styles.buttonRow]}>
                <TouchableHighlight
                  style={[styles.button, styles.buttonGray]}
                  underlayColor={color.paperBlue100.color}
                  onPress={() => onLoadMore()}>
                  <View style={[styles.row, {height: 20}]}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 16, color: color.paperGrey500.color}}>
                      { loading ? null : 'Load more'}
                    </Text>
                    { loading ? <ActivityIndicator /> : null}
                  </View>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>

        </View>
      </Card>
    )
  }
}

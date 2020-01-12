import React, { Component } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View, Platform } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../../Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from '../../Theme'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup();

  }

  loadFont() {
    if(Platform.OS === 'web')
    {
      return (
        <style type="text/css">{`
         @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'FontAwesome';
          src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'Ionicons';
          src: url(${require('react-native-vector-icons/Fonts/Ionicons.ttf')}) format('truetype');
        }
        `}</style>
      )
    }
  }

  render() {
    return (
      <View style={Helpers.fill}>
        {
          this.loadFont()
        }
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)

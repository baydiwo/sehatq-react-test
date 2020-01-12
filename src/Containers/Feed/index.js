'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Helpers } from '../../Theme';

function Feed() {
    return (
      <View style={[Helpers.fillCenter]}>
      	<Text>Hello Feed Page</Text>
      </View>
    );
}

const styles = StyleSheet.create({

});


export default Feed;
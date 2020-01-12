import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Helpers, Fonts } from "../../../Theme";

function Slider({ category }) {
  const renderItem = ({ item }) => {
    return (
      <View style={([Helpers.column], { marginBottom: 20 })}>
        <View style={{ margin: 10 }}>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 80, height: 80 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: "15px"
    },
    title: {
      fontSize: 15,
      textAlign: "center"
    }
  });

  return (
    <View>
      <FlatList
        data={category || []}
        renderItem={renderItem}
        keyExtractor={item => {
          return `id-${item.id}`;
        }}
        horizontal
      />
    </View>
  );
}

Slider.propTypes = {
  category: PropTypes.array
};

export default Slider;

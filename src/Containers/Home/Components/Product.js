import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Helpers, Fonts } from "../../../Theme";
import NavigationService from "../../../Services/NavigationService";

function Product({ product }) {
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          NavigationService.navigate("Detail", { item });
        }}
      >
        <Card
          title={item.title}
          image={{ uri: item.imageUrl }}
          titleStyle={Fonts.h3}
          containerStyle={{
            boxShadow: "0 1px 6px 0 rgba(0,0,0,0.1)",
            border: "none",
            borderRadius: "5px",
            marginBottom: 15,
            padding: "10px 0"
          }}
        >
          <View style={[Helpers.row]}>
            <View style={[Helpers.center, { marginRight: 10 }]}>
              <Icon
                name="heart"
                size={35}
                color={index % 2 === 0 ? "red" : "gray"}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
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
      marginHorizontal: 16
    },
    title: {
      fontSize: 32
    }
  });

  return (
    <FlatList
      data={product || []}
      renderItem={_renderItem}
      keyExtractor={item => {
        return `id-${item.id}`;
      }}
    />
  );
}

Product.propTypes = {
  product: PropTypes.array
};

export default Product;

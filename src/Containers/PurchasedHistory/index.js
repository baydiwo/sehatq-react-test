"use strict";

import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import { useSelector } from "react-redux";
import { Header, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NavigationService from "../../Services/NavigationService";

function PurchasedHistory() {
  // const dispatch = useDispatch();
  const { products } = useSelector(state => state.Purchase);

  const _renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={`${item.price}`}
      contentContainerStyle={{ paddingLeft: 10 }}
      leftAvatar={{
        source: item.imageUrl && { uri: item.imageUrl }
      }}
      onPress={() => {
        NavigationService.navigate("Detail", { item });
      }}
      bottomDivider
      chevron
    />
  );

  const RenderListSearch = () => {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={_renderItem}
      />
    );
  };

  return (
    <React.Fragment>
      <Header
        leftComponent={
          <Icon
            name="arrow-left"
            size={20}
            color="white"
            onPress={() => {
              NavigationService.goBack();
            }}
          />
        }
        centerComponent={{
          text: "Purchased History",
          style: { color: "#fff", fontSize: 20 }
        }}
      />
      <RenderListSearch />
    </React.Fragment>
  );
}

export default PurchasedHistory;

"use strict";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text, FlatList, Platform } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "../../Components/SearchBarSection";
import { Helpers } from "../../Theme";
import NavigationService from "../../Services/NavigationService";

function Search() {
  const {
    data: { productPromo: product }
  } = useSelector(state => state.Home);

  const onSearch = () => {
    return product.filter(item =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const [keyword, setKeyword] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (!firstLoad) {
      const searchResults = onSearch();
      setDataSearch(searchResults);
    }
  }, [keyword]);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

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
        data={dataSearch}
        renderItem={_renderItem}
      />
    );
  };

  const loadFont = () => {
    if (Platform.OS === "web") {
      return (
        <style type="text/css">{`
				 @font-face {
				  font-family: 'MaterialIcons';
				  src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
				}
				@font-face {
				  font-family: 'FontAwesome';
				  src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
				}
				@font-face {
				  font-family: 'Ionicons';
				  src: url(${require("react-native-vector-icons/Fonts/Ionicons.ttf")}) format('truetype');
				}
				`}</style>
      );
    }
  };

  return (
    <React.Fragment>
      {loadFont()}
      <SearchBar
        onPress={null}
        iconName="arrow-left"
        placeholder="Nitendo"
        value={keyword}
        setValue={setKeyword}
      />
      <RenderListSearch />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});

export default Search;

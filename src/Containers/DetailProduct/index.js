"use strict";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Platform
} from "react-native";
import { Text, Card, Button, Header } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { Helpers } from "../../Theme";
import NavigationService from "../../Services/NavigationService";
import PurchaseActions from "../../Stores/Purchase/Actions";

function DetailProduct({ navigation }) {
  const dispatch = useDispatch();
  // const { data } = useSelector(state => state.Purchase);
  const { title, imageUrl, description, price, id } = navigation.getParam(
    "item"
  );
  const [love, setLove] = useState(false);

  const addProduct = item => {
    dispatch(PurchaseActions.addProduct(item));
  };

  const ImageSection = () => (
    <Card>
      <View style={[Helpers.fill, Helpers.row, Helpers.mainCenter]}>
        <ImageBackground
          source={{ uri: imageUrl }}
          style={{ flex: 1, height: 230 }}
        ></ImageBackground>
      </View>
    </Card>
  );

  const TitleSection = () => (
    <View
      style={[
        Helpers.row,
        Helpers.mainSpaceBetween,
        { paddingHorizontal: 15, paddingVertical: 15 }
      ]}
    >
      <View>
        <Text h4>{title}</Text>
      </View>
      <View>
        <Icon
          name="heart"
          color={love ? "red" : "gray"}
          size={25}
          onPress={e => {
            e.preventDefault();
            setLove(!love);
          }}
        />
      </View>
    </View>
  );
  const DescriptionSection = () => (
    <ScrollView>
      <View
        style={[
          Helpers.column,
          Helpers.mainStart,
          { flex: 2, paddingHorizontal: 15 }
        ]}
      >
        <Text>
          {description ||
            "this is the placeholder of description adnakl alad lad adsad  ahks hakd kad kjada dhak hdjkadj adjka dja djkadka dkja"}
        </Text>
      </View>
    </ScrollView>
  );
  const BuySection = () => (
    <View style={[Helpers.row, Helpers.mainEnd, Helpers.fill]}>
      <View style={[Helpers.mainCenter, Helpers.colCenter]}>
        <Text style={{ fontSize: 20 }}>{price || "Rp. 100 "}</Text>
      </View>
      <View
        style={[Helpers.mainCenter, { paddingHorizontal: 15, width: "50%" }]}
      >
        <Button
          title="Buy"
          onPress={e => {
            e.preventDefault();
            addProduct(navigation.getParam("item"));
          }}
        />
      </View>
    </View>
  );

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
          text: "Detail Product",
          style: { color: "#fff", fontSize: 20 }
        }}
        rightComponent={
          Platform.OS === "web" ? (
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                "http://amoebadev.home.blog"
              )}&t=${title}`}
              target="_blank"
              title="Share on Facebook"
            >
              <Icon name="share" size={20} color="white" />
            </a>
          ) : (
            <Icon name="share" size={20} color="white" />
          )
        }
      />
      <View style={[Helpers.fill]}>
        <ScrollView>
          <ImageSection />
          <TitleSection />
          <DescriptionSection />
          <BuySection />
        </ScrollView>
      </View>
    </React.Fragment>
  );
}

export default DetailProduct;

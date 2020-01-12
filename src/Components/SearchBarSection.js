import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, TextInput } from "react-native";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import NavigationService from "../Services/NavigationService";
import { Helpers, Fonts } from "../Theme";

function SearchBarSection({
  placeholder,
  iconName,
  onPress,
  setValue,
  value,
  isBack
}) {
  return (
    <View
      style={[
        Helpers.mainStart,
        Helpers.column,
        { paddingLeft: 10, paddingRight: 10 }
      ]}
    >
      <View style={[Helpers.row]}>
        <View style={[Helpers.center]}>
          <TouchableOpacity
            onPress={() => {
              if (isBack) {
                NavigationService.goBack();
              }
            }}
          >
            <Icon
              name={iconName}
              size={25}
              color="red"
              style={{ marginRight: "10px" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            Helpers.fill,
            Helpers.column,
            {
              marginTop: 5,
              marginLeft: 5,
              marginBottom: 5,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "gray"
            }
          ]}
        >
          <TouchableOpacity onPress={onPress}>
            <View style={[Helpers.row, { paddingLeft: 10 }]}>
              <View style={[Helpers.mainCenter]}>
                <Icon name="search" size={20} color="gray" />
              </View>
              <TextInput
                style={{ height: 40, width: "100%", paddingLeft: 10 }}
                placeholder={placeholder}
                editable={!onPress}
                onSubmitEditing={e => {
                  setValue(e.nativeEvent.text);
                  console.log(e.nativeEvent.text);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

SearchBarSection.propTypes = {
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  onPress: PropTypes.func,
  data: PropTypes.array,
  setValue: PropTypes.func,
  value: PropTypes.string
};

SearchBarSection.defaultProps = {
  isBack: true
};

export default SearchBarSection;

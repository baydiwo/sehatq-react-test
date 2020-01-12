import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Platform, ActivityIndicator } from "react-native";
import SearchBarSection from "../../Components/SearchBarSection";
import Slider from "./Components/Slider";
import Product from "./Components/Product";
import NavigationService from "../../Services/NavigationService";
import HomeActions from "../../Stores/Home/Actions";

function Home() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(state => state.Home);

  useEffect(() => {
    dispatch(HomeActions.fetchHome());
  }, []);

  const toSearchPage = () => {
    NavigationService.navigate("Search");
  };

  return (
    <React.Fragment>
      <SearchBarSection iconName="heart" onPress={toSearchPage} />
      {!isLoading && <Slider category={(data && data.category) || []} />}
      {isLoading && <ActivityIndicator />}
      {!isLoading && <Product product={(data && data.productPromo) || []} />}
    </React.Fragment>
  );
}

export default Home;

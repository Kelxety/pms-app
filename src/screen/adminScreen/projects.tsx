import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import ProjectView from "../../components/ProjectView";
import { Props } from "../../../navigator/RootNavigator";

type Project = {
  id: number;
  projectName: string;
  engineer: string;
  address: string;
  status: string;
  billing: string;
  info: string;
  remarks: string;
}



const Projects = ({ navigation }: Props) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [searchText, setSearchText] = useState('')

  const handleSearch = (list: string) => {

    setSearchText(list)
    const searchData = dataMaster.filter(listItem => listItem.projectName.includes(list.toLowerCase()));
    setDataMaster(searchData)
  }

  const [dataMaster, setDataMaster] = useState<Project[]>([
    {
      id: 1,
      projectName: "Concreting of Araceli Dumaran Road",
      engineer: "John Doe",
      address: "Brgy. Tinitian, Araceil, Palawan",
      status: "On-going",
      billing: "71.11%",
      info: "Concreting of 4.60 kms. of road and installation of 1.00 kms. of drainage system",
      remarks: "",
    },
    {
      id: 2,
      projectName: "Concreting of Magbabadil to Cabigaan Road",
      engineer: "John Doe",
      address: "Brgy. Magbabadil, Aborlan, Palawan",
      status: "On-going",
      billing: "69.73%",
      info: "Concreting of 8.60 kms. of road",
      remarks: "",
    },
    {
      id: 3,
      projectName: "Concreting of Ipilan - Linao Road",
      engineer: "John Doe",
      address: "Brgy. Magbabadil, Aborlan, Palawan",
      status: "On-going",
      billing: "0%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 4,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 5,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 6,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 7,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 8,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
    {
      id: 9,
      projectName: "Concreting of Tumarbong - Ilian Road",
      engineer: "John Doe",
      address: "Roxas & Dumaran, Palawan",
      status: "On-going",
      billing: "40.49%",
      info: "Concreting of 5.60 kms. of road",
      remarks: "",
    },
  ]);

  return (
    <SafeAreaView className="bg-primary-500 dark:bg-gray-900">
      <StatusBar barStyle={"light-content"} />
      <View className="bg-primary-500 flex items-center justify-center p-5 dark:bg-gray-900">
        <Text className="font-bold text-white">Project List</Text>
      </View>
      <View className="h-full bg-gray-100 p-4 dark:bg-gray-700">
        <TextInput
          inlineImageLeft="search_icon"
          className="h-10 rounded-lg border border-gray-50 bg-white px-2"
          placeholder="search project"
          value={searchText}
          onChangeText={(text) => handleSearch(text)}
        />
        <View className="p-2"></View>
        <FlatList
          data={dataMaster}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="p-1.5" />}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProjectDetails");
              }}
              key={index}
            >
              <ProjectView item={item} index={index} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Projects;

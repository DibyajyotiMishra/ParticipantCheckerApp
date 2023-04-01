import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigatorProps } from "../../navigation/navigation-stack";
import styles from "./styles";
import { checkParticipant } from "../../services";

type HomeScreenProps = NativeStackScreenProps<StackNavigatorProps, "Home">;

interface IHomeScreenProps {
  navigation: HomeScreenProps["navigation"];
}

const HomeScreen = (props: IHomeScreenProps) => {
  const { navigation } = props;
  const [participantId, setParticipantId] = useState<string>("");

  function handleNavigation() {
    navigation.navigate("Scan");
  }

  async function handleSubmit() {
    await checkParticipant(participantId);
    setParticipantId("");
  }

  return (
    <View style={styles.parentContainer}>
      <View style={styles.topcontainer}>
        <Text style={styles.heading}>Tantrotsav Participant Checker</Text>
        <Text style={styles.subheading}>Enter or Scan participant ID.</Text>
      </View>
      <View style={styles.middlecontainer}>
        <Pressable style={styles.button} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Scan</Text>
        </Pressable>
      </View>
      <View style={styles.bottomcontainer}>
        <TextInput
          value={participantId}
          onChangeText={setParticipantId}
          style={styles.input}
          placeholder='Participant ID'
          returnKeyType='search'
          clearButtonMode='while-editing'
          onSubmitEditing={handleSubmit}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Check</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

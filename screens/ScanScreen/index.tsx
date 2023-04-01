import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StackNavigatorProps } from "../../navigation/navigation-stack";
import { checkParticipant } from "../../services";

type ScanScreenProps = NativeStackScreenProps<StackNavigatorProps, "Home">;

interface IScanScreenProps {
  navigation: ScanScreenProps["navigation"];
}

const ScanScreen = (props: IScanScreenProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | any>(null);
  const [scanned, setScanned] = useState<boolean>(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    await checkParticipant(data);
    return props.navigation.replace("Home");
  };

  const handleNavigation = () => {
    return props.navigation.goBack();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Pressable onPress={handleNavigation} style={styles.backbutton}>
        <FontAwesome name='chevron-left' size={30} color='black' />
      </Pressable>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  backbutton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./components/screens/Tasks";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="All Tasks"
          component={Tasks}
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <Pressable onPress={navigation.toggleDrawer}>
                <Text>
                  <Avatar.Image
                    size={32}
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
                    }}
                  />
                  <Drawer.Screen name="Settings" component={Settings} />
                </Text>
              </Pressable>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

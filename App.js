import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import Home from "./Home.js"
import Settings from "./Settings.js"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name === "Home") {
              iconName = "home"
            } else if (route.name === "Settings") {
              iconName = "md-settings"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarStyle: { backgroundColor: "#7777ff99" },
          tabBarActiveTintColor: "#7777ff",
          tabBarInactiveTintColor: "#777",
          headerStyle: { backgroundColor: "#7777ff99" },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

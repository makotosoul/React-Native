import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					// Navigator can be customized using screenOptions
					tabBarIcon: ({ focused, color, size }) => {
						// Function tabBarIcon is given the focused state,
						// color and size params
						let iconName;

						if (route.name === "Home") {
							iconName = "home";
						} else if (route.name === "Settings") {
							iconName = "settings";
						}

						return <Ionicons name={iconName} size={size} color={color} />; //it returns an icon component
					},
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Settings" component={SettingScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

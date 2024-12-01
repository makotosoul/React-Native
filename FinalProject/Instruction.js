import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

import * as eva from "@eva-design/eva";
export default function Instruction() {
	const translateX = useSharedValue(0);

	React.useEffect(() => {
		translateX.value = withRepeat(
			withTiming(-20, {
				duration: 500,
				easing: Easing.inOut(Easing.ease),
			}),
			-1,
			true,
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});

	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<Layout style={styles.container}>
				<Text category="h1">URL CONVERT APP</Text>
				<Text>Made by: Thien Nguyen</Text>
				<View style={styles.top}>
					<Animated.Text style={[styles.ThreeArrow, animatedStyle]}>
						{"← ← ←"}
					</Animated.Text>
					<Text category="h5">Swipe left three time for History</Text>
				</View>
				<View style={styles.middle}>
					<Animated.Text style={[styles.TwoArrow, animatedStyle]}>
						{"← ←"}
					</Animated.Text>
					<Text category="h5">Swipe left twice for QR converter</Text>
				</View>
				<View style={styles.bottom}>
					<Animated.Text style={[styles.Arrow, animatedStyle]}>
						{"←"}
					</Animated.Text>
					<Text category="h5">Swipe left for link shortener</Text>
				</View>
			</Layout>
		</ApplicationProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
	},
	middle:{
		paddingTop:80,
		marginTop: 10,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
	},
	top: {
		marginTop:20,
		paddingTop: 80,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
	},
	bottom: {
		paddingTop: 80,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start",
		position: "relative",
	},

	ThreeArrow: {
		left:200,
		fontSize: 50,
		color: "green",
		position: "absolute",
	},

	TwoArrow: {
		left:250,
		fontSize: 50,
		color: "red",
		position: "absolute",
	},
	Arrow:{
		left:270,
		fontSize: 50,
		color: "blue",
		position: "absolute",
	},
});

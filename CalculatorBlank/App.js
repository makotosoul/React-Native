import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
	const [x, setX] = useState("");
	const [y, setY] = useState("");
	const [result, setResult] = useState("");

	const plusPressed = () => {
		const plus = String(Number(x) + Number(y));
		setResult(plus);
	};
	const minusPressed = () => {
		const minus = String(Number(x) - Number(y));
		setResult(minus);
	};
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text style={{ fontSize: 20 }}>Result: {result}</Text>
			<TextInput
				style={{ fontSize: 20 }}
				keyboardType="numeric"
				returnKeyType="done"
				placeholder="x here"
				onChangeText={(text) => setX(text)}
				value={x}
			/>
			<TextInput
				style={{ fontSize: 20 }}
				keyboardType="numeric"
				returnKeyType="done"
				placeholder="y here"
				onChangeText={(text) => setY(text)}
				value={y}
			/>
			<View
				style={{
					flex: 0,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Button  title="+" onPress={plusPressed} />
				<Button title="-" onPress={minusPressed} />
			</View>
		</View>
	);
}


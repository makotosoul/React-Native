import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
	const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
	const [guess, setGuess] = useState("");
	const [dText, setDText] = useState("Guess a number between 1-100");
	const [count, setCount] = useState(0);

	const buttonPressed = () => {
		if (guess == answer) {
			Alert.alert("You get the number in " + count + " guesses");
			setDText("Guess a number between 1-100");
		} else if (guess < answer) {
			setCount(count + 1);
			setDText("Your guess " + guess + " is too low");
		} else {
			setCount(count + 1);
			setDText("Your guess " + guess + " is too high");
		}
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
			<Text style={{ fontStyle: "bold", fontSize: 20 }}>{dText}</Text>
			<TextInput
				style={{ fontSize: 20 }}
				keyboardType="numeric"
				returnKeyType="done"
				placeholder="Guess here"
				onChangeText={(text) => setGuess(text)}
				value={guess}
			/>
			<View
				style={{
					flex: 0,
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Button title="MAKE GUESS" onPress={buttonPressed} />
			</View>
		</View>
	);
}

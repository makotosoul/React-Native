import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	FlatList,
} from "react-native";
import { useState } from "react";

function emptyShow() {
	return <Text>no data available</Text>;
}
export default function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const handlePress = () => {
		setTodos([...todos, { key: todo }]);
		setTodo("");
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputELement}>
				<TextInput
					style={styles.standardText}
					value={todo}
					onChangeText={(text) => setTodo(text)}
					placeholder="Enter a new task..."
				/>
				<Button title="Add" onPress={handlePress} />
			</View>
				<FlatList
					data={todos}
					renderItem={({ item }) => (
						<View style={styles.listItem}>
							<Text style={styles.standardText}>{item.key}</Text>
						</View>
					)}
					ListEmptyComponent={emptyShow}
				/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop:120,
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	standardText: {
		fontSize: 20,
	},
	inputELement: {
		width: 200,
	},
	listItem: {
		backgroundColor: "lightblue",
		borderRadius: 20,
		padding: 20,
		margin: 5,
	},
});

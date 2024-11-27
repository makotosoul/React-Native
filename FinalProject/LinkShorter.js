import { StyleSheet } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	Layout,
	Text,
	Input,
	Button,
} from "@ui-kitten/components";
import RestAPI from "./RestAPI";

export default function LinkShorter() {
	const [link, setLink] = React.useState("");
	const [shortenLink, setShortenLink] = React.useState("");
	const [showLink, setShowLink] = React.useState(false);
	const convertToShortenLink = async () => {
		const data = await RestAPI(link);
		setShortenLink(data.data.tiny_url);
		setShowLink(true);
	};

	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<Layout style={styles.container}>
				<Text style={styles.text} category="h1">
					Link Shorten
				</Text>
				<Input
					returnKeyType="done"
					style={styles.input}
					placeholder="Enter your link here"
					value={link}
					onChangeText={(nextValue) => setLink(nextValue)}
				/>
				<Button style={styles.button} onPress={convertToShortenLink}>
					Shorten Link
				</Button>
				{showLink && <Text>{shortenLink}</Text>}
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
	},
	input: {
		maxWidth: "80%",
		marginBottom: 20,
	},
	button: {
		marginBottom: 20,
	},
	text: {
		marginBottom: 20,
	},
});

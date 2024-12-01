import { StyleSheet, Share } from "react-native";
import React, { useEffect, useState } from "react";
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	Layout,
	Text,
	Input,
	Button,
} from "@ui-kitten/components";
import { useSQLiteContext } from "expo-sqlite";
import RestAPI from "./RestAPI";
import History from "./History";

const LinkShorter = () => {

	const db = useSQLiteContext();
	const [link, setLink] = useState("");
	const [shortenLink, setShortenLink] = useState("");
	const [showLink, setShowLink] = useState(false);
	const [update, setUpdate] = useState(false);

	const initialize = async () => {
		try {
			await db.execAsync(`
        CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, link TEXT);
      `);
		} catch (error) {
			console.error("Could not open database", error);
		}
	};

	const convertToShortenLink = async () => {
		const data = await RestAPI(link);
		setShortenLink(data.data.tiny_url);
		setShowLink(true);
		try {
			await db.runAsync("INSERT INTO history (link) VALUES (?)", link);
			setUpdate((prev) => !prev);
		} catch (error) {
			console.error("Could not add link", error);
		}
	};

	const shareShortenLink = async () => {
		try {
			await Share.share({ message: shortenLink });
		} catch (error) {
			alert(error.message);
		}
	};

	useEffect(() => {
		initialize();
	}, []);

	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<Layout style={styles.container}>
				<Text style={styles.text} category="h1">
					LINK SHORTENER
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
				{showLink && (
					<Button
						status={"success"}
						style={{ marginTop: 20 }}
						onPress={shareShortenLink}
					>
						Share Link!
					</Button>
				)}

			</Layout>
		</ApplicationProvider>
	);
};

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

export default LinkShorter;

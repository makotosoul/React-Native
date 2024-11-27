import { StyleSheet} from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import QRCode from "react-native-qrcode-svg";
import {
	ApplicationProvider,
	Layout,
	Text,
	Input,
	Button,
} from "@ui-kitten/components";

export default function QrConverter() {
	const [link, setLink] = React.useState("");
	const [history, setHistory] = React.useState([]);
	const [showQR, setShowQR] = React.useState(false);
	const convertToQRCode = () => {
		if (link) {
			setHistory([...history, link]);
			setShowQR(true);
		}
	};

	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<Layout style={styles.container}>
				<Text style ={styles.text} category="h1">QR CODE CONVERT</Text>
				<Input
					returnKeyType="done"
					style={styles.input}
					placeholder="Enter your link here"
					value={link}
					onChangeText={(nextValue) => setLink(nextValue)}
				/>
				<Button style={styles.button} onPress={convertToQRCode}>
					Convert to QR code
				</Button>
				{showQR ? <QRCode value={link} size={200} /> : null}
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
	}
});

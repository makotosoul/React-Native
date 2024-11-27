// Route.js
import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import QrConverter from "./QrConverter";
import LinkShorter from "./LinkShorter";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
const Route = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<View style={styles.container}>
				<ViewPager
					style={styles.viewPager}
					selectedIndex={selectedIndex}
					onSelect={(index) => setSelectedIndex(index)}
				>
					<Layout style={styles.tab} level="2">
						<Text category="h5">USERS</Text>
					</Layout>
					<Layout style={styles.tab} level="2">
						<View style={styles.qrContainer}>
							<LinkShorter />
						</View>
					</Layout>
					<Layout style={styles.tab} level="2">
						<View style={styles.qrContainer}>
							<QrConverter />
						</View>
					</Layout>
				</ViewPager>
			</View>
		</ApplicationProvider>
	);
};
const styles = StyleSheet.create({
	container: { flex: 1 },
	viewPager: { flex: 1 },
	tab: { flex: 1, alignItems: "center", justifyContent: "center" },
	qrContainer: { flex: 1, width: "100%" },
});

export default Route;


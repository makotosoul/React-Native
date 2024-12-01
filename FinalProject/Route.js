import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, ViewPager } from "@ui-kitten/components";
import QrConverter from "./QrConverter";
import LinkShorter from "./LinkShorter";
import Instruction from "./Instruction";
import History from "./History";
import { ApplicationProvider } from "@ui-kitten/components";
import { SQLiteProvider } from "expo-sqlite";
import * as eva from "@eva-design/eva";

const initialize = async (db) => {
	try {
		await db.execAsync(`
      CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, link TEXT);
    `);
	} catch (error) {
		console.error("Could not open database", error);
	}
};

const Route = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	return (
		<SQLiteProvider
			databaseName="linkDb.db"
			onInit={initialize}
			onError={(error) => console.error("Could not open database", error)}
		>
			<ApplicationProvider {...eva} theme={eva.light}>
				<View style={styles.container}>
					<ViewPager
						style={styles.viewPager}
						selectedIndex={selectedIndex}
						onSelect={(index) => setSelectedIndex(index)}
					>
						<Layout style={styles.tab} level="2">
							<View style={styles.qrContainer}>
								<Instruction />
							</View>
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
						<Layout style={styles.tab} level="2">
							<View style={styles.qrContainer}>
								<History />
							</View>
						</Layout>
					</ViewPager>
				</View>
			</ApplicationProvider>
		</SQLiteProvider>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1 },
	viewPager: { flex: 1 },
	tab: { flex: 1, alignItems: "center", justifyContent: "center" },
	qrContainer: { flex: 1, width: "100%" },
});

export default Route;

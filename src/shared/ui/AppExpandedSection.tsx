import { StyleSheet, View } from "react-native";
import BrandText from "../branding/BrandText";

type AppExpandedSectionProps = {
	title: string;
};

const AppExpandedSection = ({title}: AppExpandedSectionProps) => {
	return (
		<View style={styles.section}>
			<View style={styles.titleRow}>
				<View style={styles.line}></View>
				<BrandText style={styles.text} text={title} />
				<View style={styles.line}></View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	section: {
		width: "100%",
		maxWidth: 420,
		alignItems: "center",
		gap: 12,
		marginBottom: 48,
	},
	titleRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: "gray",
	},
	text:{
		fontWeight: "800",
	},
});

export default AppExpandedSection;

import { StyleSheet, View } from "react-native";
import BrandText from "../branding/BrandText";
import AppExpandedSection from "./AppExpandedSection";
import AppBarClose from "./AppBarCloseButton";
import BrandLogo from "../branding/BrandLogo";

type AppExpandedBarProps = {
	isMenuOpen: boolean,
	setIsMenuOpen: CallableFunction,
};

const AppExpandedBar = ({isMenuOpen, setIsMenuOpen}: AppExpandedBarProps) => {
	return (
		<View style={styles.outer}>
			<View style={styles.panel}>
				<AppBarClose
					style={styles.closeButton}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<View style={styles.section}>
					<BrandLogo />
				</View>
				<AppExpandedSection title="Section A" />
				<View style={styles.section}>
					<BrandText text="Home" />
					<BrandText text="Patterns" />
					<BrandText text="Examples" />
				</View>
				<AppExpandedSection title="Section B" />
				<View style={styles.section}>
					<BrandText text="About me" />
					<BrandText text="Patterns" />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	outer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		paddingTop: 12,
	},
	panel: {
		flex: 1,
		width: "100%",
		maxWidth: 1280,

		paddingHorizontal: 24,
		paddingVertical: 48,

		alignItems: "center",
	},
	section: {
		alignItems: "center",
		gap: 8,
		marginBottom: 48,
	},
	closeButton: {
		position: "absolute",
		top: 16,
		right: 16,
		zIndex: 1,
	},
});


export default AppExpandedBar;

import { StyleSheet, useWindowDimensions, View } from "react-native";
import BrandText from "../branding/BrandText";
import AppBarClose from "./AppBarCloseButton";
import BrandLogo from "../branding/BrandLogo";
import { isWideScreen } from "./Breakpoints";

type AppBarProps = {
	isMenuOpen: boolean,
	setIsMenuOpen: CallableFunction,
};

const AppBar = ({isMenuOpen, setIsMenuOpen}: AppBarProps) => {
	const { width } = useWindowDimensions();

	return (
		<View style={styles.outer}>
			<View style={styles.bar}>
				{isWideScreen(width) &&
					<View style={styles.left}
					>
						<BrandText text="Home" />
						<BrandText text="Patterns" />
						<BrandText text="Examples" />
					</View>
				}
				<View style={styles.center}>
					<BrandLogo />
				</View>
				<View style={styles.right}>
					<AppBarClose 
						isMenuOpen={isMenuOpen} 
						setIsMenuOpen={setIsMenuOpen} 
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	outer: {
		width: "100%",
		alignItems: "center",

		paddingTop: 12,
		paddingHorizontal: 16,
	},
	bar: {
		width: "100%",
		maxWidth: 1280,

		minHeight: 64,
		borderRadius: 24,
		borderWidth: 1,

		flexDirection: "row",
		alignItems: "center",

		paddingHorizontal: 24,
	},
	left: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		gap: 16,
	},
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "center",
	},
});

export default AppBar;

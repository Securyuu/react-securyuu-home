import { Pressable, StyleSheet, ViewStyle, StyleProp } from "react-native";
import { Ionicons } from "@react-native-vector-icons/ionicons";

type AppBarCloseButtonProps = {
	isMenuOpen: boolean;
	setIsMenuOpen: CallableFunction;
	style?: StyleProp<ViewStyle>;
}

const AppBarClose = ({isMenuOpen, setIsMenuOpen, style}: AppBarCloseButtonProps) => {
	return (
		<Pressable 
			style={[styles.button, style]}
			onPress={() => {setIsMenuOpen(!isMenuOpen)}}

			accessibilityRole="button"
			accessibilityLabel={isMenuOpen ? "Close menu" : "Open menu"}
		>
			{isMenuOpen && <Ionicons name="chevron-back" size={24} />}
			{!isMenuOpen && <Ionicons name="menu" size={24} />}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 44,
		height: 44,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AppBarClose;

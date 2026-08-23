import { StyleSheet, View } from "react-native"
import BrandText from "../branding/BrandText";

type BadgeProps = {
	text: string,
}

const Badge = ({text}: BadgeProps) => {
	return (
		<View style={styles.badge}>
			<BrandText
				text={text}
				style={styles.text}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	badge: {
		alignSelf: "flex-start",
		maxWidth: "100%",

		paddingHorizontal: 12,
		paddingVertical: 4,

		backgroundColor: "#F7F7F7",
		borderWidth: 1,
		borderColor: "#D8D8D8",
		borderRadius: 999,
	},

	text: {
		fontSize: 13,
		lineHeight: 18,
	},
})

export default Badge;

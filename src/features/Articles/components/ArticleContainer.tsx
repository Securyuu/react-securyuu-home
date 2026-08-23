import { BREAKPOINTS } from "@/shared/ui/Breakpoints";
import { type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

type ArticleProps = {
	children?: ReactNode;
};

const ArticleContainer = ({ children }: ArticleProps) => {
	return (
		<View style={styles.outerContainer}>
			<View style={styles.innerContainer}>
				{children}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	innerContainer: {
		flex: 1,
		maxWidth: BREAKPOINTS.lg,
		width: "100%",
	},
});

export default ArticleContainer;

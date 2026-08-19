import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";

type BrandTextProps = {
	text: string;
	style?: StyleProp<TextStyle>;
}

const BrandText = ({text, style}: BrandTextProps) => {
	return (
		<Text style={[styles.text, style]}>{text}</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		fontFamily: "CormorantGaramond",
	},
});

export default BrandText;

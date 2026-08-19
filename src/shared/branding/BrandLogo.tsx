import { Image } from "react-native";

const BrandLogo = () => {
	return (
		<Image
			source={require('@/assets/brand/securyuu-logo.png')}
			style={{ width: 120, height: 40 }}
			resizeMode="contain"
		/>
	);
}

export default BrandLogo;

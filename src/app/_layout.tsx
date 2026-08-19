import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from 'expo-router';
import { StyleSheet, useColorScheme, View } from 'react-native';
import AppBar from '@/shared/ui/AppBar';
import { useEffect, useState } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AppExpandedBar from '@/shared/ui/AppExpandedBar';

 const MyLayout = () => {
  const colorScheme = useColorScheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [fontsLoaded, fontError] = useFonts({
		"CormorantGaramond": require("../../assets/fonts/CormorantGaramond-VariableFont_wght.ttf")
	});

	useEffect(() => {
		if (fontsLoaded || fontError) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<View style={styles.screen}>
				{ !isMenuOpen && 
					<AppBar
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
					/>
				}

				{ isMenuOpen && 
					<AppExpandedBar 
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen} /> 
				}

				<Slot />
			</View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 16,
	},
});

export default MyLayout;

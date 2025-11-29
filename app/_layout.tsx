import "@/global.css";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Slot } from "expo-router";

export default function RootLayout() {
	const colorScheme = useColorScheme();

	return (
		<ClerkProvider tokenCache={tokenCache}>
			<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
				<Slot />
				<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
			</ThemeProvider>
		</ClerkProvider>
	);
}

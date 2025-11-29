import { useSSO } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ActivityIndicator, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';

// Required for OAuth flow
WebBrowser.maybeCompleteAuthSession();

interface AppleSignInProps {
    iconSource?: ImageSourcePropType;
}

export default function AppleSignIn({ iconSource }: AppleSignInProps) {
    const { startSSOFlow } = useSSO();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const onPress = async () => {
        setIsLoading(true);
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startSSOFlow({ strategy: 'oauth_apple' });

            if (createdSessionId) {
                // Session was created successfully
                await setActive!({ session: createdSessionId });
                router.replace('/');
            } else {
                // Use signIn or signUp for next steps such as MFA
                console.log('Additional steps required:', { signIn, signUp });
            }
        } catch (err) {
            console.error('OAuth error:', JSON.stringify(err, null, 2));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <TouchableOpacity
            className={`flex-row items-center justify-center bg-black px-5 py-3.5 rounded-xl gap-2.5 shadow-md ${isLoading ? 'opacity-70' : ''}`}
            onPress={onPress}
            disabled={isLoading}
            activeOpacity={0.8}
        >
            {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
            ) : (
                <>
                    <Ionicons name="logo-apple" size={20} color="#fff" />
                    <Text className="text-white text-base font-semibold tracking-wide">
                        Sign in with Apple
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
}
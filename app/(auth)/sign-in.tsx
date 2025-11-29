import AppleSignIn from '@/components/AppleSignIn'
import GoogleSignIn from '@/components/GoogleSignIn'
import React from 'react'
import { View } from 'react-native'

export default function Page() {
    return (
        <View className="items-center">
            <View className="flex-row space-x-3">
                <GoogleSignIn />
                <AppleSignIn />
            </View>
        </View>
    )
}
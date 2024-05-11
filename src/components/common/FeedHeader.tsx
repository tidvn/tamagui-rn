import { LogoPng } from '@/assets/images'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from "tamagui";



export default function FeedHeader() {
    //? Assets
    const insets = useSafeAreaInsets()



    //? Render(s)
    return (
        <View style={{ paddingTop: insets.top,paddingLeft:insets.left }}>
            <View >
                <Image source={LogoPng} />
            </View>
        </View>
    )
}

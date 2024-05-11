import { LogoPng } from "@/assets/images";
import FeedHeader from "@/components/common/FeedHeader";
import { Stack } from "expo-router";

export default function Layout() {

  return (
    <Stack initialRouteName="signin">
      <Stack.Screen
        name='signin'
        options={{
          headerLeft: () => <FeedHeader />,
          headerTitle: '',
          headerShadowVisible: false,
          headerBackground: () => null,
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          headerLeft: () => <FeedHeader />,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}

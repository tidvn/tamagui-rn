// @ts-nocheck
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Button, H6 } from "tamagui";

import DialogDemo from "@/components/demo/DialogDemo";
import { MyStack } from "@/components/common/MyStack";
import SelectDemo from "@/components/demo/SelectDemo";
import SpinnerDemo from "@/components/demo/SpinnerDemo";
import SwitchDemo from "@/components/demo/SwitchDemo";

export default function User() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <MyStack justifyContent="flex-start">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `${params.user}'s user page`,
          headerLeft() {
            return (
              <Button
                mr="$2.5"
                onPress={router.back}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />

      <H6>Some Tamagui components in action.</H6>

      <DialogDemo />
      <SelectDemo />
      <SpinnerDemo />
      <SwitchDemo />
    </MyStack>
  );
}

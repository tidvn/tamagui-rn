// @ts-nocheck
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";

import { MySafeAreaView } from "@/components/common/MySafeAreaView";
import { MyStack } from "@/components/common/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <MyStack>
        <YStack maxWidth={600}>
          <H1 textAlign="center">Welcome to Tamagui.</H1>
          <Paragraph textAlign="center">
            Here&apos;s a basic starter to show navigating from one screen to
            another.
          </Paragraph>
        </YStack>

        <YStack gap="$2.5">
          <Button onPress={() => router.push("/auth")}>
            Go to user page
          </Button>
          <Button onPress={() => router.push("/auth/signup")}>Go to tabs page</Button>
        </YStack>

        
      </MyStack>
    </MySafeAreaView>
  );
}

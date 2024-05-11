import { Facebook, Github } from '@tamagui/lucide-icons'
import { useState } from 'react'
import {
    AnimatePresence,
    Button,
    H1,
    Paragraph,
    Separator,
    SizableText,
    Spinner,
    Theme,
    View,
    YStack,
} from 'tamagui'
import { Input } from '@/components/app/auth/InputParts'
import { FormCard } from '@/components/app/auth/LayoutParts'
import { MySafeAreaView } from "@/components/common/MySafeAreaView";
import { MyStack } from '@/components/common/MyStack'
import { useSignIn } from '@/hooks/useSignIn'


const Link = ({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) => {
    return (
        <View href={href} tag="a">
            {children}
        </View>
    )
}


const SignUpLink = () => {
    return (
        <Link href="/auth/signup">
            <Paragraph textDecorationStyle="unset" ta="center">
                Don&apos;t have an account?{' '}
                <SizableText
                    hoverStyle={{
                        color: '$colorHover',
                    }}
                    textDecorationLine="underline"
                >
                    Sign up
                </SizableText>
            </Paragraph>
        </Link>
    )
}

const ForgotPasswordLink = () => {
    return (
        <Link href={`#`}>
            <Paragraph
                color="$gray11"
                hoverStyle={{
                    color: '$gray12',
                }}
                size="$1"
                marginTop="$1"
            >
                Forgot your password?
            </Paragraph>
        </Link>
    )
}

export default function SignUpScreen() {
    const { signIn, status } = useSignIn()
    return (
        <MySafeAreaView>
            <MyStack>
                <YStack maxWidth={600}>
                    <FormCard>
                        <View
                            flexDirection="column"
                            alignItems="stretch"
                            minWidth="100%"
                            maxWidth="100%"
                            gap="$4"
                            $gtSm={{
                                width: 400,
                            }}
                        >
                            <H1
                                alignSelf="center"
                                size="$8"
                                $xs={{
                                    size: '$7',
                                }}
                            >
                                Sign in to your account
                            </H1>
                            <View flexDirection="column" gap="$3">
                                <View flexDirection="column" gap="$1">
                                    <Input size="$4">
                                        <Input.Label htmlFor="email">Email</Input.Label>
                                        <Input.Box>
                                            <Input.Area id="email" placeholder="email@example.com" />
                                        </Input.Box>
                                    </Input>
                                </View>
                                <View flexDirection="column" gap="$1">
                                    <Input size="$4">
                                        <View
                                            flexDirection="row"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Input.Label htmlFor="password">Password</Input.Label>
                                            <ForgotPasswordLink />
                                        </View>
                                        <Input.Box>
                                            <Input.Area
                                                textContentType="password"
                                                secureTextEntry
                                                id="password"
                                                placeholder="email@example.com"
                                            />
                                        </Input.Box>
                                    </Input>
                                </View>
                            </View>
                            <Theme inverse>
                                <Button
                                    disabled={status === 'loading'}
                                    onPress={signIn}
                                    width="100%"
                                    iconAfter={
                                        <AnimatePresence>
                                            {status === 'loading' ? (
                                                <Spinner
                                                    color="$color"
                                                    key="loading-spinner"
                                                    opacity={1}
                                                    scale={1}
                                                    animation="quick"
                                                    position="absolute"
                                                    enterStyle={{
                                                        opacity: 0,
                                                        scale: 0.5,
                                                    }}
                                                    exitStyle={{
                                                        opacity: 0,
                                                        scale: 0.5,
                                                    }}
                                                />
                                            ) : (<Button.Text>Sign Up</Button.Text>)}
                                        </AnimatePresence>
                                    }
                                >

                                </Button>
                            </Theme>
                            <View flexDirection="column" gap="$3" width="100%" alignItems="center">
                                <Theme>
                                    <View
                                        flexDirection="column"
                                        gap="$3"
                                        width="100%"
                                        alignSelf="center"
                                        alignItems="center"
                                    >
                                        <View flexDirection="row" width="100%" alignItems="center" gap="$4">
                                            <Separator />
                                            <Paragraph>Or</Paragraph>
                                            <Separator />
                                        </View>
                                        <View flexDirection="row" flexWrap="wrap" gap="$3">
                                            <Button flex={1} minWidth="100%">
                                                <Button.Icon>
                                                    <Github color="$gray10" size="$1" />
                                                </Button.Icon>
                                                <Button.Text>Continue with Github</Button.Text>
                                            </Button>
                                            <Button flex={1}>
                                                <Button.Icon>
                                                    <Facebook color="$blue10" size="$1" />
                                                </Button.Icon>
                                                <Button.Text>Continue with Facebook</Button.Text>
                                            </Button>
                                        </View>
                                    </View>
                                </Theme>
                            </View>
                            <SignUpLink />
                        </View>
                    </FormCard>
                </YStack>




            </MyStack>

        </MySafeAreaView>
    );
}

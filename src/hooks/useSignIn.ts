import { useState } from "react"

export function useSignIn() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
    return {
        status: status,
        signIn: () => {
            setStatus('loading')
            setTimeout(() => {
                setStatus('success')
            }, 2000)
        },
    }
}
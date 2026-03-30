'use client'

import { useRouter } from "next/navigation"

export default function Button({ children }) {
    const router = useRouter()

    const handleClick = () => {
        router.push('/dashboard/analytics')
    }
    return (
        <button onClick={handleClick} className="bg-blue-500 px-3 py-2 rounded text-gray-50 mt-6">{children}</button>
    )
}

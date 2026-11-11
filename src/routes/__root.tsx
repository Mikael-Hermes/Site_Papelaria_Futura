import { createRootRoute, Outlet } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import WhatsappBubble from '../components/WhatsappBubble'

function RootComponent() {
    return (
        <>
        <NavBar />
        <main className="mx-auto">
            <Outlet />
        </main>
        <WhatsappBubble />
        </>
    )
}

export const Route = createRootRoute({
    component: RootComponent
})
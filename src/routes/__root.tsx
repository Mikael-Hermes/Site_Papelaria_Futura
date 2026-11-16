import { createRootRoute, Outlet } from '@tanstack/react-router'
import NavBar from '../components/NavBar'
import WhatsappBubble from '../components/WhatsappBubble'
import Footer from '../components/Footer'

function RootComponent() {
    return (
        <>
        <NavBar />
        <main className="mx-auto">
            <Outlet />
        </main>
        <WhatsappBubble />
        <Footer />
        </>
    )
}

export const Route = createRootRoute({
    component: RootComponent
})
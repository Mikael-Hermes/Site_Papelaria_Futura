import { createRootRoute } from '@tanstack/react-router'
import NavBar from '../components/NavBar'

function RootComponent() {
    return (
        <NavBar />
    )
}

export const Route = createRootRoute({
    component: RootComponent
})
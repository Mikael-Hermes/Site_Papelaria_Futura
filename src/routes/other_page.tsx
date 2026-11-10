import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/other_page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/other_page"!</div>
}

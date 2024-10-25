import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h3 className="text-4xl">Welcome Home To the Team Management App!</h3>
    </div>
  )
}

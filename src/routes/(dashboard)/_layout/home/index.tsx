import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(dashboard)/_layout/home/')({
  component: () => (
    <main>
      <p className="text-gray-500">Home</p>
    </main>
  ),
})

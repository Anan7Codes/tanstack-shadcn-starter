import { createFileRoute, Outlet } from '@tanstack/react-router'
import Layout from '../../components/layout'

export const Route = createFileRoute('/(dashboard)/_layout')({
  component: () => (
    <Layout>
      <p>asdv</p>
      <Outlet />
    </Layout>
  ),
})

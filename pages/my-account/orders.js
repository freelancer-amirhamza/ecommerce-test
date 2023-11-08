import Orders from '@/app/components/order'
import DashboardLayout from '@/app/layout/DashboardLayout'
import React from 'react'

const orders = () => {
  return (
    <DashboardLayout>
      <Orders/>
    </DashboardLayout>
  )
}

export default orders
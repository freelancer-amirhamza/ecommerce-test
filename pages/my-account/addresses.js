import AddressForm from '@/app/components/dashboard/AddressForm'
import DashboardLayout from '@/app/layout/DashboardLayout'
import React from 'react'

const addresses = () => {
  return (
    <DashboardLayout>
      <AddressForm/>
    </DashboardLayout>
  )
}

export default addresses
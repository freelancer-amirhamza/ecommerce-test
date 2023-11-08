import UserProfile from '@/app/components/dashboard/UserProfile'
import DashboardLayout from '@/app/layout/DashboardLayout'
import React from 'react'

const UserAccount = () => {
  return (
    <DashboardLayout>
      <UserProfile/>
    </DashboardLayout>
  )
}

export default UserAccount
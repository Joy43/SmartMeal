import Navbar from '@/components/shared/Navbar';
import React from 'react'

import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <Navbar/>
      {
        children
      }
    </>
  )
}

export default layout

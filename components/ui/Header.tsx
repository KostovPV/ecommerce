import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.png'
import Container from './Container'
import Form from 'next/form'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='w-full bg-white-300 py-4 border-b border-b-gray-400' >
      {/* Logo */}
      <Container className='flex items-center justify-between gap-5'>
        <Link href={'/'}>
        <Image src={logo} alt='logo' className='w-24' priority />
        </Link>
        <Form action='/search' className='flex-1'>
          <input 
          type='text' 
          name='query' 
          placeholder='Search for products...' 
          className='w-full border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none'
          />
        </Form>
        <div>tabs</div>
      </Container>
      {/* Input */}
      {/* Logo */}
    </header>
  )
}

export default Header
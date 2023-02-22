import { Header, Footer } from '@/components'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container content-area'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

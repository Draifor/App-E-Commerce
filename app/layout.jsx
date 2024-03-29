import './styles/globals.css'
import Header from './components/header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark'>
        <Header />
        {children}
      </body>
    </html>
  )
}

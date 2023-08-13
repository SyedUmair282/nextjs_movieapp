import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout:React.FC = ({children}:any) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r to-slate-900 from-gray-600">
        <Header/>
        <main className="bg-gradient-to-r to-slate-900 from-gray-600">
          {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
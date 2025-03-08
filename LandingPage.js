import { useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Navbar */}
      <nav className='flex justify-between items-center p-5 bg-white shadow-lg sticky top-0 z-50'>
        <div className='text-3xl font-bold text-gray-800'>Intelion</div>
        <button className='md:hidden' onClick={toggleMenu}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
        <ul className={`md:flex md:items-center md:space-x-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <li><a href='#home' className='text-gray-600 hover:text-gray-900'>Home</a></li>
          <li><a href='#features' className='text-gray-600 hover:text-gray-900'>Features</a></li>
          <li><a href='#pricing' className='text-gray-600 hover:text-gray-900'>Pricing</a></li>
          <li><a href='#contact' className='text-gray-600 hover:text-gray-900'>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id='home' className='text-center py-24 bg-gradient-to-r from-blue-500 to-green-500 text-white'>
        <h1 className='text-6xl font-extrabold mb-6'>Financial Intelligence Made Simple</h1>
        <p className='text-2xl mb-8'>Seamlessly manage your financials with cutting-edge technology from Intelion.</p>
        <Button variant='contained' color='primary' size='large' className='shadow-lg hover:shadow-2xl'>Get Started</Button>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12'>Our Key Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>Automated Financial Tracking</h3>
                <p className='text-gray-600'>Easily track all transactions and maintain records effortlessly.</p>
              </CardContent>
            </Card>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>Customizable Reports</h3>
                <p className='text-gray-600'>Create personalized reports to match your financial objectives.</p>
              </CardContent>
            </Card>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>AI-Powered Insights</h3>
                <p className='text-gray-600'>Leverage AI-driven insights to make informed financial decisions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-12'>Pricing Plans</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>Basic Plan</h3>
                <p className='text-gray-600 mb-4'>Ideal for small businesses and startups.</p>
                <p className='text-4xl font-bold'>$49/month</p>
              </CardContent>
            </Card>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>Pro Plan</h3>
                <p className='text-gray-600 mb-4'>Perfect for growing businesses.</p>
                <p className='text-4xl font-bold'>$99/month</p>
              </CardContent>
            </Card>
            <Card className='shadow-md hover:shadow-xl'>
              <CardContent>
                <h3 className='text-2xl font-semibold mb-4'>Enterprise Plan</h3>
                <p className='text-gray-600 mb-4'>Advanced features for large enterprises.</p>
                <p className='text-4xl font-bold'>$199/month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className='bg-gray-800 text-white py-10'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <p>© 2025 Intelion. All rights reserved.</p>
          <p className='mt-2'>Privacy Policy | Terms of Service | Contact Us</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

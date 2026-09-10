import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='bg-red-950 shadow-md text-white'>

      <div>
        <span className='text-xl font-bold text-white'>Projeto</span>
      </div>
        <div className='flex space-x4'>
        <Link to="/" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Home</Link>
        <Link to="/sobre" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Sobre</Link>
        <Link to="/porduto" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Produto</Link>
        <Link to="/contato" className="flex items-center px-3 py-2 font-medium text-amber-200 hover:text-amber-600">Contato</Link>
        </div>


    </nav>
  )
}

export default NavBar

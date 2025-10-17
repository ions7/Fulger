import { Link, useLocation } from 'react-router-dom'
import { Home, Wrench, DollarSign, Info, Phone } from 'lucide-react'

const BottomNav = () => {
    const location = useLocation()

    const navItems = [
        { name: 'Acasă', icon: <Home className="w-5 h-5" />, href: '/' },
        { name: 'Servicii', icon: <Wrench className="w-5 h-5" />, href: '/servicii' },
        { name: 'Prețuri', icon: <DollarSign className="w-5 h-5" />, href: '/preturi' },
        { name: 'Despre', icon: <Info className="w-5 h-5" />, href: '/despre' },
        { name: 'Contact', icon: <Phone className="w-5 h-5" />, href: '/contact' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-md border-t border-primary/20 z-[100] flex justify-around py-2 pb-[env(safe-area-inset-bottom)]">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className={`flex flex-col items-center text-xs transition-colors ${
                        isActive(item.href)
                            ? 'text-primary font-semibold'
                            : 'text-gray-300 hover:text-primary'
                    }`}
                >
                    {item.icon}
                    <span className="mt-1">{item.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default BottomNav

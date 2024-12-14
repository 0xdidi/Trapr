'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Home, User, Bell, MessageSquare, LogOut } from 'lucide-react'
import { useSupabase } from './supabase-provider'
import { toast } from './ui/use-toast'

const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { supabase } = useSupabase()

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/profile', icon: User, label: 'Profile' },
    { href: '/notifications', icon: Bell, label: 'Notifications' },
    { href: '/messages', icon: MessageSquare, label: 'Messages' },
  ]

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      })
    } else {
      router.push('/')
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:flex md:flex-col md:w-64 md:h-screen md:border-r md:border-t-0">
      <ul className="flex justify-around md:flex-col md:space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center p-2 rounded-lg ${
                pathname === item.href ? 'bg-gray-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-6 h-6 mr-2" />
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={handleSignOut}
            className="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-50 w-full"
          >
            <LogOut className="w-6 h-6 mr-2" />
            <span className="hidden md:inline">Sign Out</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation


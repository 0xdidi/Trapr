import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, DollarSign, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="text-3xl font-bold text-purple-600">Trapr</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="text-gray-600 hover:text-purple-600">Features</Link></li>
            <li><Link href="#pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
            <li><Link href="/sign-in" className="text-gray-600 hover:text-purple-600">Sign In</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Trapr</h1>
          <p className="text-xl text-gray-600 mb-8">The next-generation platform for content creators and their fans</p>
          <Button asChild size="lg">
            <Link href="/sign-up">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Trapr?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Users className="h-12 w-12 text-purple-500" />}
                title="Grow Your Audience"
                description="Connect with fans and build a loyal following with our advanced engagement tools."
              />
              <FeatureCard 
                icon={<DollarSign className="h-12 w-12 text-purple-500" />}
                title="Monetize Your Content"
                description="Multiple revenue streams including subscriptions, tips, and pay-per-view content."
              />
              <FeatureCard 
                icon={<CheckCircle className="h-12 w-12 text-purple-500" />}
                title="Full Creative Control"
                description="You own your content. Set your own prices and decide what to share."
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-center mb-4">Creator Plan</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">20%</span>
                  <span className="text-gray-600 ml-2">platform fee</span>
                </div>
                <ul className="mb-8">
                  <PricingFeature>Unlimited content uploads</PricingFeature>
                  <PricingFeature>Direct messaging with fans</PricingFeature>
                  <PricingFeature>Analytics dashboard</PricingFeature>
                  <PricingFeature>Customizable profile</PricingFeature>
                  <PricingFeature>24/7 creator support</PricingFeature>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/sign-up">Start Creating</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Content?</h2>
            <p className="text-xl mb-8">Join Trapr today and start connecting with your audience like never before.</p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/sign-up">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 Trapr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-block mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function PricingFeature({ children }) {
  return (
    <li className="flex items-center mb-3">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      <span>{children}</span>
    </li>
  )
}


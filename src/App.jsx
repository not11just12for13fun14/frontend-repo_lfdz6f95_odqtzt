import { useEffect } from 'react'

const products = [
  {
    name: 'Raw Cotton Bales',
    description: 'High-grade cotton bales sourced and processed with strict quality standards.',
    image: 'https://images.unsplash.com/photo-1665077751401-ba57e232ef20?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYXclMjBDb3R0b24lMjBCYWxlc3xlbnwwfDB8fHwxNzYzMDQ3MTk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Combed Cotton Yarn',
    description: 'Premium yarn with superior strength and softness for textiles and garments.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Cotton Lint',
    description: 'Clean, uniformly ginned lint ideal for spinning and textile production.',
    image: 'https://images.unsplash.com/photo-1707782438650-d324025da296?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3R0b24lMjBMaW50fGVufDB8MHx8fDE3NjMwNDcxOTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cotton Seeds',
    description: 'Carefully separated seeds suitable for oil extraction and agriculture.',
    image: 'https://images.unsplash.com/photo-1624799843752-e22a4f200450?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3R0b24lMjBTZWVkc3xlbnwwfDB8fHwxNzYzMDQ3MjAwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cotton Waste (Comber/Drop)',
    description: 'Reliable by-products for open-end spinning and various industrial uses.',
    image: 'https://images.unsplash.com/photo-1707782438650-d324025da296?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3R0b24lMjBXYXN0ZSUyMCUyOENvbWJlciUyRkRyb3AlMjl8ZW58MHwwfHx8MTc2MzA0NzIwMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Absorbent Cotton',
    description: 'Medical-grade absorbent cotton processed for hygiene and healthcare.',
    image: 'https://images.unsplash.com/photo-1760722974657-f64bce2f9cc5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBYnNvcmJlbnQlMjBDb3R0b258ZW58MHwwfHx8MTc2MzA0NzIwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')
      if (id.length > 1) {
        e.preventDefault()
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-sky-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 shadow-inner" />
            <span className="font-extrabold tracking-tight text-lg sm:text-xl">Sadabahar Cotton Factory</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-sky-700">Home</a>
            <a href="#products" className="hover:text-sky-700">Products</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#process" className="hover:text-sky-700">Process</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="pt-24 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                Sadabahar Cotton Factory
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Trusted manufacturer and supplier of high‑quality cotton products. From raw bales to premium yarn, we power textiles with consistency, purity, and care.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#products" className="px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Explore Products</a>
                <a href="#contact" className="px-6 py-3 rounded-full border border-gray-300 hover:border-sky-300 hover:text-sky-700 transition">Get a Quote</a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />ISO-inspired QC</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Reliable logistics</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />On-time delivery</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-white shadow-xl p-3">
                <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block">
                <div className="rounded-2xl bg-white shadow-lg p-4 border border-sky-100">
                  <p className="text-sm font-medium">100% Natural Cotton</p>
                  <p className="text-xs text-gray-500">Ethically sourced • Carefully processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Our Cotton Products</h2>
              <p className="mt-2 text-gray-600">Consistent, tested, and ready for your production lines.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition">Request Pricing</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition">
                <div className="h-44 sm:h-52 w-full bg-gray-100 overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-emerald-600 font-medium">Quality Assured</span>
                    <a href="#contact" className="text-sm text-sky-700 hover:text-sky-900 font-semibold">Enquire →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold">Rooted in quality, growing with trust</h2>
              <p className="mt-4 text-gray-600">
                We combine modern ginning technology with rigorous testing to deliver cotton that meets international standards. Our processes are designed for consistency and traceability, ensuring every shipment aligns with your expectations.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Moisture controlled</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Contamination checked</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Standard bale weights</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Customized lots</li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl p-3">
                <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Process</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">From farm to factory, every step is monitored to preserve the natural qualities of cotton while achieving consistent output.</p>
          <div className="mt-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            {[
              { step: '01', title: 'Sourcing', desc: 'Ethically sourced cotton from trusted farms.' },
              { step: '02', title: 'Ginning', desc: 'Advanced ginning for clean, uniform lint.' },
              { step: '03', title: 'Quality Control', desc: 'Moisture, contamination, and fiber checks.' },
              { step: '04', title: 'Packing & Dispatch', desc: 'Standardized bales and reliable logistics.' },
            ].map(s => (
              <div key={s.step} className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="text-sky-600 font-extrabold">{s.step}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-gray-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Contact & Enquiries</h2>
              <p className="mt-2 text-gray-600">Tell us what you need and our team will get back with product specs, availability, and pricing.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p><span className="font-semibold">Factory:</span> Sadabahar Cotton Factory</p>
                <p><span className="font-semibold">Email:</span> hello@sadabaharcotton.com</p>
                <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
                <p><span className="font-semibold">Hours:</span> Mon–Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div>
              <form className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">What are you looking for?</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300">
                    <option>Raw Cotton Bales</option>
                    <option>Combed Cotton Yarn</option>
                    <option>Cotton Lint</option>
                    <option>Cotton Seeds</option>
                    <option>Cotton Waste (Comber/Drop)</option>
                    <option>Absorbent Cotton</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300" placeholder="Tell us about quantities, specs, delivery timelines..." />
                </div>
                <button type="button" className="mt-5 w-full sm:w-auto px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Send Enquiry</button>
                <p className="mt-2 text-xs text-gray-500">This demo form does not send messages. Add integration later for email or CRM.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sky-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sadabahar Cotton Factory. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#products" className="hover:text-sky-700">Products</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { Link } from "@inertiajs/react"

export default function Layout({ children }) {
    return (
    <main class="bg-gray-50 text-gray-900">
        <header class="bg-white border-b sticky top-0 z-50">
            <div class="hidden md:block bg-slate-900 text-white text-xs py-2">
                <div class="container mx-auto px-4 flex justify-between items-center">
                    <span>Senin, 20 April 2026</span>
                    <div class="space-x-4">
                        <a href="#" class="hover:text-red-400">Tentang Kami</a>
                        <a href="#" class="hover:text-red-400">Kontak</a>
                        <a href="#" class="hover:text-red-400 font-bold">Daftar Newsletter</a>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <button class="md:hidden text-2xl"><i class="fa-solid fa-bars"></i></button>

                <div class="text-3xl font-black tracking-tighter text-red-600">
                    NEWS<span class="text-slate-800">PORTAL</span>
                </div>

                <nav class="hidden md:flex space-x-6 font-semibold text-sm uppercase">
                    <Link href="/" class="hover:text-red-600 border-b-2 border-red-600">Home</Link>
                    <Link href="/kanal/politik" class="hover:text-red-600">Politik</Link>
                    <Link href="/kanal/teknologi" class="hover:text-red-600">Teknologi</Link>
                    <Link href="/kanal/ekonomi" class="hover:text-red-600">Ekonomi</Link>
                    <Link href="/kanal/olahraga" class="hover:text-red-600">Olahraga</Link>
                </nav>

                <div class="flex items-center space-x-4">
                    <button class="text-xl"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <Link href="/login" class="hidden md:block bg-slate-800 text-white px-4 py-2 rounded text-sm font-bold">LOG IN</Link>
                </div>
            </div>
        </header>
        {children}
        <footer class="bg-slate-950 text-gray-400 pt-16 pb-8">
            <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 text-sm">
                <div class="space-y-4">
                    <div class="text-2xl font-black text-white italic">NEWS<span class="text-red-600">PORTAL</span></div>
                    <p>Media informasi digital terdepan menyajikan berita akurat, tajam, dan terpercaya untuk seluruh masyarakat Indonesia.</p>
                    <div class="flex space-x-4 text-xl">
                        <a href="#" class="hover:text-white"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="hover:text-white"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="hover:text-white"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Kategori</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-red-500">Politik</a></li>
                        <li><a href="#" class="hover:text-red-500">Bisnis & Ekonomi</a></li>
                        <li><a href="#" class="hover:text-red-500">Teknologi</a></li>
                        <li><a href="#" class="hover:text-red-500">Gaya Hidup</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Perusahaan</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-red-500">Redaksi</a></li>
                        <li><a href="#" class="hover:text-red-500">Pedoman Media Siber</a></li>
                        <li><a href="#" class="hover:text-red-500">Karir</a></li>
                        <li><a href="#" class="hover:text-red-500">Kebijakan Privasi</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4 uppercase tracking-widest text-xs">Download Aplikasi</h4>
                    <div class="flex flex-col space-y-3">
                        <img src="https://placehold.co/150x45/222/white?text=App+Store" alt="App Store" class="w-32 cursor-pointer" />
                        <img src="https://placehold.co/150x45/222/white?text=Play+Store" alt="Play Store" class="w-32 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 pt-8 text-center text-xs">
                &copy; 2026 NEWS PORTAL. All rights reserved.
            </div>
        </footer>
    </main>
    )
}

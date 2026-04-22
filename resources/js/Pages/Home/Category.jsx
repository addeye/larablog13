import Layout from "../Layout";
import { Head } from "@inertiajs/react";

export default function Category({slug}) {
    // get parameter from url
  return (
    <Layout>
        <Head title="Welcome" />

        <main class="container mx-auto px-4 py-8">
            <nav class="text-xs text-gray-500 mb-4">
                <a href="#" class="hover:text-red-600">Home</a> / <span class="text-slate-900 font-bold">{slug}</span>
            </nav>

            <div class="border-b-2 border-gray-100 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 class="text-4xl font-black tracking-tight text-slate-900 uppercase">{slug.toUpperCase()}</h1>
                    <p class="text-gray-500 mt-2 max-w-2xl">Menyajikan berita terbaru seputar gadget, inovasi AI, startup, dan perkembangan dunia digital global.</p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-slate-900 text-white text-xs rounded-full cursor-pointer">Semua</span>
                    <span class="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xs rounded-full cursor-pointer">Gadget</span>
                    <span class="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xs rounded-full cursor-pointer">AI</span>
                    <span class="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-xs rounded-full cursor-pointer">Startup</span>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-8">
                    <div class="relative rounded-xl overflow-hidden mb-10 group cursor-pointer">
                        <img src="https://placehold.co/800x400/1e293b/white?text=Top+Tech+News" class="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"/>
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                            <h2 class="news-title text-3xl font-bold mb-2">Apple Rilis Chipset Terbaru dengan Efisiensi Daya 40% Lebih Tinggi</h2>
                            <p class="text-gray-300 text-sm line-clamp-2">Teknologi fabrikasi 2nm akhirnya resmi diperkenalkan ke publik dan akan segera diimplementasikan pada lini produk terbaru...</p>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="flex flex-col md:flex-row gap-6 border-b pb-8 group cursor-pointer">
                            <div class="md:w-1/3 overflow-hidden rounded-lg">
                                <img src="https://placehold.co/300x200/eee/333?text=Article+1" class="w-full h-full object-cover group-hover:scale-110 transition duration-300"/>
                            </div>
                            <div class="md:w-2/3">
                                <h3 class="news-title text-xl font-bold group-hover:text-red-600 mb-2 transition">Startup Indonesia Raih Pendanaan Seri B Senilai 500 Miliar</h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-2">Fokus pada keberlanjutan lingkungan, startup agrotech ini berencana melakukan ekspansi ke Asia Tenggara.</p>
                                <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">1 Jam yang lalu • Oleh Admin</div>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row gap-6 border-b pb-8 group cursor-pointer">
                            <div class="md:w-1/3 overflow-hidden rounded-lg">
                                <img src="https://placehold.co/300x200/eee/333?text=Article+2" class="w-full h-full object-cover group-hover:scale-110 transition duration-300"/>
                            </div>
                            <div class="md:w-2/3">
                                <h3 class="news-title text-xl font-bold group-hover:text-red-600 mb-2 transition">Keamanan Siber: Cara Melindungi Server dari Serangan Ransomware</h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-2">Langkah praktis yang harus diambil oleh perusahaan IT untuk memitigasi risiko kebocoran data sensitif.</p>
                                <div class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">3 Jam yang lalu • Oleh Redaksi</div>
                            </div>
                        </div>
                    </div>

                    <button class="w-full py-4 mt-8 border-2 border-gray-200 text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition">
                        Tampilkan Lebih Banyak
                    </button>
                </div>

                <aside class="lg:col-span-4 space-y-6">
                    <div class="bg-gray-100 h-[600px] flex items-center justify-center rounded-lg border border-dashed border-gray-400">
                        <span class="text-gray-400 font-bold text-xs uppercase">Ruang Iklan (Sidebar Ads)</span>
                    </div>

                    <div class="sticky top-24">
                        <h2 class="text-lg font-bold border-b-2 border-red-600 inline-block mb-4">Trending di {slug.replace(/^./, char => char.toUpperCase())}</h2>
                        <div class="space-y-4">

                               
                            <div class="flex gap-3">
                                <div class="w-12 h-12 bg-slate-900 text-white flex-shrink-0 flex items-center justify-center rounded text-xl font-black">1</div>
                                <p class="text-sm font-semibold hover:text-red-600 cursor-pointer">Meta Rilis Kacamata Pintar Baru</p>
                            </div>
                            </div>
                    </div>
                </aside>
            </div>
        </main>
    </Layout>
  );
}

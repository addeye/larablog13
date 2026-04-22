import Layout from "../Layout";
import { Head } from "@inertiajs/react";
import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Show() {
  return (
    <Layout>
        <Head title="Welcome" />

        <section class="bg-red-50 border-b">
            <div class="container mx-auto px-4 py-2 flex items-center">
                <span class="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded mr-3 whitespace-nowrap uppercase">Breaking News</span>
                <marquee class="text-sm font-medium text-red-800">Pemerintah luncurkan inisiatif baru untuk percepatan ekonomi digital di seluruh wilayah Indonesia...</marquee>
            </div>
        </section>

        <main class="container mx-auto px-4 py-8">

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
                <div class="lg:col-span-8 group cursor-pointer">
                    <div class="relative overflow-hidden rounded-xl">
                        <img src="https://placehold.co/800x450/2d3436/white?text=Berita+Utama+Hari+Ini" class="w-full object-cover transition duration-300 group-hover:scale-105" alt="Main News"/>
                        <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <span class="bg-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block">Teknologi</span>
                            <h1 class="news-title text-2xl md:text-4xl font-bold leading-tight">Terobosan Baru AI: Bagaimana Dampaknya Terhadap Lapangan Kerja di Indonesia?</h1>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 flex flex-col gap-6">
                    <div class="flex gap-4 group cursor-pointer">
                        <img src="https://placehold.co/150x150/636e72/white?text=Side+1" class="w-24 h-24 object-cover rounded-lg" alt="Side 1" />
                        <div>
                            <span class="text-red-600 text-[10px] font-bold uppercase">Ekonomi</span>
                            <h3 class="font-bold leading-snug group-hover:text-red-600 transition">Harga Saham Teknologi Melonjak Tajam Pekan Ini</h3>
                            <p class="text-xs text-gray-500 mt-1">2 Jam yang lalu</p>
                        </div>
                    </div>
                    <div class="flex gap-4 group cursor-pointer border-t pt-6">
                        <img src="https://placehold.co/150x150/636e72/white?text=Side+2" class="w-24 h-24 object-cover rounded-lg" alt="Side 2"/>
                        <div>
                            <span class="text-red-600 text-[10px] font-bold uppercase">Politik</span>
                            <h3 class="font-bold leading-snug group-hover:text-red-600 transition">Debat Calon Gubernur Berlangsung Sengit Malam Tadi</h3>
                            <p class="text-xs text-gray-500 mt-1">4 Jam yang lalu</p>
                        </div>
                    </div>
                    <div class="flex gap-4 group cursor-pointer border-t pt-6">
                        <img src="https://placehold.co/150x150/636e72/white?text=Side+3" class="w-24 h-24 object-cover rounded-lg" alt="Side 3"/>
                        <div>
                            <span class="text-red-600 text-[10px] font-bold uppercase">Gaya Hidup</span>
                            <h3 class="font-bold leading-snug group-hover:text-red-600 transition">5 Destinasi Wisata Tersembunyi yang Wajib Dikunjungi</h3>
                            <p class="text-xs text-gray-500 mt-1">5 Jam yang lalu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

                <div class="lg:col-span-8">
                    <h2 class="text-2xl font-bold border-l-4 border-red-600 pl-4 mb-6">Terbaru</h2>

                    <div class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start border-b pb-8">
                            <img src="https://placehold.co/400x250/dfe6e9/333?text=Berita+List" class="rounded-lg w-full" alt="News"/>
                            <div class="md:col-span-2">
                                <h3 class="news-title text-xl font-bold mb-2 hover:text-red-600 cursor-pointer">Pemanasan Global: Mengapa Tahun Ini Terasa Lebih Panas dari Sebelumnya?</h3>
                                <p class="text-gray-600 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
                                <div class="flex items-center text-[11px] font-bold text-gray-400 space-x-3">
                                    <span class="text-slate-800 uppercase">Lingkungan</span>
                                    <span>•</span>
                                    <span>Oleh Redaksi</span>
                                    <span>•</span>
                                    <span>12 Menit Baca</span>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>

                <aside class="lg:col-span-4 space-y-8">
                    <div class="bg-white p-6 rounded-xl shadow-sm border">
                        <h2 class="text-lg font-bold mb-4 flex items-center">
                            <i class="fa-solid fa-fire text-orange-500 mr-2"></i> Terpopuler
                        </h2>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-4">
                                <span class="text-3xl font-black text-gray-200 italic">01</span>
                                <p class="text-sm font-bold hover:text-red-600 cursor-pointer">Prediksi Cuaca Ekstrem Sepekan ke Depan</p>
                            </div>
                            <div class="flex items-center space-x-4 border-t pt-4">
                                <span class="text-3xl font-black text-gray-200 italic">02</span>
                                <p class="text-sm font-bold hover:text-red-600 cursor-pointer">Tips Menabung Untuk Anak Muda Gaji UMR</p>
                            </div>
                            <div class="flex items-center space-x-4 border-t pt-4">
                                <span class="text-3xl font-black text-gray-200 italic">03</span>
                                <p class="text-sm font-bold hover:text-red-600 cursor-pointer">Update Transfer Pemain Liga Inggris Musim Depan</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900 text-white p-6 rounded-xl">
                        <h3 class="text-xl font-bold mb-2">Dapatkan Berita Harian</h3>
                        <p class="text-gray-400 text-sm mb-4">Berlangganan newsletter kami untuk update berita langsung ke inbox Anda.</p>
                        <input type="email" placeholder="Email Anda" class="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white text-sm mb-3 focus:outline-none focus:border-red-600"/>
                        <button class="w-full bg-red-600 hover:bg-red-700 font-bold py-2 rounded transition text-sm">SUBSCRIBE</button>
                    </div>
                </aside>
            </div>
        </main>
    </Layout>
  );
}

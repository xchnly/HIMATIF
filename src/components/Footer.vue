<template>
    <footer class="bg-zinc-950 text-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="col-span-2">
                    <div class="flex items-center mb-4">
                        <img class="h-24 w-auto" :src=LogoHimatifBGBLK alt="Logo HIMATIF">
                        <span class="ml-2 text-xl font-bold text-white">HIMATIF</span>
                        <span class="ml-1 text-gray-400">UNIVERSITAS UNIVERSAL</span>
                    </div>
                    <p class="text-gray-400 mb-6 max-w-md">
                        Himpunan Mahasiswa Teknik Informatika Universitas Universal - Wadah kreativitas, inovasi, dan
                        pengembangan diri bagi mahasiswa TIF.
                    </p>
                    <div class="flex space-x-4">

                        <a href="#" class="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                        <a href="mailto:uvershimatif@gmail.com" class="text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                            </svg>
                        </a>

                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Tautan Cepat</h3>
                    <ul class="space-y-2">
                        <li><a href="#about" class="text-gray-400 hover:text-white transition duration-300">Tentang
                                Kami</a></li>
                        <li><a href="#events"
                                class="text-gray-400 hover:text-white transition duration-300">Kegiatan</a></li>
                        <li><a href="#gallery" class="text-gray-400 hover:text-white transition duration-300">Galeri</a>
                        </li>
                        <li><a href="#team" class="text-gray-400 hover:text-white transition duration-300">Pengurus</a>
                        </li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white transition duration-300">Kontak</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-4">Kontak</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-start">
                            <svg class="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>Universitas Universal Batam</span>
                        </li>
                        <a href="mailto:uvershimatif@gmail.com">
                        <li class="flex items-start">
                            <svg class="h-5 w-5 mr-2 text-gray-500" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                            <span>uvershimatif@gmail.com</span>
                        </li>
                        </a>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">© 2025 HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UNIVERSITAS UNIVERSAL. All rights reserved.</p>
                
            </div>
        </div>
    </footer>
</template>

<script>
import LogoHimatifBGBLK from '@/assets/Images/logo-himatif-bgblack.svg';

export default {
    name: 'Footer',
    data() {
        return {
            LogoHimatifBGBLK
        }
    }
}
</script>
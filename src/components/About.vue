<template>
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Tentang <span class="text-red-600">HIMATIF</span>
                </h2>
                <div class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                    Wadah resmi bagi mahasiswa Teknik Informatika Universitas Universal untuk mengembangkan potensi
                    akademik dan non-akademik.
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img :src="Kegiatan1" alt="HIMATIF Activity 1"
                                class="w-full h-full object-cover ">
                        </div>
                        <div class="rounded-lg overflow-hidden shadow-lg mt-8">
                            <img :src="Kegiatan3" alt="HIMATIF Activity 2"
                                class="w-full h-full object-cover">
                        </div>
                        <div class="rounded-lg overflow-hidden shadow-lg">
                            <img :src="Kegiatan2" alt="HIMATIF Activity 3"
                                class="w-full h-full object-cover">
                        </div>
                        <div class="rounded-lg overflow-hidden shadow-lg mt-8">
                            <img :src="Kegiatan4" alt="HIMATIF Activity 4"
                                class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-xl">
                        <div class="text-4xl font-bold">10+</div>
                        <div class="text-sm">Program Kerja</div>
                    </div>
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Visi & Misi HIMATIF UNIVERSAL</h3>

                    <div class="mb-8">
                        <h4 class="text-lg font-semibold text-red-600 mb-3">Visi</h4>
                        <p class="text-gray-600">
                            Menjadi himpunan yang aktif, inklusif, dan inovatif dalam mendukung pengembangan mahasiswa
                            Teknik Informatika Universitas Universal sesuai bidang keilmuannya.
                        </p>
                    </div>

                    <div>
                        <h4 class="text-lg font-semibold text-red-600 mb-3">Misi</h4>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-start">
                                <span class="flex-shrink-0 h-6 w-6 text-red-500 mr-2">✓</span>
                                <span>Mendukung pengembangan mahasiswa sesuai dengan track yang diambil (IE atau ME)
                                    melalui kegiatan edukatif, kompetitif, dan kolaboratif.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 h-6 w-6 text-red-500 mr-2">✓</span>
                                <span>Membangun ekosistem pembelajaran dan komunitas yang sehat di lingkungan Teknik
                                    Informatika.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 h-6 w-6 text-red-500 mr-2">✓</span>
                                <span>Meningkatkan eksistensi dan kontribusi HIMATIF melalui media sosial dan publikasi
                                    karya mahasiswa.</span>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 h-6 w-6 text-red-500 mr-2">✓</span>
                                <span>Menjalin kerja sama dengan pihak eksternal seperti industri, komunitas teknologi,
                                    alumni, maupun organisasi kampus lainnya.
                                </span>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 h-6 w-6 text-red-500 mr-2">✓</span>
                                <span>Menanamkan nilai kepemimpinan, tanggung jawab, dan profesionalisme melalui
                                    pengalaman berorganisasi dan pelatihan soft skill.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Kegiatan1 from '@/assets/Images/KEGIATAN1.jpg'
import Kegiatan2 from '@/assets/Images/KEGIATAN2.jpg'
import Kegiatan3 from '@/assets/Images/KEGIATAN3.jpg'
import Kegiatan4 from '@/assets/Images/KEGIATAN4.jpg'

</script>

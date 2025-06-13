<template>
    <section id="team" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Pengurus <span class="text-red-600">HIMATIF</span>
                </h2>
                <div class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                    Tim pengurus HIMATIF UNIVERSAL periode 2023/2024 yang siap melayani dan memajukan himpunan.
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(member, index) in team" :key="index"
                    class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                    <div class="relative">
                        <img :src="member.photo" :alt="member.name" class="w-full h-64 object-cover">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20">
                        </div>
                        <div class="absolute bottom-4 left-4">
                            <h3 class="text-white font-bold text-xl">{{ member.name }}</h3>
                            <p class="text-red-200">{{ member.position }}</p>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-center space-x-4">
                            <a :href="member.social.github" target="_blank" class="text-gray-400 hover:text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-github-icon lucide-github">
                                    <path
                                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a :href="member.social.instagram" target="_blank"
                                class="text-gray-400 hover:text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a :href="member.social.email" target="_blank" class="text-gray-400 hover:text-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Team',
    data() {
        return {
            team: [
                {
                    name: 'Suryo Widiantoro, S.T., MM.SI., M.Com (IS)',
                    position: 'Penanggung Jawab HIMATIF',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Yonky Pernando, S.Kom., M.Kom',
                    position: 'Dosen Pembina HIMATIF',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Hendry',
                    position: 'Ketua HIMATIF (PLT)',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Sanni Oktavia',
                    position: 'Wakil Ketua HIMATIF',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Gres Destina Telaumbanua',
                    position: 'Sekretaris',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Lustini',
                    position: 'Bendahara',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Fernando',
                    position: 'Koordinator HUMAS',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Immanuel Maitreya Lee W. Jr',
                    position: 'Anggota HUMAS',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'James Lim',
                    position: 'Anggota HUMAS',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Deni Fu',
                    position: 'Koordinator KOMINFO',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Katherine Lorenza',
                    position: 'Anggota KOMINFO',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Gusnawan',
                    position: 'Anggota KOMINFO',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Eril Sanjaya',
                    position: 'Koordinator Minat Bakat',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Samuel Jackson',
                    position: 'Anggota Minat Bakat',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
                {
                    name: 'Tino Winata Sumarno',
                    position: 'Ex Ketua HIMATIF',
                    photo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    social: {
                        github: '#',
                        instagram: '#',
                        email: '#'
                    }
                },
            ]
        }
    }
}
</script>
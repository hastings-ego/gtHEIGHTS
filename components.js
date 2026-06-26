function renderComponents() {
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.className = "fixed w-full z-50 glass-header";
        headerEl.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between gap-4 relative">
                <a href="index.html" class="serif-heading text-2xl sm:text-3xl font-semibold tracking-wide text-white hover:text-purple-400 transition-colors whitespace-nowrap">
                    gtHEIGHTS<span class="text-purple-500">.</span>
                </a>
                <nav class="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium text-zinc-400">
                    <a href="rooms.html" class="hover:text-white transition-colors">Rooms</a>
                    <a href="agents.html" class="hover:text-white transition-colors">Agents</a>
                    <a href="about.html" class="hover:text-white transition-colors">About</a>
                    <a href="faq.html" class="hover:text-white transition-colors">FAQ & Rules</a>
                    <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
                </nav>
                <div class="hidden sm:block">
                    <a href="book.html" class="text-[10px] sm:text-xs tracking-widest uppercase font-medium border border-white/20 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                        Book Stay
                    </a>
                </div>
                <button id="mobile-nav-toggle" class="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-colors" aria-expanded="false" aria-controls="mobile-nav">
                    <span class="sr-only">Toggle navigation</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div id="mobile-nav" class="hidden md:hidden absolute left-4 right-4 top-full mt-3 rounded-2xl border border-white/10 bg-[#09090b] backdrop-blur-xl p-4 shadow-2xl">
                    <div class="flex flex-col gap-3 text-sm tracking-widest uppercase font-medium text-zinc-300">
                        <a href="rooms.html" class="hover:text-white transition-colors py-2">Rooms</a>
                        <a href="agents.html" class="hover:text-white transition-colors py-2">Agents</a>
                        <a href="about.html" class="hover:text-white transition-colors py-2">About</a>
                        <a href="faq.html" class="hover:text-white transition-colors py-2">FAQ & Rules</a>
                        <a href="contact.html" class="hover:text-white transition-colors py-2">Contact</a>
                        <a href="book.html" class="mt-2 inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium border border-white/20 px-4 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap">
                            Book Stay
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.className = "border-t border-white/5 bg-[#0c0c0e] py-12 mt-12";
        footerEl.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wider text-zinc-500 uppercase text-center md:text-left">
                <p>&copy; 2026 Greatest Treasure Heights.</p>
                <div class="flex flex-wrap justify-center gap-6">
                    <a href="rooms.html" class="hover:text-purple-400 transition-colors">Our Rooms</a>
                    <a href="policies.html" class="hover:text-purple-400 transition-colors">Policies</a>
                    <a href="contact.html" class="hover:text-purple-400 transition-colors">Contact Agent</a>
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', renderComponents);

document.addEventListener('click', (event) => {
    const toggle = document.getElementById('mobile-nav-toggle');
    const menu = document.getElementById('mobile-nav');
    if (!toggle || !menu) return;

    const isToggle = toggle.contains(event.target);
    const isMenu = menu.contains(event.target);

    if (isToggle) {
        const isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', String(!isOpen));
        return;
    }

    if (!isMenu) {
        menu.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
    }
});

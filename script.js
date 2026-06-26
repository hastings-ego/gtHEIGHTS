const estateDatabase = [
    {
        id: 101,
        name: 'Ground Floor (Single) Rooms',
        tier: 'Single',
        pricePerDay: 499,
        price: 6500,
        available: true,
        location: 'Turfloop',
        beds: 1,
        baths: 1,
        area: 40,
        img: 'assets/e.jpeg',
        gallery: [
            'assets/a.jpeg',
            'assets/b.jpeg',
            'assets/c.jpeg',
            'assets/d.jpeg',
        ],
        spec: 'Easily accessible ground floor rooms with modern amenities. Perfect for short or extended guesthouse stays.'
    },
    {
        id: 111,
        name: 'Ground Floor (Double) Rooms',
        tier: 'Double',
        pricePerDay: 599,
        price: 6500,
        available: true,
        location: 'Turfloop',
        beds: 1,
        baths: 1,
        area: 80,
        img: 'assets/h1.jpeg',
        gallery: [
            'assets/a.jpeg',
            'assets/b.jpeg',
            'assets/c.jpeg',
            'assets/d.jpeg',
        ],
        spec: 'Easily accessible ground floor rooms with modern amenities. Perfect for short or extended guesthouse stays.'
    },
    {
        id: 211,
        name: 'First Floor (Single) Rooms',
        tier: 'Single',
        pricePerDay: 649,
        price: 6500,
        available: true,
        location: 'Turfloop',
        beds: 1,
        baths: 1,
        area: 40,
        img: 'assets/h2.jpeg',
        gallery: [
            'assets/a.jpeg',
            'assets/b.jpeg',
            'assets/c.jpeg',
            'assets/d.jpeg',
        ],
        spec: 'Easily accessible ground floor rooms with modern amenities. Perfect for short or extended guesthouse stays.'
    }, {
        id: 215,
        name: 'First Floor (Double) Room',
        tier: 'Double',
        pricePerDay: 749,
        price: 8500,
        available: true,
        location: 'Turfloop',
        beds: 1,
        baths: 1,
        area: 80,
        img: 'assets/h1.jpeg',
        gallery: [
            'assets/a.jpeg',
            'assets/b.jpeg',
            'assets/c.jpeg',
            'assets/d.jpeg',
        ],
        spec: 'Easily accessible ground floor rooms with modern amenities. Perfect for short or extended guesthouse stays.'
    }
];

// USER: Add your specific Discord webhook URL here
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/your_placeholder_webhook_url";

async function submitFormToDiscord(type, payload, buttonElementId) {
    const btn = document.getElementById(buttonElementId);
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="animate-pulse tracking-widest">Sending Request...</span>`;
    }

    let contentStr = `**New ${type} Notification**\n`;
    for (const [key, value] of Object.entries(payload)) {
        contentStr += `> **${key}:** ${value}\n`;
    }

    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: contentStr
            })
        });

        // Simulating success visual transition
        setTimeout(() => {
            const appContainer = document.getElementById('book-container') || document.getElementById('room-detail-container') || document.getElementById('contact-form')?.parentElement || document.getElementById('app');
            if (appContainer) {
                appContainer.innerHTML = `
                    <div class="view-frame max-w-xl mx-auto text-center py-20 mt-12">
                        <div class="w-16 h-16 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h1 class="serif-heading text-4xl font-medium text-white mb-3">Request Sent!</h1>
                        <p class="text-zinc-400 text-sm leading-relaxed mb-8">Thank you! Your request was logged via Discord Webhook. We will contact you shortly.</p>
                        <a href="index.html" class="text-xs tracking-wider uppercase bg-white text-black px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors">Return to Home</a>
                    </div>
                `;
            }
        }, 800);
    } catch (e) {
        console.error("Webhook error:", e);
        alert("Failed to send message via Discord webhook. Webhook URL may be incorrect or missing.");
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = `Retry Request`;
        }
    }
}

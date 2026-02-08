export const content = {
    meta: {
        title: "DJ Paulhyyy | Som e Identidade",
        description: "DJ Paulhyyy - Som, corpo e identidade em estado bruto. Drum and Bass, House, Techno e cultura Queer.",
        keywords: "DJ, Paulhy, Techno, House, Queer, Música Eletrônica, Brasil, BallRoom",
        author: "Paulhy",
        og: {
            title: "DJ Paulhy | Som e Identidade",
            description: "Som, corpo e identidade em estado bruto. Drum and Bass, House, Techno e cultura Queer.",
            image: "https://paulhy.vercel.app", // Consider updating if there's a specific image
            url: "https://paulhy.vercel.app",
            type: "website"
        }
    },
    navbar: {
        logo: "DJ PAULHYYY",
        links: [
            { href: "#home", text: "Início" },
            { href: "#sobre", text: "Identidade" },
            { href: "#sets", text: "Sets" },
            { href: "#galeria", text: "Visual" },
            { href: "#contato", text: "Booking", class: "btn-nav" }
        ]
    },
    hero: {
        title: "Som, Corpo e <br><span class=\"highlight\">Identidade Bruta</span>.",
        subtitle: "Pistas como narrativas sensoriais. Do Minimal House ao Hard Techno.",
        cta: { href: "#sets", text: "Ouça Agora" }
    },
    bio: {
        title: "A Narrativa",
        paragraphs: [
            "<strong>DJ Paulhy</strong> é um artista que constrói pistas como narrativas sensoriais. Seus sets transitam entre Drum and Bass, House, Techno, Minimal, NeoPerreo e Progressive music, com forte presença de vocais, chant e referências de <em>ballroom</em>.",
            "Com curadoria afiada para a cena brasileira e queer, Paulhy valoriza o underground, o futurista e o sensual. Seus sets não seguem fórmulas rígidas: nascem do <em>feeling</em> da pista.",
            "Mais do que tocar músicas, propõe um espaço de expressão onde identidade, som e movimento se encontram."
        ],
        stats: [
            { title: "Vibe", text: "Hipnótico, Intenso, Catártico" },
            { title: "Gêneros", text: "DnB, House, Techno, Vogue Beat, Neoperreo" }
        ]
    },
    sets: {
        title: "Sound Experience",
        soundcloud: {
            iframeSrc: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1387121710&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            artistLink: "https://soundcloud.com/paulhyyy",
            artistName: "Paulhy",
            trackLink: "https://soundcloud.com/paulhyyy/technoconceito",
            trackName: "Technoconceito"
        },
        mixcloud: {
            iframeSrc: "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fpaulhyyy%2F"
        },
        youtube: {
            iframeSrc: "https://www.youtube.com/embed/H8an5R6Zc0U"
        }
    },
    gallery: {
        title: "Atmosfera Visual",
        images: [
            { src: "assets/img/foto1.jpg", alt: "Performance DJ Paulhyyy - Foto 1" },
            { src: "assets/img/foto2.jpg", alt: "Pista de dança vibrante - Foto 2" },
            { src: "assets/img/foto3.jpg", alt: "Equipamento de DJ em detalhe - Foto 3" },
            { src: "assets/img/foto4.jpg", alt: "Momento de conexão com o público - Foto 4" },
            { src: "assets/img/foto5.jpg", alt: "Luzes e atmosfera da festa - Foto 5" },
            { src: "assets/img/foto6.jpg", alt: "DJ Paulhyyy em ação - Foto 6" },
            { src: "assets/img/foto7.jpg", alt: "Crowd imersa na música - Foto 7" },
            { src: "assets/img/foto8.jpg", alt: "Instalação visual do evento - Foto 8" },
            { src: "assets/img/foto9.jpg", alt: "Close-up performance artística - Foto 9" }
        ]
    },
    colab: {
        title: "Colaborações & Performance",
        text: "Suporte sonoro para rappers, performers e artistas visuais. Criando bases rítmicas que ampliam a presença de palco."
    },
    footer: {
        title: "Vamos criar essa experiência?",
        subtitle: "Disponível para eventos, festas independentes e projetos híbridos.",
        cta: { href: "https://wa.me/5581996103177", text: "Entrar em Contato" },
        socials: [
            { href: "https://www.instagram.com/paulhyyy/", text: "Instagram" },
            { href: "https://soundcloud.com/paulhyyy", text: "Soundcloud" },
            { href: "#", text: "EPK / Rider (PDF)" }
        ],
        copyright: "&copy; 2026 DJ Paulhy. All rights reserved."
    }
};

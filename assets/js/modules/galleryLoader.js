import { galleryData } from '../data/gallery.js';
import { $ } from '../utils.js';

export function initGallery() {
    const galleryGrid = $('#gallery-grid');
    if (!galleryGrid) return;

    const galleryHTML = galleryData.map((item, index) => `
        <div class="photo-item">
            <img src="${item.src}" alt="${item.alt}" loading="lazy" data-index="${index}">
        </div>
    `).join('');

    galleryGrid.innerHTML = galleryHTML;
}

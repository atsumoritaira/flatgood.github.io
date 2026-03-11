// nav items definition
const NAV_ITEMS = [
    { label: 'ホーム',             icon: '🏠', href: '../index.html' },
    { label: 'サービス',           icon: '⚙️', href: 'services.html' },
    { label: 'HubSpot導入',        icon: '🚀', href: 'hubspot.html' },
    { label: 'CRM設計',            icon: '🗂️', href: 'crm.html' },
    { label: 'カスタマーサクセス',  icon: '🤝', href: 'cs.html' },
    { label: '導入の流れ',          icon: '📋', href: 'flow.html' },
    { label: '料金',               icon: '💴', href: 'pricing.html' },
    { label: '実績',               icon: '📊', href: 'results.html' },
    { label: 'FAQ',                icon: '❓', href: 'faq.html' },
    { label: 'プロフィール',        icon: '👤', href: 'profile.html' },
    { label: 'お問い合わせ',        icon: '✉️', href: 'contact.html' },
];

function buildHeader() {
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    const navLinks = NAV_ITEMS.map(item => {
        const isActive = currentPage === item.href.replace('../','').replace('pages/','');
        return `<a href="${item.href}" class="${isActive ? 'active' : ''}"><span class="nav-icon">${item.icon}</span>${item.label}</a>`;
    }).join('');

    const mobileLinks = NAV_ITEMS.map(item =>
        `<a href="${item.href}">${item.icon} ${item.label}</a>`
    ).join('');

    document.querySelector('.header').innerHTML = `
        <div class="header-inner">
            <a href="../index.html" class="logo">flatgood</a>
            <nav class="nav">${navLinks}</nav>
            <button class="hamburger" id="hamburger" aria-label="メニュー">
                <span></span><span></span><span></span>
            </button>
        </div>
        <nav class="mobile-nav" id="mobileNav">${mobileLinks}</nav>
    `;

    document.getElementById('hamburger').addEventListener('click', function () {
        this.classList.toggle('open');
        document.getElementById('mobileNav').classList.toggle('open');
    });
}

document.addEventListener('DOMContentLoaded', buildHeader);

const menuData = [
    {
        title: "Ana Sayfa",
        link: "../..",
        subMenu: []
    },
    {
        title: ".Net CLI",
        subMenu: [
            { title: ".NET CLI Nedir ve Nasıl Kullanılır?", link: "dotnet-cli/dotnet-cli-nedir-ve-nasil-kullanilir/" }
        ]
    },
    {
        title: "Entity Framework",
        subMenu: [
            { title: "Entity Framework Nedir?", link: "entity-framework/entity-framework-nedir-orm-teknolojisine-genel-bakis/" },
            { title: "N+1 Problemi Nedir?", link: "entity-framework/n-arti-bir-problemi-nedir/" },
            { title: "Transaction Yönetimi", link: "entity-framework/entity-framework-de-transaction-yonetimi-ve-en-iyi-uygulamalar/" }
        ]
    },
    {
        title: "Logging",
        subMenu: [
            { title: "Serilog", link: "./" },
            { title: "NLog", link: "logging/nlog/" },
            { title: "New Relic", link: "logging/new-relic/" }
        ]
    }
];

// Mevcut URL'yi al
const currentPath = window.location.pathname;

// Menü oluşturucu fonksiyon
// Menü oluşturucu fonksiyon
function generateMenu(menuItems) {
    let menuHTML = '<nav class="md-nav"><ul class="md-nav__list">';

    menuItems.forEach(item => {
        let isActiveCategory = item.subMenu.some(sub => currentPath.includes(sub.link));
        let categoryClass = isActiveCategory ? 'md-nav__item md-nav__item--active md-nav__item--nested' : 'md-nav__item md-nav__item--nested';

        menuHTML += `<li class="${categoryClass}">`;

        if (item.subMenu.length > 0) {
            let inputId = `nav_${item.title.replace(/\s+/g, "_")}_${Math.random().toString(36).substring(2)}`;  // Benzersiz ID
            menuHTML += ` 
                <input class="md-nav__toggle md-toggle menu-toggle" type="checkbox" id="${inputId}">
                <label class="md-nav__link" for="${inputId}">
                    <span class="md-ellipsis">${item.title}</span>
                    <span class="md-nav__icon md-icon"></span>
                </label>
                <ul class="md-nav__list" style="display: none;"> <!-- Başta kapalı -->
            `;

            item.subMenu.forEach(subItem => {
                let isActive = currentPath.includes(subItem.link) ? 'md-nav__link md-nav__link--active' : 'md-nav__link';
                menuHTML += `
                    <li class="md-nav__item">
                        <a href="${subItem.link}" class="${isActive}">
                            <span class="md-ellipsis">${subItem.title}</span>
                        </a>
                    </li>
                `;
            });

            menuHTML += '</ul>';
        } else {
            let isActive = currentPath.includes(item.link) ? 'md-nav__link md-nav__link--active' : 'md-nav__link';
            menuHTML += `<a href="${item.link}" class="${isActive}"><span class="md-ellipsis">${item.title}</span></a>`;
        }

        menuHTML += '</li>';
    });

    menuHTML += '</ul></nav>';

    document.getElementById('dynamicMenu').innerHTML = menuHTML;

    // Menüler tıklanarak açılabilmesi için event listener ekle
    const toggles = document.querySelectorAll('.menu-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const submenu = this.nextElementSibling.nextElementSibling;
            if (this.checked) {
                submenu.style.display = 'block'; // Menü aç
            } else {
                submenu.style.display = 'none'; // Menü kapalı
            }
        });
    });
}

// Menü oluştur
document.addEventListener("DOMContentLoaded", () => {
    generateMenu(menuData);
});

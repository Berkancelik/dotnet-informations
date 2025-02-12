function updateLinks(canonicalLink, prevLink, nextLink) {
    // Canonical link güncelleme
    document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalLink);

    // Previous link güncelleme
    document.querySelector('link[rel="prev"]').setAttribute('href', prevLink);

    // Next link güncelleme
    document.querySelector('link[rel="next"]').setAttribute('href', nextLink);
}

// Sayfa yüklendiğinde linkleri dinamik olarak güncelleme
window.onload = function () {
    updateLinks(
        "https://berkancelik.github.io/dotnet-informations/logging/serilog/",  // canonical link
        "../../dotnet/dotnet-9-features/",  // prev link
        "../nlog/"  // next link
    );
};

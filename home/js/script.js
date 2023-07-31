$(document).ready(function() {
    $(".expand").hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );

    function shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
    };

    function addLogos(e) {
        const target = document.querySelector('#logoTarget');
        const logos = [
            {
                img: '/img/client-logos/disney-logo.png',
                client: 'Walt Disney'
            },
            {
                img: '/img/client-logos/nutella-logo.png',
                client: 'Nutella'
            },
            {
                img: '/img/client-logos/redbull-logo.png',
                client: 'Redbull'
            },
            {
                img: '/img/client-logos/alpro-logo.png',
                client: 'Alpro'
            },
            {
                img: '/img/client-logos/bpost-logo.png',
                client: 'Bpost'
            },
            {
                img: '/img/client-logos/lego-logo.png',
                client: 'Lego'
            },
            {
                img: '/img/client-logos/loreal-logo.png',
                client: "L'oréal"
            },
            {
                img: '/img/client-logos/safeonweb-logo.png',
                client: 'Safe On Web'
            },
            // {
            //     img: '/img/client-logos/',
            //     client: ''
            // },
        ];

        shuffleArray(logos);
    
        const cards = logos.map(logos => {
            return `
                <div class="item">
                    <img src="${logos.img}" alt="${logos.client}">
                </div>
            `;
        }).join('');
    
        target.innerHTML = cards;
    };

    addLogos()
});

import { projectos } from './portfolio.js';

function portfolioDetalles() {
    const id = localStorage.getItem('selectedProjectId');
    const project = projectos.find(item => item.id === id);
    if (project) {
        const detailsContainer = document.getElementById('PortfolioDetails');
        if (!detailsContainer) {
            console.error(`Element with id 'PortfolioDetails' not found. ` );
            return;
        }

        const detailsTemplate = `
            <div class="container" data-aos="fade-up">
                <div class="portfolio-details-slider swiper init-swiper">
                    <script type="application/json" class="swiper-config">
                    {
                        "loop": true,
                        "speed": 600,
                        "autoplay": {
                        "delay": 5000
                        },
                        "slidesPerView": "auto",
                        "navigation": {
                        "nextEl": ".swiper-button-next",
                        "prevEl": ".swiper-button-prev"
                        },
                        "pagination": {
                        "el": ".swiper-pagination",
                        "atype": "bullets",
                        "clickable": true
                        }
                    }
                    </script>
                    <div class="swiper-wrapper align-items-center">
                        <div class="swiper-slide">
                            <img src="${project.img}" alt="${project.titulo}" />
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="row justify-content-between gy-4 mt-4">
                    <div class="col-lg-8" data-aos="fade-up">
                        <div class="portfolio-description">
                            <h2>${project.titulo}</h2>
                            <p>${project.minDescripcion}</p>
                            <p>${project.descripcion}</p>
                            <a href="${project.url}" class="btn-visit align-self-start">Visit Website</a>
                        </div>
                    </div>
                    <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div class="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li><strong>Category</strong>: ${project.categoria}</li>
                                <li><strong>Project URL</strong>: <a href="${project.url}">${project.url}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        detailsContainer.innerHTML = detailsTemplate;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    portfolioDetalles();
});

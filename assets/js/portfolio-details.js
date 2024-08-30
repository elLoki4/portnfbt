import { projectos } from './portfolio.js';

function portfolioDetalles() {
    const dataProject = localStorage.getItem('selectedProject');
    const listData = JSON.parse(dataProject)
        const detailsContainer = document.getElementById('portfolio-details');
        
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
                            <img src="${listData.img}" alt="${listData.titulo}" />
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="row justify-content-between gy-4 mt-4">
                    <div class="col-lg-8" data-aos="fade-up">
                        <div class="portfolio-description">
                            <h2>${listData.titulo}</h2>
                            <p>${listData.minDescripcion}</p>
                            <p>${listData.descripcion}</p>
                            <a href="${listData.url}" class="btn-visit align-self-start">Visit Website</a>
                        </div>
                    </div>
                    <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div class="portfolio-info">
                            <h3>Project information</h3>
                            <ul>
                                <li><strong>Category</strong>: ${listData.categoria}</li>
                                <li><strong>Project URL</strong>: <a href="${listData.url}">project</a>project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        detailsContainer.innerHTML = detailsTemplate;
    }


document.addEventListener('DOMContentLoaded', () => {
    portfolioDetalles();
});

export const projectos = [
    {
        id: "",
        titulo: "Eccomerce",
        categoria: "Diseño web",
        img: "assets/img/portfolio/Captura de pantalla de 2024-07-09 01-17-11.png",
        descripcion: "",
        minDescripcion: "Este es un eCommerce simple, donde se consume una API REST para traer las imágenes de los productos. A su vez, también se puede crear un gráfico, donde se muestran los ingresos y egresos que deseemos.",
        url: "https://full-eccomerce.vercel.app/"
    },
    {
        id: "",
        titulo: "Metereologia",
        categoria: "Diseño web",
        img: "assets/img/portfolio/clima.png",
        descripcion: "",
        minDescripcion: "Consumimos una API REST de meteorología para poder mostrar, en diferentes partes como Londres, entre otros lugares, el clima actual.",
        url: "https://js-climaclima.vercel.app/"
    },
    {
        id: "",
        titulo: "Crud",
        categoria: "Diseño web",
        img: "assets/img/portfolio/Crud.png",
        descripcion: "",
        minDescripcion: "Proyecto en el que se estaban probando las funciones de binding de Angular Material para realizar un CRUD básico que permite crear, leer, actualizar y eliminar datos.",
        url: "https://crud-green-beta.vercel.app/"
    },
    {
        id:"",
        titulo: "App completa",
        categoria: "Diseño web",
        img: "assets/img/portfolio/logn.png",
        descripcion: "",
        minDescripcion: "En esta app, realizada con Angular, se mezclan una variedad de tecnologías y técnicas, desde la conexión con una base de datos hasta la autenticación y más.",
        url: "https://login-blond-kappa.vercel.app/"
    },
];

function generarId() {
    let alfa = Date.now().toString(30);
    let numerico = Math.random().toString(30).substring(2);
    return alfa + numerico;
}

function renderPortfolio() {
    const portfolio = document.getElementById("PortfolioItems");
    if (!portfolio) {
        console.error("Element with id 'PortfolioItems' not found.");
        return;
    }
    
    projectos.forEach(items => {
        if (!projectos.id) {
            projectos.id = generarId();
        }
        const template = `
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" data-id="${items.id}">
                <img src="${items.img}" class="img-fluid" alt="${items.titulo}" />
                <div class="portfolio-info">
                    <h4>${items.titulo}</h4>
                    <p>${items.minDescripcion}</p>
                    <a href="#" title="${items.titulo}" class="glightbox preview-link" data-id="${items.id}">
                        <i class="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details" class="details-link" data-id="${items.id}">
                        <i class="bi bi-link-45deg"></i>
                    </a>
                </div>
            </div>`;
        const fragment = document.createRange().createContextualFragment(template);
        portfolio.appendChild(fragment);
    });

    portfolio.addEventListener('click', event => {
        const target = event.target.closest('.portfolio-item, .details-link');
        if (target) {
            const id = target.getAttribute('data-id');
            localStorage.setItem('selectedProjectId', id);
            window.location.href = 'portfolio-details.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
});

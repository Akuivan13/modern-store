document.addEventListener('DOMContentLoaded', () => {
    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'col-12 col-md-4 mb-4 text-center';
                productCard.innerHTML = `
                    <div class="card h-100 animate__animated animate__fadeInUp">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>$${product.price}</strong></p>
                            <a href="product.html?id=${product.id}" class="btn btn-primary">View More</a>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });

            const controller = new ScrollMagic.Controller();
            document.querySelectorAll('.card').forEach(card => {
                new ScrollMagic.Scene({
                    triggerElement: card,
                    triggerHook: 0.9,
                    reverse: false
                })
                .setClassToggle(card, 'animate__animated animate__fadeInUp')
                .addTo(controller);
            });
        });
});
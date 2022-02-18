document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'Hiển thị ít hơn' : 'Xem tất cả'
})

let products = [
    {
        name: 'Sweater nâu',
        image1: 'assets/imgs/products/related1_1.jpg',
        image2: 'assets/imgs/products/related1_2.png',
        old_price: '1.200.000 vnđ',
        curr_price: '700.000 vnđ'
    },
    {
        name: 'STAPLE trắng đỏ',
        image1: 'assets/imgs/products/related2_1.png',
        image2: 'assets/imgs/products/related2_2.png',
        old_price: '800.000 vnđ',
        curr_price: '480.000 vnđ'
    },
    {
        name: 'STAPLE cam',
        image1: 'assets/imgs/products/related3_1.png',
        image2: 'assets/imgs/products/related3_2.png',
        old_price: '500.000 vnđ',
        curr_price: '210.000 vnđ'
    },
    {
        name: 'STAPLE tale',
        image1: 'assets/imgs/products/related4_1.png',
        image2: 'assets/imgs/products/related4_2.png',
        old_price: '500.000 vnđ',
        curr_price: '220.000 vnđ'
    },
    {
        name: 'Nón navy',
        image1: 'assets/imgs/products/related5_1.png',
        image2: 'assets/imgs/products/related5_2.png',
        old_price: '400.000 vnđ',
        curr_price: '380.000 vnđ'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-md-4">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="chi-tiet-san-pham.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
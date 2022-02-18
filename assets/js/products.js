let products = [
    {
        name: 'Áo nâu cá tính',
        image1: 'assets/imgs/products/related1_1.jpg',
        image2: 'assets/imgs/products/related1_2.png',
        old_price: '1.200.000 vnđ',
        curr_price: '850.000 vnđ'
    },
    {
        name: 'T-Shirt STAPLE trắng đỏ',
        image1: 'assets/imgs/products/related2_1.png',
        image2: 'assets/imgs/products/related2_2.png',
        old_price: '500.000 vnđ',
        curr_price: '450.000 vnđ'
    },
    {
        name: 'T-Shirt STAPLE cam',
        image1: 'assets/imgs/products/related3_1.png',
        image2: 'assets/imgs/products/related3_2.png',
        old_price: '500.000 vnđ',
        curr_price: '420.000 vnđ'
    },
    {
        name: 'T-Shirt STAPLE tale',
        image1: 'assets/imgs/products/related4_1.png',
        image2: 'assets/imgs/products/related4_2.png',
        old_price: '500.000 vnđ',
        curr_price: '420.000 vnđ'
    },
    {
        name: 'T-Shirt STAPLE cam',
        image1: 'assets/imgs/products/related3_1.png',
        image2: 'assets/imgs/products/related3_2.png',
        old_price: '500.000 vnđ',
        curr_price: '420.000 vnđ'
    },
    {
        name: 'Nón navy',
        image1: 'assets/imgs/products/related5_1.png',
        image2: 'assets/imgs/products/related5_2.png',
        old_price: '500.000 vnđ',
        curr_price: '300.000 vnđ'
    },
    {
        name: 'Áo sơ mi sọc vuông',
        image1: 'assets/imgs/products/men/1a.png',
        image2: 'assets/imgs/products/men/1b.png',
        old_price: '1.500.000 vnđ',
        curr_price: '999.000 vnđ'
    },
    {
        name: 'Áo khoác nâu tây',
        image1: 'assets/imgs/products/women/1a.png',
        image2: 'assets/imgs/products/women/1b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '1.900.000 vnđ'
    },
    {
        name: 'Áo khoác đen',
        image1: 'assets/imgs/products/women/2a.png',
        image2: 'assets/imgs/products/women/2b.png',
        old_price: '2.700.000 vnđ',
        curr_price: '1.990.000 vnđ'
    },
    {
        name: 'Áo thun đen',
        image1: 'assets/imgs/products/women/3a.png',
        image2: 'assets/imgs/products/women/3b.png',
        old_price: '1.200.000 vnđ',
        curr_price: '800.000 vnđ'
    },
    {
        name: 'Kính mát xanh',
        image1: 'assets/imgs/products/men/6a.png',
        image2: 'assets/imgs/products/men/6b.png',
        old_price: '2.000.000 vnđ',
        curr_price: '1.300.000 vnđ'
    },
    {
        name: 'Dây nịt',
        image1: 'assets/imgs/products/women/9a.png',
        image2: 'assets/imgs/products/women/9b.png',
        old_price: '1.700.000 vnđ',
        curr_price: '1.290.000 vnđ'
    },

]

let product_list = document.querySelector('#products')

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


let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))
let products = [
    {
        name: 'Sơ mi sọc vuông',
        image1: 'assets/imgs/products/men/1a.png',
        image2: 'assets/imgs/products/men/1b.png',
        old_price: '1.700.000 vnđ',
        curr_price: '1.200.000 vnđ'
    },
    {
        name: 'Áo khoác JQK',
        image1: 'assets/imgs/products/men/2a.png',
        image2: 'assets/imgs/products/men/2b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '1.750.000 vnđ'
    },
    {
        name: 'Balo Burberry',
        image1: 'assets/imgs/products/men/3a.png',
        image2: 'assets/imgs/products/men/3b.png',
        old_price: '3.500.000 vnđ',
        curr_price: '2.200.000 vnđ'
    },
    {
        name: 'Polo Xám Nga',
        image1: 'assets/imgs/products/men/4a.png',
        image2: 'assets/imgs/products/men/4b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '1.900.000 vnđ'
    },
    {
        name: 'Balo Basis',
        image1: 'assets/imgs/products/men/5a.png',
        image2: 'assets/imgs/products/men/5b.png',
        old_price: '3.200.000 vnđ',
        curr_price: '2.100.000 vnđ'
    },
    {
        name: 'Kính Z1',
        image1: 'assets/imgs/products/men/6a.png',
        image2: 'assets/imgs/products/men/6b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '2.300.000 vnđ'
    },
    {
        name: 'Kính thời trang',
        image1: 'assets/imgs/products/men/7a.png',
        image2: 'assets/imgs/products/men/7b.png',
        old_price: '2.700.000 vnđ',
        curr_price: '2.399.000 vnđ'
    },
    {
        name: 'Hoodie NoW1',
        image1: 'assets/imgs/products/men/8a.png',
        image2: 'assets/imgs/products/men/8b.png',
        old_price: '3.800.000 vnđ',
        curr_price: '2.700.000 vnđ'
    },
    {
        name: 'Hoodie nâu hạt dẻ',
        image1: 'assets/imgs/products/men/9a.png',
        image2: 'assets/imgs/products/men/9b.png',
        old_price: '2.700.000 vnđ',
        curr_price: '1.390.000 vnđ'
    }
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
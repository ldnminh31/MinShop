let products = [
    {
        name: 'Áo khoác MN',
        image1: 'assets/imgs/products/women/1a.png',
        image2: 'assets/imgs/products/women/1b.png',
        old_price: '1.700.000 vnđ',
        curr_price: '1.200.000 vnđ'
    },
    {
        name: 'Áo khoác DF',
        image1: 'assets/imgs/products/women/2a.png',
        image2: 'assets/imgs/products/women/2b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '1.750.000 vnđ'
    },
    {
        name: 'Áo Burberry',
        image1: 'assets/imgs/products/women/3a.png',
        image2: 'assets/imgs/products/women/3b.png',
        old_price: '3.500.000 vnđ',
        curr_price: '2.200.000 vnđ'
    },
    {
        name: 'Áo T-Shirt Trắng',
        image1: 'assets/imgs/products/women/4a.png',
        image2: 'assets/imgs/products/women/4b.png',
        old_price: '2.500.000 vnđ',
        curr_price: '1.900.000 vnđ'
    },
    {
        name: 'Đầm Trắng',
        image1: 'assets/imgs/products/women/5a.png',
        image2: 'assets/imgs/products/women/5b.png',
        old_price: '3.200.000 vnđ',
        curr_price: '2.600.000 vnđ'
    },
    {
        name: 'Đầm dài sọc vuông',
        image1: 'assets/imgs/products/women/6a.png',
        image2: 'assets/imgs/products/women/6b.png',
        old_price: '3.500.000 vnđ',
        curr_price: '2.900.000 vnđ'
    },
    {
        name: 'Ví thời trang',
        image1: 'assets/imgs/products/women/7a.png',
        image2: 'assets/imgs/products/women/7b.png',
        old_price: '1.700.000 vnđ',
        curr_price: '1.399.000 vnđ'
    },
    {
        name: 'Ví K2',
        image1: 'assets/imgs/products/women/8a.png',
        image2: 'assets/imgs/products/women/8b.png',
        old_price: '3.800.000 vnđ',
        curr_price: '2.700.000 vnđ'
    },
    {
        name: 'Dây nịt ',
        image1: 'assets/imgs/products/women/9a.png',
        image2: 'assets/imgs/products/women/9b.png',
        old_price: '1.700.000 vnđ',
        curr_price: '1.100.000 vnđ'
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
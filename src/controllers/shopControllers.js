const path = require('path');

const data = 
            [
                {
                product_id: 1,
                licence_name: 'Pokemon',
                category_name: 'Figuras coleccionables',
                product_name: 'Pidgeotto',
                product_description: 'Figura coleccionable pokemon',
                product_price: 1799.99,
                dues: 10,
                product_sku: 'PKM001001',
                img_front: '/img/pokemon/pidgeotto-1.webp',
                img_back: '/img/pokemon/pidgeotto-box.webp'
                },
                {
                    product_id: 2,
                    licence_name: 'Pokemon',
                    category_name: 'Figuras coleccionables',
                    product_name: 'Pikachu',
                    product_description: 'Figura coleccionable pokemon',
                    product_price: 1999.99,
                    dues: 6,
                    product_sku: 'PKM001001',
                    img_front: '/img/pokemon/pikachu-1.webp',
                    img_back: '/img/pokemon/pikachu-box.webp'
                    },
                {
                product_id: 3,
                licence_name: 'Pokemon',
                category_name: 'Figuras coleccionables',
                product_name: 'Charmander',
                product_description: 'Figura coleccionable pokemon',
                product_price: 1799.99,
                dues: 6,
                product_sku: 'PKM001001',
                img_front: '/img/pokemon/charmander-1.webp',
                img_back: '/img/pokemon/charmander-box.webp'
                },
                {
                product_id: 4,
                licence_name: 'Pokemon',
                category_name: 'Figuras coleccionables',
                product_name: 'Vulpix',
                product_description: 'Figura coleccionable pokemon',
                product_price: 1550.99,
                dues: 3,
                product_sku: 'PKM001001',
                img_front: '/img/pokemon/vulpix-1.webp',
                img_back: '/img/pokemon/vulpix-box.webp'
                },
                {
                product_id: 5,
                licence_name: 'Pokemon',
                category_name: 'Figuras coleccionables',
                product_name: 'Dragonite',
                product_description: 'Figura coleccionable pokemon',
                product_price: 1799.99,
                dues: 10,
                product_sku: 'PKM001001',
                img_front: '/img/pokemon/dragonite-1.webp',
                img_back: '/img/pokemon/dragonite-box.webp'
                },
                {
                product_id: 6,
                licence_name: 'Star wars',
                category_name: 'Figuras coleccionables',
                product_name: 'Baby Yoda',
                product_description: 'Figura coleccionable pokemon',
                product_price: 3800.99,
                dues: 3,
                product_sku: 'PKM001001',
                img_front: '/img/star-wars/baby-yoda-1.webp',
                img_back: '/img/star-wars/baby-yoda-box.webp'
                },
                {
                product_id: 7,
                licence_name: 'Star wars',
                category_name: 'Figuras coleccionables',
                product_name: 'Bobbafeth',
                product_description: 'Figura coleccionable Star wars',
                product_price: 1799.99,
                dues: 10,
                product_sku: 'PKM001001',
                img_front: '/img/star-wars/bobbafeth-1.webp',
                img_back: '/img/star-wars/bobbafeth-box.webp'
                },
                {
                product_id: 8,
                licence_name: 'Star wars',
                category_name: 'Figuras coleccionables',
                product_name: 'Luke',
                product_description: 'Figura coleccionable Star wars',
                product_price: 1799.99,
                dues: 3,
                product_sku: 'PKM001001',
                img_front: '/img/star-wars/luke-1.webp',
                img_back: '/img/star-wars/luke-box.webp'
                },
                {
                product_id: 9,
                licence_name: 'Star wars',
                category_name: 'Figuras coleccionables',
                product_name: 'Trooper',
                product_description: 'Figura coleccionable Star wars',
                product_price: 1200.99,
                dues: 3,
                product_sku: 'PKM001001',
                img_front: '/img/star-wars/trooper-1.webp',
                img_back: '/img/star-wars/trooper-box.webp'
                }  
            ];

const shopControllers = {
    shopView: (req, res) => {
        
        res.render(path.resolve(__dirname, '../views/shop/shop'), {
            data
        }
        );
    },
    itemView: (req, res) => {
        const itemId = req.params.id;
        
        const item = data.find( item => item.product_id == itemId);

        res.render(path.resolve(__dirname, '../views/shop/item'), {
            item
        });
    },
    addItem: (req, res) => res.send('Route for add the current item to the shop cart'),
    cartView: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart'));
    },
    addToCart: (req, res) => res.send('Route for go to checkout page')
}

module.exports = shopControllers;
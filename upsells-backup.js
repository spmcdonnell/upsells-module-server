(function() {
    document.addEventListener('DOMContentLoaded', () => {
        demoData = {
            title: 'Buttered Popcorn',
            excerpt: 'One of the best reblooming large flowers we’ve grown! Produces masses of brilliant golden yellow blooms.',
            image: 'https://woocommerce-512284-1800979.cloudwaysapps.com/wp-content/uploads/2014/11/3322-Buttered-Popcorn-01-e1582742952644.jpg',
            productUrl: 'http://woocommerce-512284-1800979.cloudwaysapps.com/?add-to-cart=2976',
            styles: {
                background: {
                    backgroundColor: '#efefef',
                    borderRadius: '30px'
                },
                title: {
                    color: 'purple'
                },
                button: {
                    color: 'white',
                    backgroundColor: '#ea5005',
                    borderRadius: '5px'
                },
                excerpt: {
                    color: 'black'
                }
            }
        };

        // Where the element will be attached
        const insertionPoint = document.querySelector('div.cart-collaterals');

        // Module layout markup
        const outerWrap = document.createElement('div'),
              innerWrap = document.createElement('div'),
              imageWrap = document.createElement('div'),
              contentWrap = document.createElement('div'),
              image = document.createElement('img'),
              title = document.createElement('h3'),
              excerpt = document.createElement('p'),
              button = document.createElement('a');

        // Classes
        outerWrap.classList.add('cart-upsell-section');
        innerWrap.classList.add('upsell-products');
        imageWrap.classList.add('product-image');
        contentWrap.classList.add('product-content');

        // Content
        image.src = demoData.image;
        title.textContent = demoData.title;
        excerpt.textContent = demoData.excerpt;
        button.href = demoData.productUrl;
        button.textContent = 'Add to cart';

        // Style
        outerWrap.style.backgroundColor = demoData.styles.background.backgroundColor;
        outerWrap.style.borderRadius = demoData.styles.background.borderRadius;
        outerWrap.style.padding = '25px';
        outerWrap.style.marginBottom = '20px';
        innerWrap.style.display = 'flex';
        innerWrap.style.justifyContent = 'space-between';
        innerWrap.style.alignItems = 'center';
        imageWrap.style.width = '29%';
        contentWrap.style.width = '69%';
        image.style.display = 'block';
        excerpt.style.marginBottom = '10px';
        button.style.display = 'inline-block';
        button.style.color = demoData.styles.button.color;
        button.style.fontWeight = '600';
        button.style.borderRadius = demoData.styles.button.borderRadius;
        button.style.backgroundColor = demoData.styles.button.backgroundColor;
        button.style.padding = '10px';

        // Build element and add to page
        imageWrap.appendChild(image);
        contentWrap.appendChild(title);
        contentWrap.appendChild(excerpt);
        contentWrap.appendChild(button);
        innerWrap.appendChild(imageWrap);
        innerWrap.appendChild(contentWrap);
        outerWrap.appendChild(innerWrap);
        insertionPoint.insertBefore(outerWrap, insertionPoint.firstChild);
    });
})();
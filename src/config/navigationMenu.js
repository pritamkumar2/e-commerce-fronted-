export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/newArrival",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            {
              name: "Tops",
              id: "top",
              href: `women/clothing/top?category=top`,
            },
            {
              name: "Dresses",
              id: "women_dress",
              href: "women/clothing/dresses?category=dresses",
            },
            {
              name: "Women Jeans",
              id: "women_jeans",
              href: "women/clothing/women-jeans?category=women-jeans",
            },
            {
              name: "T-Shirts",
              id: "t-shirts",
              href: "women/clothing/t-shirts?category=t-shirts",
            },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            {
              name: "Watches",
              id: "Watch",
              href: "women/accessories/Watches?category=Watch",
            },
            {
              name: "Bags",
              id: "bag",
              href: "women/accessories/bag?category=bag",
            },
            {
              name: "Sunglasses",
              id: "sunglasse",
              href: "women/accessories/sunglasse?category=sunglasse",
            },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          id: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          id: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            {
              name: "Mens Kurtas",
              id: "mens_kurta",
              href: "men/clothing/Mens-Kurtas?category=Mens-Kurtas",
            },
            {
              name: "Shirt",
              id: "shirt",
              href: "men/clothing/Shirt?category=Shirt",
            },
            {
              name: "Men Jeans",
              id: "men_jeans",
              href: "men/clothing/men-jeans?category=men-jeans",
            },
            {
              name: "Sweaters",
              id: "#",
              href: "men/clothing/Sweaters?category=Sweaters",
            },
            {
              name: "T-Shirts",
              id: "t-shirts",
              href: "men/clothing/t-shirts?category=t-shirts",
            },
            {
              name: "Jackets",
              id: "jackets",
              href: "men/clothing/jackets?category=jackets",
            },
            {
              name: "Activewear",
              id: "activewear",
              href: "men/clothing/activewear?category=activewear",
            },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            {
              name: "Watches",
              id: "Watch",
              href: "men/accessories/Watch?category=Watch",
            },
            {
              name: "Wallets",
              id: "#",
              href: "men/accessories/Wallets?category=wallets",
            },
            {
              name: "Bags",
              id: "#",
              href: "men/accessories/bags?category=bags",
            },
            {
              name: "Sunglasses",
              id: "#",
              href: "men/accessories/sunglasse?category=sunglasse",
            },
            {
              name: "Hats",
              id: "#",
              href: "men/accessories/hats?category=hats",
            },
            {
              name: "Belts",
              id: "#",
              href: "men/accessories/belts?category=belts",
            },
          ],
        },
      ],
    },
  ],
  pages: [{ name: "Company", id: "/", href: "/company" }],
};

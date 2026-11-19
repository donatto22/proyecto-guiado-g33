export interface DummyProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
    sku: string,
    weight: 4,
    dimensions: {
        "width": number,
        "height": number,
        "depth": number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: [
        {
            rating: 3,
            comment: "Would not recommend!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Eleanor Collins",
            reviewerEmail: "eleanor.collins@x.dummyjson.com"
        },
        {
            rating: 4,
            comment: "Very satisfied!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Lucas Gordon",
            reviewerEmail: "lucas.gordon@x.dummyjson.com"
        },
        {
            rating: 5,
            comment: "Highly impressed!",
            date: "2025-04-30T09:41:02.053Z",
            reviewerName: "Eleanor Collins",
            reviewerEmail: "eleanor.collins@x.dummyjson.com"
        }
    ],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt: "2025-10-09T14:47:01.588Z",
        updatedAt: "2026-05-23T11:27:41.868Z",
        barcode: "5784719087687",
        qrCode: "https://cdn.dummyjson.com/public/qr-code.png"
    },
    images: [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}
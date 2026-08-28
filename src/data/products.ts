export type Variety = {
  id: number;
  productId: number;
  name: string;
  description: string;
  img_src: string;
  price: number;
  season: "Verano" | "Otoño" | "Invierno" | "Primavera";
  availability: boolean;
};

export type Product = {
  id: number;
  name: string;
  image: string;
  imageFit: "cover" | "contain";
  category: "Frutas" | "Verduras";
  shortDescription: string;
  seasonLabel: string;
  varieties: Variety[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Manzana",
    image: "/manzana.png",
    imageFit: "contain",
    category: "Frutas",
    shortDescription: "Firmes y crujientes, del Alto Valle.",
    seasonLabel: "Todo el año",
    varieties: [
      {
        id: 1,
        productId: 1,
        name: "Roja",
        description: "Manzana roja de primera calidad, dulce y crujiente.",
        img_src: "https://placehold.co/100x100/c0392b/white.png?text=Roja",
        price: 850,
        season: "Otoño",
        availability: true,
      },
      {
        id: 2,
        productId: 1,
        name: "Verde",
        description: "Manzana verde ácida, ideal para jugos y ensaladas.",
        img_src: "https://placehold.co/100x100/27ae60/white.png?text=Verde",
        price: 780,
        season: "Otoño",
        availability: true,
      },
      {
        id: 3,
        productId: 1,
        name: "Gala",
        description: "Variedad Gala, sabor suave y piel rayada rojo-amarillo.",
        img_src: "https://placehold.co/100x100/e74c3c/white.png?text=Gala",
        price: 920,
        season: "Verano",
        availability: false,
      },
    ],
  },
  {
    id: 2,
    name: "Tomate",
    image: "/tomate.jpg",
    imageFit: "cover",
    category: "Verduras",
    shortDescription: "De planta, con color y aroma reales.",
    seasonLabel: "Primavera y verano",
    varieties: [
      {
        id: 4,
        productId: 2,
        name: "Perita",
        description: "Tomate perita firme, ideal para salsas y conservas.",
        img_src: "https://placehold.co/100x100/e74c3c/white.png?text=Perita",
        price: 420,
        season: "Verano",
        availability: true,
      },
      {
        id: 5,
        productId: 2,
        name: "Cherry",
        description: "Tomate cherry dulce, perfecto para ensaladas.",
        img_src: "https://placehold.co/100x100/c0392b/white.png?text=Cherry",
        price: 680,
        season: "Verano",
        availability: true,
      },
      {
        id: 6,
        productId: 2,
        name: "Redondo",
        description: "Tomate redondo tradicional de gran tamaño.",
        img_src: "https://placehold.co/100x100/e67e22/white.png?text=Redondo",
        price: 390,
        season: "Primavera",
        availability: false,
      },
    ],
  },
  {
    id: 3,
    name: "Naranja",
    image: "/naranja.png",
    imageFit: "contain",
    category: "Frutas",
    shortDescription: "Jugosas, ideales para jugo y mesa.",
    seasonLabel: "Otoño e invierno",
    varieties: [
      {
        id: 7,
        productId: 3,
        name: "Valencia",
        description: "Naranja Valencia, jugosa y perfecta para zumo.",
        img_src: "https://placehold.co/100x100/e67e22/white.png?text=Valencia",
        price: 530,
        season: "Invierno",
        availability: true,
      },
      {
        id: 8,
        productId: 3,
        name: "Navel",
        description: "Naranja Navel sin semillas, fácil de pelar.",
        img_src: "https://placehold.co/100x100/f39c12/white.png?text=Navel",
        price: 610,
        season: "Invierno",
        availability: true,
      },
    ],
  },
  {
    id: 4,
    name: "Lechuga",
    image: "/lechuga.jpg",
    imageFit: "cover",
    category: "Verduras",
    shortDescription: "Hoja fresca, cortada el mismo día.",
    seasonLabel: "Todo el año",
    varieties: [
      {
        id: 9,
        productId: 4,
        name: "Mantecosa",
        description: "Lechuga mantecosa de hojas tiernas y sabor suave.",
        img_src: "https://placehold.co/100x100/2ecc71/white.png?text=Mantecosa",
        price: 210,
        season: "Primavera",
        availability: true,
      },
      {
        id: 10,
        productId: 4,
        name: "Romana",
        description: "Lechuga romana crujiente, clásica para ensalada César.",
        img_src: "https://placehold.co/100x100/27ae60/white.png?text=Romana",
        price: 240,
        season: "Primavera",
        availability: true,
      },
      {
        id: 11,
        productId: 4,
        name: "Morada",
        description: "Lechuga morada con alto contenido en antioxidantes.",
        img_src: "https://placehold.co/100x100/8e44ad/white.png?text=Morada",
        price: 280,
        season: "Otoño",
        availability: false,
      },
    ],
  },
  {
    id: 5,
    name: "Banana",
    image: "/banana.jpg",
    imageFit: "cover",
    category: "Frutas",
    shortDescription: "Maduración cuidada, punto dulce justo.",
    seasonLabel: "Todo el año",
    varieties: [
      {
        id: 12,
        productId: 5,
        name: "Común",
        description: "Banana común de maduración uniforme, formato mayorista.",
        img_src: "https://placehold.co/100x100/f1c40f/white.png?text=Común",
        price: 360,
        season: "Verano",
        availability: true,
      },
      {
        id: 13,
        productId: 5,
        name: "Oro",
        description: "Banana de oro, más pequeña y de sabor más dulce.",
        img_src: "https://placehold.co/100x100/f39c12/white.png?text=Oro",
        price: 490,
        season: "Verano",
        availability: true,
      },
    ],
  },
  {
    id: 6,
    name: "Pera",
    image: "/pera.png",
    imageFit: "contain",
    category: "Frutas",
    shortDescription: "Selección por calibre y madurez.",
    seasonLabel: "Verano y otoño",
    varieties: [
      {
        id: 14,
        productId: 6,
        name: "Williams",
        description: "Pera Williams jugosa y aromática, ideal para consumo fresco.",
        img_src: "https://placehold.co/100x100/a8d8a8/white.png?text=Williams",
        price: 740,
        season: "Verano",
        availability: true,
      },
      {
        id: 15,
        productId: 6,
        name: "Packham",
        description: "Pera Packham de cáscara verde, textura firme.",
        img_src: "https://placehold.co/100x100/4a7c59/white.png?text=Packham",
        price: 690,
        season: "Otoño",
        availability: false,
      },
    ],
  },
];

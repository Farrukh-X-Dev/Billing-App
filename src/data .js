const menu = [
  {
    categories: [
      {
        name: "Rolls & Wraps",
        dishes: [
          { name: "Chicken Malai Roll", price: 250, image: new URL('../images/roll-1.jpeg', import.meta.url).href },
          { name: "Beef Bihari Roll", price: 270, image: new URL('../images/roll-2.jpeg', import.meta.url).href },
          { name: "Chicken Tikka Roll", price: 260, image: new URL('../images/roll-3.jpeg', import.meta.url).href },
          { name: "Seekh Kebab Roll", price: 240, image: new URL('../images/roll-4.jpeg', import.meta.url).href },
          { name: "Reshmi Kebab Roll", price: 270, image: new URL('../images/roll-5.jpeg', import.meta.url).href },
          { name: "Chicken Mayo Garlic Roll", price: 280, image: new URL('../images/roll-6.jpeg', import.meta.url).href }
        ]
      },
      {
        name: "Salans (Curries)",
        dishes: [
          { name: "Chicken Karahi", price: 850, image: new URL('../images/salan-1.jpeg', import.meta.url).href },
          { name: "Mutton Korma", price: 1050, image: new URL('../images/salan-2.jpeg', import.meta.url).href },
          { name: "Nihari", price: 950, image: new URL('../images/salan-3.jpeg', import.meta.url).href },
          { name: "Aloo Gosht", price: 780, image: new URL('../images/salan-4.jpeg', import.meta.url).href },
          { name: "Chicken Korma", price: 800, image: new URL('../images/salan-5.jpeg', import.meta.url).href },
          { name: "Bhuna Gosht", price: 900, image: new URL('../images/salan-6.jpeg', import.meta.url).href }
        ]
      },
      {
        name: "Rice Dishes",
        dishes: [
          { name: "Chicken Biryani", price: 450, image: new URL('../images/rice-1.jpeg', import.meta.url).href },
          { name: "Mutton Biryani", price: 550, image: new URL('../images/rice-2.jpeg', import.meta.url).href },
          { name: "Beef Pulao", price: 500, image: new URL('../images/rice-3.jpeg', import.meta.url).href },
          { name: "Chicken Pulao", price: 430, image: new URL('../images/rice-4.jpeg', import.meta.url).href },
          { name: "Sindhi Biryani", price: 480, image: new URL('../images/rice-5.jpeg', import.meta.url).href },
          { name: "Yakhni Pulao", price: 470, image: new URL('../images/rice-6.jpeg', import.meta.url).href }
        ]
      },
      {
        name: "BBQ / Grilled Items",
        dishes: [
          { name: "Chicken Tikka", price: 380, image: new URL('../images/bbq-1.jpeg', import.meta.url).href },
          { name: "Beef Seekh Kebab", price: 350, image: new URL('../images/bbq-2.jpeg', import.meta.url).href },
          { name: "Malai Boti", price: 400, image: new URL('../images/bbq-3.jpeg', import.meta.url).href },
          { name: "Gola Kebab", price: 390, image: new URL('../images/bbq-4.jpeg', import.meta.url).href },
          { name: "Chicken Reshmi Kebab", price: 420, image: new URL('../images/bbq-5.jpeg', import.meta.url).href },
          { name: "Beef Boti", price: 350, image: new URL('../images/bbq-6.jpeg', import.meta.url).href },
          { name: "Chargha", price: 850, image: new URL('../images/bbq-7.jpeg', import.meta.url).href }
        ]
      },
      {
        name: "Breads (Roti & Naan)",
        dishes: [
          { name: "Roghni Naan", price: 60, image: new URL('../images/roti-1.jpeg', import.meta.url).href },
          { name: "Tandoori Roti", price: 20, image: new URL('../images/roti-2.jpeg', import.meta.url).href },
          { name: "Lachha Paratha", price: 80, image: new URL('../images/roti-3.jpeg', import.meta.url).href },
          { name: "Aloo Paratha", price: 100, image: new URL('../images/roti-4.jpeg', import.meta.url).href },
          { name: "Garlic Naan", price: 80, image: new URL('../images/roti-5.jpeg', import.meta.url).href }

        ]
      },
      {
        name: "Desserts",
        dishes: [
          { name: "Gulab Jamun", price: 120, image: new URL('../images/desert-1.jpeg', import.meta.url).href },
          { name: "Ras Malai", price: 150, image: new URL('../images/desert-2.jpeg', import.meta.url).href },
          { name: "Kheer", price: 100, image: new URL('../images/desert-3.jpeg', import.meta.url).href },
          { name: "Labe-Sheree", price: 150, image: new URL('../images/desert-4.jpeg', import.meta.url).href },
          { name: "Suji Halwa", price: 80, image: new URL('../images/desert-5.jpeg', import.meta.url).href },
          { name: "Gajar ka Halwa", price: 130, image: new URL('../images/desert-6.jpeg', import.meta.url).href }
        ]
      }
    ]
  }
];

export default menu;

const catalog = [
	{
		section_heading: "Cured Meats",
		id: "CuredMeats",  // programatic name used for #id
		items: [
			{
				img_src: "placeholder.png",
				name: "Tasso Ham",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Pancetta",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Pastirma",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Butterscotch Bacon",
				desc: "(TODO: description)",
				price: 10_00
			},
		]
	},
	{
		section_heading: "Fresh Sausages and Salami",
		id: "Sausages",
		items: [
			{
				img_src: "placeholder.png",
				name: "Ghost Pepper Andouille",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Second Place BBQ Rib Sausage",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Salami Cotto",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Teewurst",
				desc: "(TODO: description)",
				price: 10_00
			},
		]
	},
	{
		section_heading: "Baked Goods",
		id: "BakedGoods",
		items: [
			{
				img_src: "placeholder.png",
				name: "Artisan White Bread",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Artisan Wheat Bread",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Extra Chewy Milk Bread",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Porcini and Parsley Focaccia",
				desc: "(TODO: description)",
				price: 10_00
			},
		]
	},
	{
		section_heading: "Cheeses",
		id: "Cheeses",
		items: [
			{
				img_src: "placeholder.png",
				name: "Red Wine Ricotta",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Smoked Paneer",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Marscopone",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Spice Rubbed Queso Blanco",
				desc: "(TODO: description)",
				price: 10_00
			},
		]
	},
	{
		section_heading: "Snacks and Sides",
		id: "Snacks",
		items: [
			{
				img_src: "placeholder.png",
				name: "Rosemary Chili Oil",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Classic Chili Oil",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Original Beef Jerky",
				desc: "(TODO: description)",
				price: 10_00
			},
			{
				img_src: "placeholder.png",
				name: "Spicy Beef Jerky",
				desc: "(TODO: description)",
				price: 10_00
			},
		]
	},
];

const _catalog_lookup = {};
for (let section of catalog)
	for (let item of section.items)
		_catalog_lookup[item.name] = item;

catalog.get = product => _catalog_lookup[product];
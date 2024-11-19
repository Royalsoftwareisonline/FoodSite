const catalog = [
	{
		section_heading: "Cured Meats",
		id: "CuredMeats",  // programatic name used for #id
		items: [
			{
				img_src: "sold_out.jpg",
				name: "Tasso Ham",
				desc: "Salty and smoky, tasso ham is as good on its own as it is in shrimp and grits or gumbo.",
				price: 8.00,
				available: false
			},
			{
				img_src: "placeholder.png",
				name: "Pancetta",
				desc: "Cured and hung to dry for 2-3 weeks, pancetta is a great way to add a salty, meaty flavor to any dish (and is just as good as a snack!)",
				price: 15.00
			},
			{
				img_src: "placeholder.png",
				name: "Pastirma",
				desc: "Not to be confused with pastrami, pastirma is air-dried for about 2 weeks and coated with a mix of spices, giving it a unique flavor. ",
				price: 15.00
			},
			{
				img_src: "sold_out.jpg",
				name: "Butterscotch Bacon",
				desc: "Thick cut smoky bacon with a bit of sweetness from a butterscotch rub. Cured for 2 weeks.",
				price: 10.00,
				available: false
			},
		]
	},
	{
		section_heading: "Fresh Sausages and Salami",
		id: "Sausages",
		items: [
			{
				img_src: "sold_out.jpg",
				name: "Ghost Pepper Andouille",
				desc: "Made from scratch, roughly 2 links per pound",
				price: 8.00,
				available: false
			},
			{
				img_src: "sold_out.jpg",
				name: "BBQ Rib Sausage",
				desc: "Inspired by my grandfather's recipe for ribs (that placed him second in competitions), this sausage is simple and delicious. Roughly 2 links per pound.",
				price: 8.00,
				available: false
			},
			{
				img_src: "sold_out.jpg",
				name: "Koch Salami",
				desc: "A type of cooked salami, koch salami doesn't have the flavor of other salamis, but will ready to eat twice as fast. Links sold individually.",
				price: 10.00,
				available: false
			},
			{
				img_src: "sold_out.jpg",
				name: "Teewurst",
				desc: "A German spreadable sausage, teewurst is great for things like our Artisan White Bread. Sold by the link. Links sold individually.",
				price: 10.00,
				available: false
			},
		]
	},
	{
		section_heading: "Baked Goods",
		id: "BakedGoods",
		items: [
			{
				img_src: "placeholder.png",
				name: "Rustic White Bread",
				desc: "A white bread that can be ordered plain or 'well done' for a bit of char like rustic European breads. Sold by the loaf.",
				price: 7.00
			},
			{
				img_src: "placeholder.png",
				name: "Bacon Roti Canai",
				desc: "Roti Canai is a Malaysian flatbread unique for having a crispy oustide and a soft and chewy inside. This version is filled with bacon. ",
				price: 4.00
			},
			{
				img_src: "placeholder.png",
				name: "Chewy Butter Rolls",
				desc: "These rolls stand out for their texture, which comes from glutinous rice flour, an ingredient used in mochi. Sold by the loaf.",
				price: 4.00
			},
			{
				img_src: "placeholder.png",
				name: "Focaccia",
				desc: "An Italian flatbread sprinkled with a mix of salt, parsley, and porcini mushroom flakes. Sold by the loaf.",
				price: 4.00
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
				desc: "Made with red wine vinegar, this ricotta has a red color and distinct flavor.",
				price: 3.00
			},
			{
				img_src: "sold_out.jpg",
				name: "Smoked Paneer",
				desc: "A smoked cheese great that's great for grilling or frying due to the fact that it doesn't melt.",
				price: 5.00,
				available: false
			},
			{
				img_src: "placeholder.png",
				name: "Marscopone",
				desc: "A creamy and spreadable cheese with a mild flavor, commonly used in cheesecakes or tiramisu.",
				price: 5.00
			},
			{
				img_src: "placeholder.png",
				name: "Spiced Queso Fresco",
				desc: "A mild white cheese with some added flavor from a mix of chiles and spices. Sold by the wheel.",
				price: 8.00
			},
		]
	},
	{
		section_heading: "Snacks and Sides",
		id: "Snacks",
		items: [
			{
				img_src: "placeholder.png",
				name: "Classic Chili Oil",
				desc: "A three pepper chili oil. Can be ordered mild, medium, or hot (hot is not for reccommended for those with low spice tolerance). Sold by the bottle.",
				price: 5.00
			},
			{
				img_src: "placeholder.png",
				name: "Rosemary Chili Oil",
				desc: "The classic chili oil with a bit of rosemary flavor. Can be ordered mild, medium, or hot (hot is not for reccommended for those with low spice tolerance). Sold by the bottle.",
				price: 5.00
			},
			{
				img_src: "placeholder.png",
				name: "Original Beef Jerky",
				desc: "A simple beef jerky with a meaty, tangy flavor. Sold by the bag (8 ounces of jerky per bag)",
				price: 2.00
			},
			{
				img_src: "placeholder.png",
				name: "Spicy Beef Jerky",
				desc: "A spicier beef jerky with the addition of the three pepper blend from our chili oils. Sold by the bag (8 ounces of jerky per bag).",
				price: 2.00
			},
		]
	},
	/*{
		section_heading: "Weekly Specials",
		id: "WeeklySpecials",
		items: [
			{
				img_src: "placeholder.png",
				name: "Pork Roll Monte Cristo",
				desc: "A breakfast sandwich inspired twist on the pork roll egg and cheese, this sandwich has egg-dipped bread, caramelized pork roll, tamagoyaki (Japanese rolled omelete), cheddar cheese and maple chili hot sauce. Will be prepared fresh.",
				price: 13.00
			},
			{
				img_src: "placeholder.png",
				name: "Frito Pie",
				desc: "Popular in the Southeast and Southwest, Frito pie is just Fritos, chili, and cheese. Simple and delicious. Will be prepared fresh.",
				price: 6.00
			},
			{
				img_src: "placeholder.png",
				name: "Spam Katsu-Sando",
				desc: "A twist on a Japanese sandwich, the Spam Katsu-Sando has thinly cut, breaded and fried Spam, with roasted cabbage and tonkatsu sauce. Will be prepared fresh.",
				price: 12.00
			},
		]
	},*/
];

const _catalog_lookup = {};
for (let section of catalog)
	for (let item of section.items)
		_catalog_lookup[item.name] = item;

catalog.get = product => _catalog_lookup[product];
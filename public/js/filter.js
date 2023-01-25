var data = [
	{
		"make": "Acer Nitro 5 Gaming Laptop",
		"model": "PH Electronics",
		"type": "Electronics",
		"price": "$199.99",
		"image": "images/2022-10-11T03-01-29.056Z-Acer Nitro 5 Gaming Laptop.jpg"
	},
	{
		"make": "Samsung Galaxy M13",
		"model": "PH Electronics",
		"type": "Electronics",
		"price": "$39.99",
		"image": "images/2022-10-11T03-02-55.713Z-Samsung Galaxy M13.jpg"
	},
	{
		"make": "Cotton Regular Fit Solid Round Neck T-Shirt",
		"model": "SK Clothing Pvt.Ltd.",
		"type": "Clothing And Shoes",
		"price": "$9.99",
		"image": "images/2022-10-11T03-17-35.139Z-Cotton Regular Fit Solid Round Neck T-Shirt.jpg"
	},
	{
		"make": "George Adam Men's Sport Shoes",
		"model": "BL Sports Complex",
		"type": "Clothing And Shoes",
		"price": "$12.99",
		"image": "https://m.media-amazon.com/images/I/71aytmnVuoL._UL1500_.jpg"
	},
	{
		"make": "PUMA Men's Shuffle Sneaker",
		"model": "BL Sports Complex",
		"type": "Clothing And Shoes",
		"price": "$10.99",
		"image": "https://m.media-amazon.com/images/I/71RGZ+6hbrL._UL1500_.jpg"
	},
	{
		"make": "Prestige IRIS Plus 750 watt mixer grinder with Jar",
		"model": "GH Households",
		"type": "Household Items",
		"price": "$5.99",
		"image": "images/2022-10-11T03-13-48.139Z-Prestige IRIS Plus 750 watt mixer grinder with Jar.jpg"
	},
	{
		"make": "Whirlpool 190 L 3 Star Direct-Cool Single Door Refrigerator",
		"model": "GH Households",
		"type": "Household Items",
		"price": "$39.99",
		"image": "images/2022-10-11T03-14-48.379Z-Whirlpool 190 L 3 Star Direct-Cool Single Door Refrigerator.jpg"
	},
    {
		"make": "HealthKart HK Vitals Multivitamin with Probiotics",
		"model": "HK pharmaceuticals",
		"type": "Medicine",
		"price": "$2.99",
		"image": "images/2022-10-11T03-16-02.756Z-HealthKart HK Vitals Multivitamin with Probiotics.jpg"
	}
];

var products = "",
	makes = "",
	models = "",
	types = "";

for (var i = 0; i < data.length; i++) {
	var make = data[i].make,
		model = data[i].model,
		type = data[i].type,
		price = data[i].price,
		rawPrice = price.replace("$",""),
		rawPrice = parseInt(rawPrice.replace(",","")),
		image = data[i].image;
	
	//create product cards
	products += "<div class='col-sm-4 product' data-make='" + make + "' data-model='" + model + "' data-type='" + type + "' data-price='" + rawPrice + "'><div class='product-inner text-center'><img style=`height:100px;width:100px;` src='" + image + "'><br />Title: " + make + "<br />Owner: " + model + "<br />Category: " + type + "<br />Price: " + price + "</div></div>";
	
}

$("#products").html(products);

//on search form submit
$("#search-form").submit(function(e) {
	e.preventDefault();
	var query = $("#search-form input").val().toLowerCase();

	$(".product").hide();
	$(".product").each(function() {
		var make = $(this).data("make").toLowerCase(),
			model = $(this).data("model").toLowerCase(),
			type = $(this).data("type").toLowerCase();

		if (make.indexOf(query) > -1 || model.indexOf(query) > -1 || type.indexOf(query) > -1) {
			$(this).show();
		}
	});
});

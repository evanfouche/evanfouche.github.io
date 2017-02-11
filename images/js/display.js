
// $( ".cross" ).hide();
// $( ".menu" ).hide();
// $( ".hamburger" ).click(function() {
// 	$( ".menu" ).slideToggle( "slow", function() {
// 		$( ".hamburger" ).hide();
// 		$( ".cross" ).show();
// 	});
// });

// $( ".cross" ).click(function() {
// 	$( ".menu" ).slideToggle( "slow", function() {
// 		$( ".cross" ).hide();
// 		$( ".hamburger" ).show();
// 	});
// });
// uncomment for different displays

// poor setup of global variables
var shelf_names = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
var size_of_options = shelf_names.length;

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".assoc_display" ).show();
// $( "#DomImage1" ).hide();
$( "#DomImage2" ).hide();
$( "#DomImage5" ).hide();
$( "#DomImage10" ).hide();
$( "#DomImage15" ).hide();
$( "#DomImage20" ).hide();
$( "#DomImage30" ).hide();

// var menu_click = document.getElementById("hamburger");
function hide_current_visible_swatch(){
	var shelf_div_id = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
	for(var i=0; i<shelf_div_id.length; i++){
		if($( '#'+shelf_div_id[i]).is(":visible")){
			$('#'+shelf_div_id[i]).hide();
			return i;
		}
	}
}

function get_shelf_itr(){
	var ancestor = document.getElementById('cover_display10'),
	descendents = ancestor.getElementsByTagName('*'), //all elements of the menu drop display (cover images and edges)
	horizontal_ancestor = document.getElementById('horizontal_edge'),
	horizontal_descendents = horizontal_ancestor.getElementsByTagName('*'),
	description_ancestor = document.getElementById('description'),
	description_descendents = description_ancestor.getElementsByTagName('*'); //all album descriptions in the menu drop display

	var i,cover_itr;
	for(i=0; i<descendents.length; ++i){
		e = descendents[i];
		// managing horizontal_descendents while running through descendents may pose a problem, though they should be one to one in the order of appearance
		// sorting later may change this
		// d = horizontal_descendents[i];
		if(e.checked == true){
			// set checked to false
			// set_checked_to_false();
			cover_itr = i;
			break; 
		}
	}
	var description_itrs = [];
	for(i=0; i<description_descendents.length; ++i){
		d = description_descendents[i];
		if(d.checked == true){
			// d.style.display = "block";
			description_itrs.push(i);
		}
	}
	return [cover_itr,description_itrs];
}

function select_sw_display(){
	var library_option = document.getElementById("DomImage1"),
	elements_in_option = library_option.getElementsByTagName('*'),
	descriptions = document.getElementById("description"),
	elements_in_description = descriptions.getElementsByTagName('*');
	var size_of_library = elements_in_option.length; //this is only correct for the number of cover images
	// need variable for the size of description per library display option -> size of description/#of options
	var size_of_a_description_set = elements_in_description.length / size_of_options;
	var itrs = get_shelf_itr();
	var offset = 0;
	var desc_offset = 0;
	// var shelf_id;
	hide_all_artwork();
	set_checked_to_false();
	var shelf_id_itr = hide_current_visible_swatch();
	var select_val = document.getElementById("sel");
	var value = select_val.options[select_val.selectedIndex].value;
	if(value == 1){
		$( "#DomImage1" ).show();
		offset = (0-shelf_id_itr)*size_of_library;
		desc_offset = (0-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 2){
		$( "#DomImage2" ).show();
		offset = (1-shelf_id_itr)*size_of_library;
		desc_offset = (1-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 5){
		$( "#DomImage5" ).show();
		offset = (2-shelf_id_itr)*size_of_library;
		desc_offset = (2-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 10){
		$( "#DomImage10" ).show();
		offset = (3-shelf_id_itr)*size_of_library;
		desc_offset = (3-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 15){
		$( "#DomImage15" ).show();
		offset = (4-shelf_id_itr)*size_of_library;
		desc_offset = (4-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 20){
		$( "#DomImage20" ).show();
		offset = (5-shelf_id_itr)*size_of_library;
		desc_offset = (5-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 30){
		$( "#DomImage30" ).show();
		offset = (6-shelf_id_itr)*size_of_library;
		desc_offset = (6-shelf_id_itr)*size_of_a_description_set;
	}
	var ancestor = document.getElementById('cover_display10'),
	descendents = ancestor.getElementsByTagName('*'), //all elements of the menu drop display (cover images)
	horizontal_ancestor = document.getElementById('horizontal_edge'),
	horizontal_descendents = horizontal_ancestor.getElementsByTagName('*'),
	description_ancestor = document.getElementById('description'),
	description_descendents = description_ancestor.getElementsByTagName('*'); //all album descriptions in the menu drop display
	// descendents[itr].click();
	descendents[itrs[0]+offset].style.display = "inline";
	descendents[itrs[0]+offset].checked = true;
	horizontal_descendents[itrs[0]+offset].style.display = "inline";
	horizontal_descendents[itrs[0]+offset].checked = true;
	// need separate itr for description
	for(var j=0;j<itrs[1].length; j++){
		description_descendents[itrs[1][j]+desc_offset].style.display = "block";
		description_descendents[itrs[1][j]+desc_offset].checked = true;
	}
	// display_checked_artwork();
}



// function show_menu(){
$( ".hamburger" ).click(function() {
	// $( ".shelves" ).animate({width: 67%}, "slow");
	$( ".menu" ).show( "slide", function() {
		// {queue:false},
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
		// $( ".assoc_display" ).hide("fast");
		// $( "#DomImage10" ).css("width", "66%");
		// $( ".shelves" ).animate({width: 67%},{queue:false});
		// $(".shelves").animate({width: '67%'}, 200);
	});
	$( ".shelves" ).animate({width: '65%'},400);
	$( ".assoc_display" ).hide("fast");

});
// }


$( ".cross" ).click(function() {
	$( ".menu" ).hide( "slide", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
		$( ".assoc_display" ).show();
		// $( "#DomImage10" ).css("width", "100%");
		// $( ".shelves" ).css("width", "100%", "margin-right", "40px");
	});
	$(".shelves").animate({width: '100%'},400);
});

function hide_all_artwork(){
	var ancestor = document.getElementById('cover_display10'),
	descendents = ancestor.getElementsByTagName('*'), //all elements of the menu drop display (cover images and edges)
	horizontal_ancestor = document.getElementById('horizontal_edge'),
	horizontal_descendents = horizontal_ancestor.getElementsByTagName('*'),
	description_ancestor = document.getElementById('description'),
	description_descendents = description_ancestor.getElementsByTagName('*'); //all album descriptions in the menu drop display

	var i,e,d;
	for(i=0; i < descendents.length; ++i){
		e = descendents[i];
		d = horizontal_descendents[i];
		e.style.display = "none";
		d.style.display = "none";
		// e.setAttribute();
	}
	for(i=0; i<description_descendents.length; ++i){
		d = description_descendents[i];
		d.style.display = "none";
	}
}

// display the checked artwork
function display_checked_artwork(){
	var ancestor = document.getElementById('cover_display10'),
	descendents = ancestor.getElementsByTagName('*'), //all elements of the menu drop display (cover images and edges)
	horizontal_ancestor = document.getElementById('horizontal_edge'),
	horizontal_descendents = horizontal_ancestor.getElementsByTagName('*'),
	description_ancestor = document.getElementById('description'),
	description_descendents = description_ancestor.getElementsByTagName('*'); //all album descriptions in the menu drop display

	var i,e,d;
	for(i=0; i<descendents.length; ++i){
		e = descendents[i];
		// managing horizontal_descendents while running through descendents may pose a problem, though they should be one to one in the order of appearance
		// sorting later may change this
		d = horizontal_descendents[i];
		if(e.checked == true){
			e.style.display = "inline";
			d.style.display = "inline";
		}
	}
	for(i=0; i<description_descendents.length; ++i){
		d = description_descendents[i];
		if(d.checked == true){
			d.style.display = "block";
		}
	}
}

function set_checked_to_false(){
	var ancestor = document.getElementById('DomImage10'),
	descendents = ancestor.getElementsByTagName('*'), //all elements of the shelves display (edges)
	assoc_ancestor = document.getElementById('cover_display10'),
	assoc_descendents = assoc_ancestor.getElementsByTagName('*'), //all elements of the menu drop display (cover images and edges)
	horizontal_ancestor = document.getElementById('horizontal_edge'),
	horizontal_descendents = horizontal_ancestor.getElementsByTagName('*'),
	assoc_desc_ancestor = document.getElementById('description'),
	assoc_description_descendents = assoc_desc_ancestor.getElementsByTagName('*'); //all album descriptions in the menu drop display	

	var i,e,d;
	for(i=0; i<descendents.length; ++i){
		e = descendents[i];
		e.checked = false;
	}
	for(i=0; i<assoc_descendents.length; ++i){
		e = assoc_descendents[i];
		d = horizontal_descendents[i];
		e.checked = false;
		d.checked = false;
	}
	for(i=0; i<assoc_description_descendents.length; ++i){
		e = assoc_description_descendents[i];
		e.checked = false;
	}
}


function addImage(){
	// alert("heyo");

	// FOR 2 DOMINANT SWATCHES

	// for (var key in data_dom_2){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_2[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
			// var ass_img_edge = document.createElement("IMG");
			// ass_img_edge.src = key;
			// ass_img_edge.width = 15;
			// ass_img_edge.height = 150;
	// 		document.getElementById('DomImage2').appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
	// 		document.getElementById('cover_display2').appendChild(ass_img);
	// 		img.onmouseover = function(){
				// var ass_img2 = ass_img;
				// ass_img2
			// 	img.height = 220;
			// 	img.width = 15;
			// 	ass_img.style.display = "inline";
			// 	ass_img_edge.style.display = "inline";
			// 	// return img.onmouseover;
			// };
			// img.onmouseout = function(){
			// 	// ass_img.className = ""
			// 	// var ass_img2 = ass_img;
			// 	img.height = 185;
			// 	img.width = 10;
			// 	ass_img.style.display = "none";
			// 	ass_img_edge.style.display = "none";
			// 	// return img.onmouseout;
			// };
	// 	})(key);
	// 	// document.getElementById('DomImage46').appendChild(img);
	// 	// document.getElementById('cover_display').appendChild(ass_img);
	// }

	// FOR 5 DOMINANT SWATCHES

	// for (var key in data_dom_5){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_5[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
			// var ass_img_edge = document.createElement("IMG");
			// ass_img_edge.src = key;
			// ass_img_edge.width = 15;
			// ass_img_edge.height = 150;
	// 		document.getElementById('DomImage5').appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
	// 		document.getElementById('cover_display5').appendChild(ass_img);
			// img.onmouseover = function(){
			// 	// var ass_img2 = ass_img;
			// 	// ass_img2
			// 	img.height = 220;
			// 	img.width = 15;
			// 	ass_img.style.display = "inline";
			// 	ass_img_edge.style.display = "inline";
			// 	// return img.onmouseover;
			// };
			// img.onmouseout = function(){
			// 	// ass_img.className = ""
			// 	// var ass_img2 = ass_img;
			// 	img.height = 185;
			// 	img.width = 10;
			// 	ass_img.style.display = "none";
			// 	ass_img_edge.style.display = "none";
			// 	// return img.onmouseout;
			// };
	// 	})(key);
	// 	// document.getElementById('DomImage46').appendChild(img);
	// 	// document.getElementById('cover_display').appendChild(ass_img);
	// }

	// FOR 10 DOMINANT SWATCHES

	// array of json object names
	var json_objects = [data_dom_sw1,/*data_dom_sw2,*/data_dom_sw5/*,data_dom_sw10,data_dom_sw15,data_dom_sw20,data_dom_sw30*/];
	var shelf_div_id = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
	var shelf_id_itr = 0;

	json_objects.forEach(function(json_obj){

	for (var key in json_obj){
		(function(key){
			// this is the display image (the display edge of swatches)
			var img = document.createElement("IMG");
			img.src = key;
			img.width = 10;
			img.height = 185;
			// img.setAttribute();
			img.checked = false;
			// associated image of the original artwork
			var ass_img = document.createElement("IMG");
			ass_img.src = json_obj[key][json_obj[key].length-2];
			ass_img.width = 300;
			ass_img.height = 300;
			ass_img.style.display = "none";
			ass_img.checked = false;
			// associate image to be displayed under the "shelves"
			var ass_img_2 = document.createElement("IMG");
			ass_img_2.src = json_obj[key][json_obj[key].length-2];
			ass_img_2.width = 150;
			ass_img_2.height = 150;
			ass_img_2.style.display = "none";
			ass_img_2.checked = false;
			// a second version of edge 'img' for display next to the associated image
			var ass_img_edge = document.createElement("IMG"); //this goes in the drop display
			ass_img_edge.src = key;
			ass_img_edge.width = 30;
			ass_img_edge.height = 300;
			ass_img_edge.style.display = "none";
			ass_img_edge.checked = false;
			// this edge goes below the shelves
			var ass_img_edge_2 = document.createElement("IMG");
			ass_img_edge_2.src = key;
			ass_img_edge_2.width = 15;
			ass_img_edge_2.height = 150;
			ass_img_edge_2.style.display = "none";
			ass_img_edge_2.checked = false;
			// create a 2 new element to display album meta-data [artist and album title]
			var album_artist = document.createElement("p");
			var artist_node = document.createTextNode(json_obj[key][0]);
			var album_artist_2 = document.createElement("p");
			var artist_node_2 = document.createTextNode(json_obj[key][0]);
			// artist_node = json_obj[key][0];
			album_artist.appendChild(artist_node);
			album_artist.style.display = "none";
			album_artist.checked = false;
			album_artist_2.appendChild(artist_node_2);
			album_artist_2.style.display = "none";
			album_artist_2.checked = false;
			// album_artist.src = json_obj[key][0]; // artist name (for album title use json_obj[key][1])

			var album_title = document.createElement("p");
			var title_node;
			var album_title_2 = document.createElement("p");
			var title_node_2;
			// var album_title_present;
			if(json_obj[key].length > 2){
				// console.log("ya");
				// album_title_present = true;
				// var album_title = document.createElement("p");
				title_node = document.createTextNode(json_obj[key][1]);
				title_node_2 = document.createTextNode(json_obj[key][1]);	
				album_title.appendChild(title_node);
				album_title.style.display = "none";
				album_title.checked = false;
				album_title_2.appendChild(title_node_2);
				album_title_2.style.display = "none";
				album_title_2.checked = false;
				// document.getElementById('description').appendChild(album_title);
			}

			// var album_title = document.createElement("p");
			// var title_node = document.createTextNode(json_obj[key][1]);
			// // title_node = json_obj[key][1];
			// album_title = appendChild(title_node);
			// album_title.style.display = "none";
			// album_title.src = json_obj[key][1];
			document.getElementById(shelf_div_id[shelf_id_itr]).appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
			document.getElementById('cover_display10_2').appendChild(ass_img_edge_2);
			document.getElementById('cover_display10').appendChild(ass_img);

			// Testing Horizontal Display above album art in menu drop
			document.getElementById('horizontal_edge').appendChild(ass_img_edge);

			// document.getElementById('cover_display10_2').appendChild(ass_img_edge);
			document.getElementById('cover_display10_2').appendChild(ass_img_2);
			document.getElementById('description').appendChild(album_artist);
			document.getElementById('description').appendChild(album_title);
			document.getElementById('description_2').appendChild(album_artist_2);
			document.getElementById('description_2').appendChild(album_title_2);

			// if(Boolean(album_title_present)){
			// 	// var album_title = document.createElement("p");
			// 	// var title_node = document.createTextNode(json_obj[key][1]);	
			// 	// album_title = appendChild(title_node);
			// 	// album_title.style.display = "none";
			// document.getElementById('cover_display10').appendChild(album_title);
			// }

			// document.getElementById('cover_display10').appendChild(album_title);
			// document.getElementById('description').appendChild(album_artist);
			// document.getElementById('description').appendChild(album_title);

			// var clicked = false;
			img.onclick = function(){
				
				hide_all_artwork();
				set_checked_to_false();
				// clicked = true;
				ass_img_edge.style.display = "inline";
				ass_img.style.display = "inline";
				album_artist.style.display = "block";
				album_title.style.display = "block";
				// ass_img_edge.style.display = "inline";
				// img.setAttribute();
				// img.checked = true;
				ass_img_edge.checked = true;
				ass_img.checked = true;
				album_artist.checked = true;
				album_title.checked = true;

				// ass_img_2.style.visibility = "visible";
				// ass_img_edge_2.style.visibility = "visible";
				$(".hamburger").click();
			};
			// img.addEventListener("click", display_artwork(ass_img_2,ass_img_edge_2));

			img.onmouseover = function(){
				// var ass_img2 = ass_img;
				// ass_img2
				// img.height = 220;
				hide_all_artwork();
				img.width = 15;
				ass_img.style.display = "inline";
				ass_img_edge.style.display = "inline";
				album_artist.style.display = "block";
				// if(Boolean(album_title_present)){
				album_title.style.display = "block";
				// $(".body").css("margin-right","30px");
				// }
				// return img.onmouseover;
				ass_img_2.style.display = "inline";
				ass_img_edge_2.style.display = "inline";
				album_artist_2.style.display = "block";
				album_title_2.style.display = "block";
			};
			img.onmouseout = function(){
				// ass_img.className = ""
				// var ass_img2 = ass_img;
				// img.height = 185;
				// display_checked_artwork();
				img.width = 10;
				if(img.checked == false){
					ass_img.style.display = "none";
					ass_img_edge.style.display = "none";
					album_artist.style.display = "none";
					// if(Boolean(album_title_present)){
					album_title.style.display = "none";
				}
				// $(".body").css("margin-right","40px");
				// }
				// return img.onmouseout;
				if(img.checked == false){
					ass_img_2.style.display = "none";
					ass_img_edge_2.style.display = "none";
					album_artist_2.style.display = "none";
					album_title_2.style.display = "none";
				}
				display_checked_artwork();

			};
			// clicked = false;
			// img.addEventListener("click", display_artwork(ass_img_2,ass_img_edge_2)); 
		})(key);
	}
	shelf_id_itr += 1;

	});

	// FOR 20 DOMINANT SWATCHES

	// for (var key in data_dom_20){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_20[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
			// var ass_img_edge = document.createElement("IMG");
			// ass_img_edge.src = key;
			// ass_img_edge.width = 15;
			// ass_img_edge.height = 150;
	// 		document.getElementById('DomImage20').appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
	// 		document.getElementById('cover_display20').appendChild(ass_img);
			// img.onmouseover = function(){
			// 	// var ass_img2 = ass_img;
			// 	// ass_img2
			// 	img.height = 220;
			// 	img.width = 15;
			// 	ass_img.style.display = "inline";
			// 	ass_img_edge.style.display = "inline";
			// 	// return img.onmouseover;
			// };
			// img.onmouseout = function(){
			// 	// ass_img.className = ""
			// 	// var ass_img2 = ass_img;
			// 	img.height = 185;
			// 	img.width = 10;
			// 	ass_img.style.display = "none";
			// 	ass_img_edge.style.display = "none";
			// 	// return img.onmouseout;
			// };
	// 	})(key);
	// }

	// FOR 30 DOMINANT SWATCHES

	// for (var key in data_dom_30){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_dom_30[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
			// var ass_img_edge = document.createElement("IMG");
			// ass_img_edge.src = key;
			// ass_img_edge.width = 15;
			// ass_img_edge.height = 150;
	// 		document.getElementById('DomImage30').appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
	// 		document.getElementById('cover_display30').appendChild(ass_img);
	// 		img.onmouseover = function(){
				// var ass_img2 = ass_img;
				// ass_img2
			// 	img.height = 220;
			// 	img.width = 15;
			// 	ass_img.style.display = "inline";
			// 	ass_img_edge.style.display = "inline";
			// 	// return img.onmouseover;
			// };
			// img.onmouseout = function(){
			// 	// ass_img.className = ""
			// 	// var ass_img2 = ass_img;
			// 	img.height = 185;
			// 	img.width = 10;
			// 	ass_img.style.display = "none";
			// 	ass_img_edge.style.display = "none";
			// 	// return img.onmouseout;
			// };
	// 	})(key);
	// }

	// FOR SQUISHED EDGE DISPLAY

	// for (var key in data_squished){
	// 	(function(key){
	// 		var img = document.createElement("IMG");
	// 		img.src = key;
	// 		img.width = 5;
	// 		img.height = 184;
	// 		var ass_img = document.createElement("IMG");
	// 		ass_img.src = data_squished[key][2];
	// 		ass_img.width = 150;
	// 		ass_img.height = 150;
	// 		ass_img.style.display = "none";
			// var ass_img_edge = document.createElement("IMG");
			// ass_img_edge.src = key;
			// ass_img_edge.width = 15;
			// ass_img_edge.height = 150;
	// 		document.getElementById('SquishImage').appendChild(img);
			// document.getElementById('cover_display10').appendChild(ass_img_edge);
	// 		document.getElementById('cover_display_squish').appendChild(ass_img);
	// 		img.onmouseover = function(){
				// var ass_img2 = ass_img;
				// ass_img2
			// 	img.height = 220;
			// 	img.width = 15;
			// 	ass_img.style.display = "inline";
			// 	ass_img_edge.style.display = "inline";
			// 	// return img.onmouseover;
			// };
			// img.onmouseout = function(){
			// 	// ass_img.className = ""
			// 	// var ass_img2 = ass_img;
			// 	img.height = 185;
			// 	img.width = 10;
			// 	ass_img.style.display = "none";
			// 	ass_img_edge.style.display = "none";
			// 	// return img.onmouseout;
			// };
	// 	})(key);
	// }
}

// function display_artwork(artwork,edge){
// 	edge.style.display = "inline";
// 	artwork.style.display = "inline";
// }

// $( ".cross" ).hide();
// $( ".menu" ).hide();
// $( ".assoc_display" ).show();

// function show_menu(){
// 	$( ".hamburger" ).click(function() {
// 		// $( ".shelves" ).animate({width: 67%}, "slow");
// 		$( ".menu" ).toggle( "slide", function() {
// 			// {queue:false},
// 			$( ".hamburger" ).hide();
// 			$( ".cross" ).show();
// 			$( ".assoc_display" ).hide();
// 			// $( "#DomImage10" ).css("width", "66%");
// 			// $( ".shelves" ).animate({width: 67%},{queue:false});
// 			// $(".shelves").animate({width: '67%'}, 200);
// 		});
// 		$( ".shelves" ).animate({width: '65%'},400);
// 	});
// }

// $( ".cross" ).click(function() {
// 	$( ".menu" ).toggle( "slide", function() {
// 		$( ".cross" ).hide();
// 		$( ".hamburger" ).show();
// 		$( ".assoc_display" ).show();
// 		// $( "#DomImage10" ).css("width", "100%");
// 		// $( ".shelves" ).css("width", "100%", "margin-right", "40px");
// 	});
// 	$(".shelves").animate({width: '100%'},400);
// });

// function addCovers(){

// }
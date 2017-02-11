
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

// lets try to see if we can onload() at different click events
var json_obj;

var sw1_selected = 1;
var sw2_selected = 0;
var sw5_selected = 0;
var sw10_selected = 0;
var sw15_selected = 0;
var sw20_selected = 0;
var sw30_selected = 0;

var load_queue = 0
var load_order = []

var load_queue0 = 0
var load_queue1 = 0
var load_queue2 = 0
var load_queue3 = 0
var load_queue4 = 0
var load_queue5 = 0
var load_queue6 = 0

// poor setup of global variables
var shelf_names = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
var size_of_options = shelf_names.length;

window.onload = function() {
  addImage(data_dom_sw1,0);
};

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".assoc_display" ).show();
$( "#DomImage2" ).hide();
$( "#DomImage5" ).hide();
$( "#DomImage10" ).hide();
$( "#DomImage15" ).hide();
$( "#DomImage20" ).hide();
$( "#DomImage30" ).hide();

// window.onload = function() {
//   addImage(data_dom_sw1,0);
// };

// addImage(data_dom_sw1,0);

function hide_current_visible_swatch(){
	var shelf_div_id = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
	// for(var i=0; i<shelf_div_id.length; i++){
	// 	if($( '#'+shelf_div_id[i]).is(":visible")){
	// 		$('#'+shelf_div_id[i]).hide();
	// 		return i;
	// 	}
	// }
	for(var i=0; i<load_order.length; i++){
		if($( '#'+load_order[i]).is(":visible")){
			$('#'+load_order[i]).hide();
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

$(".selection").click(function(){
	var value = $(this).attr('data-myValue');
	console.log(value);
	var display = document.getElementById('current_swatch_num');
	display.innerHTML = value;
	// $("#arr").click();
	select_sw_display(value);
	// $("#arr").click();
});

// function changeSwNum(){

// }

function select_sw_display(value){
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
	// var value = select_val.options[select_val.selectedIndex].value;

	// var selected_val = document.getElementById("container");
	// var value = selected_val.options[selected_val.selectedIndex].value; 

	if(value == 1){
		
		json_obj = data_dom_sw1;
		if(sw1_selected==0){
			load_queue0 = load_queue
			addImage(json_obj,0);
			// load_queue0 = load_queue
			sw1_selected = 1;
		}
		// else{
			// addImage(json_obj,0);
			// $( "#DomImage1" ).show();
			// offset = (0-shelf_id_itr)*size_of_library;
			// desc_offset = (0-shelf_id_itr)*size_of_a_description_set;
		// }

		$( "#DomImage1" ).show();
		offset = (load_queue0-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue0-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 2){

		json_obj = data_dom_sw2;
		if(sw2_selected==0){
			load_queue1 = load_queue
			addImage(json_obj,1);
			// load_queue1 = load_queue
			console.log(load_queue1)
			sw2_selected = 1;
		}
		// addImage(json_obj,1);

		$( "#DomImage2" ).show();
		offset = (load_queue1-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue1-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 5){
		json_obj = data_dom_sw5;
		if(sw5_selected==0){
			load_queue2 = load_queue
			addImage(json_obj,2);
			// load_queue2 = load_queue
			console.log(load_queue2)
			sw5_selected = 1;
		}
		$( "#DomImage5" ).show();
		offset = (load_queue2-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue2-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 10){
		json_obj = data_dom_sw10;
		if(sw10_selected==0){
			load_queue3 = load_queue
			addImage(json_obj,3);
			// load_queue3 = load_queue
			console.log(load_queue3)
			sw10_selected = 1;
		}
		$( "#DomImage10" ).show();
		offset = (load_queue3-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue3-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 15){
		json_obj = data_dom_sw15;
		if(sw15_selected==0){
			load_queue4 = load_queue
			addImage(json_obj,4);
			// load_queue4 = load_queue
			console.log(load_queue4)
			sw15_selected = 1;
		}
		$( "#DomImage15" ).show();
		offset = (load_queue4-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue4-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 20){
		json_obj = data_dom_sw20;
		if(sw20_selected==0){
			load_queue5 = load_queue
			addImage(json_obj,5);
			// load_queue5 = load_queue
			console.log(load_queue5)
			sw20_selected = 1;
		}
		$( "#DomImage20" ).show();
		offset = (load_queue5-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue5-shelf_id_itr)*size_of_a_description_set;
	}else if(value == 30){
		json_obj = data_dom_sw30;
		if(sw30_selected==0){
			load_queue6 = load_queue
			addImage(json_obj,6);
			// load_queue6 = load_queue
			console.log(load_queue6)
			sw30_selected = 1;
		}
		$( "#DomImage30" ).show();
		offset = (load_queue6-shelf_id_itr)*size_of_library;
		desc_offset = (load_queue6-shelf_id_itr)*size_of_a_description_set;
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


// var menu_click = document.getElementById("hamburger");


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
	if($("#container").width() > 5){
		$( "#arr" ).click();
	}
	$( ".menu" ).hide( "slide", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
		$( ".assoc_display" ).show();
		// $( "#arr" ).click();
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


function addImage(json_obj,shelf_id_itr){
	load_queue += 1
	
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
	// var json_objects = [data_dom_test_sw1,data_dom_test_sw2,data_dom_test_sw5,data_dom_test_sw10,data_dom_test_sw15,data_dom_test_sw20,data_dom_test_sw30];
	var shelf_div_id = ["DomImage1","DomImage2","DomImage5","DomImage10","DomImage15","DomImage20","DomImage30"];
	// var shelf_id_itr = 0;
	load_order.push(shelf_div_id[shelf_id_itr])

	// json_objects.forEach(function(json_obj){
	// for (var json_obj in json_objects){
	// 	(function(json_obj){

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
			ass_img.width = 400;
			ass_img.height = 400;
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
			ass_img_edge.width = 40;
			ass_img_edge.height = 400;
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
				// ass_img_edge_2.style.display = "inline";
				// album_artist_2.style.display = "block";
				// album_title_2.style.display = "block";

				var bottom_display = document.getElementById('cover_display10_2');

				window.onmousemove = function (e) {
					var x,y;
					if(e.clientX > 1400){
						x = (e.clientX - 160) + 'px';
				    }else{
					    x = (e.clientX + 20) + 'px';
				    }
				    if( ($(window).height() - e.clientY) < 185){
				    	y = 620+'px';
				    	bottom_display.style.top = y;
				    }else{
				    	y = (e.clientY + 20) + 'px';
				    	bottom_display.style.top = y;
				    }
				    // for (var i = 0; i < tooltips.length; i++) {
			        // bottom_display.style.top = y;
			        bottom_display.style.left = x;
				    // }
				};
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

	// load_queue += 1
	// shelf_id_itr += 1;

	// });

	// }

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

// $( ".selector_" ).hover( 
// 	function(){
// 		$( ".selector_ ul" ).css("width", "20%");
// 	}, function(){
// 		$( ".selector_ ul" ).css("width", "0px");
// 	}
// );
function swatchSelect(){
	var swatches = document.getElementById("container");
	var arrow = document.getElementById("arr");
	var pad = 2.5;
	var width = 1;
	var arrow_pad = 3.5;
	// arrow.innerHTML = '&#8249;';
	// $(".selection").css("display","inline");
	var id = setInterval(frame,10);
	function frame(){
		// if(width >= 34){
		// 	$( ".selection" ).css("display","table-cell");
		// }else{
		// 	$( ".selection" ).css("display","none");
		// }
		if(width >= 34){
			$( ".selection" ).css("display","table-cell");
			if(width%2==0){
				$(".selection").css("padding",'14px '+pad+'px');
				pad++;
				console.log(pad);
			}
			// $(".selection").css("padding",'14px '+pad+'px');
			// pad++;
		}else{
			$( ".selection" ).css("display","none");
		}
		if(width >= 54){
			clearInterval(id);
		}else{
			width++;
			arrow_pad++;

			swatches.style.width = width + '%';
			arrow.style.left = arrow_pad + '%';
			// $("#arr").css("padding",'16px '+width+'px');
			// arrow.style.padding = '16px ' + width + 'px';
		}
	} 
	// console.log(pad);
}

function swatchSelectClose(){
	var swatches = document.getElementById("container");
	var arrow = document.getElementById("arr");
	// var width = $("#container").width();
	var width_s = swatches.style.width;
	var arrow_pad_s = arrow.style.left;
	var width = parseFloat(width_s);
	var arrow_pad = parseFloat(arrow_pad_s);
	// arrow_pad = arrow_pad - 1;

	var pad = ($('.selection').innerWidth() - $('.selection').width())/2;

	// console.log($('.selection').innerWidth());
	// console.log($('.selection').width());

	// console.log(width);
	// // console.log(width2);
	// console.log(arrow_pad);
	// console.log(pad);

	var id = setInterval(frame,10);
	function frame(){
		if(width <= 20){
			$( ".selection" ).css("display","none");
		}else{
			$( ".selection" ).css("display","table-cell");
			if(width%2==0){
				pad--;
				$(".selection").css("padding",'14px '+pad+'px');
				// pad--;
			}
		}
		if(width <= 0){
			arrow_pad -= 2.5;
			arrow.style.left = arrow_pad +'%';
			clearInterval(id);
		}else{
			width--;
			arrow_pad--;

			swatches.style.width = width +'%';
			arrow.style.left = arrow_pad +'%';

		}
	}
	// arrow.innerHTML = '&#8250;';
}

$( "#arr" ).click(function(){
	var arrow = document.getElementById("arr");
	var htmlstring = arrow.innerHTML;

	var swatches = document.getElementById("container");

	// console.log(swatches.style.width);

	if($("#container").width() < 5){
		swatchSelect();
		arrow.innerHTML = '&#8249;';
	}
	else if($("#container").width() > 5){
		swatchSelectClose();
		arrow.innerHTML = '&#8250;';
	}

	// if(htmlstring == "&#8250;"){
	// 	swatchSelect();
	// }
	// if(htmlstring == "&#8249;"){
	// 	swatchSelectClose();
	// }
});
// $( ".selection_" ).click(function() {
// 	if($( ".selection" ).not(":visible")){
// 		$( ".selection" ).animate({
// 			// display: "table-cell",
// 			left: "20%"
// 		}, 100);
// 	}else{
// 		$( ".selection" ).animate({
// 			// display: "none",
// 			left: "0px"
// 		}, 100);
// 	}
// });

// $( ".selector_" ).click(function() {
// 	$( ".selector_ ul" ).toggle( "slide", {direction: 'left'}, 1000, function() {

// 	}
// 	);
// });

// $("#selector2").click(function(){
// 	$( "#sw_nums" ).animate({
// 		width: "20%"
// 	}, 4000);
// });

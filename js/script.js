/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//set up page//

	var len = people.length;

	for (var i=0; i<len; i++){

		// console.log(people[i].firstname);

	$('.people').append(
		'<div class="photos" pid="' + i + '">'
		+ '<div class="caption">'
			+ '<p>'
			+ people[i].firstname
			+ ' '
			+ people[i].lastname
			+ '</p>'
		+ '</div>'
		+ '<img src="img/emoji/emoji-' + i + '.jpg">'
		+ '</div>'
		);

	}

	//fade captions//

	$(".photos").hover(function(){

		$(".caption",this).fadeToggle();

	});


	//modal//

	$('.photos').click(function(){

		$('.modal').show();

		var pid = $(this).attr('pid');

		$(".modal img").attr('src', 'img/emoji/emoji-' + pid + '.jpg');

		$('.fullname').html(people[pid].firstname + ' ' + people[pid].lastname);

		$('.zodiac').html(people[pid].zodiac);

		$('.favcolor').html(people[pid].favcolor);

		$('.favcity').html(people[pid].favcity);

		$('.hometown').html(people[pid].hometown);

		$('.food').html(people[pid].food);

		$('.drink').html(people[pid].drink);

		$('.animal').html(people[pid].animal);

		$('.overlay').fadeIn();

	});

	$('.closer').click(function(){

		$('.overlay').hide();

	});










}); //end document.ready block




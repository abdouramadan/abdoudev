$(document).ready(function () {
	
	$('.my__work>main>.content>.item').click(function () {
		
		$('.work-modal').addClass('modal-down')

		$('.cover').addClass('darker')

	})

	$('.work-modal>.header>span').click(function () {
		
		$('.work-modal').toggleClass('modal-down')

		$('.cover').toggleClass('darker')

	})

	$('.navbar-toggler-icon').click(function () {
		
		$('.navbar-nav').toggleClass('navbar-nav-toggle')


	})


})
$(document).ready(function(){
	var showColor = function(selection){
		$(selection).hide();
		$(selection + '.color').show()
	}

	$('.submit-button').on('click', function(e){
		e.preventDefault();
		$('.logo').show();
		$('.color').hide();
		var type = $('.type').val();
		var grade = $('.grade').val();
		console.log(type);
		console.log(grade);
		if(type == "loan" && grade == "k-12"){
			showColor('.k-12.loan');
		}
		else if(type == "loan" && grade == "highschool"){
			showColor('.highschool.loan');
		}
		else if(type == "scholarship" && grade == "k-12"){
			showColor('.k-12.scholarship');
		}
		else if (type == "scholarship" && grade == "highschool"){
			showColor('.highschool.scholarship');
		}
		else if(grade == "k-12"){
			showColor('.k-12');
		}
		else if(grade == "highschool"){
			showColor('.highschool');
		}
		else if(type == "loan"){
			showColor('.loan');
		}
		else if(type == "scholarship"){
			showColor('.scholarship');
		}
		else{
			showColor('.logo')
		}
		})
	})
$(function() {
    var url = 'https://www.codeschool.com/users/419254.json';
    $.ajax({
        url: url,
		dataType: 'jsonp',
		success: function(response) {
			var completed = response.courses.completed;
			completed.forEach(function(course) {
				var $elem = $('<div class="course">\
									<h3>'+course.title+'</h3> \
									<img src=" ' + course.badge + '"></img> \
									<a href="'+course.url+'" target="_blank" class="btn btn-primary">See course</a> \
								</div>');
				$('#badges').append($elem);
			}) 
		}
    });
});



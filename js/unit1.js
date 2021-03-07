//.animate({property1: value1, property2: value2, ... }, speed);
//tạo ra các hiệu ứng chuyển động phần tử DOM HTML
//CSS {opacity: 1} là độ mờ mặc định của một phần tử, 
//giá trị này cho phép bạn nhìn thấy phần tử một cách rõ ràng nhất.
//CSS {opacity:0} sẽ làm cho phần tử trở thành trong suốt (transparent).

	// dau tien la chua co gi hien ra 
	//$('.dangnhap').animate({opacity:0,marginLeft:-100})
	$('.dangky').animate({opacity:0,marginLeft:-100});

	// ap dung 3 phan tu cua cau lenh jquery 
	$('.nutso2').click(function(event) {
		/* Act on the event */
		$('.dangnhap').animate({opacity:0,marginLeft:-100}); 

		// dang ky di vao 
		$('.dangky').animate({opacity:1,marginLeft:0}); 
	});

	$('.nutso1').click(function(event) {
		/* Act on the event */
		$('.dangky').animate({opacity:0,marginLeft:-100});
		$('.dangnhap').animate({opacity:1,marginLeft:0});
	});

//slideUp():Ẩn các thành phần phù hợp với hiệu ứng chuyển động trượt (slide)
//xác định thành phần cùng cấp ngay kế tiếp thành phần sử dụng .next()
//.slideToggle(): Hiển thị và ẩn các thành phần phù hợp với hiệu ứng chuyển động trượt (slide).
//Việc hiển thị và ẩn được luân phiên nhau giữa các lần action (VD action Click).
//.toggleClass(): Thêm hoặc loại bỏ một hoặc nhiều class của thành phần.
//Việc thêm hoặc loại bỏ class được luân phiên nhau giữa các lần action (VD action Click)


//cho tat ca noi dung thu lai 
	$('.ndmotkhoi').slideUp();

	// click vao the h3 
	$('.motkhoi h3').click(function(event) {
		//$('.ndmotkhoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh')
	});
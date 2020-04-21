var all = {
    init: function () {
        this.load();
        this.fixed();
        this.clickbar();
        this.slide();
        this.filter();
        this.menuclick();
    },
    load:function(){
        var l = document.querySelector('.load')
        function loading() {
            l.classList.add('loading');
        }
        setInterval(loading, 2000);
    },
    fixed: function () {
        var header = document.querySelector('.header')
        var ontop = document.querySelector('.top')
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 100) {
                header.classList.add('active');
                ontop.classList.add('ra')
            }
            else {
                header.classList.remove('active');
                ontop.classList.remove('ra')
            }
        })
    },
    menuclick: function () {
        var nav = document.querySelector('.nav__list')
        var tab = document.querySelectorAll('.tab')
        var sub = document.querySelectorAll('.sub__menu')
        tab.forEach(function (btn, index) {
            btn.addEventListener('click', function () {
                tab[index].classList.toggle('he');
                sub[index].classList.toggle('he');
            })
        })
    },
    clickbar: function () {
        var bar = document.querySelector('.bar')
        var header__nav = document.querySelector('.header__nav')
        var close = document.querySelector('.close')
        bar.addEventListener('click', function () {
            header__nav.classList.add('hien')
        })
        close.addEventListener('click', function () {
            header__nav.classList.remove('hien')
        })
    },

    slide: function () {

        // var prev = document.querySelectorAll('.prev'),
        //     next = document.querySelectorAll('.next'),
        //     slides = document.querySelectorAll('.item__slide ul li');
        //     index = 0;
        //     soluongslide = slides.length;
        //     var trangthai = 'dangdungyen';

        // prev.addEventListener('click', function () {
        //     // Bước 1: Xác định phần tử hiện tại
        //     var phantuhientai = slides[index]
        //     if (trangthai == 'dangchuyendong') { return false; }
        //     trangthai = 'dangchuyendong'
        //     var trangthai2chuyendong = 0;
        //     // Bước 2: Xác định phần tử tiếp theo
        //     index = (index < soluongslide - 1) ? index + 1 : 0;
        //     var phantutieptheo = slides[index]

        //     // Bước 4: xử lý lặp 
        //     phantuhientai.addEventListener('webkitAnimationEnd', function () {
        //         this.classList.remove('dangxem');
        //         this.classList.remove('removeprev')
        //         trangthai2chuyendong++; // =1
        //         if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' }

        //     });
        //     phantutieptheo.addEventListener('webkitAnimationEnd', function () {
        //         this.classList.remove('goprev');
        //         this.classList.add('dangxem')
        //         trangthai2chuyendong++;
        //         if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' }
        //     })
        //     // Bước 3: Tạo hiệu ứng khi xác định được 2 phần tử
        //     phantuhientai.classList.add('removeprev')
        //     phantutieptheo.classList.add('goprev')

        // })
        // next.addEventListener('click', function () {
        //     if (trangthai == 'dangchuyendong') { return false; } // dừng chương trình luôn
        //     // sau khi bước trên false 
        //     // Đánh dấu cho chuyển động 
        //     trangthai = 'dangchuyendong'
        //     var trangthai2chuyendong = 0; // để xác định 2 chuyển động 2 trạng thái kết thúc
        //     // Bước 1: Xác định phần tử hiện tại
        //     var phantuhientai = slides[index]
        //     // Bước 2: Xác định phần tử tiếp theo
        //     index = index > 0 ? index - 1 : index = soluongslide - 1;
        //     var phantutieptheo = slides[index]  // Nhìn giống như trên nhưng qua đoạn câu điều kiện đã biến đổi
        //     // Bước 4: xử lý lặp 
        //     phantuhientai.addEventListener('webkitAnimationEnd', function () {
        //         this.classList.remove('dangxem'); // xóa class hiện tại sau khi kết thúc hiệu ứng ở slide trc
        //         this.classList.remove('removenext') // xóa class đã thêm ở trc để lần sau có thể add tiếp
        //         trangthai2chuyendong++; // =1
        //         if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' } // để không trùng với câu lệnh trên ==>  if ( trangthai == 'dangchuyendong'){ return false ;} 

        //     });
        //     phantutieptheo.addEventListener('webkitAnimationEnd', function () {
        //         this.classList.remove('gonext');
        //         this.classList.add('dangxem')
        //         trangthai2chuyendong++;
        //         if (trangthai2chuyendong == 2) { trangthai = 'dangdungyen' }
        //     })
        //     // Bước 3: Tạo hiệu ứng khi xác định được 2 phần tử
        //     phantuhientai.classList.add('removenext')
        //     phantutieptheo.classList.add('gonext')
        // })

    },
    filter: function () {
        var range = document.querySelector('.slider')
        var price = document.querySelector('#price')
        range.addEventListener('mousemove', function () {
            price.innerHTML = '$' + this.value;
        })
    }

}
all.init()
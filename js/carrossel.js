$('#carouselProject').on('slide.bs.carousel', function (e) {

  let $e = $(e.relatedTarget);
  const idx = $e.index();
  const itemsPerSlide = 4;
  const totalItems = $('.carousel-item').length;

  if (idx >= totalItems-(itemsPerSlide-1)) {
      let it = itemsPerSlide - (totalItems - idx);
      for (let i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
              $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
      }
  }
});

// see this new options for Bootstrap 4.3.1
// https://www.codeply.com/go/zjZsn1ly29

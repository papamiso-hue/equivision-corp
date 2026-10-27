(function(){
  // 메일 주소를 글자 그대로 두지 않고 눌렀을 때만 조립(자동 수집 방지)
  var addr = ['equivisionai','gmail.com'].join('@');
  function go(e){ e.preventDefault(); location.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('[이퀴비젼에이아이] 문의'); }
  document.querySelectorAll('.js-mail,.js-mail-text').forEach(function(a){ a.addEventListener('click', go); });
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting){ x.target.classList.add('in'); io.unobserve(x.target);} }); },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();

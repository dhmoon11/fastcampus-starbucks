const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){  
  // Logic..
  searchInputEl.focus(); // input요소를 focus하겠다. focus 강제적용해주는 명령어
  // search라는 클래스를 가진 div요소를 클릭하면 함수가 실행되는데 
  // 그 함수 내용이 인풋요소에 포커스 하라는 뜻
});

searchInputEl.addEventListener('focus', function(){       // searchInputEl 부분에 포커스가 되면 두번째 인수로 작용하는 함수가 실행이 될거다.
  searchEl.classList.add( 'focused');                     // 특정 요소에 클래스 정보를 가지고있는 객체에서 어떤 클래스 내용을 추가(add) 하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색');   // searchInputEl부분에 html의 속성을 지정할 때 쓰는 메소드
}); 

// 포커스가 안 되어 있는 상태일때 포커스 클래스를 지우기 위한 구문
searchInputEl.addEventListener('blur', function(){        // blur - 포커스가 해제되었을때를 의미 
  searchEl.classList.remove( 'focused');                  // add <-> remove
  searchInputEl.setAttribute('placeholder', ''); 
}); 

/** 애니메이션 나타고 사라지고 */
const badgeEl = document.querySelector('header .badges');

/*  window - 프로젝트가 출력되는 화면 자체를 의미 
    화면이 스크롤되면 익명의 함수를 실행하겠다. */             // lodash cdn 라이브러리를 이용해 _.throttle를 사용해 부하를 제어해줌   
window.addEventListener('scroll', _.throttle(function() {   // _.throttle(함수, 시간) 괄호 안의 함수가 몇초(시간)에 한 번 실행되게 설정
  console.log('window.scrollY');
  if (window.scrollY > 500 ){           // scrollY - 화면이 스크롤 될 때 마다 윈도우라는 객체부분에 있는 스크롤y라는 속성부분의 값이 그때그때 갱신됨 */
    // 500보다 크면 배지 숨기기 
    gsap.to(badgeEl, .6, {              // gsap.to(요소, 지속시간, 옵션);  // badgeEl.style.display = 'none';
      opacity: 0,                       // 보이지만 않을뿐 클릭이 되기 때문에
      display: 'none'                   // display로 진짜 사라지게 만들어 줌
    });
  } else {
      // 배지 보이기
      gsap.to(badgeEl, .6, {            // gsap.to(요소, 지속시간, 옵션);  // badgeEl.style.display = 'block';
        opacity: 1,
        display: 'block'
      });                                        
    }
}, 300)); 

/** opacity 속성처럼 값을 숫자로 입력하는 속성들은,
 * 전환 효과(transition 속성이나 gsap 라이브러리 등)를 통해
 * 요소의 전/후 상태를 중간 숫자으 ㅣ값으로 자연스럽게 만들어 줄 수 있지만,
 * display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
 * 자연스러운 전환 효과를 적용할 수 없다. */


const fadeEls = document.querySelectorAll('.visual .fade-in');  // fade-in요소 4개가 실행(.7)/ 순차실행((index+1))
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {                  // fadeEl라는 요소부분에 애니메이션을 1초동안 실행할 건데 몇초 뒤에 실행할 것인지
    delay: (index + 1) *.7,             // delay(지연시간)을 사용해 표시 /{.7만 사용할 경우 한번에 나타남} {(index + 1)를 사용하면 순차적으로 나타남 }
    opacity: 1
  });                                   // gsap.to(요소, 지속시간, 옵션);
});



/* SWIPER */
// new Swiper(선택자, {옵션})
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loo: true
}); 



$(function(){


    gsap.registerPlugin(ScrollTrigger);
    let bodyScrollBar = Scrollbar.init(document.body, { 
        damping: 0.05, 
        delegateTo: document 
    });
    
    ScrollTrigger.scrollerProxy(".wrap", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    
    
    

    
    
    
        $('[data-fade]').each(function(i,el){
            gsap.from($(this).find('>*'),{
                scrollTrigger:{
                    trigger:el,
                    scroller: ".wrap",
                    start:"0% 80%",
                    end:"100% 0%",
                    // scrub:1,
                    // markers:true,
                },
                opacity:0,
                y:50,
                stagger:0.1,
            })
    
        })
    
    
        $('.btn-area a').click(function(e){
            e.preventDefault();
            projectHeight = $('.sc-project').offset().top;
            
            
            gsap.to('html,body',{
                scrollTop:projectHeight,
                duration: .5,
              })
        })
    
    
        $('[data-hover]').hover(function(){
            $('.cursor').addClass('data-hover');
        },function(){
            $('.cursor').removeClass('data-hover')
        })


    
        // 스크롤이벤트 - sc-main
        scrollMove = gsap.timeline({
            scrollTrigger:{
                trigger:".sc-main",
                scroller: ".wrap",
                start:"0% 0%",
                end:"40% 4%%",
                // markers:true, //끝나면 지우면됨!
                scrub:0,
            },
        })
        
        scrollMove
        .addLabel('text')
        .to('.sc-main .title_text_layer1',{ xPercent:-30 },'text')
        .to('.sc-main .title_text_layer2',{ xPercent:10 },'text')
        .to('.sc-main .desc_text_layer1',{ xPercent:-10 },'text')
        .to('.sc-main .desc_text_layer2',{ xPercent:10 },'text')
        .to('.sc-main .desc_text_layer3',{ xPercent:-10 },'text')
    
    
        // 스크롤이벤트 - sc-project__line
        linetext = gsap.timeline({
            scrollTrigger:{
                trigger:".sc-project__line",
                scroller: ".wrap",
                start:"0% 100%",
                end:"100% 0%",
                // markers:true, //끝나면 지우면됨!
                scrub:0,
            },
        })
        
        linetext
        .addLabel('line')
        .to('.sc-project__line .text_1',{ xPercent:20 },'line')
        .to('.sc-project__line .text_2',{ xPercent:-20 },'line')
        .to('.sc-project__line .text_3',{ xPercent:20 },'line')
        
    
        //스크롤 이벤트 - contact
    
    
    
        gsap.set('.footer .contact',{y:-450})
        gsap.set('.footer__inner',{y:-600})
    
        scrollUp = gsap.timeline({
            scrollTrigger:{
                trigger:".footer",
                scroller: ".wrap",
                start:"0% 80%",
                end:"100% 100%",
                // markers:true, //끝나면 지우면됨!
                scrub:0,
            },
            defaults:{
                ease:'none'
            }
        })
        
        scrollUp
        .addLabel('scrollUp')
        .to('.footer .contact',{y:0},'scrollUp')
        .to('.footer__inner',{y:0},'scrollUp')




        ScrollTrigger.matchMedia({
            "(min-width: 1440px)": function() {
                gsap.set('.footer .contact',{y:-150})
                gsap.set('.footer__inner',{y:-400})
            
                scrollUp = gsap.timeline({
                    scrollTrigger:{
                        trigger:".footer",
                        scroller: ".wrap",
                        start:"0% 80%",
                        end:"100% 100%",
                        // markers:true, //끝나면 지우면됨!
                        scrub:0,
                    },
                    defaults:{
                        ease:'none'
                    }
                })
                
                scrollUp
                .addLabel('scrollUp')
                .to('.footer .contact',{y:0},'scrollUp')
                .to('.footer__inner',{y:0},'scrollUp')
              }, 
        })
    
    })
    
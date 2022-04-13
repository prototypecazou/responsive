var update = function(){

    var divId = document.querySelectorAll("#divId")


  
        for(var i = 0; i < divId.length; i++){
            divId[i].classList.toggle("divChargement"+i)
            
        }
   
    
   
}

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) {
      delta /= 2;
    }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function () {
      that.tick();
    }, delta);
  };



window.onload = function(){
 requestAnimationFrame(update)

 var elements = document.getElementsByClassName("txt-rotate");
 for (var i = 0; i < elements.length; i++) {
   var toRotate = elements[i].getAttribute("data-rotate");
   var period = elements[i].getAttribute("data-period");
   if (toRotate) {
     new TxtRotate(elements[i], JSON.parse(toRotate), period);
   }
 }
 // INJECT CSS
 var css = document.createElement("style");
 css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #101010 }";
 document.body.appendChild(css);

var h = 0
document.querySelector('.burger').addEventListener('click', function() {
    
    
    document.querySelector('#menuBurgerDesktop').style.zIndex = "2"
    this.classList.toggle('open');
    document.querySelector('#burgerSectionGauche').classList.toggle('open');
    document.querySelector('#burgerSectionDroite').classList.toggle('open');

    var unit = document.querySelectorAll(".unit")
    unit.forEach(element => {
        element.classList.toggle('apparition');
    });
    
    if(h%2 == 0 && window.innerWidth >= 990){
      //window.onwheel = null
      document.querySelectorAll(".ligne").forEach(element => {
          element.style.backgroundColor = "white"
      });
      document.querySelector("body").style.overflow="hidden"
  }else if(h%2 == 0 && window.innerWidth <= 991){
      document.querySelectorAll(".ligne").forEach(element => {
          element.style.backgroundColor = "black"
      });

      document.querySelector("body").style.overflow="hidden"
  
    }else{
        setTimeout(() => {
            document.querySelector('#menuBurgerDesktop').style.zIndex = "-1"
            document.querySelectorAll(".ligne").forEach(element => {
                element.style.backgroundColor = "black"
            });
        }, 1000);
        document.querySelector("body").style.overflow=""
       
    }

    h++	
})

var lienReseau = document.querySelectorAll(".lienReseau")

lienReseau.forEach(element => {

element.onmousemove = function(e){
    var left = e.movementX*5
    var top = e.movementY*5
    element.children[0].style.transform = "translate3d("+left+"px,"+top+"px,0)"
    
}

element.onmouseout = function(){
    element.children[0].style.transform = "matrix(1,0,0,1,0,0)"
}
});

}

var liensBurger = document.querySelectorAll(".lienBurger")
var divId = document.querySelectorAll(".divIdDepart")

function envoyageDiv(argument){
	argument.forEach(element => {
		element.onclick = function(){
			
			
			for(var i = 0; i < divId.length; i++){
				divId[i].classList.toggle("divChargementDepart"+i)
				
			}
		
			setTimeout(() => {
				window.location.href="./"+this.textContent.toLowerCase()+".html"
			}, 900);
		}
	});
	
}


envoyageDiv(liensBurger)

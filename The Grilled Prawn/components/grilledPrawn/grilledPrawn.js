            var acc = document.getElementById("filterReciepeAccordion");
           
              acc.addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = document.getElementsByClassName("panel");
                if (panel[0].style.maxHeight){
                  panel[0].style.maxHeight = null;
                } else {
                  panel[0].style.maxHeight = panel[0].scrollHeight + "px";
                } 
              });
                                                  acc.click();
           
            function scrolltop(){
                window.scrollTo(0, 0);
            };
            
            var modal = document.querySelector(".modal");
            var trigger = document.querySelector(".trigger");
            var closeButton = document.querySelector(".close-button");
        
            function toggleModal() {
                modal.classList.toggle("show-modal");
            }
        
            function windowOnClick(event) {
                if (event.target === modal) {
                    toggleModal();
                }
            }
        
            trigger.addEventListener("click", toggleModal);
            closeButton.addEventListener("click", toggleModal);
            window.addEventListener("click", windowOnClick);

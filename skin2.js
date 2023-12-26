

(function () {
    console.log('tm script loaded')
    'use strict';

    function isElementVisible(element) {
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }
    

    resetTracker = function(){
        document.clicks = 0;
        document.totalDistance = 0;
    }

    function relocateElementBySelector(elementSelector, destSelector) {
        let element = document.querySelector(elementSelector);
        let elementParent = element.parentElement;
        let destElement = document.querySelector(destSelector);
        // elementParent.removeChild(element);
        destElement.appendChild(element);
      }

    // Poll until the target element is found
    var pollInterval = setInterval(function () {

        var targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div.stack.stack--vertical.stack--fullHeight.stack--gapNone")
        if (targetElement) {
            clearInterval(pollInterval);
            document.clicks = 0;
            
            $('body').on('click', function(event){
              document.clicks++
            });

            document.totalDistance = 0;
            var lastSeenAt = {x: null, y: null};
            
            $(document).mousemove(function(event) {
                if(lastSeenAt.x) {
                    document.totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2));
                }
                lastSeenAt.x = event.clientX;
                lastSeenAt.y = event.clientY;
            });

            // jQuery("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div.stack.stack--vertical.stack--fullHeight.stack--gapNone").hide();            
            //ruleEngineLogic()
            // $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div.collapsibleMenu > div:nth-child(1) > div > div.subMenu__item__title").text("Data");
            // $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div.collapsibleMenu > div:nth-child(3) > div > div.subMenu__item__title").text("Prompts")
            
        }
    }, 500); // Poll every 500 milliseconds
    


})();
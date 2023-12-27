(function () {
    console.log('tm script loaded')
    'use strict';



    function isElementVisible(element) {
        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden';
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

        var prompt_pinned = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.promptPanel > div > div.promptPanel__return > h2'
        var data_selected = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--hasIcon.ds-tab--horizontal'
        var labeled_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)'
        var unlabeled_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(3)'
        var generated_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(1)'
        var stash = '#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(4)'
        var data_tab = '#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(3)'
        var generated_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button:nth-child(2)'
        var stash_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal'
        var run_cta = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.promptPanel > div > div.promptContent > button'
        var run_spinner = '.spinner'
        var similarity_to_stash = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div > button'
        var filters_parent = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills'


        var targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal")
        
        if (targetElement) {
            clearInterval(pollInterval);

            // try{
            //     $(".hierarchicalIntent").each(function(index){
            //         $(this).click(function(){
            //             $(this).off('click');
            //             $(".showIntentDataCTA", this).click();
            //             if (dataSelected.textContent !== 'Labels') {
            //                 $(".pinIntentCTA", this).click();
            //             }
            //         });
            //     });
            // }catch(exception){}   

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

            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div").css({
                "background-color":"#fff"
            });
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.separator.separator--noText").hide();
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2)").css({
                "margin-top":"-50px"
            });
            $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body").css({
                "margin-top":"-2px"
            });

            var css = ".utteranceCell .utteranceCell__inner { white-space: normal }"; // Replace with your desired inline CSS
            var styleElement = document.createElement("style");
            styleElement.innerHTML = css;
            document.head.appendChild(styleElement);

            var buttonStash = document.createElement('button');
            buttonStash.className = 'DS-button DS-button--small';
            buttonStash.style.position = "relative";
            buttonStash.style.height = "30px";
            buttonStash.style.top = "8px";
            buttonStash.style.height = "30px";

            var divTextStash = document.createElement('div');
            divTextStash.className = 'genericPredicatePill__text__visible';

            var spanStash = document.createElement('span');
            spanStash.innerText = 'Stash';

            divTextStash.appendChild(spanStash);
            buttonStash.appendChild(divTextStash);

            var parentElementStash = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal');
            parentElementStash.insertBefore(buttonStash, parentElementStash.firstChild);
            //$(parentElementStash).append(buttonStash);
        
            
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div > div.stack.stack--horizontal.stack--fullWidth.stack--gapLarge.stack--horizontalPadSmall").hide();
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div > div.stack.stack--horizontal.stack--fullHeight.stack--gapSmall.stack--verticalPadSmall").css({"bottom":"3px"});
            
            // $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header").hide();
            // $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1)").css({"margin-top":"-46px"})
            $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stack.stack--horizontal.stack--gapSmall.stack--verticalPadSmall.stashCTA").css({"margin-left":"15px"});
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div > div:nth-child(3)").css({"position":"fixed", "top":"10px", "right": "5px"})

            // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal").text("Generated");

            /*
            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stack.stack--horizontal.stack--gapSmall.stack--verticalPadSmall.stashCTA').innerHTML += '<button class="DS-button DS-button--secondary DS-button--x-small">Apply to new prompt</button>';
            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stack.stack--horizontal.stack--gapSmall.stack--verticalPadSmall.stashCTA').innerHTML += '<button class="DS-button DS-button--secondary DS-button--x-small">Save to new label</button>';
            */
           $(buttonStash).css({"margin-bottom":"3px", "margin-right":"10px", "margin-left":"5px"});
          
           var status = "data";

            $(buttonStash).click(function () {
                
                if(status == "data"){
                    
                    showStash();
                    status = "stash";
                }
                else{
                    
                    showData();
                    status = "data";
                }
            });


            // click on the stash expand button
            document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__toggleButton > button").click();
            document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__list").style.height = "500px";


            // Listen for changes in the raw value
            const valueElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");

            // Assign value to {num} variable
            let num = valueElement.textContent;

            // Update the button text
            $(buttonStash).text(`Stash (${num})`);


            // Get the target element
            const targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");

            // Function to handle changes in innerHTML
            const handleInnerHTMLChange = () => {
                // Do something when the innerHTML changes
                console.log("InnerHTML has changed:", targetElement.innerHTML);
                if(`${targetElement.innerHTML}` === "0"){
                }
                else{
                }
                try{
                    $(buttonStash).text(`Stash (${targetElement.innerHTML})`)
                    $(buttonData).text(`Stash (${targetElement.innerHTML})`)
                }catch(exception){}
            };

            const handleSimilarityChange = () => {
                // Do something when the innerHTML changes
                var button = document.querySelector(similarity_to_stash);
                if(button){
                    buttonElement.style.display = '';
                    button.style.display = 'none'
                    buttonElement.addEventListener('click', function(){
                        button.click();
                    });
                }
                else{
                    buttonElement.style.display = 'none';
                }
            };

            // Create a MutationObserver instance
            const observer = new MutationObserver(handleInnerHTMLChange);
            const observer2 = new MutationObserver(handleSimilarityChange);

            // Configure the observer to monitor innerHTML changes
            const observerConfig = {
                childList: true,
                subtree: true,
                characterData: true,
                characterDataOldValue: true
            };

            // Start observing the target element for changes
            observer.observe(targetElement, observerConfig);
            
            var _realSimilarity = document.querySelector(similarity_to_stash);

            var similarityParent = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div');
            observer2.observe(similarityParent, observerConfig);
            
            var similarity_to_stash_button = '<button class="DS-button DS-button--secondary DS-button--small DS-button--hasIcon"><span class="DS-button__icon"><svg viewBox="0 0 16 16"><path d="M6 11H11V6H13C13.5523 6 14 6.44771 14 7V13C14 13.5523 13.5523 14 13 14H7C6.44772 14 6 13.5523 6 13V11Z"></path><path d="M10 5H5L5 10H3C2.44772 10 2 9.55229 2 9L2 3C2 2.44772 2.44771 2 3 2L9 2C9.55228 2 10 2.44772 10 3V5Z"></path><path d="M7 6C6.44772 6 6 6.44772 6 7V9C6 9.55228 6.44771 10 7 10H9C9.55228 10 10 9.55229 10 9L10 7C10 6.44772 9.55228 6 9 6H7Z"></path></svg></span>Stash</button>'
            const buttonElement = document.createElement('button');
            
            buttonElement.className = 'DS-button DS-button--secondary DS-button--small DS-button--hasIcon';
            
            const spanElement = document.createElement('span');
            spanElement.className = 'DS-button__icon';
            
            const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('viewBox', '0 0 16 16');
            
            const pathElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement1.setAttribute('d', 'M6 11H11V6H13C13.5523 6 14 6.44771 14 7V13C14 13.5523 13.5523 14 13 14H7C6.44772 14 6 13.5523 6 13V11Z');
            
            const pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement2.setAttribute('d', 'M10 5H5L5 10H3C2.44772 10 2 9.55229 2 9L2 3C2 2.44772 2.44771 2 3 2L9 2C9.55228 2 10 2.44772 10 3V5Z');
            
            const pathElement3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathElement3.setAttribute('d', 'M7 6C6.44772 6 6 6.44772 6 7V9C6 9.55228 6.44771 10 7 10H9C9.55228 10 10 9.55229 10 9L10 7C10 6.44772 9.55228 6 9 6H7Z');
            
            svgElement.appendChild(pathElement1);
            svgElement.appendChild(pathElement2);
            svgElement.appendChild(pathElement3);
            
            spanElement.appendChild(svgElement);
            
            buttonElement.appendChild(spanElement);
            buttonElement.appendChild(document.createTextNode('Stash'));
            buttonElement.style.display = "none"

            var filtersParent = document.querySelector(filters_parent);
            try{
                filtersParent.appendChild(buttonElement);
            }catch(exception){}

            var _data_tab = document.querySelector(data_tab);

            var left_panel = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1)'
            
            // document.querySelector(left_panel).addEventListener('click', function (event) {
            //     // Call the rule engine when a click event is triggered within the main menu or its child elements
            //     setTimeout(function(){ruleEngineLogic();}, 100)
            // });

            var dataFilters = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters");
            var dataPredicates = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container");
            var dataList = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__mainListWrapper");
            var dataContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper";
            
            var stashItems = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top");
            var stashBody = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body");
            var stashContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top";

            function showStash(){
               dataFilters.hide();
               dataPredicates.hide();
               dataList.hide();
               stashItems.show();
               stashBody.show();
               $(dataContainer).insertBefore(stashContainer);
               status = "stash";
               $(buttonStash).removeClass('DS-button--secondary');

               $(buttonStash).css({
                "border": "1px solid #eeb9de",
                "background":"#f4d6e9",
                "color": "#000",
                "box-shadow":"none"
               })
            }

            function showData(){
                dataFilters.show();
                dataPredicates.show();
                dataList.show();
                stashItems.hide();
                stashBody.hide();
                $(stashContainer).insertBefore(dataContainer);
                status = "data";
                $(buttonStash).addClass('DS-button--secondary');
                $(buttonStash).css({
                    "border": "1px solid #bac0de",
                    "background":"#fff",
                    "color": "#3f5597"
                })
            }

            $(".stash .ds-tab").click(function(){
                showStash();
            });
            $(".utteranceContainer__filterWrapper .ds-tab").click(function(){
                showData();
            });

            showData();

            function ruleEngineLogic() {

                setTimeout(function () {

                    const promptPinnedElement = document.querySelector(prompt_pinned);

                    var dataSelected = document.querySelector(data_selected);
                    var _generated_data = document.querySelector(generated_data)
                    var _unlabeled = document.querySelector(unlabeled_data);
                    var _labeled = document.querySelector(labeled_data);
                    var _stash = document.querySelector(stash)
                    var _run_spinner = document.querySelector(run_spinner)


                    
                    $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").hide();
                    $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").insertBefore("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__mainListWrapper");


                    try {
                        document.querySelector(run_cta).addEventListener('click', function (event) {
                            // Call the rule engine when a click event is triggered within the main menu or its child elements
                            _generated_data.click();
                        });
                    } catch (exception) { }

                    try {
                        var elementToDelete = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__toggleButton");

                        // Check if the element exists before deleting it
                        if (elementToDelete) {
                            // Remove the element from its parent node
                            elementToDelete.parentNode.removeChild(elementToDelete);
                        }
                    } catch (exception) { }

                    if (dataSelected.textContent === 'Labels') {

                    }

                    else {

                        
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.genericPredicatePill.explorePredicateImplicitIntentMatch__pill > div.genericPredicatePill__closeCTA").click();
                        
                        if (promptPinnedElement && !_run_spinner) {

                            if (_stash) {
                                // _stash.click();
                            }

                        }

                        else {

                        }

                        if(!promptPinnedElement){
                            try{
                                // $('#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.buttonGroup.nlgFilter.nlgFilter--active > div > button').click();
                            }catch(exception){}
                        }

                    }

                }, 100);

            }

            ruleEngineLogic()

            //document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)").textContent = "Data";
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)").get(0).lastChild.nodeValue = "Labels";

        }
    }, 500); // Poll every 500 milliseconds

    // Poll until the target element is found
    var pollInterval2 = setInterval(function () {
        var targetElement = document.querySelector("#floatingPanelMountPoint > div.floatingSidebar.floatingSidebar--alignRight.floatingSidebar--isOpen");
        if (targetElement) {
            clearInterval(pollInterval2);
            //modifyElement();

        }
    }, 500); // Poll every 500 milliseconds
})();
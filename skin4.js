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
        var generated_data = '#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)'
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

            document.stats = function(){
                console.log(document.clicks);
                console.log(document.totalDistance);
            };

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
            //buttonStash.className = 'ds-tab ds-tab--horizontal stash'
            buttonStash.style.position = "relative";
            buttonStash.style.height = "30px";
            buttonStash.style.top = "8px";
            buttonStash.style.height = "30px";
            buttonStash.style.marginRight = "10px";

            var divTextStash = document.createElement('div');
            divTextStash.className = 'genericPredicatePill__text__visible';

            var spanStash = document.createElement('span');
            spanStash.innerText = 'Stash';

            divTextStash.appendChild(spanStash);
            buttonStash.appendChild(divTextStash);

            var parentElementStash = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal');
            parentElementStash.insertBefore(buttonStash, parentElementStash.firstChild);
            //$(parentElementStash).append(buttonStash);
        
            $(".ds-tabs--horizontal").css({
                "height":"43px"
            });
            
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

           // $(buttonStash).css({"margin-bottom":"3px", "margin-right":"10px", "margin-left":"5px"});
          
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
                if(`${targetElement.innerHTML}` === "0"){
                }
                else{
                }
                try{
                    $(buttonStash).text(`Stash (${targetElement.innerHTML})`)
                    $(buttonData).text(`Stash (${targetElement.innerHTML})`)
                }catch(exception){}
            };



            const handleLeftPanelChange = () => {
                console.log("changed");
                // Do something when the innerHTML changes
                setTimeout(function(){ruleEngineLogic();}, 100);
            };

            // Create a MutationObserver instance
            const observer = new MutationObserver(handleInnerHTMLChange);
            const observer3 = new MutationObserver(handleLeftPanelChange);

            // Configure the observer to monitor innerHTML changes
            const observerConfig = {
                childList: true,
                subtree: true,
                characterData: true,
                characterDataOldValue: true
            };

            // Start observing the target element for changes
            observer.observe(targetElement, observerConfig);
            
            var leftPanel = $("#fluid-layout-overlay-portal-0 > div");
            observer3.observe(leftPanel[0], observerConfig);

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

            var selectedTab = null;

            function showStash(){
               dataFilters.hide();
               dataPredicates.hide();
               dataList.hide();
               stashItems.show();
               stashBody.show();
               $(dataContainer).insertBefore(stashContainer);
               status = "stash";
               $(buttonStash).removeClass('DS-button--secondary');
               $(buttonStash).addClass('activated');
               selectedTab = $('.utteranceContainer__filterWrapper .ds-tab--isActive');
               $(selectedTab).removeClass('ds-tab--isActive');

            }

            function showData(){
                dataFilters.show();
                dataPredicates.show();
                dataList.show();
                stashItems.hide();
                stashBody.hide();
                $(stashContainer).insertBefore(dataContainer);
                status = "data";
                $(buttonStash).removeClass('activated');
                try{
                    $(selectedTab).addClass('ds-tab--isActive');
                }catch(exception){}
                
            }

            
            $(".utteranceContainer__filterWrapper .ds-tab").click(function(){
                if($(this).hasClass('stash')){
                    showStash();
                }
                else{
                    showData();
                }
                $(".utteranceContainer__filterWrapper .ds-tab").removeClass('ds-tab--isActive');
                $(this).addClass("ds-tab--isActive");
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

                    
                    //$("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").hide();
                    //$("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").insertBefore("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__mainListWrapper");


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


                    try{
                        $(".hierarchicalIntent").each(function(index){
                            // $(this).unbind("click");
                            $(this).click(function(){
                                $(this).off('click');
                               
                                if (dataSelected.textContent !== 'Labels') {
                                    $(".pinIntentCTA", this).click();
                                        buttonStash.click();

                                }
                                else{
                                    $(".showIntentDataCTA", this).click();
                                }
                            });
                        });
                    }catch(exception){}



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
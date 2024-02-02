(function () {
    console.log('tm script loaded')
    'use strict';

    function getPath($el) {
        var node = $el;
        var path;
        
        while (node.length) {
            var realNode = node.get(0);
            var name = realNode.localName;
        
            // Qualify as much as possible
            if(realNode.id) {
            name += '#' + realNode.id;

            } else if(realNode.className) {
                var classes = realNode.className.split(' ');

                for(var i = 0; i < classes.length; i++ ){
                    name += '.' + classes[i];
                }
            
            }
        
            if(!name) break;
            // name = name.toLowerCase();
        
            // Make the selector unique at all costs
            siblings = node.siblings(name)
            if(siblings.length > 1) {
            var index = node.index() + 1;
            if(index > 1) {
                name += ':nth-child(' + index + ')';
            }
            }
        
            path = name + (path ? '>' + path : '');
            node = node.parent();
        }
        
        return path;
        }
      

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
        var labeled_data = '#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(3)'
        var unlabeled_data = '#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(4)'
        var generated_data = '#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)'
        var stash = '#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.DS-button.DS-button--small'
        var data_tab = '#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(3)'
        var generated_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button:nth-child(2)'
        var stash_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal'
        var run_cta = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.promptPanel > div > div.promptContent > button'
        var run_spinner = '.spinner'
        var similarity_to_stash = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div > button'
        var filters_parent = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills'

        var targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal")
        
        var cancelRefresh = false;

        if (targetElement) {
            clearInterval(pollInterval);

            const root = document.querySelector('#reactApp');

 

            // root.addEventListener('mousedown', (e) => {
            //     //if (e.target.tagName === 'BUTTON' && e.target.className === 'my-button') {
            //     console.log(e);  
            //     e.stopPropagation()
            //     e.nativeEvent.stopImmediatePropagation()
            //       //location.href = 'http://stackoverflow.com'
            //     //}
            //   })


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

            $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body").css({
                "margin-top":"-2px"
            });

            // $(generated_data).append($("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > div > div"));


            //////////////

            var css = ".utteranceCell .utteranceCell__inner { white-space: normal }"; // Replace with your desired inline CSS
            var styleElement = document.createElement("style");
            styleElement.innerHTML = css;
            document.head.appendChild(styleElement);

            var buttonStash = document.createElement('button');
            buttonStash.className = 'DS-button DS-button--small DS-button__tercery';
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
            var buttonStash2 = document.createElement('button');

            // ghost element to save the order -> hack 
            parentElementStash.insertBefore(buttonStash2, parentElementStash.firstChild);
            $(buttonStash2).css({"display":"none"});

            // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.ds-tab.ds-tab--horizontal.ds-tab--isActive").text("Logs")
            
            var buttonNewGen = document.createElement('button');
            buttonNewGen.className = 'DS-button DS-button--small newRun';
            // buttonNewGen.className = 'ds-tab ds-tab--horizontal';
            buttonNewGen.id = 'new_run';
            buttonNewGen.style.position = "relative";
            buttonNewGen.style.height = "25px";
            // buttonNewGen.style.top = "8px";
            buttonNewGen.style.marginRight = "10px";
            buttonNewGen.style.marginLeft = "10px";
            buttonNewGen.style.top = "-13px";


            buttonNewGen.textContent = "New Run";
            // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal").append(buttonNewGen);
            setTimeout(function(){
                $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills").append(buttonNewGen);
            },10)
            
            $(buttonNewGen).click(function(){
                
                $(".runPrompt, .promptRunMode").each(function(){
                    $(this).addClass('active');
                });
                $(buttonStash).click();
                setTimeout(function(){
                    $('#applyToPrompt').hide();
                },200)
                
            });

            var parentElementStash = $("#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal");
            $(parentElementStash).append(buttonStash);
            $(buttonStash).css(
                {
                    "position":"absolute",
                    "right":"0px"
                }
            )

            var buttonApplyToPrompt = document.createElement('button');
            buttonApplyToPrompt.textContent = "Apply to prompt"
            buttonApplyToPrompt.id = 'applyToPrompt'
            buttonApplyToPrompt.className = 'blue DS-button DS-button--x-small';
            var parentElement = $(".stack.stashCTA");
            $(parentElement).append(buttonApplyToPrompt);

            $(buttonApplyToPrompt).click(function(){
                
                $('#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(1)').click();
                
                $(".runPrompt, .promptRunMode").each(function(){
                    $(this).addClass('active');
                });
                // $(this).addClass('hidden');
                // $(buttonStash).click();
                
            });

            var buttonSelectData = document.createElement('button');
            buttonSelectData.textContent = "Select data"
            buttonSelectData.id = 'selectData'
            buttonSelectData.className = 'blue DS-button DS-button--x-small DS-button--secondary';
            //var parentElement = $(".stack.stashCTA");
            var parentElement = $('#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__manualInput > fieldset > div');
            $(buttonSelectData).insertBefore($('.stash__manualInput .textInput__input'), $(parentElement));
            
            $('.textInput__input', $(parentElement)).attr('placeholder', '... or copy/paste text here');

            $(buttonSelectData).click(function(){
                $('#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)').click();
            });

            var buttonSaveData = document.createElement('button');
            buttonSaveData.textContent = "Save data"
            buttonSaveData.id = 'saveData'
            buttonSaveData.className = 'blue DS-button DS-button--x-small DS-button--secondary';
            var parentElement = $(".stack.stashCTA");
            $(parentElement).append(buttonSaveData);

            // $(buttonSaveData).click(function(){
            //     $('#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)').click();
            // });

            //////////

            var addNewPromptTab = function(promptName, onClick){

                promptName = promptName.replace(' ','_');
                var tab = $("#" + promptName);

                if(tab.length == 0){

                    tab = document.createElement('button');
                    tab.className = 'ds-tab ds-tab--isActive ds-tab--horizontal prompts';
                    tab.id = promptName;

                    var container = $('#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal.depth');
                    $('.ds-tab--isActive', container).removeClass('ds-tab--isActive');

                    $(container).append(tab);

                    //var clone = $('.nlgFilter').clone(true,true);
                    var elem = $('<div class="genericPredicatePill explorePredicateImplicitIntentMatch__pill" data-primary="false" data-disabled="false" data-secondary="false"><div class="genericPredicatePill__text" aria-expanded="false"><div class="genericPredicatePill__text__visible"><span class="genericPredicatePill__predicateName">Data labeled in: </span><strong class="genericPredicatePill__predicateValue">synonym2</strong></div></div><div class="genericPredicatePill__closeCTA"><div class="playbookIcon " data-size="xxs" data-disabled="false" data-animated="false" data-icon-type="close" data-theme="secondary"><svg viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></div></div></div>');

                    $('.genericPredicatePill__predicateName', elem).text('');
                    $('.genericPredicatePill__predicateValue', elem).text(promptName);

                    $(tab).append(elem);

                    $(tab).click(function(){
                        cancelRefresh = true;
                        $('.ds-tab--isActive', container).removeClass('ds-tab--isActive');
                        $(this).addClass('ds-tab--isActive');
                        
                        lastActivatedTab['Prompts'] = $(tab);
                        onClick();

                    });

                }

                else{
                    $(tab).click();
                }

                lastActivatedTab['Prompts'] = tab;

            }

        
            $(".ds-tabs--horizontal").css({
                "height":"43px"
            });
            
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div > div.stack.stack--horizontal.stack--fullWidth.stack--gapLarge.stack--horizontalPadSmall").hide();
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > header > div.page__subheader > div > div > div.stack.stack--horizontal.stack--fullHeight.stack--gapSmall.stack--verticalPadSmall").css({"bottom":"3px"});
            
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

            // Listen for changes in the raw value
            const valueElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");

            // Assign value to {num} variable
            let num = valueElement.textContent;

            // Update the button text
            $(buttonStash).text(`Stash / Run (${num})`);

            var activatedTab = null;
            var lastActivatedTab = {
                "Data" : $(labeled_data),
                "Prompts" : $(generated_data)
            }

            /* 
                listen for changes to prompt/data tabs
            */
            $(".objectColumnContainer > .ds-tabs > .ds-tab").click(function(){
                var tab = $(data_selected).text();
                
                var selected = $('.utteranceContainer__filterWrapper .ds-tab--isActive');
                if(selected.length == 0){
                    selected = buttonStash
                }

                lastActivatedTab[tab] = selected;

                //var c = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills";
                //var filter = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills > div.ds-tab.ds-tab--isActive.ds-tab--horizontal > div"
                //$(c).append($(filter));
                //$("#prompt_tab").remove();
                console.log("successfully removed");

            });

            const handleLeftPanelChange = () => {
                
                
                if(!cancelRefresh){
                    console.log('refreshed');
                    cancelRefresh = true;
                    // Do something when the innerHTML changes
                    setTimeout(function(){
                        $(".objectColumn__create").remove();
                        ruleEngineLogic();
                    }, 150);

                    setTimeout(function(){
                        cancelRefresh = false;
                    }, 350);
                }
                else{
                    console.log("blocked refresh")
                }
            };


            // Create a MutationObserver instance
            const observer3 = new MutationObserver(handleLeftPanelChange);

            // Configure the observer to monitor innerHTML changes
            const observerConfig = {
                childList: true,
                subtree: true,
                characterData: true,
                characterDataOldValue: true,
                attributes: true,
                attributeFilter: ["style"]
            };

            
            var leftPanel = $("#fluid-layout-overlay-portal-0 > div");
            // observer3.observe(leftPanel[0], observerConfig);

            var _data_tab = document.querySelector(data_tab);
            var left_panel = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1)'
            
            
            var dataFilters = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters");
            var dataPredicates = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container");
            var dataList = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__mainListWrapper");
            var dataContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper";
            
            var stashItems = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top");
            var stashBody = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body");
            var stashContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top";

            var selectedTab = null;

            function showStash(){
               // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal").hide();
               
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
               // $(selectedTab).removeClass('ds-tab--isActive');

               $('.utteranceContainer__filterWrapper .ds-tab').addClass('muted');

               $(".runPrompt, .promptRunMode").each(function(){
                    $(this).addClass('active');
               });

               // $(buttonNewGen).show();
               $(buttonApplyToPrompt).show();

            }

            function showData(){
                $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal").show();
                
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
                $('.utteranceContainer__filterWrapper .ds-tab').removeClass('muted');

                // $(buttonNewGen).hide();

                // $(".runPrompt, .promptRunMode").each(function(){
                //     $(this).removeClass('active');
                // })

            }

            $(".utteranceContainer__filterWrapper .ds-tab").click(function(){
                if($(this).hasClass('stash')){
                    showStash();
                }
                else if(!($(this).attr('id') == 'new_run')){
                    showData();
                }
                $(".utteranceContainer__filterWrapper .ds-tab").removeClass('ds-tab--isActive');
                $(this).addClass("ds-tab--isActive");
            });

            // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div").append($("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.controllerPredicatePill"));
            $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div > fieldset:nth-child(4)").hide();
            $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills > div.controllerPredicatePill").hide();

            $(".filters").addClass("ds-tabs ds-tabs--horizontal");

            showData();


            var stashListener = function(){
                // Get the target element
                var stashContainer = $('.stash');
                
                // Function to handle changes in innerHTML
                var handleInnerHTMLChange = () => {
                    var targetElement = $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");
                    // Do something when the innerHTML changes
                    if(`${targetElement[0].innerHTML}` === "0"){
                    }
                    else{
                    }
                    try{
                        $(buttonStash).text(`Stash (${targetElement[0].innerHTML})`)
                        $(buttonData).text(`Stash (${targetElement[0].innerHTML})`)
                    }catch(exception){}
                };
                var observer = new MutationObserver(handleInnerHTMLChange);
                // Start observing the target element for changes
                observer.observe(stashContainer[0], observerConfig);
            }
            stashListener();

            document.selectedItems = [];
            mainStatus = null;
            boundPrompts = false;
            var pollInterval3;

            function ruleEngineLogic() {

                var findElement = function(input){
                    var element = input[0];
                    var interval = input[1];
                    if($(element).length > 0){
                        var t = eval('interval' + interval);
                        eval('clearInterval(' + t + ')');
                        $(element).on('mouseup', function(){
                            ruleEngineLogic();
                        });
                    }
                }

                try{
                    clearInterval(interval1);
                }catch(exception){}
                var interval1 = setInterval(findElement, 200, ['#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal', 1]);
                try{
                    clearInterval(interval2);
                }catch(exception){}
                //var interval2 = setInterval(findElement, 200, ['.virtualList__row', 2]);
                try{
                    clearInterval(interval3);
                }catch(exception){}
                var interval3 = setInterval(findElement, 200, ['#new_run', 3]);
                try{
                    clearInterval(interval4);
                }catch(exception){}
                var interval4 = setInterval(findElement, 200, ['.promptPanel__return', 4]);
               
                // var interval5 = setInterval(findElement, 200, '#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal', interval5);


                // $('#fluid-layout-overlay-portal-0 > div > div.ds-tabs.ds-tabs--horizontal').on('mouseup',function(){
                //     applyRuleEngine();
                // });
                // $('.virtualList__row').on('mouseup',function(){
                //     applyRuleEngine();
                // });
                // $('#new_run').on('mouseup',function(){
                //     applyRuleEngine();
                // });
                // $('.promptPanel__return').on('mouseup',function(){
                //     applyRuleEngine();
                // });

                //t = setInterval(foo, 1000, 'hello');

                //setTimeout(function () {
                    

                    $('.promptPanel__return .DS_iconButton, .intentPanel__return .DS_iconButton').addClass('fluidLayout__handles__left prompt');

                    const promptPinnedElement = document.querySelector(prompt_pinned);

                    var dataSelected = $(data_selected);
                    var _generated_data = $(generated_data)
                    var _stash = $(stash)
                    var _run_spinner = $(run_spinner)

                    $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills > div.controllerPredicatePill").hide();
                    // $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills > div.genericPredicatePill").hide();

                    try {
                        $(run_cta).unbind('click');
                        document.querySelector(run_cta).addEventListener('click', function (event) {
                            // Call the rule engine when a click event is triggered within the main menu or its child elements
                            _generated_data.click();
                            setTimeout(function(){
                                $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills > div.buttonGroup.nlgFilter.nlgFilter--active > button.DS_iconButton.nlgFilter__decrement").click();
                            });
                        });
                    } catch (exception) {}

                    var mainTab = dataSelected.text();

                    //if(!boundPrompts){
                    
                    //var pollInterval4 = setInterval(function () {
                        var targetElement = document.querySelector("#fluid-layout-overlay-portal-0 > div > div.stack.stack--vertical.stack--fullWidth.stack--gapMedium.objectColumn > div.objects__list > div.intentHierarchicalList > div > div > div");
                        if (targetElement) {
                            //var t = eval('pollInterval4');
                            //eval('clearInterval(' + t + ')');
                            //clearInterval(pollInterval4);

                            try{
                            
                                $("#fluid-layout-overlay-portal-0 > div > div.stack.stack--vertical.stack--fullWidth.stack--gapMedium.objectColumn > div.objects__list > div.intentHierarchicalList > div > div > div").each(function(){
                                $(".hierarchicalIntent").each(function(index){
    
                                    $(this).unbind("click");
    
                                    $(this).on('mouseup',function(){
    
                                        $(this).off('click');
                                    
                                        if (mainTab !== 'Data') {
    
                                            var _a = getPath($(".showIntentDataCTA", this));
                                            var _b = getPath($(".pinIntentCTA", this));


                                            $(".showIntentDataCTA", this).click();
                                            $(".pinIntentCTA", this).click();
    
                                            // var _c = getPath($(this));

    
                                            var clonedFunction = function(){
    
                                                //$('.prompt').click();
                                                $('.promptPanel__return .DS_iconButton').click();
                                                
                                                $(_a).click();
                                                $(_b).click();
                                                ruleEngineLogic();
                                                // setTimeout(function(){
                                                //     try{
                                                //         //cancelRefresh = true;
                                                //         $(_a).click();
                                                //         setTimeout(function(){
                                                //             //cancelRefresh = false;
                                                //             $(_b).click();
                                                //         }, 100);
                                                        
    
                                                //     }catch(exception){
                                                //         console.log(exception);
                                                //     }
                                                // }, 300)
                                            }

                                            var pollInterval2 = setInterval(function () {
                                                
                                                
                                                var targetElement = document.querySelector(".promptNameField .textInput__input");
                                                if (targetElement) {
                                                    clearInterval(pollInterval2);
                                                    //modifyElement();
                                                    var promptName = $('.promptNameField .textInput__input').attr('value');
                                                    if(promptName == ''){
                                                        try{
                                                            promptName = $('.genericPredicatePill__predicateValue', $('.utteranceContainer__filterWrapper .ds-tab--isActive')).text();
                                                        }catch(exception){}
                                                    }
                                                    if(promptName == ''){
                                                        promptName = 'empty'
                                                    }
                                                    addNewPromptTab(promptName, clonedFunction, true);
                                                }
                                            }, 100); // Poll every 500 milliseconds
    
                                        }
                                        else{
                                            if($(buttonStash).hasClass('activated')){
                                                $(".pinIntentCTA", this).click();
                                            }
                                            else{
                                                $(".showIntentDataCTA", this).click();
                                            }
                                            
                                        }
                                    });
                                });
                                boundPrompts = true;
                            } catch(exception) {}
                        //}
                    //}, 0); // Poll every 500 milliseconds

                        
                    // }

                    
                    if (mainTab === 'Data') {
                        var tabContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal";
                        $(tabContainer).show();

                        $(generated_data).hide();
                        $(labeled_data).show();
                        $(unlabeled_data).show();

                        var dataFilter = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.genericPredicatePill");
                        dataFilter.removeClass("hidden");

                        $(buttonNewGen).hide();

                        $('.ds-tab.prompts').hide();

                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").addClass('depth');
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal").addClass('depth');

                
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.genericPredicatePill.explorePredicateImplicitIntentMatch__pill.explorePredicateImplicitIntentMatch__pill--notActive").wrap("<div id='data_tab' class='ds-tab ds-tab--isActive ds-tab--horizontal'></div>");
                        $("#data_tab").show();

                        $(buttonApplyToPrompt).show();
                        $(buttonSaveData).hide();
                        $(buttonSelectData).hide();
                        
                    }

                    else {

                        var tabContainer = "#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal";
 
                        $(generated_data).show();
                        $(labeled_data).hide();
                        $(unlabeled_data).hide();
                        var dataFilter = $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills > div.genericPredicatePill");
                        dataFilter.addClass("hidden");

                        $('.ds-tab.prompts').show();

                        // re-add New Run button
                        $(buttonNewGen).show();
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters.ds-tabs.ds-tabs--horizontal > div.predicateWrapper__pills").append(buttonNewGen);

                        // 
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top").addClass('depth');
                        $("#fluid-layout-overlay-portal-1 > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal").addClass('depth');

                        $("#data_tab").hide();

                        try{
                            $(".promptPanel__pinnedObjectPath").addClass('relocate');
                            $("#fluid-layout-overlay-portal-0 > div > div.promptPanel > div > div.promptPanel__return > h2").hide();
                        }catch(exception){}
 
                        $(generated_data).click(function(){
                            $('.nlgFilter__clear').click();
                            try{
                                $('.promptPanel__return .DS_iconButton').click();
                            }catch(exception){}
                        });

                        $(".promptPanel__return").click(function(){
                            // $(generated_data).click();
                        });

                        $(generated_data).text('All prompts');

                        $(buttonApplyToPrompt).hide();
                        $(buttonSaveData).show();
                        $(buttonSelectData).show();
                
                    }

                    var lastTab = lastActivatedTab[mainTab];
                    var _status = status;
                    var currentTab = $('.utteranceContainer__filterWrapper .ds-tab--isActive');

                    var sameParent = null;
                    //var _parent1 = $(lastTab).parent();
                    //var _parent2 = $(currentTab[0]).parent();
                    //sameParent = (_parent1[0] == _parent2[0]);
                    var refocus = (mainStatus != mainTab)

                    if(lastTab && (lastTab != currentTab[0]) && refocus){
                    //if(lastTab && !sameParent){
                    //if(lastTab && (lastTab != currentTab[0])){
                        if(!(lastTab == buttonStash && $(buttonStash).hasClass('activated'))){
                            lastTab.click();
                            lastActivatedTab[mainTab] = null;
                        }
                        else{
                            lastActivatedTab[mainTab] = null;
                        }
                    }

                    if(_status == "stash"){
                        if(!$(buttonStash).hasClass('activated')){
                            $(buttonStash).click();
                        }
                    }

                    mainStatus = mainTab;

                //}, 1000);

            }

            ruleEngineLogic()

            //document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)").textContent = "Data";
            $("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)").get(0).lastChild.nodeValue = "Data";

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
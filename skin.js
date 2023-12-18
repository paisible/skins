(function () {
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

        var targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal")
        if (targetElement) {
            clearInterval(pollInterval);

            var css = ".utteranceCell .utteranceCell__inner { white-space: normal }"; // Replace with your desired inline CSS
            var styleElement = document.createElement("style");
            styleElement.innerHTML = css;
            document.head.appendChild(styleElement);


            var tabs1 = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal');
            var tabs2 = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal');
            tabs1.style.height = "40px";
            tabs2.style.height = "40px";
            var container = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper');
            container.style.paddingTop = "0px";
            var container2 = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2)');
            container2.style.marginTop = "-48px";

            var buttonData = document.createElement('button');
            buttonData.className = 'DS-button DS-button--small';
            buttonData.style.position = "relative";
            buttonData.style.height = "30px";
            buttonData.style.top = "5px";
            buttonData.style.marginRight = "20px";
            buttonData.style.height = "30px";

            var divTextData = document.createElement('div');
            divTextData.className = 'genericPredicatePill__text__visible';

            var spanData = document.createElement('span');
            spanData.innerText = 'Data';

            divTextData.appendChild(spanData);
            buttonData.appendChild(divTextData);

            var parentElementData = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal');
            parentElementData.insertBefore(buttonData, parentElementData.firstChild);


            var buttonStash = document.createElement('button');
            buttonStash.className = 'DS-button DS-button--small';
            buttonStash.style.position = "relative";
            buttonStash.style.height = "30px";
            buttonStash.style.top = "5px";
            buttonStash.style.marginRight = "20px";
            buttonStash.style.height = "30px";

            var divTextStash = document.createElement('div');
            divTextStash.className = 'genericPredicatePill__text__visible';

            var spanStash = document.createElement('span');
            spanStash.innerText = 'Stash (3)';

            divTextStash.appendChild(spanStash);
            buttonStash.appendChild(divTextStash);

            var parentElementStash = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal');
            parentElementStash.insertBefore(buttonStash, parentElementStash.firstChild);
            

            /*
            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stack.stack--horizontal.stack--gapSmall.stack--verticalPadSmall.stashCTA').innerHTML += '<button class="DS-button DS-button--secondary DS-button--x-small">Apply to new prompt</button>';
            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stack.stack--horizontal.stack--gapSmall.stack--verticalPadSmall.stashCTA').innerHTML += '<button class="DS-button DS-button--secondary DS-button--x-small">Save to new label</button>';
            */
           
            // set the click events
            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.DS-button.DS-button--small').addEventListener('click', function () {
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top').style.display = 'none';
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper').style.display = '';
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__mainListWrapper').style.display = '';
            });

            document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.DS-button.DS-button--small').addEventListener('click', function () {
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper').style.display = 'none';
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__mainListWrapper').style.display = 'none';
                document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top').style.display = '';
            });


            // Get the button element
            const button = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.DS-button.DS-button--small');
            // Simulate a click on the button
            button.click();


            // click on the stash expand button
            document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__toggleButton > button").click();
            document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.stash__body > div.stash__list").style.height = "500px";


            // Listen for changes in the raw value
            const valueElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");

            // Assign value to {num} variable
            let num = valueElement.textContent;

            // Update the button text
            const _button = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.DS-button.DS-button--small");
            _button.textContent = `Stash (${num})`;

            // Get the target element
            const targetElement = document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal > span");

            // Function to handle changes in innerHTML
            const handleInnerHTMLChange = () => {
                // Do something when the innerHTML changes
                console.log("InnerHTML has changed:", targetElement.innerHTML);
                _button.textContent = `Stash (${targetElement.innerHTML})`;
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
            

            var prompt_selected = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--hasIcon.ds-tab--horizontal'
            var prompt_pinned = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.promptPanel > div > div.promptPanel__return > h2'
            var data_selected = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--hasIcon.ds-tab--horizontal'
            var data_pinned = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.intentPanel > div > div.intentPanel__return > h2'
            var labeled_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(3)'
            var unlabeled_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(4)'
            var generated_data = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)'
            var stash = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.DS-button.DS-button--small'
            var main_menu = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal'
            var tabs_menu = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal'
            var data_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.DS-button.DS-button--small'
            var generated_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button:nth-child(2)'
            var stash_tab = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__stash.utteranceContainer__stash--top > div > div.ds-tabs.ds-tabs--hideBottomLine.ds-tabs--horizontal > button.ds-tab.ds-tab--isActive.ds-tab--horizontal'
            var run_cta = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.promptPanel > div > div.promptContent > button'
            var run_spinner = '.spinner'
            var similarity_to_stash = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.predicateWrapper__container > div > button'
            var filters_parent = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.filters > div.predicateWrapper__pills'

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
            filtersParent.appendChild(buttonElement);

            var _data_tab = document.querySelector(data_tab);
            var _generated_tab = document.querySelector(generated_tab);
            _generated_tab.style.display = 'none';

            var left_panel = '#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1)'

            document.querySelector(left_panel).addEventListener('click', function (event) {
                // Call the rule engine when a click event is triggered within the main menu or its child elements
                setTimeout(function(){ruleEngineLogic();}, 100)
                
            });

            function ruleEngineLogic() {

                setTimeout(function () {

                    const promptPinnedElement = document.querySelector(prompt_pinned);

                    var dataSelected = document.querySelector(data_selected);
                    var _generated_data = document.querySelector(generated_data)
                    var _unlabeled = document.querySelector(unlabeled_data);
                    var _labeled = document.querySelector(labeled_data);
                    var _stash = document.querySelector(stash)
                    var _stash_tab = document.querySelector(stash_tab);
                    var _run_spinner = document.querySelector(run_spinner)

                    try {
                        document.querySelector(run_cta).addEventListener('click', function (event) {
                            // Call the rule engine when a click event is triggered within the main menu or its child elements
                            _data_tab.click();
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

                    if (dataSelected.textContent === 'Data') {

                        _generated_data.style.display = 'none'
                        _unlabeled.style.display = ''
                        _labeled.style.display = ''

                        _data_tab.click();
                        _unlabeled.click();

                        /*
                        if(!isElementVisible(_stash_tab)){
                          _data_tab.click();
                          _unlabeled.click();
                        }
                        else{
                            _stash.click();
                        }*/

                        _data_tab.textContent = 'Data'

                    }

                    else {
                        _generated_data.style.display = '';
                        _generated_tab.style.display = '';
                        _unlabeled.style.display = 'none'
                        _labeled.style.display = 'none'
                        _generated_data.click();
                        //if(isElementVisible(_stash_tab)){
                        //  _stash.click();
                        //}
                        _data_tab.textContent = 'Generated'


                        
                        if (promptPinnedElement && !_run_spinner) {
                            // Trigger a click on the stash
                            //const stashElement = document.querySelector('#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(2) > div > div > div > div > div.utteranceContainer__filterWrapper > div > div.stack.stack--horizontal.stack--fullHeight.stack--fullWidth.stack--gapSmall > div.ds-tabs.ds-tabs--horizontal > button.DS-button.DS-button--small');


                            if (_stash) {
                                _stash.click();
                            }


                            _generated_data.style.display = '';
                            //_unlabeled.style.display = 'none';
                            //_labeled.style.display = 'none';
                            _generated_tab.style.display = '';

                        }
                        else {
                            _data_tab.click();
                            _generated_data.click();
                        }


                    }

                }, 100);

            }

            ruleEngineLogic()

            document.querySelector("#shouldBeInertIfModalIsOpen > div.page.page--fixedHeight > main > section > div > div > div > div:nth-child(1) > div.fluidLayout__content > div > div.ds-tabs.ds-tabs--horizontal > button:nth-child(2)").textContent = "Data";

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
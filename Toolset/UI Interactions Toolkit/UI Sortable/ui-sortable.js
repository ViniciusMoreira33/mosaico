/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load the Sortable.js script
    var sortableScript = document.createElement('script');
    sortableScript.src = 'https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js';
    sortableScript.onload = initializeSortable;

    document.head.appendChild(sortableScript);

    function initializeSortable() {
        var uiSortableElements = document.querySelectorAll('[data-identifier="ui-sortable"]');

        uiSortableElements.forEach(function(uiSortableElement) {
            // Fetch values from attributes or use defaults
            let ghostColor = uiSortableElement.getAttribute('data-sortable-ghost-color') || "#696969";
            let selectedColor = uiSortableElement.getAttribute('data-sortable-selected-color') || "#cacaca";
            let swapEnabled = uiSortableElement.getAttribute('data-sortable-swap') === 'true' || false;
            let swapMax = parseInt(uiSortableElement.getAttribute('data-sortable-swap-max') || "0");

            // Create styles for ghostClass, selectedClass, and dragClass
            var styleSheet = document.createElement('style');
            styleSheet.type = 'text/css';
            styleSheet.innerHTML = `
                .ghost-class {
                    background-color: ${ghostColor} !important;
                }

                .selected {
                    background-color: ${selectedColor} !important;
                }

                .drag-class {
                    background-color: transparent;
                    opacity: 0;
                }
            `;
            document.head.appendChild(styleSheet);

            new Sortable(uiSortableElement, {
                group: {
                    name: uiSortableElement.getAttribute('data-sortable-group-name') || "shared",
                    pull: uiSortableElement.getAttribute('data-sortable-group-pull') === 'true' || true,
                    put: uiSortableElement.getAttribute('data-sortable-group-put') === 'true' || true
                },
                animation: parseInt(uiSortableElement.getAttribute('data-sortable-animation') || "150"),
                ghostClass: 'ghost-class',
                dragClass: 'drag-class',
                selectedClass: 'selected',
                chosenClass: "chosen-class",
                swapThreshold: parseFloat(uiSortableElement.getAttribute('data-sortable-swap-threshold') || "1"),
                sort: uiSortableElement.getAttribute('data-sortable-sort') === 'true' || true,
                multiDrag: uiSortableElement.getAttribute('data-sortable-multi-drag') === 'true' || true,
                fallbackTolerance: parseInt(uiSortableElement.getAttribute('data-sortable-fallback-tolerance') || "3"),
                // Custom event to handle swapping between groups
                onAdd: function(evt) {
                    if (swapEnabled) {
                        let draggedItem = evt.item;
                        let fromList = evt.from;
                        let targetList = evt.to;
                        let targetIndex = evt.newIndex;

                        // Already contains the newly dragged element
                        let targetListCount = targetList.children.length;

                        if (swapMax > 0 && targetListCount > swapMax) {
                            // Identify the item that should be replaced
                            let replacedItem = (targetIndex === targetListCount - 1) ? 
                                targetList.children[targetIndex - 1] : 
                                targetList.children[targetIndex + 1];
                            
                            // Move the replaced item back to the original list
                            fromList.appendChild(replacedItem);
                        }
                    }
                }
            });
        });
    }
});



//This Mosaico element uses Sortable.js (License below)

/*
Copyright (c) 2019 All contributors to Sortable

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

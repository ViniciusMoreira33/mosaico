/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load the interact.js library
    const interactScript = document.createElement('script');
    interactScript.src = 'https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js';
    interactScript.onload = initializeInteractFunctionality;
    document.head.appendChild(interactScript);
});

function initializeInteractFunctionality() {
    const interactElements = document.querySelectorAll('[data-identifier="ui-manipulation"]');

    interactElements.forEach(element => {
        const actionsAttribute = element.getAttribute('data-manipulation-actions');
        if (!actionsAttribute) return;

        const actions = actionsAttribute.split(',').map(action => action.trim());

        const computedStyle = window.getComputedStyle(element, null);
        element.setAttribute('data-x', parseInt(computedStyle.left, 10));
        element.setAttribute('data-y', parseInt(computedStyle.top, 10));

        // For snapping functionality
        let snapModifiers = [];

        if (element.getAttribute('data-manipulation-snap') === 'true') {
            const snapValues = element.getAttribute('data-manipulation-snap-values').split(',').map(val => parseInt(val.trim(), 10));

            snapModifiers.push(interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: snapValues[0], y: snapValues[1] })
                ],
                relativePoints: [{ x: 0, y: 0 }],
                offset: 'startCoords'
            }));
        }

        if (actions.includes('drag')) {
            interact(element).draggable({
                inertia: true,
                modifiers: [
                    ...snapModifiers,
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                autoScroll: true,
                listeners: {
                    move: dragMoveListener
                }
            });
        }

        if (actions.includes('resize')) {
            element.style.position = 'absolute';

            interact(element).resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: {
                    move (event) {
                        const target = event.target;
                        let x = (parseFloat(target.getAttribute('data-x')) || 0);
                        let y = (parseFloat(target.getAttribute('data-y')) || 0);

                        target.style.width = event.rect.width + 'px';
                        target.style.height = event.rect.height + 'px';

                        x += event.deltaRect.left;
                        y += event.deltaRect.top;

                        target.style.left = x + 'px';
                        target.style.top = y + 'px';
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    }
                },
                modifiers: [
                    ...snapModifiers,
                    interact.modifiers.restrictEdges({
                        outer: 'parent'
                    }),
                    interact.modifiers.restrictSize({
                        min: { width: 100, height: 50 }
                    })
                ],
                inertia: true
            });
        }
    });

    function dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.left = x + 'px';
        target.style.top = y + 'px';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    window.dragMoveListener = dragMoveListener;
}



//This Mosaico element uses Interact.js (License below)

/*
Copyright (c) 2012-present Taye Adeyemi <dev@taye.me>

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the 
following conditions:

The above copyright notice and this permission notice shall 
be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY 
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

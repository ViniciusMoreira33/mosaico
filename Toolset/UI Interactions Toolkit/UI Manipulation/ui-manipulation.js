/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', function() {
    const interactScript = document.createElement('script');
    interactScript.src = 'https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js';
    interactScript.onload = initializeInteractFunctionality;
    document.head.appendChild(interactScript);
});

function initializeInteractFunctionality() {
    const interactElements = document.querySelectorAll('[data-identifier="ui-manipulation"]');

    interactElements.forEach(element => element.style.touchAction = 'none');

    interactElements.forEach(element => {
        const actionsAttribute = element.getAttribute('data-manipulation-actions');
        if (!actionsAttribute) return;

        const actions = actionsAttribute.split(',').map(action => action.trim());

        let snapModifiers = [];
        if (element.getAttribute('data-manipulation-snap') === 'true') {
            const snapValues = element.getAttribute('data-manipulation-snap-values').split(',').map(val => parseInt(val.trim(), 10));
            snapModifiers.push(interact.modifiers.snap({
                targets: [
                    interact.snappers.grid({ x: snapValues[0], y: snapValues[1] })
                ],
                relativePoints: [{ x: 0, y: 0 }]
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
            interact(element).resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                listeners: {
                    move(event) {
                        const target = event.target;
                        let x = (parseFloat(target.getAttribute('data-x')) || 0);
                        let y = (parseFloat(target.getAttribute('data-y')) || 0);

                        target.style.width = event.rect.width + 'px';
                        target.style.height = event.rect.height + 'px';

                        x += event.deltaRect.left;
                        y += event.deltaRect.top;

                        target.style.transform = `translate(${x}px, ${y}px)`;
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
        
        // Adjusted pinch-to-zoom functionality for smoother scaling
        interact(element).gesturable({
            listeners: {
                move(event) {
                    const target = event.target;
                    let scale = (parseFloat(target.getAttribute('data-scale')) || 1);
                    scale = Math.max(0.5, Math.min(scale * (1 + event.ds), 3)); // Adjust scale update for smoother transition

                    target.style.transform = `scale(${scale})`;
                    target.setAttribute('data-scale', scale);
                }
            }
        });
    });

    function dragMoveListener(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = `translate(${x}px, ${y}px)`;
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

        function countFunction(element) {
            let text3StartValue = parseInt(element.getAttribute('data-count-start'));
            let text3EndValue = parseInt(element.getAttribute('data-count-end'));
            const text3Easing = element.getAttribute('data-count-easing');
            const text3Duration = parseInt(element.getAttribute('data-count-duration')) * 1000; // convert seconds to milliseconds
            const text3Direction = element.getAttribute('data-count-direction');
            const text3StartTime = performance.now();

            if (text3Direction === "inverse") {
                [text3StartValue, text3EndValue] = [text3EndValue, text3StartValue];
            }
            
            const text3EasingFunctions = {
                'linear': t => t,
                'easeIn': t => t * t,
                'easeOut': t => t * (2 - t),
                'easeInOut': t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            };
            
            function update() {
                const text3Now = performance.now();
                const text3Progress = Math.min((text3Now - text3StartTime) / text3Duration, 1);
                const text3Value = text3StartValue + text3EasingFunctions[text3Easing](text3Progress) * (text3EndValue - text3StartValue);

                element.textContent = Math.round(text3Value);

                if (text3Progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            update();
        }
        
        const text3Counter = document.querySelector('[data-identifier="count"]');
        countFunction(text3Counter);

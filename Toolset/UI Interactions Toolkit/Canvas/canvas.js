/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 */

document.addEventListener("DOMContentLoaded", function() {
  var fabricScript = document.createElement("script");
  fabricScript.src = "https://cdn.jsdelivr.net/npm/fabric@4.5.1/dist/fabric.min.js";
  fabricScript.onload = initializeCanvasDrawing;
  document.head.appendChild(fabricScript);

  function initializeCanvasDrawing() {
    var canvasContainers = document.querySelectorAll('[data-identifier="canvas"]');
    canvasContainers.forEach(function(container) {
      var canvasEl = document.createElement("canvas");
      canvasEl.width = container.clientWidth;
      canvasEl.height = container.clientHeight;
      container.appendChild(canvasEl);
      var canvas = new fabric.Canvas(canvasEl);
      var isDrawingMode = container.getAttribute("data-canvas-actions") === "draw";
      canvas.isDrawingMode = isDrawingMode;
      var brushWidth = parseInt(container.getAttribute("data-canvas-brush-width") || "2");
      var brushColor = container.getAttribute("data-canvas-brush-color") || "#000000";
      canvas.freeDrawingBrush.width = brushWidth;
      canvas.freeDrawingBrush.color = brushColor;
      var borderColor = container.getAttribute("data-canvas-border-color") || "#000000";
      var cornerColor = container.getAttribute("data-canvas-corner-color") || "#ff0000";
      var cornerSize = parseInt(container.getAttribute("data-canvas-corner-size") || "10");
      var transparentCorners = container.getAttribute("data-canvas-transparent-corners") === "true";
      var hasControls = container.getAttribute("data-canvas-has-controls") !== "false";
      var hasBorders = container.getAttribute("data-canvas-has-borders") !== "false";
      var hasRotatingPoint = container.getAttribute("data-canvas-has-rotation-point") !== "false";
      function applyCustomAttributes(object) {
        object.borderColor = borderColor;
        object.cornerColor = cornerColor;
        object.cornerSize = cornerSize;
        object.transparentCorners = transparentCorners;
        object.hasControls = hasControls;
        object.hasBorders = hasBorders;
        object.hasRotatingPoint = hasRotatingPoint;
      }
                  // Setup group selection styles
            function applyGroupSelectionStyles(group) {
                group.borderColor = borderColor;
                group.cornerColor = cornerColor;
                group.cornerSize = cornerSize;
                group.transparentCorners = transparentCorners;
                group.hasBorders = hasBorders;
                group.hasControls = hasControls;
            }

            canvas.on('selection:created', function(e) {
                if (e.target.type === 'activeSelection') {
                    applyGroupSelectionStyles(e.target);
                }
            });

            canvas.on('selection:updated', function(e) {
                if (e.target.type === 'activeSelection') {
                    applyGroupSelectionStyles(e.target);
                }
            });
      var rectangleDivs = container.querySelectorAll('[data-identifier="canvas-rectangle"]');
      rectangleDivs.forEach(function(rectDiv) {
        var rectWidth = parseInt(rectDiv.getAttribute("data-rectangle-width")) || 100;
        var rectHeight = parseInt(rectDiv.getAttribute("data-rectangle-height")) || 100;
        var rectFill = rectDiv.getAttribute("data-rectangle-fill") || "#FFA629";
        var rectLeft = parseInt(rectDiv.getAttribute("data-rectangle-left")) || 0;
        var rectTop = parseInt(rectDiv.getAttribute("data-rectangle-top")) || 0;
        var rectControls = rectDiv.getAttribute("data-rectangle-controls") === "true";
        var rectangle = new fabric.Rect({
          left: rectLeft,
          top: rectTop,
          fill: rectFill,
          width: rectWidth,
          height: rectHeight,
          hasControls: rectControls,
          hasRotatingPoint: rectControls,
          selectable: rectControls,
        });
        applyCustomAttributes(rectangle);
        rectDiv.style.display = "none";
        canvas.add(rectangle);
      });
      var triangleDivs = container.querySelectorAll('[data-identifier="canvas-triangle"]');
      triangleDivs.forEach(function(triDiv) {
        var triWidth = parseInt(triDiv.getAttribute("data-triangle-width")) || 100;
        var triHeight = parseInt(triDiv.getAttribute("data-triangle-height")) || 100;
        var triFill = triDiv.getAttribute("data-triangle-fill") || "#FFA629";
        var triLeft = parseInt(triDiv.getAttribute("data-triangle-left")) || 0;
        var triTop = parseInt(triDiv.getAttribute("data-triangle-top")) || 0;
        var triControls = triDiv.getAttribute("data-triangle-controls") === "true";
        var triangle = new fabric.Triangle({
          left: triLeft,
          top: triTop,
          fill: triFill,
          width: triWidth,
          height: triHeight,
          hasControls: triControls,
          hasRotatingPoint: triControls,
          selectable: triControls,
        });
        applyCustomAttributes(triangle);
        triDiv.style.display = "none";
        canvas.add(triangle);
      });
      var circleDivs = container.querySelectorAll('[data-identifier="canvas-circle"]');
      circleDivs.forEach(function(circDiv) {
        var radius = parseInt(circDiv.getAttribute("data-circle-radius")) || 50;
        var circleFill = circDiv.getAttribute("data-circle-fill") || "#FFA629";
        var circleLeft = parseInt(circDiv.getAttribute("data-circle-left")) || 0;
        var circleTop = parseInt(circDiv.getAttribute("data-circle-top")) || 0;
        var circleControls = circDiv.getAttribute("data-circle-controls") === "true";
        var circle = new fabric.Circle({
          left: circleLeft,
          top: circleTop,
          radius: radius,
          fill: circleFill,
          hasControls: circleControls,
          hasRotatingPoint: circleControls,
          selectable: circleControls,
        });
        applyCustomAttributes(circle);
        circDiv.style.display = "none";
        canvas.add(circle);
      });
      var ellipseDivs = container.querySelectorAll('[data-identifier="canvas-ellipse"]');
      ellipseDivs.forEach(function(ellipseDiv) {
        var rx = parseInt(ellipseDiv.getAttribute("data-ellipse-rx")) || 50;
        var ry = parseInt(ellipseDiv.getAttribute("data-ellipse-ry")) || 25;
        var ellipseFill = ellipseDiv.getAttribute("data-ellipse-fill") || "#FFA629";
        var ellipseLeft = parseInt(ellipseDiv.getAttribute("data-ellipse-left")) || 0;
        var ellipseTop = parseInt(ellipseDiv.getAttribute("data-ellipse-top")) || 0;
        var ellipseControls = ellipseDiv.getAttribute("data-ellipse-controls") === "true";
        var ellipse = new fabric.Ellipse({
          left: ellipseLeft,
          top: ellipseTop,
          rx: rx,
          ry: ry,
          fill: ellipseFill,
          hasControls: ellipseControls,
          hasRotatingPoint: ellipseControls,
          selectable: ellipseControls,
        });
        applyCustomAttributes(ellipse);
        ellipseDiv.style.display = "none";
        canvas.add(ellipse);
      });
      var textDivs = container.querySelectorAll('[data-identifier="canvas-text"]');
      textDivs.forEach(function(textDiv) {
        var textString = textDiv.getAttribute("data-canvas-text-string") || "Default Text";
        var textLeft = parseInt(textDiv.getAttribute("data-canvas-text-left")) || 0;
        var textTop = parseInt(textDiv.getAttribute("data-canvas-text-top")) || 0;
        var textColor = textDiv.getAttribute("data-canvas-text-color") || "#000000";
        var textObject = new fabric.Text(textString, {
          left: textLeft,
          top: textTop,
          fill: textColor,
        });
        applyCustomAttributes(textObject);
        textDiv.style.display = "none";
        canvas.add(textObject);
      });
      var itextDivs = container.querySelectorAll('[data-identifier="canvas-itext"]');
      itextDivs.forEach(function(itextDiv) {
        var itextString = itextDiv.getAttribute("data-canvas-itext-string") || "Editable Text";
        var itextLeft = parseInt(itextDiv.getAttribute("data-canvas-itext-left")) || 0;
        var itextTop = parseInt(itextDiv.getAttribute("data-canvas-itext-top")) || 0;
        var itextColor = itextDiv.getAttribute("data-canvas-itext-color") || "#000000";
        var itextObject = new fabric.IText(itextString, {
          left: itextLeft,
          top: itextTop,
          fill: itextColor,
        });
        applyCustomAttributes(itextObject);
        itextDiv.style.display = "none";
        canvas.add(itextObject);
      });
      var imageDivs = container.querySelectorAll('[data-identifier="canvas-image"]');
      imageDivs.forEach(function(imageDiv) {
        var imageUrl = imageDiv.getAttribute("data-canvas-image-url");
        var imageLeft = parseInt(imageDiv.getAttribute("data-canvas-image-left")) || 0;
        var imageTop = parseInt(imageDiv.getAttribute("data-canvas-image-top")) || 0;
        fabric.Image.fromURL(imageUrl, function(img) {
          img.set({
            left: imageLeft,
            top: imageTop,
          });
          applyCustomAttributes(img);
          imageDiv.style.display = "none";
          canvas.add(img);
        });
      });
    });
  }
});

//This Mosaico element uses Fabric.js (License below)

/*
Copyright (c) 2008-2015 Printio (Juriy Zaytsev, Maxim Chernyak)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

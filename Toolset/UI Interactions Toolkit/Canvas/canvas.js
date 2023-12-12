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
      var originalWidth = container.clientWidth;
      var originalHeight = container.clientHeight;
      canvasEl.width = originalWidth;
      canvasEl.height = originalHeight;
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
        var rectTopValues = rectDiv.getAttribute("data-rectangle-top").split(',').map(Number);
        var rectLeftValues = rectDiv.getAttribute("data-rectangle-left").split(',').map(Number);
        var rectTop, rectLeft;
        var width = window.innerWidth;
        if (rectTopValues.length === 1) {
          rectTop = rectTopValues[0];
        } else {
          if (width >= 992) {
            rectTop = rectTopValues[0];
          } else if (width <= 991 && width >= 768) {
            rectTop = rectTopValues[1];
          } else if (width <= 767 && width >= 479) {
            rectTop = rectTopValues[2];
          } else {
            rectTop = rectTopValues[3];
          }
        }
        if (rectLeftValues.length === 1) {
          rectLeft = rectLeftValues[0];
        } else {
          if (width >= 992) {
            rectLeft = rectLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            rectLeft = rectLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            rectLeft = rectLeftValues[2];
          } else {
            rectLeft = rectLeftValues[3];
          }
        }
        var rectControls = rectDiv.getAttribute("data-rectangle-controls") === "true";
        var rectangle = new fabric.Rect({
          fill: rectFill,
          width: rectWidth,
          height: rectHeight,
          hasControls: rectControls,
          hasRotatingPoint: rectControls,
          selectable: rectControls,
          originalWidth: rectWidth,
          originalHeight: rectHeight,
          originalScaleX: 1,
          originalScaleY: 1
        });
        rectangle.set({
          left: rectLeft,
          top: rectTop,
          originalLeft: rectLeft,
          originalTop: rectTop
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
        var triTopValues = triDiv.getAttribute("data-triangle-top").split(',').map(Number);
        var triLeftValues = triDiv.getAttribute("data-triangle-left").split(',').map(Number);
        var triTop, triLeft;
        var width = window.innerWidth;
        if (triTopValues.length === 1) {
          triTop = triTopValues[0];
        } else {
          if (width >= 992) {
            triTop = triTopValues[0];
          } else if (width <= 991 && width >= 768) {
            triTop = triTopValues[1];
          } else if (width <= 767 && width >= 479) {
            triTop = triTopValues[2];
          } else {
            triTop = triTopValues[3];
          }
        }
        if (triLeftValues.length === 1) {
          triLeft = triLeftValues[0];
        } else {
          if (width >= 992) {
            triLeft = triLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            triLeft = triLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            triLeft = triLeftValues[2];
          } else {
            triLeft = triLeftValues[3];
          }
        }
        var triControls = triDiv.getAttribute("data-triangle-controls") === "true";
        var triangle = new fabric.Triangle({
          fill: triFill,
          width: triWidth,
          height: triHeight,
          hasControls: triControls,
          hasRotatingPoint: triControls,
          selectable: triControls,
          originalWidth: triWidth,
          originalHeight: triHeight,
          originalScaleX: 1,
          originalScaleY: 1
        });
        triangle.set({
          left: triLeft,
          top: triTop,
          originalLeft: triLeft,
          originalTop: triTop
        });
        applyCustomAttributes(triangle);
        triDiv.style.display = "none";
        canvas.add(triangle);
      });
      var circleDivs = container.querySelectorAll('[data-identifier="canvas-circle"]');
      circleDivs.forEach(function(circDiv) {
        var radius = parseInt(circDiv.getAttribute("data-circle-radius")) || 50;
        var circleFill = circDiv.getAttribute("data-circle-fill") || "#FFA629";
        var circleTopValues = circDiv.getAttribute("data-circle-top").split(',').map(Number);
        var circleLeftValues = circDiv.getAttribute("data-circle-left").split(',').map(Number);
        var circleTop, circleLeft;
        var width = window.innerWidth;
        if (circleTopValues.length === 1) {
          circleTop = circleTopValues[0];
        } else {
          if (width >= 992) {
            circleTop = circleTopValues[0];
          } else if (width <= 991 && width >= 768) {
            circleTop = circleTopValues[1];
          } else if (width <= 767 && width >= 479) {
            circleTop = circleTopValues[2];
          } else {
            circleTop = circleTopValues[3];
          }
        }
        if (circleLeftValues.length === 1) {
          circleLeft = circleLeftValues[0];
        } else {
          if (width >= 992) {
            circleLeft = circleLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            circleLeft = circleLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            circleLeft = circleLeftValues[2];
          } else {
            circleLeft = circleLeftValues[3];
          }
        }
        var circleControls = circDiv.getAttribute("data-circle-controls") === "true";
        var circle = new fabric.Circle({
          radius: radius,
          fill: circleFill,
          hasControls: circleControls,
          hasRotatingPoint: circleControls,
          selectable: circleControls,
          originalRadius: radius,
          originalScaleX: 1,
          originalScaleY: 1
        });
        circle.set({
          left: circleLeft,
          top: circleTop,
          originalLeft: circleLeft,
          originalTop: circleTop
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
        var ellipseTopValues = ellipseDiv.getAttribute("data-ellipse-top").split(',').map(Number);
        var ellipseLeftValues = ellipseDiv.getAttribute("data-ellipse-left").split(',').map(Number);
        var ellipseTop, ellipseLeft;
        var width = window.innerWidth;
        if (ellipseTopValues.length === 1) {
          ellipseTop = ellipseTopValues[0];
        } else {
          if (width >= 992) {
            ellipseTop = ellipseTopValues[0];
          } else if (width <= 991 && width >= 768) {
            ellipseTop = ellipseTopValues[1];
          } else if (width <= 767 && width >= 479) {
            ellipseTop = ellipseTopValues[2];
          } else {
            ellipseTop = ellipseTopValues[3];
          }
        }
        if (ellipseLeftValues.length === 1) {
          ellipseLeft = ellipseLeftValues[0];
        } else {
          if (width >= 992) {
            ellipseLeft = ellipseLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            ellipseLeft = ellipseLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            ellipseLeft = ellipseLeftValues[2];
          } else {
            ellipseLeft = ellipseLeftValues[3];
          }
        }
        var ellipseControls = ellipseDiv.getAttribute("data-ellipse-controls") === "true";
        var ellipse = new fabric.Ellipse({
          rx: rx,
          ry: ry,
          fill: ellipseFill,
          hasControls: ellipseControls,
          hasRotatingPoint: ellipseControls,
          selectable: ellipseControls,
          originalRx: rx,
          originalRy: ry
        });
        ellipse.set({
          left: ellipseLeft,
          top: ellipseTop,
          originalScaleX: ellipse.scaleX,
          originalScaleY: ellipse.scaleY,
          originalLeft: ellipseLeft,
          originalTop: ellipseTop
        });
        applyCustomAttributes(ellipse);
        ellipseDiv.style.display = "none";
        canvas.add(ellipse);
      });
      var textDivs = container.querySelectorAll('[data-identifier="canvas-text"]');
      textDivs.forEach(function(textDiv) {
        var textString = textDiv.getAttribute("data-canvas-text-string") || "Default Text";
        var textTopValues = textDiv.getAttribute("data-canvas-text-top").split(',').map(Number);
        var textLeftValues = textDiv.getAttribute("data-canvas-text-left").split(',').map(Number);
        var textTop, textLeft;
        var width = window.innerWidth;
        if (textTopValues.length === 1) {
          textTop = textTopValues[0];
        } else {
          if (width >= 992) {
            textTop = textTopValues[0];
          } else if (width <= 991 && width >= 768) {
            textTop = textTopValues[1];
          } else if (width <= 767 && width >= 479) {
            textTop = textTopValues[2];
          } else {
            textTop = textTopValues[3];
          }
        }
        if (textLeftValues.length === 1) {
          textLeft = textLeftValues[0];
        } else {
          if (width >= 992) {
            textLeft = textLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            textLeft = textLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            textLeft = textLeftValues[2];
          } else {
            textLeft = textLeftValues[3];
          }
        }
        var textColor = textDiv.getAttribute("data-canvas-text-color") || "#000000";
        var textObject = new fabric.Text(textString, {
          fill: textColor
        });
        textObject.set({
          left: textLeft,
          top: textTop,
          originalLeft: textLeft,
          originalTop: textTop,
          originalScaleX: textObject.scaleX,
          originalScaleY: textObject.scaleY,
        });
        applyCustomAttributes(textObject);
        textDiv.style.display = "none";
        canvas.add(textObject);
      });
      var itextDivs = container.querySelectorAll('[data-identifier="canvas-itext"]');
      itextDivs.forEach(function(itextDiv) {
        var itextString = itextDiv.getAttribute("data-canvas-itext-string") || "Editable Text";
        var itextTopValues = itextDiv.getAttribute("data-canvas-itext-top").split(',').map(Number);
        var itextLeftValues = itextDiv.getAttribute("data-canvas-itext-left").split(',').map(Number);
        var itextTop, itextLeft;
        var width = window.innerWidth;
        if (itextTopValues.length === 1) {
          itextTop = itextTopValues[0];
        } else {
          if (width >= 992) {
            itextTop = itextTopValues[0];
          } else if (width <= 991 && width >= 768) {
            itextTop = itextTopValues[1];
          } else if (width <= 767 && width >= 479) {
            itextTop = itextTopValues[2];
          } else {
            itextTop = itextTopValues[3];
          }
        }
        if (itextLeftValues.length === 1) {
          itextLeft = itextLeftValues[0];
        } else {
          if (width >= 992) {
            itextLeft = itextLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            itextLeft = itextLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            itextLeft = itextLeftValues[2];
          } else {
            itextLeft = itextLeftValues[3];
          }
        }
        var itextColor = itextDiv.getAttribute("data-canvas-itext-color") || "#000000";
        var itextObject = new fabric.IText(itextString, {
          fill: itextColor
        });
        itextObject.set({
          left: itextLeft,
          top: itextTop,
          originalLeft: itextLeft,
          originalTop: itextTop,
          originalScaleX: itextObject.scaleX,
          originalScaleY: itextObject.scaleY,

        });
        applyCustomAttributes(itextObject);
        itextDiv.style.display = "none";
        canvas.add(itextObject);
      });
      var imageDivs = container.querySelectorAll('[data-identifier="canvas-image"]');
      imageDivs.forEach(function(imageDiv) {
        var imageUrl = imageDiv.getAttribute("data-canvas-image-url");
        var imageTopValues = imageDiv.getAttribute("data-canvas-image-top").split(',').map(Number);
        var imageLeftValues = imageDiv.getAttribute("data-canvas-image-left").split(',').map(Number);
        var imageTop, imageLeft;
        var width = window.innerWidth;
        if (imageTopValues.length === 1) {
          imageTop = imageTopValues[0];
        } else {
          if (width >= 992) {
            imageTop = imageTopValues[0];
          } else if (width <= 991 && width >= 768) {
            imageTop = imageTopValues[1];
          } else if (width <= 767 && width >= 479) {
            imageTop = imageTopValues[2];
          } else {
            imageTop = imageTopValues[3];
          }
        }
        if (imageLeftValues.length === 1) {
          imageLeft = imageLeftValues[0];
        } else {
          if (width >= 992) {
            imageLeft = imageLeftValues[0];
          } else if (width <= 991 && width >= 768) {
            imageLeft = imageLeftValues[1];
          } else if (width <= 767 && width >= 479) {
            imageLeft = imageLeftValues[2];
          } else {
            imageLeft = imageLeftValues[3];
          }
        }
        fabric.Image.fromURL(imageUrl, function(img) {
          img.set({
            originalLeft: imageLeft,
            originalTop: imageTop,
            originalScaleX: img.scaleX,
            originalScaleY: img.scaleY,
          });
          img.set({
            left: imageLeft,
            top: imageTop
          });
          applyCustomAttributes(img);
          imageDiv.style.display = "none";
          canvas.add(img);
        });
      });

      function resizeCanvasAndElements() {
        var scaleCanvas = container.getAttribute("data-canvas-scale") === "true";
        var newWidth = container.clientWidth;
        var newHeight = container.clientHeight;
      
        if (scaleCanvas) {
          // If data-canvas-scale is true, scale the canvas and its elements
          var scaleX = newWidth / originalWidth;
          var scaleY = newHeight / originalHeight;
          var scale = Math.min(scaleX, scaleY);
      
          canvas.setWidth(originalWidth * scale);
          canvas.setHeight(originalHeight * scale);
      
          canvas.getObjects().forEach(function(object) {
            object.scaleX = object.originalScaleX * scale;
            object.scaleY = object.originalScaleY * scale;
            object.left = object.originalLeft * scale;
            object.top = object.originalTop * scale;
            object.setCoords();
          });
        } else {
          // If data-canvas-scale is false, only adjust the canvas size
          canvas.setWidth(newWidth);
          canvas.setHeight(newHeight);
        }
      
        canvas.setViewportTransform([1, 0, 0, 1, 0, 0]); // Reset the viewport
      
        canvas.renderAll();
        canvas.calcOffset();
      }
      window.addEventListener('resize', resizeCanvasAndElements);
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

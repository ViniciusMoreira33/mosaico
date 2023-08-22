/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

const videoElements = document.querySelectorAll('[data-identifier="embed-player"]');

  // Function to get attribute value or return default if not set
function getAttributeWithDefault(element, attribute, defaultValue) {
  return element.hasAttribute(attribute) ? element.getAttribute(attribute) : defaultValue;
}

function setCSSVariables(element) {
  const cssVariables = [
  '--plyr-color-main',
  '--plyr-video-background',
  '--plyr-focus-visible-color',
  '--plyr-badge-background',
  '--plyr-badge-text-color',
  '--plyr-badge-border-radius',
  '--plyr-captions-background',
  '--plyr-captions-text-color',
  '--plyr-control-icon-size',
  '--plyr-control-spacing',
  '--plyr-control-padding',
  '--plyr-control-radius',
  '--plyr-control-toggle-checked-background',
  '--plyr-video-controls-background',
  '--plyr-video-control-color',
  '--plyr-video-control-color-hover',
  '--plyr-video-control-background-hover',
  '--plyr-audio-controls-background',
  '--plyr-audio-control-color',
  '--plyr-audio-control-color-hover',
  '--plyr-audio-control-background-hover',
  '--plyr-menu-background',
  '--plyr-menu-color',
  '--plyr-menu-shadow',
  '--plyr-menu-radius',
  '--plyr-menu-arrow-size',
  '--plyr-menu-item-arrow-color',
  '--plyr-menu-item-arrow-size',
  '--plyr-menu-border-color',
  '--plyr-menu-border-shadow-color',
  '--plyr-progress-loading-size',
  '--plyr-progress-loading-background',
  '--plyr-video-progress-buffered-background',
  '--plyr-audio-progress-buffered-background',
  '--plyr-range-thumb-height',
  '--plyr-range-thumb-background',
  '--plyr-range-thumb-shadow',
  '--plyr-range-thumb-active-shadow-width',
  '--plyr-range-track-height',
  '--plyr-range-fill-background',
  '--plyr-video-range-track-background',
  '--plyr-video-range-thumb-active-shadow-color',
  '--plyr-audio-range-track-background',
  '--plyr-audio-range-thumb-active-shadow-color',
  '--plyr-tooltip-background',
  '--plyr-tooltip-color',
  '--plyr-tooltip-padding',
  '--plyr-tooltip-arrow-size',
  '--plyr-tooltip-radius',
  '--plyr-tooltip-shadow',
  '--plyr-font-size-base',
  '--plyr-font-size-small',
  '--plyr-font-size-large',
  '--plyr-font-size-xlarge',
  '--plyr-font-size-time',
  '--plyr-font-size-menu',
  '--plyr-font-size-badge',
  '--plyr-font-weight-regular',
  '--plyr-font-weight-bold',
  '--plyr-line-height',
  '--plyr-font-smoothing'
  ];
  cssVariables.forEach((variable) => {
    const attributeValue = getAttributeWithDefault(element, 'data-embed-player' + variable.replace("--plyr", ""), null);
    if (attributeValue) {
      element.style.setProperty(variable, attributeValue);
    }
  });
}

videoElements.forEach((element) => {
  setCSSVariables(element);
});

  const player = new Plyr(videoElements, {
    title: getAttributeWithDefault(videoElements[0], 'data-embed-player-title', 'Example Title'),
    enabled: getAttributeWithDefault(videoElements[0], 'data-embed-player-enabled', true),
    debug: getAttributeWithDefault(videoElements[0], 'data-embed-player-debug', false),
    controls: getAttributeWithDefault(videoElements[0], 'data-embed-player-controls', ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']),
    settings: getAttributeWithDefault(videoElements[0], 'data-embed-player-settings', ['captions', 'quality', 'speed', 'loop']),
    loadSprite: getAttributeWithDefault(videoElements[0], 'data-embed-player-loadSprite', true),
    iconPrefix: getAttributeWithDefault(videoElements[0], 'data-embed-player-iconPrefix', 'plyr'),
    blankVideo: getAttributeWithDefault(videoElements[0], 'data-embed-player-blankVideo', 'https://cdn.plyr.io/static/blank.mp4'),
    autoplay: getAttributeWithDefault(videoElements[0], 'data-embed-player-autoplay', false),
    autopause: getAttributeWithDefault(videoElements[0], 'data-embed-player-autopause', true),
    playsinline: getAttributeWithDefault(videoElements[0], 'data-embed-player-playsinline', true),
    seekTime: getAttributeWithDefault(videoElements[0], 'data-embed-player-seekTime', 10),
    volume: getAttributeWithDefault(videoElements[0], 'data-embed-player-volume', 1),
    muted: getAttributeWithDefault(videoElements[0], 'data-embed-player-muted', false),
    clickToPlay: getAttributeWithDefault(videoElements[0], 'data-embed-player-clickToPlay', true),
    disableContextMenu: getAttributeWithDefault(videoElements[0], 'data-embed-player-disableContextMenu', true),
    hideControls: getAttributeWithDefault(videoElements[0], 'data-embed-player-hideControls', true),
    resetOnEnd: getAttributeWithDefault(videoElements[0], 'data-embed-player-resetOnEnd', false),
    keyboard: {
      focused: getAttributeWithDefault(videoElements[0], 'data-embed-player-keyboard-focused', true),
      global: getAttributeWithDefault(videoElements[0], 'data-embed-player-keyboard-global', false),
    },
    tooltips: {
      controls: getAttributeWithDefault(videoElements[0], 'data-embed-player-tooltips-controls', false),
      seek: getAttributeWithDefault(videoElements[0], 'data-embed-player-tooltips-seek', true),
    },
    duration: getAttributeWithDefault(videoElements[0], 'data-embed-player-duration', null),
    displayDuration: getAttributeWithDefault(videoElements[0], 'data-embed-player-displayDuration', true),
    invertTime: getAttributeWithDefault(videoElements[0], 'data-embed-player-invertTime', true),
    toggleInvert: getAttributeWithDefault(videoElements[0], 'data-embed-player-toggleInvert', true),
    captions: {
      active: getAttributeWithDefault(videoElements[0], 'data-embed-player-captions-active', false),
      language: getAttributeWithDefault(videoElements[0], 'data-embed-player-captions-language', 'auto'),
      update: getAttributeWithDefault(videoElements[0], 'data-embed-player-captions-update', false),
    },
    fullscreen: {
      enabled: getAttributeWithDefault(videoElements[0], 'data-embed-player-fullscreen-enabled', true),
      fallback: getAttributeWithDefault(videoElements[0], 'data-embed-player-fullscreen-fallback', true),
      iosNative: getAttributeWithDefault(videoElements[0], 'data-embed-player-fullscreen-iosNative', false),
      container: getAttributeWithDefault(videoElements[0], 'data-embed-player-fullscreen-container', null),
    },
    ratio: getAttributeWithDefault(videoElements[0], 'data-embed-player-ratio', null),
    speed: {
      selected: getAttributeWithDefault(videoElements[0], 'data-embed-player-speed-selected', 1),
      options: getAttributeWithDefault(videoElements[0], 'data-embed-player-speed-options', [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]),
    },
    quality: {
      default: getAttributeWithDefault(videoElements[0], 'data-embed-player-quality-default', 576),
      options: getAttributeWithDefault(videoElements[0], 'data-embed-player-quality-options', [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]),
    },
    loop: {
      active: getAttributeWithDefault(videoElements[0], 'data-embed-player-loop-active', false),
    },
    vimeo: {
      byline: getAttributeWithDefault(videoElements[0], 'data-embed-player-vimeo-byline', false),
      portrait: getAttributeWithDefault(videoElements[0], 'data-embed-player-vimeo-portrait', false),
      title: getAttributeWithDefault(videoElements[0], 'data-embed-player-vimeo-title', false),
      speed: getAttributeWithDefault(videoElements[0], 'data-embed-player-vimeo-speed', true),
      transparent: getAttributeWithDefault(videoElements[0], 'data-embed-player-vimeo-transparent', false),
    },
    youtube: {
      noCookie: getAttributeWithDefault(videoElements[0], 'data-embed-player-youtube-noCookie', false),
      rel: getAttributeWithDefault(videoElements[0], 'data-embed-player-youtube-rel', 0),
      showinfo: getAttributeWithDefault(videoElements[0], 'data-embed-player-youtube-showinfo', 0),
      iv_load_policy: getAttributeWithDefault(videoElements[0], 'data-embed-player-youtube-iv_load_policy', 3),
      modestbranding: getAttributeWithDefault(videoElements[0], 'data-embed-player-youtube-modestbranding', 1),
    },
    previewThumbnails: {
      enabled: getAttributeWithDefault(videoElements[0], 'data-embed-player-previewThumbnails-enabled', false),
      src: getAttributeWithDefault(videoElements[0], 'data-embed-player-previewThumbnails-src', ''),
    },
  });


/*This Mosaico element uses plyr.io (License below)*/
/*
The MIT License (MIT)

Copyright (c) 2017 Sam Potts

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

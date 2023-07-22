$(function() {
    var $form = $('#form1--component');
    var $input = $('#form1--input');

    var maxTags = parseInt($input.attr('data-max-tags') || 10);
    var minChars = parseInt($input.attr('data-min-chars') || 0);
    var maxChars = parseInt($input.attr('data-max-chars') || 0);
    var defaultText = $input.attr('data-default-text') || 'add a tag';
    var interactive = $input.attr('data-interactive') !== 'false';
    var removeWithBackspace = $input.attr('data-remove-with-backspace') !== 'false';
    var placeholderColor = $input.attr('data-placeholder-color') || '#666666';
    var autocomplete = JSON.parse($input.attr('data-autocomplete') || '[]');
    
    var tagColor = $input.attr('data-tag-color') || '#007BFF';
    var tagTextColor = $input.attr('data-tag-text-color') || '#ffffff';
    var borderColor = $input.attr('data-tag-border-color') || '#007BFF';
    var iconColor = $input.attr('data-icon-color') || '#ffffff';
    var inputBgColor = $input.attr('data-input-bg-color') || '#ffffff';

    document.documentElement.style.setProperty('--tag-bg-color', tagColor);
    document.documentElement.style.setProperty('--tag-text-color', tagTextColor);
    document.documentElement.style.setProperty('--tag-border-color', borderColor);
    document.documentElement.style.setProperty('--tag-icon-color', iconColor);
    document.documentElement.style.setProperty('--input-bg-color', inputBgColor);

    $input.tagsInput({
        'interactive': interactive,
        'defaultText': defaultText,
        'removeWithBackspace': removeWithBackspace,
        'minChars': minChars,
        'maxChars': maxChars,
        'placeholderColor': placeholderColor,
        'autocomplete': autocomplete,
        'onAddTag': function(tag) {
            var tagsArray = $(this).val().split(',');
            if (tagsArray.length > maxTags) {
                $(this).removeTag(tag);
                alert("Maximum tags limit reached");
            }
        }
    });

    var stylesToCopy = [
        'height',
        'width',
        'paddingTop',
        'paddingRight',
        'paddingBottom',
        'paddingLeft',
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
        'borderTopColor',
        'borderRightColor',
        'borderBottomColor',
        'borderLeftColor',
        'borderTopStyle',
        'borderRightStyle',
        'borderBottomStyle',
        'borderLeftStyle',
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomRightRadius',
        'borderBottomLeftRadius',
        'fontSize',
        'fontFamily',
        'fontWeight',
        'lineHeight',
        'color'
    ];

    var originalStyles = window.getComputedStyle($input[0]);

    var newStyles = stylesToCopy.reduce(function(result, styleName) {
        result[styleName] = originalStyles[styleName];
        return result;
    }, {});

    $('#form1--input_tagsinput').css(newStyles);

    $form.on('submit', function(event) {
        if ($input[0] === document.activeElement) {
            event.preventDefault();
        }
    });
});

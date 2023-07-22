$(function() {
    var $form = $('#form1--component');
    var $input = $('#form1--input'); // I'm assuming you can change the class selector to an id selector

    var maxTags = parseInt($input.data('max-tags') || 10);
    var minChars = parseInt($input.data('min-chars') || 0);
    var maxChars = parseInt($input.data('max-chars') || 0);
    var defaultText = $input.data('default-text') || 'add a tag';
    var interactive = $input.data('interactive') !== 'false';
    var removeWithBackspace = $input.data('remove-with-backspace') !== 'false';
    var placeholderColor = $input.data('placeholder-color') || '#666666';
    var autocomplete = JSON.parse($input.data('autocomplete') || '[]');

    var tagColor = $input.data('tag-color') || '#007BFF';
    var tagTextColor = $input.data('tag-text-color') || '#ffffff';
    var borderColor = $input.data('border-color') || '#007BFF';
    var iconColor = $input.data('icon-color') || '#ffffff';
    var inputBgColor = $input.data('input-bg-color') || '#ffffff';

    var styleProperties = {
        '--tag-bg-color': tagColor,
        '--tag-text-color': tagTextColor,
        '--tag-border-color': borderColor,
        '--tag-icon-color': iconColor,
        '--input-bg-color': inputBgColor
    };

    for (var property in styleProperties) {
        document.documentElement.style.setProperty(property, styleProperties[property]);
    }

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

    $form.on('submit', function(event) {
        if ($input[0] === document.activeElement) {
            event.preventDefault();
        }
    });
});

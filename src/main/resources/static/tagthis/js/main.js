function tagAdded(data){
    var val = data.addedInput.text;
    var input = data.context[0].id + ' input';
}

$('#simple-tags').tagThis({
    callbacks: {
    //    afterAddTag : tagAdded
    }
});

$('#user-tags').tagThis({
    interactive: false,
    noDuplicates: true,
    callbacks: {
        afterAddTag : tagAdded
    }
});

$('.add-button').on('click', function(){

    var tagData = {
        text : $(this).text(),
        id : $(this).parent().data('id')
    };

    $('#user-tags').addTag(tagData);
});

$('.user-clear-all-button').on('click', function(){
    $('#user-tags').clearAllTags();
});


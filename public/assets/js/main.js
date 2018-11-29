$(function () {
    var input = $('#fileupload');
    input.change(function () {
        $('.upload_container').show();
        var $bar = $('.bar');
        $bar.width(0);
        var progress = setInterval(function () {
            if ($bar.width() >= 400) {
                clearInterval(progress);
                $('.progress').removeClass('active');
            } else {
                $bar.width($bar.width() + 150);
                if($bar.width() >= 330){
                    showFiles(input[0]);
                }
            }
        }, 250);


    })
    function showFiles(input) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.show_files img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
})
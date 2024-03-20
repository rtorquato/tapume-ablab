$(document).ready(function(){
    
    $(function(){
        $('.phone').mask('(00) 00000-0000'); 
    });

    

    $('#submit').on('click', function() {
        
        var nome = $('#nomeCompleto');
        var telefone = $('#telComercial');

        var form = new FormData();

        form.append('nome_completo', nome.val());
        form.append('tel_comercial', telefone.val());
        

        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "sendmail.php",
        "method": "POST",
        "headers": {},
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form
        };

        if( nome.val().length >= 3 && telefone.val().length >= 11) {
        $('#formMail').hide();
        
        $.ajax(settings).done(function (response) {
            nome.val('');
            telefone.val('');

            $('.success').show();
            setTimeout(() => {
                $(".sucess").addClass("active");
            }, 300);
        });

        } else if(nome.val().length <= 3) {
        nome.addClass('error');
        } else if(telefone.val().length <= 11) {
        telefone.addClass('error');
        } else {
        nome.addClass('error');
        telefone.addClass('error');
        }
    })

    // var textos1 = ["business","tech", "creative"];
    // var textos2 = ["driven","based","believers"];
    // var indice1 = 0;
    // var indice2 = 0;

    // setInterval(function() {
    //     $('.msg1 .parte1').fadeOut('slow', function() {
    //         $(this).html(textos1[indice1]).fadeIn('slow');
    //     });
    //     $('.msg1 .parte2').fadeOut('slow', function() {
    //         $(this).html(textos2[indice2]).fadeIn('slow');
    //     });
    //     indice1 = (indice1 + 1) % textos1.length;
    //     indice2 = (indice2 + 1) % textos1.length;
    // }, 5000);

    $(function() {

        setInterval(function() {
            $('.msg3 .parte1').removeClass('active');
            $('.msg3 .parte2').removeClass('active');
            $('.msg3 .parte1').addClass('inactive');
            $('.msg3 .parte2').addClass('inactive');

            $('.msg1 .parte1').removeClass('active');
            $('.msg1 .parte2').removeClass('active');
            $('.msg1 .parte1').addClass('inactive');
            $('.msg1 .parte2').addClass('inactive');
        }, 5000);
        setInterval(function() {
            $('.msg2 .parte1').addClass('active');
            $('.msg2 .parte2').addClass('active');
            $('.msg2 .parte1').removeClass('inactive');
            $('.msg2 .parte2').removeClass('inactive');
        }, 5000);
        setInterval(function() {
            $('.msg2 .parte1').removeClass('active');
            $('.msg2 .parte2').removeClass('active');
            $('.msg2 .parte1').addClass('inactive');
            $('.msg2 .parte2').addClass('inactive');
        }, 10000);
        setInterval(function() {
            $('.msg3 .parte1').removeClass('inactive');
            $('.msg3 .parte2').removeClass('inactive');
            $('.msg3 .parte1').addClass('active');
            $('.msg3 .parte2').addClass('active');
        }, 10000);
    });
});

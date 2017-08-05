  jQuery(document).ready(function($) {
    $('#upload-btn').click(function(e) {
      e.preventDefault();
      var image = wp.media({
          title: 'Upload Image',
          multiple: false
        }).open()
        .on('select', function(e) {
          var uploaded_image = image.state().get('selection').first();
          console.log(uploaded_image);
          var image_url = uploaded_image.toJSON().url;
          $('#image_url').val(image_url);
        });
    });

    $('#upload-btn1').click(function(e) {
      e.preventDefault();
      var image1 = wp.media({
          title: 'Upload Image',
          multiple: false
        }).open()
        .on('select', function(e) {
          var uploaded_image = image1.state().get('selection').first();
          console.log(uploaded_image);
          var image_url = uploaded_image.toJSON().url;
          $('#image_url1').val(image_url);
        });
    });

    $('#roku_app').on('click', function(e) {
      $.ajax({
          type: "POST",
          dataType: 'jsonp',
          url: "http://factory.upg.gr/index.php",
          username: 'user',
          password: 'pass',
          crossDomain : true,
          xhrFields: {
              withCredentials: true
          }
      })
          .done(function( data ) {
              console.log("done");
          })
          .fail( function(xhr, textStatus, errorThrown) {
              alert(xhr.responseText);
              alert(textStatus);
          });

    });

    $('#upload-btn2').click(function(e) {
      e.preventDefault();
      var image2 = wp.media({
          title: 'Upload Image',
          multiple: false
        }).open()
        .on('select', function(e) {
          var uploaded_image = image2.state().get('selection').first();
          console.log(uploaded_image);
          var image_url = uploaded_image.toJSON().url;
          $('#image_url2').val(image_url);
        });
    });
    $('#upload-btn3').click(function(e) {
      e.preventDefault();
      var image3 = wp.media({
          title: 'Upload Image',
          multiple: false
        }).open()
        .on('select', function(e) {
          var uploaded_image = image3.state().get('selection').first();
          console.log(uploaded_image);
          var image_url = uploaded_image.toJSON().url;
          $('#image_url3').val(image_url);
        });
    });

  });
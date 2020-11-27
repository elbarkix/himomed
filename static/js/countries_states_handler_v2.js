try {

    function addCountries(selectObject, defaultValueByCountryCode) {

        for (var code in countryList) {
            selectObject.append('<option value="' + code + '" class="different option">' + countryList[code] + '</option>');
        }

        selectObject.find("option[value='" + defaultValueByCountryCode + "']").attr("selected", true);
        selectObject.val( defaultValueByCountryCode );
    }

    function update_country_state() {

        if (countryStateDict[$('#id_country').val()]) {

            $('#state_div').show();
            $('#id_state').replaceWith('<select name="state" class="form-control" id="id_state"></select>');
            $('#id_state').append('<option value="" disabled selected>'+ ($('#id_country').val() === 'GB' ? 'Select County' : $('#id_country').val() === 'PT' || $('input[name=language]').val() === 'pt' ? 'Distrito' : $('#id_country').val() === 'FR' || $('input[name=language]').val() === 'fr' ? 'RÃ©gion' : $('#id_country').val() === 'DE' || $('input[name=language]').val() === 'de' ? 'BundeslÃ¤nder' : $('#id_country').val() === 'IT' || $('input[name=language]').val() === 'it' ? 'Regioni' : $('#id_country').val() === 'ES' || $('input[name=language]').val() === 'es' ? 'Provincias' : 'Select State') + '</option>');
            $.each(countryStateDict[$('#id_country').val()], function(index, stateDict) {
                $('#id_state').append('<option value="'+stateDict.stateCode+'">'+stateDict.stateName+'</option>');
            });

            if ($('input[name=phone]').length > 0 && $('#id_country').val() === 'US' && $.fn.mask) {
                $('input[name=phone]').mask('000-000-0000');
            } else {
                $('input[name=phone]').unmask();
            }

        } else {

            $('#id_state').empty();
            $('#id_state').replaceWith('<input type="text" class="form-control" name="state" id="id_state" placeholder="State" />');

            $('#id_state').keydown(function() {
                $(this).removeClass('error');
                $(this).parent().removeClass('has-error');
            });

            $('#state_div').hide();
        }

        if ($('#id_country_mobile').length > 0) {
            if (countryStateDict[$('#id_country_mobile').val()]) {

                $('#id_state_mobile').parent().show();
                $('#id_state_mobile').replaceWith('<select name="state" class="form-control" id="id_state_mobile"></select>');
                $.each(countryStateDict[$('#id_country_mobile').val()], function(index, stateDict) {
                    $('#id_state_mobile').append('<option value="'+stateDict.stateCode+'">'+stateDict.stateName+'</option>');
                });

            } else {

                $('#id_state_mobile').empty();
                $('#id_state_mobile').replaceWith('<input type="text" class="form-control" name="state" id="id_state_mobile" placeholder="State" />');

                $('#id_state_mobile').keydown(function() {
                    $(this).removeClass('error');
                    $(this).parent().removeClass('has-error');
                });

                $('#id_state_mobile').parent().hide();
            }
        }

        if ($('#id_country_sp').length > 0) {
            if (countryStateDict[$('#id_country_sp').val()]) {

                $('#id_state_sp').parent().show();
                $('#id_state_sp').replaceWith('<select name="sp_state" class="form-control" id="id_state_sp"></select>');
                $('#id_state_sp').append('<option value="" disabled selected>'+ ($('#id_country').val() === 'GB' ? 'Select County' : $('#id_country').val() === 'PT' || $('input[name=language]').val() === 'pt' ? 'Distrito' : $('#id_country').val() === 'FR' || $('input[name=language]').val() === 'fr' ? 'RÃ©gion' : $('#id_country').val() === 'DE' || $('input[name=language]').val() === 'de' ? 'BundeslÃ¤nder' : $('#id_country').val() === 'IT' || $('input[name=language]').val() === 'it' ? 'Regioni' : $('#id_country').val() === 'ES' || $('input[name=language]').val() === 'es' ? 'Provincias' : 'Select State') + '</option>');
                $.each(countryStateDict[$('#id_country_sp').val()], function(index, stateDict) {
                    $('#id_state_sp').append('<option value="'+stateDict.stateCode+'">'+stateDict.stateName+'</option>');
                });

            } else {

                $('#id_state_sp').empty();
                $('#id_state_sp').replaceWith('<input type="text" class="form-control" name="sp_state" id="id_state_sp" placeholder="State" />');

                $('#id_state_sp').keydown(function() {
                    $(this).removeClass('error');
                    $(this).parent().removeClass('has-error');
                });
            }
        }
    }

} catch(e) {
    var params= {
        errormessage: e.message + '. countries_states_handler.js',
        name: e.name,
        stack: e.stack,
        screen: { width: window.screen.width, height: window.screen.height }
    };

    sendJsError( params );
}

$(document).ready(function() {

    if (typeof iso_code == 'undefined') {

        iso_code = 'US';

        var params= {
            errormessage: 'No Iso Code defined. countries_states_handler.js',
            name: 'In country list',
            stack: '',
            screen: { width: 1, height: 1 }
        };

        sendJsError( params );
    }

    $('#id_country').append('<option value="">Select Country</option>');
    $('#id_country_sp').append('<option value="">Select Country</option>');

    addCountries($("#id_country"), iso_code); 			// iso_code located in <head>, assigned by php
    addCountries($("#id_country_mobile"), iso_code);
    addCountries($("#id_country_sp"), iso_code);

    update_country_state();


    // set sate and city
    if ((iso_code == 'US' || iso_code == 'CA' || iso_code == 'AU') && typeof geodata != 'undefined') {



        try {
            geodata = JSON.parse(geodata);

            if (geodata['subdivisions_iso_code'] != '') {




                // set state
                $('#id_state').val(geodata['subdivisions_iso_code']);
                $('#id_state_mobile').val(geodata['subdivisions_iso_code']);
                $('#id_state_sp').val(geodata['subdivisions_iso_code']);

                // set city
                if (geodata['city'] != '' && $('input[type="text"][name="city"]').val() == '') {
                    $('input[type="text"][name="city"]').val(geodata['city']);
                }


            }

        } catch(e) {

            params = {
                errormessage: 'Error JSON parse geodata. countries_states_handler.js - ' + geodata,
                name: 'In country list',
                stack: '',
                screen: { width: 1, height: 1 }
            };

            sendJsError( params );
        }
    }

    $('#id_country, #id_country_mobile, #id_country_sp').change(function() {
        update_country_state();
    });
});

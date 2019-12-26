
function bell_icon_setCookie( cname, cvalue, exdays ) {
    var d = new Date();
    //console.log(cname, cvalue, exdays);
    d.setTime( d.getTime() + ( 30 * 60 * 1000 ) );
    var expires = 'expires='+d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function bell_icon_getCookie( cname ) {
    var name = cname + '=';
    var ca   = document.cookie.split( ';' );
    for( var i = 0; i < ca.length; i++ ) {
        var c = ca[i];
        while ( ' ' === c.charAt( 0 ) ) {
            c = c.substring( 1 );
        }
        if ( 0 === c.indexOf( name ) ) {
            return c.substring( name.length, c.length );
        }
    }
    return '';
}
function runMyFunction(){
    document.cookie.split(";").forEach(function(c) {
        var names = c.replace(/^ +/, "").split("=");
        //alert(names[0]);
        if( ( 'fe_num1_count' === names[0] ) || ( 'fe_num2_count' === names[0] ) || ('fe_num3_count' === names[0] ) || ( 'fe_notification_count' === names[0] ) ){
            //alert('hiiiiiii');
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=0;expires=" + new Date().toUTCString() + ";path=/");
        }
    });
}
export default (jQuery( document ).ready( function() {
    var getParams = function (url) {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };
    var currunt_url = window.location.href;
    var all_strings = getParams(currunt_url);
    //console.log(all_strings);
    if( 'amp_section' === all_strings.amp_pagetype ){
        bell_icon_setCookie( 'fe_check_page_type','amp_section', 365 );
        bell_icon_setCookie( 'fe_notification_count',all_strings.total, 365 );
    }
    else if( 'amp_single' === all_strings.amp_pagetype ){
        bell_icon_setCookie( 'fe_notification_count',all_strings.total, 365 );
        bell_icon_setCookie( 'fe_check_page_type','amp_single', 365 );
    }
    try {
        var user_from = 'others';
        var reffer = document.referrer;
        //alert("Refer From = " +reffer);
        if ( '' !== reffer ) {
            if ( reffer.indexOf('google') > -1 ) {
                user_from = 'organic';
            } else if ( reffer.indexOf('t.co') > -1 || reffer.indexOf('whatsapp') > -1 || reffer.indexOf('facebook') > -1 || reffer.indexOf('twitter') > -1 || reffer.indexOf('instagram') > -1 || reffer.indexOf('reddit') > -1 || reffer.indexOf('linkedin') > -1 || reffer.indexOf('quora') > -1 ) {
                user_from = 'social';
            } else if ( reffer.indexOf('financialexpress') > -1 ) {
                user_from = 'direct';
            }
        }
        var coming_from = bell_icon_getCookie('fe_user_referer');
        //alert('coming_from'+coming_from);
        if( 'social' !== coming_from && 'organic' !== coming_from ){
            bell_icon_setCookie( 'fe_user_referer', user_from, 365 );
        }
        bell_icon_setCookie( 'fe_check_page_type', check_type, 365 );
        bell_icon_setCookie( 'fe_user_story_id', s_post_id, 365 );
        var user_count = bell_icon_getCookie('fe_user_counter');
        var count1  = bell_icon_getCookie('fe_num1_count');
        var count2  = bell_icon_getCookie('fe_num2_count');
        var count3  = bell_icon_getCookie('fe_num3_count');
        var total1  = bell_icon_getCookie('fe_notification_count');
        if( '' === count1 && '' === count2 && '' === count3 &&  '' === total1 ){
            bell_icon_setCookie( 'fe_num1_count',num1, 365 );
            bell_icon_setCookie( 'fe_num2_count',num2, 365 );
            bell_icon_setCookie( 'fe_num3_count',num3, 365 );
            bell_icon_setCookie( 'fe_notification_count',total, 365 );
        }else{

        }
        jQuery(".bell-icon sub").text(total1!='' ? total1 : total);
        if ( '' === user_count ){
            bell_icon_setCookie( 'fe_user_counter',1, 365 );
        }else{
            bell_icon_setCookie( 'fe_user_counter', parseInt(user_count)+1 , 365 );
        }
        var user_type_from = bell_icon_getCookie( 'fe_user_referer' );
        var bell_slug = '';
        if ( 'others' === user_type_from  || 'direct' === user_type_from ) {
            bell_slug = 'top-news';
        } else if ( 'organic' === user_type_from ) {
            if( 'single' === check_type){
                bell_slug = 'related-news';
            }else{
                bell_slug = 'top-news';
            }
        } else if ( 'social' === user_type_from ) {
            if( 'single' === check_type){
                bell_slug = 'social-news';
            }else{
                bell_slug = 'top-news';
            }
        }
        //alert("s_post_id== "+ s_post_id +'Page type ==='+check_type +" user_type_from ==="+user_type_from +'bell_slug== '+bell_slug);
        if ( '' !== bell_slug ) {
            bell_slug = location.protocol + '//' + location.hostname + '/' + encodeURIComponent( bell_slug ) + '/?from='+user_type_from;
            jQuery(".bell-icon").attr("href", bell_slug );
        }else{
            bell_slug = location.protocol + '//' + location.hostname + '/' + encodeURIComponent( bell_slug ) + '/?from='+user_type_from;
            jQuery(".bell-icon").attr("href", bell_slug );
        }
    }
    catch( error ){ }


    jQuery(window).scroll(function(){
        if(jQuery(window).scrollTop() > 100){
            jQuery('.bell-icon').css('display', 'flex');
        }
        else{
            jQuery('.bell-icon').css('display', 'none');
        }
    });
    jQuery( "#tabshere" ).load(window.location.href + " #tabshere" );
})
)()


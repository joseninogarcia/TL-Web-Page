
$(document).ready(function () {

    /*
    This pane is for the sidebar. This is important and should be used as well.
    */

    $("#inner-weibo").mouseenter(function () {
        $("#part-weibo").show();
    });

    $("#inner-weibo").mouseleave(function () {
        $("#part-weibo").hide();
    });

    $("#inner-wechat").mouseenter(function () {
        $("#part-wechat").show();
    });

    $("#inner-wechat").mouseleave(function () {
        $("#part-wechat").hide();
    });

    $("#inner-qq").mouseenter(function () {
        $("#part-qq").show();
    });

    $("#inner-qq").mouseleave(function () {
        $("#part-qq").hide();
    });

    $("#inner-msn").mouseenter(function () {
        $("#part-msn").show();
    });

    $("#inner-msn").mouseleave(function () {
        $("#part-msn").hide();
    });

    $("#inner-skype").mouseenter(function () {
        $("#part-skype").show();
    });

    $("#inner-skype").mouseleave(function () {
        $("#part-skype").hide();
    });

    $("#inner-email").mouseenter(function () {
        $("#part-email").show();
    });

    $("#inner-email").mouseleave(function () {
        $("#part-email").hide();
    });

    $("#inner-contact").mouseenter(function () {
        $("#part-contact").show();
    });

    $("#inner-contact").mouseleave(function () {
        $("#part-contact").hide();
    });

    /*
    This pane is make used of the jQuery Plugin for hovering Navigation
    */

    $(".portal a").HoveringTopContent({
        dataWidth: 110
    });

    $(".sitemap a").HoveringTopContent({
        dataWidth: 110
    });

    $(".promo a").HoveringTopContent({
        dataWidth: 110
    });

    $(".event a").HoveringTopContent({
        dataWidth: 110
    });

    $(".clubs a").HoveringTopContent({
        dataWidth: 110
    });

    $(".faq a").HoveringTopContent({
        dataWidth: 110
    });

    $(".news a").HoveringTopContent({
        dataWidth: 110
    });

    $(".interaction a").HoveringTopContent({
        dataWidth: 110
    });

    $(".teaching a").HoveringTopContent({
        dataWidth: 110
    });

    $(".siteBodyContentInquire .link04").HoveringFromLeftContent({
        dataHeight : 166
    });

});
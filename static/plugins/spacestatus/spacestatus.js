const spacestatus_endpoint = "https://members.pawprintprototyping.org/api/spacedirectory/";

const update_spacestatus_callback = function(data) {
        
    const updated = new Date(data.state.lastchange * 1000).toISOString();
    const title = "Updated: " + updated + "\n" + data.state.message;
    if (data.state.open) {
        $("#spacestatus").removeClass("ss-closed").addClass("ss-open");
        $("#spacestatus+a").html("Open").prop("title", title);;
    } else {
        $("#spacestatus").removeClass("ss-open").addClass("ss-closed");
        $("#spacestatus+a").html("Closed").prop("title", title);
    }
    
};

const update_spacestatus_fail = function(data) {
    $("#spacestatus+a").html("?");
}

$(document).ready(function () {
    $.get(spacestatus_endpoint, update_spacestatus_callback)
        .fail(update_spacestatus_fail);

});
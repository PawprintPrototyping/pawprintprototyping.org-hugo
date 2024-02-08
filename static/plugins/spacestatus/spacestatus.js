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

    $(".ion-ios-people + .count").attr("data-count", data.sensors.total_member_count.value);
    $(".member-count").html(data.sensors.total_member_count.value);
    
};

const update_spacestatus_fail = function(data) {
    $("#spacestatus+a").html("?");
}

$(document).ready(function () {
    const update_spacestatus = function () {
        $.get(spacestatus_endpoint, update_spacestatus_callback)
            .fail(update_spacestatus_fail);
    };

    update_spacestatus();
    setInterval(update_spacestatus, 30000);
});
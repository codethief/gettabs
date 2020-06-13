function onRefreshButtonClicked() {
    let querying = browser.tabs.query({});
    querying.then(updateTextArea, onError);
}

function updateTextArea(tabs) {
    tablist = "";

    for (let tab of tabs) {
        tablist += tab.url + "\n"
    }

    document.getElementById("tablist").value = tablist;
}

function onCopyButtonClicked() {
    if (!navigator.clipboard) {
        window.alert(
            "Unfortunately, your browser version does not support clipboard " +
            "access for extensions. Please copy the list manually:\n\n" +
            "1. Right click / long press within the text area.\n" +
            "2. Choose 'Select all'.\n" +
            "(3. Right click / long press once more if necessary.)\n" +
            "4. Choose 'Copy.' \n"
        )
        return;
    }
    // Requires at least Firefox 63, Chrome 66
    navigator.clipboard.writeText(document.getElementById("tablist").value);
}

function onError(err) {
    console.log("Error while trying to access list of tabs:", err);
}

document.getElementById("refreshButton").onclick = onRefreshButtonClicked;
document.getElementById("copyButton").onclick = onCopyButtonClicked;

// Automatically populate text area
onRefreshButtonClicked();

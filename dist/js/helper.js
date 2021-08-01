const  navDropDownRemoveCalss = function(navDropDown) {
    navDropDown.forEach(el => el.classList.remove('open__collapse-menu'))
}


var dataTableData = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]

export default {
    name:  "Harith",
    NavRemoveClass: navDropDownRemoveCalss,
    dTable: dataTableData
};
// Javascript object to hold multiple sections of one course
const aCourse = {
    name: "Intro to Underwater Basket-Weaving",
    code: "UBW101",
    sections: [
        { 
            sectionNum: 1, 
            RoomNum: 'STC 231', 
            enrolled: 48, 
            days: 'TTh', 
            instructor: 'Brother Comeau' 
        },
        { 
            sectionNum: 2, 
            RoomNum: 'STC 105', 
            enrolled: 3, 
            days: 'TTh', 
            instructor: 'Brother Kay' 
        },
    ],
    enrollStudent: function(sectionNum) {
        // sectionNum represents the section the user wants to enroll a student in
        // Find that section in our array and add a student to it

        // 'this' refers to the object that contains this function
        // 'find' returns the first value that passes the conditional
        const section = this.sections.find(sec => sec.sectionNum == sectionNum);
        if (section != undefined) {
            section.enrolled++;
            renderSections(this.sections);
        }
    }

};

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

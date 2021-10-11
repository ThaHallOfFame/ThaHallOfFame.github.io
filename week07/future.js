var job_title = ["Manager", "Engineer", "Teacher", "Nurse"];
var geographic_location = ["Mansfield", "Dallas", "Birmingham", "Desoto"];
var partner_name = ["Ashley", "Tara", "Amber", "Ebony"];
var number_of_children = [1, 2, 3, 4];

var rand_int = Math.floor(Math.random() * 4);

function fortune(job_title, geographic_location, partner_name, number_of_children) {
document.write("You will be a " + job_title + " in " + geographic_location + ", and married to " + partner_name + " with " + number_of_children + " kids.");
}

fortune(job_title[rand_int], geographic_location[rand_int], partner_name[rand_int], number_of_children[rand_int]);

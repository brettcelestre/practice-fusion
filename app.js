
$(document).ready(function(){
  
    // Selects dropdown element
    var $areaDropdown = $('#area-dropdown'),
        $specialtyDropdown = $('#specialty-dropdown'),
        fields = {
          '-': ['-'],
          'Dentistry': ['Dentistry-area1', 'Dentistry-area2', 'Dentistry-area3'],
          'Dermatology': ['Dermatology-area1', 'Dermatology-area2', 'Dermatology-area3'],
          'Family Medicine': ['Family Medicine-area1', 'Family Medicine-area2', 'Family Medicine-area3'],
          'General Surgery': ['General Surgery-area1', 'General Surgery-area2', 'General Surgery-area3'],
          'Psychiatry': ['Psychiatry-area1', 'Psychiatry-area2', 'Psychiatry-area3']
        }
        
    // Populates area dropdown
    for (var key in fields) {
      // Builds Dropdown with area names
      $('<option>').val(key).text(key).appendTo($areaDropdown);
    }
    
    // Invokes selectedSpecialty with selected area
    $('#area-dropdown').change(function(){
      selectedSpecialty($(this).val());
    });
    
    var selectedSpecialty = function(area){
      // Clears previous specialties
      $($specialtyDropdown).find('option').remove().end();
      // Populates specialty dropdown
      for ( var i = 0; i < fields[area].length; i++ ) {
        $('<option>').val(fields[area][i]).text(fields[area][i]).appendTo($specialtyDropdown);
      }
    };
    
      // Sorting Priority
          // Area > Specialty > Review
          // Once those doctors are depleted sort by review highest > lowest
          
});


// Ruby Area formula
// ['Physician', 'Neurologist', 'Medical Research', 'Anesthesiologist', 'Surgeon'].sample
// Ruby Specialty formula
// ['Orthodontics', 'Anatomical Pathology', 'Virology', 'Physiology', 'Anesthesiology', 'Cardiac Surgeon', 'Abdominal Surgeon', 'Toxicology'].sample

// Database of doctors
// This is a randomly generated JSON data set. The specialties and area are randomly selected and don't
// align properly in regards to actual areas of medicine.
var database = {
  'doctors': [
  {
    "name": "Frank West",
    "area": "Psychiatry",
    "speciality": "Physiology",
    "review": 3.5,
    "gender": "Male",
    "longitude": "-79.46631",
    "latitude": "44.05011"
  }, {
    "name": "Mildred Carter",
    "area": "Psychiatry",
    "speciality": "Anatomical Pathology",
    "review": 4.5,
    "gender": "Female",
    "longitude": "119.86023",
    "latitude": "27.85277"
  }, {
    "name": "Roger Black",
    "area": "Dentistry",
    "speciality": "Abdominal Surgeon",
    "review": 2.4,
    "gender": "Male",
    "longitude": "106.38673",
    "latitude": "21.30626"
  }, {
    "name": "Jose Welch",
    "area": "Dermatology",
    "speciality": "Anatomical Pathology",
    "review": 3.2,
    "gender": "Male",
    "longitude": "124.2858",
    "latitude": "-9.845"
  }, {
    "name": "Kevin Larson",
    "area": "Family Medicine",
    "speciality": "Virology",
    "review": 3.6,
    "gender": "Male",
    "longitude": "10.21889",
    "latitude": "36.75306"
  }, {
    "name": "Diana Moreno",
    "area": "Dentistry",
    "speciality": "Cardiac Surgeon",
    "review": 1.4,
    "gender": "Female",
    "longitude": "4.8734",
    "latitude": "43.9334"
  }, {
    "name": "Ruth Howard",
    "area": "Family Medicine",
    "speciality": "Anesthesiology",
    "review": 4.5,
    "gender": "Female",
    "longitude": "-8.8167",
    "latitude": "39.8167"
  }, {
    "name": "Amanda Hansen",
    "area": "Family Medicine",
    "speciality": "Abdominal Surgeon",
    "review": 2.6,
    "gender": "Female",
    "longitude": "37.66471",
    "latitude": "53.98548"
  }, {
    "name": "Amanda Hernandez",
    "area": "Psychiatry",
    "speciality": "Physiology",
    "review": 2.1,
    "gender": "Female",
    "longitude": "108.1944",
    "latitude": "-7.2801"
  }, {
    "name": "Shawn Evans",
    "area": "Dermatology",
    "speciality": "Physiology",
    "review": 1.3,
    "gender": "Male",
    "longitude": "22.92617",
    "latitude": "40.49874"
  }, {
    "name": "Todd Dixon",
    "area": "Dentistry",
    "speciality": "Orthodontics",
    "review": 4.6,
    "gender": "Male",
    "longitude": "107.07336",
    "latitude": "20.95045"
  }, {
    "name": "Joshua Hanson",
    "area": "Dentistry",
    "speciality": "Anatomical Pathology",
    "review": 3.1,
    "gender": "Male",
    "longitude": "22.13333",
    "latitude": "39.61667"
  }, {
    "name": "David Medina",
    "area": "Dermatology",
    "speciality": "Toxicology",
    "review": 3.9,
    "gender": "Male",
    "longitude": "-79.65333",
    "latitude": "22.31194"
  }, {
    "name": "Joe Pierce",
    "area": "Dermatology",
    "speciality": "Virology",
    "review": 4.3,
    "gender": "Male",
    "longitude": "82.40722",
    "latitude": "43.48722"
  }, {
    "name": "Melissa Long",
    "area": "Dermatology",
    "speciality": "Physiology",
    "review": 3.7,
    "gender": "Female",
    "longitude": "5.9694",
    "latitude": "52.21"
  }, {
    "name": "Janet Mills",
    "area": "Dentistry",
    "speciality": "Virology",
    "review": 2.3,
    "gender": "Female",
    "longitude": "-47.51861",
    "latitude": "-22.58056"
  }, {
    "name": "Philip Lynch",
    "area": "Dermatology",
    "speciality": "Abdominal Surgeon",
    "review": 4.7,
    "gender": "Male",
    "longitude": "38.17118",
    "latitude": "53.98179"
  }, {
    "name": "Debra Watkins",
    "area": "Dermatology",
    "speciality": "Orthodontics",
    "review": 2.1,
    "gender": "Female",
    "longitude": "9.7351",
    "latitude": "4.7182"
  }, {
    "name": "Todd Larson",
    "area": "Family Medicine",
    "speciality": "Anatomical Pathology",
    "review": 4.6,
    "gender": "Male",
    "longitude": "16.07261",
    "latitude": "51.50391"
  }, {
    "name": "Maria Berry",
    "area": "Dermatology",
    "speciality": "Orthodontics",
    "review": 3.4,
    "gender": "Female",
    "longitude": "25.09985",
    "latitude": "35.20555"
  }, {
    "name": "Steven Ruiz",
    "area": "Dentistry",
    "speciality": "Toxicology",
    "review": 3.8,
    "gender": "Male",
    "longitude": "100.55458",
    "latitude": "1.08738"
  }, {
    "name": "Shawn Rodriguez",
    "area": "Psychiatry",
    "speciality": "Toxicology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "24.75",
    "latitude": "42.15"
  }, {
    "name": "Amanda Parker",
    "area": "Dentistry",
    "speciality": "Cardiac Surgeon",
    "review": 3.5,
    "gender": "Female",
    "longitude": "76.31538",
    "latitude": "38.93824"
  }, {
    "name": "Cheryl Dunn",
    "area": "Dermatology",
    "speciality": "Toxicology",
    "review": 1.8,
    "gender": "Female",
    "longitude": "123.1073",
    "latitude": "11.2161"
  }, {
    "name": "Norma Reynolds",
    "area": "Psychiatry",
    "speciality": "Virology",
    "review": 2.9,
    "gender": "Female",
    "longitude": "108.96329",
    "latitude": "34.30455"
  }, {
    "name": "Kelly Jacobs",
    "area": "Dentistry",
    "speciality": "Anatomical Pathology",
    "review": 1.4,
    "gender": "Female",
    "longitude": "107.81284",
    "latitude": "-7.54946"
  }, {
    "name": "Phyllis Smith",
    "area": "General Surgery",
    "speciality": "Physiology",
    "review": 3.0,
    "gender": "Female",
    "longitude": "-77.85",
    "latitude": "-8.95"
  }, {
    "name": "Cynthia Garza",
    "area": "Dermatology",
    "speciality": "Orthodontics",
    "review": 4.1,
    "gender": "Female",
    "longitude": "34.29614",
    "latitude": "-12.92744"
  }, {
    "name": "Willie Thomas",
    "area": "General Surgery",
    "speciality": "Cardiac Surgeon",
    "review": 2.3,
    "gender": "Male",
    "longitude": "108.10548",
    "latitude": "28.22392"
  }, {
    "name": "Andrew Scott",
    "area": "Psychiatry",
    "speciality": "Orthodontics",
    "review": 2.8,
    "gender": "Male",
    "longitude": "98.6961",
    "latitude": "2.6081"
  }, {
    "name": "Andrea Shaw",
    "area": "General Surgery",
    "speciality": "Virology",
    "review": 1.1,
    "gender": "Female",
    "longitude": "82.36098",
    "latitude": "50.24489"
  }, {
    "name": "Lillian Harrison",
    "area": "Psychiatry",
    "speciality": "Abdominal Surgeon",
    "review": 1.3,
    "gender": "Female",
    "longitude": "-75.68935",
    "latitude": "4.39318"
  }, {
    "name": "Sharon Howell",
    "area": "Psychiatry",
    "speciality": "Virology",
    "review": 2.4,
    "gender": "Female",
    "longitude": "16.06067",
    "latitude": "49.1077"
  }, {
    "name": "Helen Hunter",
    "area": "Family Medicine",
    "speciality": "Abdominal Surgeon",
    "review": 2.5,
    "gender": "Female",
    "longitude": "26.75377",
    "latitude": "56.60826"
  }, {
    "name": "Stephanie James",
    "area": "General Surgery",
    "speciality": "Virology",
    "review": 4.5,
    "gender": "Female",
    "longitude": "14.53839",
    "latitude": "46.20484"
  }, {
    "name": "Robert Wallace",
    "area": "Family Medicine",
    "speciality": "Anatomical Pathology",
    "review": 3.3,
    "gender": "Male",
    "longitude": "94.40414",
    "latitude": "49.65963"
  }, {
    "name": "Patrick Edwards",
    "area": "Psychiatry",
    "speciality": "Virology",
    "review": 2.5,
    "gender": "Male",
    "longitude": "-91.66451",
    "latitude": "15.40487"
  }, {
    "name": "Theresa Mitchell",
    "area": "Psychiatry",
    "speciality": "Virology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "109.90308",
    "latitude": "32.23744"
  }, {
    "name": "Anne Baker",
    "area": "Dentistry",
    "speciality": "Virology",
    "review": 3.5,
    "gender": "Female",
    "longitude": "106.71789",
    "latitude": "-6.28862"
  }, {
    "name": "Nicole Elliott",
    "area": "Psychiatry",
    "speciality": "Anatomical Pathology",
    "review": 2.4,
    "gender": "Female",
    "longitude": "-64.52515",
    "latitude": "-30.86088"
  }, {
    "name": "Elizabeth Willis",
    "area": "Family Medicine",
    "speciality": "Abdominal Surgeon",
    "review": 3.9,
    "gender": "Female",
    "longitude": "29.42559",
    "latitude": "49.00449"
  }, {
    "name": "Gregory Stevens",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 3.9,
    "gender": "Male",
    "longitude": "-75.57028",
    "latitude": "4.6375"
  }, {
    "name": "Betty Kim",
    "area": "General Surgery",
    "speciality": "Physiology",
    "review": 2.0,
    "gender": "Female",
    "longitude": "111.31879",
    "latitude": "35.29731"
  }, {
    "name": "Richard Davis",
    "area": "Family Medicine",
    "speciality": "Cardiac Surgeon",
    "review": 1.3,
    "gender": "Male",
    "longitude": "119.22171",
    "latitude": "26.09899"
  }, {
    "name": "Carl Bell",
    "area": "Family Medicine",
    "speciality": "Cardiac Surgeon",
    "review": 2.3,
    "gender": "Male",
    "longitude": "-83.9622",
    "latitude": "35.9901"
  }, {
    "name": "Norma Morris",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 3.6,
    "gender": "Female",
    "longitude": "-75.45482",
    "latitude": "-11.81371"
  }, {
    "name": "Mark Fox",
    "area": "Family Medicine",
    "speciality": "Anatomical Pathology",
    "review": 4.3,
    "gender": "Male",
    "longitude": "117.3368",
    "latitude": "-8.5518"
  }, {
    "name": "George Lee",
    "area": "Dentistry",
    "speciality": "Virology",
    "review": 1.4,
    "gender": "Male",
    "longitude": "-101.4758",
    "latitude": "20.658"
  }, {
    "name": "Patrick Jenkins",
    "area": "Dermatology",
    "speciality": "Physiology",
    "review": 1.1,
    "gender": "Male",
    "longitude": "118.03451",
    "latitude": "24.56909"
  }, {
    "name": "Anna Lynch",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 4.0,
    "gender": "Female",
    "longitude": "-39.25139",
    "latitude": "-12.43028"
  }, {
    "name": "Patricia Hansen",
    "area": "Dentistry",
    "speciality": "Virology",
    "review": 4.5,
    "gender": "Female",
    "longitude": "21.71667",
    "latitude": "60.68333"
  }, {
    "name": "Nicholas Sanchez",
    "area": "Family Medicine",
    "speciality": "Toxicology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "72.23369",
    "latitude": "55.70128"
  }, {
    "name": "Albert Rose",
    "area": "General Surgery",
    "speciality": "Anesthesiology",
    "review": 4.7,
    "gender": "Male",
    "longitude": "31.89961",
    "latitude": "-28.87097"
  }, {
    "name": "Wayne Matthews",
    "area": "Dermatology",
    "speciality": "Virology",
    "review": 3.1,
    "gender": "Male",
    "longitude": "0.1667",
    "latitude": "44.5"
  }, {
    "name": "Steven Ryan",
    "area": "General Surgery",
    "speciality": "Physiology",
    "review": 2.3,
    "gender": "Male",
    "longitude": "10.4552",
    "latitude": "63.4365"
  }, {
    "name": "Fred Rodriguez",
    "area": "General Surgery",
    "speciality": "Anesthesiology",
    "review": 4.0,
    "gender": "Male",
    "longitude": "111.891",
    "latitude": "-8.0116"
  }, {
    "name": "Denise Howell",
    "area": "Psychiatry",
    "speciality": "Anesthesiology",
    "review": 2.1,
    "gender": "Female",
    "longitude": "24.5387",
    "latitude": "53.4122"
  }, {
    "name": "Ann Vasquez",
    "area": "Dentistry",
    "speciality": "Orthodontics",
    "review": 2.3,
    "gender": "Female",
    "longitude": "-98.9919",
    "latitude": "18.7031"
  }, {
    "name": "David Hunter",
    "area": "Psychiatry",
    "speciality": "Anatomical Pathology",
    "review": 2.2,
    "gender": "Male",
    "longitude": "40.10259",
    "latitude": "47.696"
  }, {
    "name": "Michael Murphy",
    "area": "Dentistry",
    "speciality": "Orthodontics",
    "review": 2.1,
    "gender": "Male",
    "longitude": "18.61547",
    "latitude": "50.2477"
  }, {
    "name": "Judith Russell",
    "area": "Psychiatry",
    "speciality": "Anatomical Pathology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "-7.9833",
    "latitude": "38.25"
  }, {
    "name": "Bobby Hicks",
    "area": "Dentistry",
    "speciality": "Anesthesiology",
    "review": 4.5,
    "gender": "Male",
    "longitude": "136.78333",
    "latitude": "35.25"
  }, {
    "name": "Christine Adams",
    "area": "Dentistry",
    "speciality": "Cardiac Surgeon",
    "review": 2.6,
    "gender": "Female",
    "longitude": "102.09924",
    "latitude": "16.5443"
  }, {
    "name": "Eugene Garrett",
    "area": "Psychiatry",
    "speciality": "Anesthesiology",
    "review": 1.3,
    "gender": "Male",
    "longitude": "123.6637",
    "latitude": "13.1175"
  }, {
    "name": "Bonnie Alexander",
    "area": "Dermatology",
    "speciality": "Virology",
    "review": 1.7,
    "gender": "Female",
    "longitude": "-8.6333",
    "latitude": "41.4"
  }, {
    "name": "Bruce Peters",
    "area": "General Surgery",
    "speciality": "Physiology",
    "review": 2.8,
    "gender": "Male",
    "longitude": "6.6966",
    "latitude": "7.106"
  }, {
    "name": "Christopher Smith",
    "area": "Dermatology",
    "speciality": "Physiology",
    "review": 2.2,
    "gender": "Male",
    "longitude": "114.20354",
    "latitude": "27.03328"
  }, {
    "name": "Anna Collins",
    "area": "Psychiatry",
    "speciality": "Physiology",
    "review": 4.8,
    "gender": "Female",
    "longitude": "23.33583",
    "latitude": "43.47222"
  }, {
    "name": "Jason Harvey",
    "area": "Dermatology",
    "speciality": "Virology",
    "review": 2.5,
    "gender": "Male",
    "longitude": "116.35886",
    "latitude": "25.84231"
  }, {
    "name": "Charles Dunn",
    "area": "General Surgery",
    "speciality": "Abdominal Surgeon",
    "review": 4.9,
    "gender": "Male",
    "longitude": "14.5753",
    "latitude": "56.0521"
  }, {
    "name": "Marilyn Morales",
    "area": "General Surgery",
    "speciality": "Toxicology",
    "review": 2.6,
    "gender": "Female",
    "longitude": "-72.4175",
    "latitude": "18.73583"
  }, {
    "name": "Andrea Sullivan",
    "area": "Family Medicine",
    "speciality": "Cardiac Surgeon",
    "review": 1.4,
    "gender": "Female",
    "longitude": "-39.28444",
    "latitude": "-14.59306"
  }, {
    "name": "Cheryl Stanley",
    "area": "General Surgery",
    "speciality": "Abdominal Surgeon",
    "review": 2.9,
    "gender": "Female",
    "longitude": "30.19978",
    "latitude": "51.38494"
  }, {
    "name": "Diana Gonzalez",
    "area": "Dentistry",
    "speciality": "Toxicology",
    "review": 3.5,
    "gender": "Female",
    "longitude": "22.01167",
    "latitude": "54.41056"
  }, {
    "name": "Rachel Gonzales",
    "area": "Dentistry",
    "speciality": "Abdominal Surgeon",
    "review": 3.0,
    "gender": "Female",
    "longitude": "107.50092",
    "latitude": "31.21592"
  }, {
    "name": "Thomas Howell",
    "area": "Psychiatry",
    "speciality": "Virology",
    "review": 1.4,
    "gender": "Male",
    "longitude": "2.6333",
    "latitude": "50.5333"
  }, {
    "name": "Lori Jordan",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 2.4,
    "gender": "Female",
    "longitude": "-8.2333",
    "latitude": "39.3833"
  }, {
    "name": "Roger Stephens",
    "area": "General Surgery",
    "speciality": "Anesthesiology",
    "review": 3.1,
    "gender": "Male",
    "longitude": "120.26131",
    "latitude": "30.51895"
  }, {
    "name": "Adam Fields",
    "area": "Dermatology",
    "speciality": "Toxicology",
    "review": 2.0,
    "gender": "Male",
    "longitude": "35.42287",
    "latitude": "46.81673"
  }, {
    "name": "George Davis",
    "area": "Dermatology",
    "speciality": "Orthodontics",
    "review": 3.7,
    "gender": "Male",
    "longitude": "28.28224",
    "latitude": "56.83568"
  }, {
    "name": "Martin Meyer",
    "area": "Family Medicine",
    "speciality": "Toxicology",
    "review": 4.0,
    "gender": "Male",
    "longitude": "-53.49139",
    "latitude": "-30.51222"
  }, {
    "name": "Rebecca Bowman",
    "area": "Dermatology",
    "speciality": "Cardiac Surgeon",
    "review": 3.1,
    "gender": "Female",
    "longitude": "14.85444",
    "latitude": "46.52139"
  }, {
    "name": "Jeremy Kennedy",
    "area": "Dermatology",
    "speciality": "Cardiac Surgeon",
    "review": 1.4,
    "gender": "Male",
    "longitude": "-48.71917",
    "latitude": "-22.23333"
  }, {
    "name": "Barbara Garcia",
    "area": "Dermatology",
    "speciality": "Abdominal Surgeon",
    "review": 1.8,
    "gender": "Female",
    "longitude": "-101.9372",
    "latitude": "26.2789"
  }, {
    "name": "Joan Lopez",
    "area": "Dermatology",
    "speciality": "Anesthesiology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "123.5819",
    "latitude": "-10.1609"
  }, {
    "name": "Timothy Carr",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 3.4,
    "gender": "Male",
    "longitude": "-8.8167",
    "latitude": "39.8167"
  }, {
    "name": "Sara Schmidt",
    "area": "Dermatology",
    "speciality": "Physiology",
    "review": 3.5,
    "gender": "Female",
    "longitude": "-8.2378",
    "latitude": "40.9349"
  }, {
    "name": "Charles Black",
    "area": "General Surgery",
    "speciality": "Anatomical Pathology",
    "review": 3.5,
    "gender": "Male",
    "longitude": "25.08333",
    "latitude": "37.03333"
  }, {
    "name": "Timothy Larson",
    "area": "Family Medicine",
    "speciality": "Anesthesiology",
    "review": 4.5,
    "gender": "Male",
    "longitude": "114.60396",
    "latitude": "28.13564"
  }, {
    "name": "Harold Vasquez",
    "area": "Dentistry",
    "speciality": "Toxicology",
    "review": 4.0,
    "gender": "Male",
    "longitude": "45.25693",
    "latitude": "-12.78339"
  }, {
    "name": "Angela Matthews",
    "area": "General Surgery",
    "speciality": "Orthodontics",
    "review": 4.5,
    "gender": "Female",
    "longitude": "-96.7776",
    "latitude": "32.7673"
  }, {
    "name": "Ann Thompson",
    "area": "General Surgery",
    "speciality": "Physiology",
    "review": 1.4,
    "gender": "Female",
    "longitude": "13.9582",
    "latitude": "58.1804"
  }, {
    "name": "Theresa Powell",
    "area": "Psychiatry",
    "speciality": "Anesthesiology",
    "review": 4.3,
    "gender": "Female",
    "longitude": "131.36667",
    "latitude": "31.6"
  }, {
    "name": "Harold Long",
    "area": "Psychiatry",
    "speciality": "Anatomical Pathology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "112.5234",
    "latitude": "-8.0329"
  }, {
    "name": "Victor Harris",
    "area": "Psychiatry",
    "speciality": "Physiology",
    "review": 2.9,
    "gender": "Male",
    "longitude": "122.0853",
    "latitude": "12.3134"
  }, {
    "name": "Mary Morales",
    "area": "Dentistry",
    "speciality": "Abdominal Surgeon",
    "review": 1.1,
    "gender": "Female",
    "longitude": "125.70083",
    "latitude": "6.14444"
  }, {
    "name": "George Ruiz",
    "area": "Dentistry",
    "speciality": "Toxicology",
    "review": 3.6,
    "gender": "Male",
    "longitude": "38.91667",
    "latitude": "5.75"
  }, {
    "name": "Michael Watkins",
    "area": "Dermatology",
    "speciality": "Cardiac Surgeon",
    "review": 4.1,
    "gender": "Male",
    "longitude": "18.37222",
    "latitude": "45.39889"
  }, {
    "name": "Ashley Alexander",
    "area": "Family Medicine",
    "speciality": "Physiology",
    "review": 4.8,
    "gender": "Female",
    "longitude": "-80.63333",
    "latitude": "8.16667"
  }, {
    "name": "Gerald Howard",
    "area": "General Surgery",
    "speciality": "Toxicology",
    "review": 2.5,
    "gender": "Male",
    "longitude": "7.9455",
    "latitude": "49.0371"
  }]
  
  
  // [
  //   {
  //     'name': 'Pierre Fauchard',
  //     'specialty': 'Orthodontics',
  //     'area': 'Physician',
  //     'review': 4.1 
  //   },
  //   {
  //     'name': 'Jean-Martin Charcot',
  //     'specialty': 'Anatomical Pathology',
  //     'area': 'Neurologist',
  //     'review': 4.6  
  //   },
  //   {
  //     'name': 'Jonas Salk',
  //     'specialty': 'Virology',
  //     'area': 'Medical Research',
  //     'review': 4.3  
  //   },
  //   {
  //     'name': 'William Harvey',
  //     'specialty': 'Physiology',
  //     'area': 'Physician',
  //     'review': 3.2  
  //   },
  //   {
  //     'name': 'Rosalyn Sussman Yalow',
  //     'specialty': 'Physiology',
  //     'area': 'Physician',
  //     'review': 4.7 
  //   },
  //   {
  //     'name': 'Virginia Apgar',
  //     'specialty': 'Anesthesiology',
  //     'area': 'Anesthesiologist',
  //     'review': 4.4 
  //   },
  //   {
  //     'name': 'Christiaan Barnard',
  //     'specialty': 'Cardiac Surgeon',
  //     'area': 'Surgeon',
  //     'review': 4.6 
  //   },
  //   {
  //     'name': 'Theodor Billroth',
  //     'specialty': 'Abdominal Surgeon',
  //     'area': 'Surgeon',
  //     'review': 3.8 
  //   },
  //   {
  //     'name': 'Paracelsus',
  //     'specialty': 'Toxicology',
  //     'area': 'Physician',
  //     'review': 2.6 
  //   }
  // ]
};

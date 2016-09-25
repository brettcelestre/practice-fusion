
$(document).ready(function(){
    // Selects dropdown element
    var $dropdown = $('.doctor-dropdown');
    // Populates dropdown list with doctors names from database
    for ( var i = 0; i < database.doctors.length; i++ ) {
      // Builds Dropdown with doctor names
      $('<option>').val(database.doctors[i].name).text(database.doctors[i].name).appendTo($dropdown);
    }
    
    // Invokes selectedDoctor with selected doctor
    $(document).on('change', 'select', function() {
      selectedDoctor($(this).val());
    });
    
    var selectedDoctor = function(doctor){
      console.log('you choose: ', doctor);
      // Sorting Priority
          // Area > Specialty > Review
          // Once those doctors are depleted sort by review highest > lowest
    };
    // Invokes with first doctor
    selectedDoctor(database.doctors[0].name);
    
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
    "name": "Philip Ward",
    "area": "Neurologist",
    "speciality": "Orthodontics",
    "review": 3.7,
    "gender": "Male",
    "longitude": "-70.19792",
    "latitude": "-22.09198"
  }, {
    "name": "Joshua Hudson",
    "area": "Anesthesiologist",
    "speciality": "Anesthesiology",
    "review": 4.8,
    "gender": "Male",
    "longitude": "94.81784",
    "latitude": "20.89921"
  }, {
    "name": "Helen Powell",
    "area": "Physician",
    "speciality": "Orthodontics",
    "review": 3.6,
    "gender": "Female",
    "longitude": "5.4497",
    "latitude": "43.5283"
  }, {
    "name": "Maria Rice",
    "area": "Medical Research",
    "speciality": "Anesthesiology",
    "review": 4.3,
    "gender": "Female",
    "longitude": "35.87098",
    "latitude": "48.53426"
  }, {
    "name": "Betty Ferguson",
    "area": "Surgeon",
    "speciality": "Anesthesiology",
    "review": 1.1,
    "gender": "Female",
    "longitude": "120.35",
    "latitude": "32.81667"
  }, {
    "name": "Christopher Hudson",
    "area": "Surgeon",
    "speciality": "Virology",
    "review": 2.1,
    "gender": "Male",
    "longitude": "23.45289",
    "latitude": "63.86067"
  }, {
    "name": "Jack Richardson",
    "area": "Neurologist",
    "speciality": "Anesthesiology",
    "review": 1.2,
    "gender": "Male",
    "longitude": "10.9108",
    "latitude": "59.9522"
  }, {
    "name": "Antonio Hanson",
    "area": "Surgeon",
    "speciality": "Virology",
    "review": 2.8,
    "gender": "Male",
    "longitude": "118.68889",
    "latitude": "25.92785"
  }, {
    "name": "Douglas Gomez",
    "area": "Physician",
    "speciality": "Physiology",
    "review": 2.3,
    "gender": "Male",
    "longitude": "98.40008",
    "latitude": "7.88481"
  }, {
    "name": "Todd Murphy",
    "area": "Surgeon",
    "speciality": "Toxicology",
    "review": 3.3,
    "gender": "Male",
    "longitude": "-61.26667",
    "latitude": "15.43333"
  }, {
    "name": "Gregory Wilson",
    "area": "Anesthesiologist",
    "speciality": "Physiology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "28.41661",
    "latitude": "-13.13667"
  }, {
    "name": "Billy Rogers",
    "area": "Surgeon",
    "speciality": "Cardiac Surgeon",
    "review": 3.4,
    "gender": "Male",
    "longitude": "139.68502",
    "latitude": "35.95225"
  }, {
    "name": "Teresa Patterson",
    "area": "Physician",
    "speciality": "Physiology",
    "review": 1.1,
    "gender": "Female",
    "longitude": "108.1889",
    "latitude": "-7.3862"
  }, {
    "name": "Lillian Carpenter",
    "area": "Physician",
    "speciality": "Anatomical Pathology",
    "review": 1.7,
    "gender": "Female",
    "longitude": "24.50614",
    "latitude": "37.15397"
  }, {
    "name": "Jane Medina",
    "area": "Surgeon",
    "speciality": "Virology",
    "review": 3.5,
    "gender": "Female",
    "longitude": "16.5077",
    "latitude": "59.3666"
  }, {
    "name": "Clarence James",
    "area": "Neurologist",
    "speciality": "Anesthesiology",
    "review": 1.7,
    "gender": "Male",
    "longitude": "115.20468",
    "latitude": "-8.58634"
  }, {
    "name": "Amanda Sanders",
    "area": "Anesthesiologist",
    "speciality": "Orthodontics",
    "review": 4.3,
    "gender": "Female",
    "longitude": "114.93335",
    "latitude": "27.80429"
  }, {
    "name": "Douglas Murray",
    "area": "Neurologist",
    "speciality": "Toxicology",
    "review": 1.0,
    "gender": "Male",
    "longitude": "115.65193",
    "latitude": "28.858"
  }, {
    "name": "Jeremy Daniels",
    "area": "Anesthesiologist",
    "speciality": "Toxicology",
    "review": 2.2,
    "gender": "Male",
    "longitude": "17.45969",
    "latitude": "49.06975"
  }, {
    "name": "Donna Murray",
    "area": "Anesthesiologist",
    "speciality": "Virology",
    "review": 4.7,
    "gender": "Female",
    "longitude": "4.91667",
    "latitude": "7.81667"
  }, {
    "name": "Teresa Ramirez",
    "area": "Anesthesiologist",
    "speciality": "Orthodontics",
    "review": 1.2,
    "gender": "Female",
    "longitude": "87.4881",
    "latitude": "47.1095"
  }, {
    "name": "Doris Gray",
    "area": "Physician",
    "speciality": "Physiology",
    "review": 1.2,
    "gender": "Female",
    "longitude": "108.25773",
    "latitude": "29.08953"
  }, {
    "name": "Barbara Kennedy",
    "area": "Neurologist",
    "speciality": "Cardiac Surgeon",
    "review": 2.3,
    "gender": "Female",
    "longitude": "107.51809",
    "latitude": "28.54964"
  }, {
    "name": "Diane Harper",
    "area": "Neurologist",
    "speciality": "Physiology",
    "review": 4.2,
    "gender": "Female",
    "longitude": "17.68444",
    "latitude": "43.12139"
  }, {
    "name": "Dennis Olson",
    "area": "Physician",
    "speciality": "Orthodontics",
    "review": 2.6,
    "gender": "Male",
    "longitude": "4.8833",
    "latitude": "52.085"
  }, {
    "name": "Christina Young",
    "area": "Surgeon",
    "speciality": "Physiology",
    "review": 2.8,
    "gender": "Female",
    "longitude": "-89.4239",
    "latitude": "43.0696"
  }, {
    "name": "Charles Nelson",
    "area": "Physician",
    "speciality": "Abdominal Surgeon",
    "review": 1.2,
    "gender": "Male",
    "longitude": "-86.55",
    "latitude": "13.86667"
  }, {
    "name": "Samuel Willis",
    "area": "Neurologist",
    "speciality": "Anesthesiology",
    "review": 2.4,
    "gender": "Male",
    "longitude": "123.78917",
    "latitude": "12.98056"
  }, {
    "name": "Ann Harrison",
    "area": "Medical Research",
    "speciality": "Cardiac Surgeon",
    "review": 3.8,
    "gender": "Female",
    "longitude": "-36.42417",
    "latitude": "-8.33556"
  }, {
    "name": "Ernest Allen",
    "area": "Anesthesiologist",
    "speciality": "Orthodontics",
    "review": 3.3,
    "gender": "Male",
    "longitude": "140.27361",
    "latitude": "38.15389"
  }, {
    "name": "Eugene Gardner",
    "area": "Surgeon",
    "speciality": "Physiology",
    "review": 3.1,
    "gender": "Male",
    "longitude": "123.4944",
    "latitude": "9.66"
  }, {
    "name": "Jerry Ward",
    "area": "Physician",
    "speciality": "Orthodontics",
    "review": 4.9,
    "gender": "Male",
    "longitude": "36.56667",
    "latitude": "56.48333"
  }, {
    "name": "Donna Baker",
    "area": "Neurologist",
    "speciality": "Anatomical Pathology",
    "review": 2.4,
    "gender": "Female",
    "longitude": "27.70361",
    "latitude": "48.35722"
  }, {
    "name": "Ruth Black",
    "area": "Anesthesiologist",
    "speciality": "Anesthesiology",
    "review": 4.8,
    "gender": "Female",
    "longitude": "-80.245",
    "latitude": "-3.48139"
  }, {
    "name": "Irene Meyer",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 4.1,
    "gender": "Female",
    "longitude": "122.3514",
    "latitude": "-8.6986"
  }, {
    "name": "Dennis Howard",
    "area": "Anesthesiologist",
    "speciality": "Toxicology",
    "review": 1.9,
    "gender": "Male",
    "longitude": "110.38919",
    "latitude": "24.50649"
  }, {
    "name": "Billy Richardson",
    "area": "Surgeon",
    "speciality": "Virology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "110.35972",
    "latitude": "26.42861"
  }, {
    "name": "Susan Washington",
    "area": "Neurologist",
    "speciality": "Orthodontics",
    "review": 1.4,
    "gender": "Female",
    "longitude": "20.375",
    "latitude": "45.27278"
  }, {
    "name": "Jose Phillips",
    "area": "Surgeon",
    "speciality": "Toxicology",
    "review": 4.0,
    "gender": "Male",
    "longitude": "22.38033",
    "latitude": "40.24395"
  }, {
    "name": "Virginia Bowman",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 1.0,
    "gender": "Female",
    "longitude": "120.46236",
    "latitude": "30.23344"
  }, {
    "name": "Paula Ford",
    "area": "Neurologist",
    "speciality": "Abdominal Surgeon",
    "review": 3.5,
    "gender": "Female",
    "longitude": "112.5636",
    "latitude": "-6.9993"
  }, {
    "name": "Peter Fuller",
    "area": "Anesthesiologist",
    "speciality": "Virology",
    "review": 3.1,
    "gender": "Male",
    "longitude": "23.91667",
    "latitude": "4.95"
  }, {
    "name": "Beverly Bishop",
    "area": "Surgeon",
    "speciality": "Abdominal Surgeon",
    "review": 1.6,
    "gender": "Female",
    "longitude": "1.1",
    "latitude": "44.0333"
  }, {
    "name": "Patricia Alvarez",
    "area": "Surgeon",
    "speciality": "Anatomical Pathology",
    "review": 1.4,
    "gender": "Female",
    "longitude": "68.77905",
    "latitude": "38.53575"
  }, {
    "name": "Diana Chavez",
    "area": "Surgeon",
    "speciality": "Orthodontics",
    "review": 3.3,
    "gender": "Female",
    "longitude": "-62.07359",
    "latitude": "-38.87588"
  }, {
    "name": "Christine Woods",
    "area": "Physician",
    "speciality": "Abdominal Surgeon",
    "review": 2.9,
    "gender": "Female",
    "longitude": "111.3514",
    "latitude": "-7.0202"
  }, {
    "name": "Amy James",
    "area": "Medical Research",
    "speciality": "Anatomical Pathology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "112.58745",
    "latitude": "22.14063"
  }, {
    "name": "Janet Hanson",
    "area": "Neurologist",
    "speciality": "Orthodontics",
    "review": 4.1,
    "gender": "Female",
    "longitude": "116.68292",
    "latitude": "30.12043"
  }, {
    "name": "Willie Fisher",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 4.0,
    "gender": "Male",
    "longitude": "124.6175",
    "latitude": "11.08972"
  }, {
    "name": "Lawrence Ramos",
    "area": "Surgeon",
    "speciality": "Orthodontics",
    "review": 4.3,
    "gender": "Male",
    "longitude": "0.7167",
    "latitude": "45.1833"
  }, {
    "name": "Patricia Gomez",
    "area": "Surgeon",
    "speciality": "Physiology",
    "review": 1.2,
    "gender": "Female",
    "longitude": "110.49426",
    "latitude": "19.60931"
  }, {
    "name": "Maria Hicks",
    "area": "Anesthesiologist",
    "speciality": "Physiology",
    "review": 1.9,
    "gender": "Female",
    "longitude": "16.88911",
    "latitude": "49.5903"
  }, {
    "name": "Betty Castillo",
    "area": "Neurologist",
    "speciality": "Virology",
    "review": 1.4,
    "gender": "Female",
    "longitude": "-67.39778",
    "latitude": "-8.75222"
  }, {
    "name": "Sharon Welch",
    "area": "Neurologist",
    "speciality": "Anesthesiology",
    "review": 4.4,
    "gender": "Female",
    "longitude": "-9.0667",
    "latitude": "38.6667"
  }, {
    "name": "John Hudson",
    "area": "Surgeon",
    "speciality": "Physiology",
    "review": 1.7,
    "gender": "Male",
    "longitude": "142.52866",
    "latitude": "46.71492"
  }, {
    "name": "Steven Morrison",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 3.3,
    "gender": "Male",
    "longitude": "113.88851",
    "latitude": "39.95091"
  }, {
    "name": "Kenneth Johnston",
    "area": "Anesthesiologist",
    "speciality": "Virology",
    "review": 4.6,
    "gender": "Male",
    "longitude": "33.54387",
    "latitude": "44.77635"
  }, {
    "name": "Steven Watson",
    "area": "Surgeon",
    "speciality": "Anesthesiology",
    "review": 1.5,
    "gender": "Male",
    "longitude": "16.17917",
    "latitude": "44.96"
  }, {
    "name": "Annie Morales",
    "area": "Medical Research",
    "speciality": "Anatomical Pathology",
    "review": 3.3,
    "gender": "Female",
    "longitude": "103.30372",
    "latitude": "23.69767"
  }, {
    "name": "Keith Day",
    "area": "Anesthesiologist",
    "speciality": "Cardiac Surgeon",
    "review": 4.9,
    "gender": "Male",
    "longitude": "113.2012",
    "latitude": "-8.0723"
  }, {
    "name": "Philip Payne",
    "area": "Neurologist",
    "speciality": "Cardiac Surgeon",
    "review": 1.6,
    "gender": "Male",
    "longitude": "124.35111",
    "latitude": "7.97889"
  }, {
    "name": "Marie Garcia",
    "area": "Medical Research",
    "speciality": "Anesthesiology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "12.8666",
    "latitude": "-7.23116"
  }, {
    "name": "Betty Jackson",
    "area": "Surgeon",
    "speciality": "Abdominal Surgeon",
    "review": 3.3,
    "gender": "Female",
    "longitude": "141",
    "latitude": "37.48333"
  }, {
    "name": "Phyllis Price",
    "area": "Medical Research",
    "speciality": "Anesthesiology",
    "review": 1.4,
    "gender": "Female",
    "longitude": "105.09552",
    "latitude": "33.28934"
  }, {
    "name": "Paul Cruz",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 3.9,
    "gender": "Male",
    "longitude": "-63.24763",
    "latitude": "-32.43293"
  }, {
    "name": "Stephanie Sims",
    "area": "Medical Research",
    "speciality": "Orthodontics",
    "review": 4.8,
    "gender": "Female",
    "longitude": "123.706",
    "latitude": "-8.2336"
  }, {
    "name": "Antonio Ramos",
    "area": "Physician",
    "speciality": "Virology",
    "review": 1.6,
    "gender": "Male",
    "longitude": "2.3219",
    "latitude": "48.8835"
  }, {
    "name": "Rose Nelson",
    "area": "Anesthesiologist",
    "speciality": "Abdominal Surgeon",
    "review": 3.3,
    "gender": "Female",
    "longitude": "23.87617",
    "latitude": "38.02544"
  }, {
    "name": "Anthony Morrison",
    "area": "Surgeon",
    "speciality": "Orthodontics",
    "review": 1.8,
    "gender": "Male",
    "longitude": "101.51857",
    "latitude": "25.25575"
  }, {
    "name": "Kathryn Peterson",
    "area": "Surgeon",
    "speciality": "Anesthesiology",
    "review": 1.1,
    "gender": "Female",
    "longitude": "29.9",
    "latitude": "59.88333"
  }, {
    "name": "Janet Chapman",
    "area": "Neurologist",
    "speciality": "Virology",
    "review": 3.2,
    "gender": "Female",
    "longitude": "23.31889",
    "latitude": "38.325"
  }, {
    "name": "Scott Warren",
    "area": "Medical Research",
    "speciality": "Cardiac Surgeon",
    "review": 3.3,
    "gender": "Male",
    "longitude": "44.27461",
    "latitude": "13.17535"
  }, {
    "name": "Jennifer Cruz",
    "area": "Neurologist",
    "speciality": "Toxicology",
    "review": 2.3,
    "gender": "Female",
    "longitude": "134.46806",
    "latitude": "34.80361"
  }, {
    "name": "Jessica Jacobs",
    "area": "Surgeon",
    "speciality": "Abdominal Surgeon",
    "review": 2.9,
    "gender": "Female",
    "longitude": "15.9667",
    "latitude": "58.525"
  }, {
    "name": "Dorothy Gibson",
    "area": "Neurologist",
    "speciality": "Physiology",
    "review": 1.3,
    "gender": "Female",
    "longitude": "-2.4597",
    "latitude": "36.8381"
  }, {
    "name": "Angela Jackson",
    "area": "Medical Research",
    "speciality": "Abdominal Surgeon",
    "review": 1.3,
    "gender": "Female",
    "longitude": "-89.35",
    "latitude": "14.68333"
  }, {
    "name": "Bruce James",
    "area": "Physician",
    "speciality": "Anatomical Pathology",
    "review": 1.9,
    "gender": "Male",
    "longitude": "114.3045",
    "latitude": "-8.396"
  }, {
    "name": "Pamela Day",
    "area": "Neurologist",
    "speciality": "Anatomical Pathology",
    "review": 4.5,
    "gender": "Female",
    "longitude": "8.41914",
    "latitude": "6.84526"
  }, {
    "name": "Janice Morrison",
    "area": "Physician",
    "speciality": "Anesthesiology",
    "review": 3.1,
    "gender": "Female",
    "longitude": "41.83736",
    "latitude": "-1.21933"
  }, {
    "name": "Beverly Mason",
    "area": "Neurologist",
    "speciality": "Physiology",
    "review": 3.3,
    "gender": "Female",
    "longitude": "-74.14922",
    "latitude": "45.45008"
  }, {
    "name": "James Gibson",
    "area": "Neurologist",
    "speciality": "Cardiac Surgeon",
    "review": 1.5,
    "gender": "Male",
    "longitude": "107.6864",
    "latitude": "-7.53562"
  }, {
    "name": "Carl Henry",
    "area": "Anesthesiologist",
    "speciality": "Anatomical Pathology",
    "review": 2.8,
    "gender": "Male",
    "longitude": "18.28583",
    "latitude": "45.54528"
  }, {
    "name": "Jane Reynolds",
    "area": "Neurologist",
    "speciality": "Orthodontics",
    "review": 3.9,
    "gender": "Female",
    "longitude": "27.46179",
    "latitude": "-17.2614"
  }, {
    "name": "Charles Bailey",
    "area": "Physician",
    "speciality": "Abdominal Surgeon",
    "review": 4.0,
    "gender": "Male",
    "longitude": "82.63472",
    "latitude": "42.16056"
  }, {
    "name": "Ernest Bennett",
    "area": "Anesthesiologist",
    "speciality": "Abdominal Surgeon",
    "review": 3.7,
    "gender": "Male",
    "longitude": "50.99848",
    "latitude": "53.27438"
  }, {
    "name": "Jacqueline Moreno",
    "area": "Anesthesiologist",
    "speciality": "Cardiac Surgeon",
    "review": 3.6,
    "gender": "Female",
    "longitude": "128.17873",
    "latitude": "41.39756"
  }, {
    "name": "Andrew Fowler",
    "area": "Anesthesiologist",
    "speciality": "Physiology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "108.496",
    "latitude": "-7.7015"
  }, {
    "name": "Patrick Howell",
    "area": "Surgeon",
    "speciality": "Orthodontics",
    "review": 2.3,
    "gender": "Male",
    "longitude": "175.15554",
    "latitude": "-37.66738"
  }, {
    "name": "Ryan Gomez",
    "area": "Physician",
    "speciality": "Physiology",
    "review": 2.7,
    "gender": "Male",
    "longitude": "112.37917",
    "latitude": "28.94389"
  }, {
    "name": "Angela Morrison",
    "area": "Medical Research",
    "speciality": "Physiology",
    "review": 4.2,
    "gender": "Female",
    "longitude": "-66.94078",
    "latitude": "-42.43553"
  }, {
    "name": "Jane Garza",
    "area": "Surgeon",
    "speciality": "Cardiac Surgeon",
    "review": 3.5,
    "gender": "Female",
    "longitude": "85.8729",
    "latitude": "44.53224"
  }, {
    "name": "Kathy Lawson",
    "area": "Neurologist",
    "speciality": "Abdominal Surgeon",
    "review": 3.2,
    "gender": "Female",
    "longitude": "31.2158",
    "latitude": "12.9061"
  }, {
    "name": "Roy Davis",
    "area": "Physician",
    "speciality": "Orthodontics",
    "review": 5.0,
    "gender": "Male",
    "longitude": "13.1102",
    "latitude": "55.7919"
  }, {
    "name": "Janet Evans",
    "area": "Medical Research",
    "speciality": "Virology",
    "review": 2.7,
    "gender": "Female",
    "longitude": "105.2201",
    "latitude": "35.49283"
  }, {
    "name": "Sara Ford",
    "area": "Physician",
    "speciality": "Orthodontics",
    "review": 4.8,
    "gender": "Female",
    "longitude": "130.29017",
    "latitude": "46.80168"
  }, {
    "name": "Phyllis Sullivan",
    "area": "Anesthesiologist",
    "speciality": "Anesthesiology",
    "review": 2.0,
    "gender": "Female",
    "longitude": "-58.481",
    "latitude": "-34.61082"
  }, {
    "name": "Gloria Burton",
    "area": "Anesthesiologist",
    "speciality": "Physiology",
    "review": 2.7,
    "gender": "Female",
    "longitude": "122.4971",
    "latitude": "11.5857"
  }, {
    "name": "Joan Webb",
    "area": "Anesthesiologist",
    "speciality": "Anatomical Pathology",
    "review": 2.6,
    "gender": "Female",
    "longitude": "19.32461",
    "latitude": "49.90492"
  }, {
    "name": "Lois Washington",
    "area": "Medical Research",
    "speciality": "Physiology",
    "review": 2.5,
    "gender": "Female",
    "longitude": "114.0376",
    "latitude": "-6.947"
  }, {
    "name": "Anthony Schmidt",
    "area": "Medical Research",
    "speciality": "Orthodontics",
    "review": 4.2,
    "gender": "Male",
    "longitude": "39.06667",
    "latitude": "-6.9"
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

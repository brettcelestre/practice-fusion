
$(document).ready(function(){
  
  // Selects dropdown element
  var $areaDropdown = $('#area-dropdown'),
      $specialtyDropdown = $('#specialty-dropdown'),
      $name = $('#name'),
      $review = $('#review'),
      $area = $('#area'),
      $areaTitle = $('#area-dropdown-title'),
      $specialty = $('#specialty'),
      $specialtyTitle = $('#specialty-dropdown-title'),
      $gender = $('#gender'),
      $doctorList = $('#doctor-list'),
      $doctors = $('#doctor-dropdown'),
      $doctorTitle = $('#doctors-dropdown-title'),
      // Current filter parameters
      currentFilter = {
          'type': 'review', 
          'order': 'DSC'
      },
      // Currently selected area
      currentArea = '',
      // Currently selected specialty
      currentSpecilty = '',
      // Stores most recent list of doctors based on currentFilters
      currentList = null,
      // Stores complete list
      currentGenderList = null,
      fields = {
        '-': ['-'],
        'Dentistry': ['All', 'Endodontics', 'Orthodontics', 'Periodontics'],
        'Dermatology': ['All', 'Dermatopathology', 'Immunodermatology', 'Phototherapy'],
        'Family Medicine': ['All', 'Geriatrics', 'Sports Medicine', 'Sleep Medicine'],
        'Surgery': ['All', 'Orthopaedic', 'Maxillofacial', 'Neurological'],
        'Psychiatry': ['All', 'Geriatric Psychiatry', 'Addiction Psychiatry', 'Adolescent Psychiatry']
      };

  // Updates currentFilter alphabetically
  $name.click(function() {
    // Clears other DOM filter indicators
    $review.html('<strong>Review Score</strong>');
    $gender.html('<strong>Gender</strong>');
    // Toggles alphabetical filter by ascending / descending
    currentFilter.type === 'name' && currentFilter.order === 'ASC' ? 
      currentFilter = {'type': 'name', 'order': 'DSC'} : 
      currentFilter = {'type': 'name', 'order': 'ASC'};
    // Updates Name button based on filter type
    if ( currentFilter.order === 'DSC' ) {
      $name.html('<strong>Name [A-Z]</strong>');
    } else if ( currentFilter.order === 'ASC' ) {
      $name.html('<strong>Name [Z-A]</strong>');
    }
    // Builds current list
    buildList(currentList, currentFilter);
  }).hover(function(){
    $(this).css("background", "#b3ecff")
      .css("border-radius", "1px")
      .css('cursor', 'pointer');
  }).mouseleave(function() {
      $(this).css("background", "000").css("border-radius", "0px");
  });

  // Review filter toggle
  $review.click(function() {
    // Clears other DOM filter indicators 
    $name.html('<strong>Name</strong>');
    $gender.html('<strong>Gender</strong>');
    // Toggles review filter by ascending / descending
    currentFilter.type === 'review' && currentFilter.order === 'ASC' ?
      currentFilter = {'type': 'review', 'order': 'DSC'} :
      currentFilter = {'type': 'review', 'order': 'ASC'};
    // Updates Review button based on filter type
    if ( currentFilter.order === 'DSC' ) {
      $review.html("<strong>Review Score </strong><span class='glyphicon glyphicon-triangle-bottom' aria-hidden='true'></span></strong>");
    } else if ( currentFilter.order === 'ASC' ) {
      $review.html("<strong>Review Score </strong><span class='glyphicon glyphicon-triangle-top' aria-hidden='true'></span></strong>");
    }
    // Builds current list
    buildList(currentList, currentFilter);
  }).hover(function(){
    $(this).css("background", "#b3ecff")
      .css("border-radius", "1px")
      .css('cursor', 'pointer');
  }).mouseleave(function() {
      $(this).css("background", "000").css("border-radius", "0px");
  });

  // Gender filter toggle
  $gender.click(function() {
    // Clears other DOM filter indicators
    $name.html('<strong>Name</strong>');
    $review.html('<strong>Review Score</strong>');
    // Toggles gender filter by Male / Female
    currentFilter.type === 'gender' && currentFilter.order === 'F' ?
      currentFilter = {'type': 'gender', 'order': 'M'} :
      currentFilter = {'type': 'gender', 'order': 'F'};
    // Updates Gender button based on filter type
    if ( currentFilter.order === 'M' ) {
      $gender.html('<strong>Gender [M-F]</strong>');
    } else if ( currentFilter.order === 'F' ) {
      $gender.html('<strong>Gender [F-M]</strong>');
    }
    // Builds current list
    buildList(currentList, currentFilter);
  }).hover(function(){
    $(this).css("background", "#b3ecff")
      .css("border-radius", "1px")
      .css('cursor', 'pointer');
  }).mouseleave(function() {
      $(this).css("background", "000").css("border-radius", "0px");
  });
    
  $area.hover(function(){
    $(this).css("background", "#f2f2f2").css("border-radius", "1px");
  }).mouseleave(function() {
    $(this).css("background", "000").css("border-radius", "0px");
  });
  
  $specialty.hover(function(){
    $(this).css("background", "#f2f2f2").css("border-radius", "1px");
  }).mouseleave(function() {
    $(this).css("background", "000").css("border-radius", "0px");
  });

  // Populates area dropdown
  for (var key in fields) {
    // Builds Dropdown with area names
    $('<li>').html('<a href="#">' + key + '</a>').appendTo($areaDropdown);
  }
  
  // Invokes selectedSpecialty with selected area
  $doctors.on("click", "li", function() {
    // Clears area/specialty dropdown titles
    $areaTitle.text('Area');
    $specialtyTitle.text('Specialty');
    // Updates doctor search name
    $doctorTitle.text($(this).text().split(',')[0].substr(0));
    // Stores selected area
    currentArea = $(this).text().split(',')[2].substr(1);
    // Builds specialty dropdown with area
    populateSpecialtyDoctors(currentArea);
  });

  // Invokes selectedSpecialty with selected area
  $areaDropdown.on("click", "li", function() {
    // Clears doctors search title
    $doctorTitle.text('Doctors');
    // Sets new search title
    $areaTitle.text($(this).text());
    // Stores selected area
    currentArea = $(this).text();
    // Builds specialty dropdown with area
    selectedSpecialty($(this).text());
  });

  // Builds specialty dropdown based on selected area
  var selectedSpecialty = function(area) {
    // Clears previous specialties
    $($specialtyDropdown).find('li').remove().end();
    // Populates specialty dropdown
    for ( var i = 0; i < fields[area].length; i++ ) {
      $('<li>').html('<a href="#">' + fields[area][i] + '</a>').appendTo($specialtyDropdown);
    }
    // Populates doctors with same area
    populateAreaDoctors(area);
  };

  $('#specialty-dropdown').on("click", "li", function() {
    // Clears doctors search title
    $doctorTitle.text('Doctors');
    // Sets new search title
    $specialtyTitle.text($(this).text());
    // Stores selected specialty
    currentSpecialty = $(this).text();
    // Checks selection
    if ( $(this).text() === 'All' ) {
        // Populates all doctors of the current area
        populateAreaDoctors(currentArea);
    } else {
        // Populates doctors of specific specialty
    populateSpecialtyDoctors($(this).text());
    }
  });

  // Sorts doctors by area
  var populateAreaDoctors = function(area) {
    // Stores areas
    var areas = [];
    // Makes sure something was selected from dropdown
    if ( area !== '-' ) {
      // Filters doctors by area only
      database.doctors.forEach(function(val) {
        if ( val['area'] === area) {
          areas.push(val);
        }
      });
      // Sorts filtered areas by current filter
      sortList(areas, currentFilter);
    }
    // Updates current list of doctors
    currentList = areas;
    // Builds current list
    buildList(currentList, currentFilter);
  };
    
  // Sorts doctors by specialty
  var populateSpecialtyDoctors = function(specialty) {
    // Stores specialists
    var specialists = [];
    // Filters doctors by specialty only    
    database.doctors.forEach(function(val) {
      if ( val['specialty'] === specialty) {
        specialists.push(val);
      }
    });
    // Updates currentList of doctors
    currentList = specialists;
    // Builds current list
    buildList(currentList, currentFilter);
  };
    
  // Append list function, takes in a sorted array
  var appendList = function(array) {
    // Clears out doctor list
    $doctorList.empty();
    // Makes sure array exists and contains at least 1 doctor
    if ( array && array.length >= 1 ) {
      // Appends each doctor to table
      array.forEach(function(val) {
        $doctorList.append('<tr><td>' + val.name + '</td>' +
          '<td>' + val.area + '</td>' +
          '<td>' + val.specialty + '</td>' +
          '<td>' + val.review + '</td>' +
          '<td>' + val.gender + '</td></tr>');   
      });
    }
  };

  // Sorts any list based on currently set filter
  var sortList = function(array, filter) {
    // Stores type of filter
    var type = filter.type,
    // Stores types order
        order = filter.order;
    // Makes sure the array exists
    if ( array ) {
      
      // Review Sort
      if ( type === 'review' && order === 'DSC') {
      // Sorts by review: descending
        return array.sort(function(a, b) {
          return b[type] - a[type];
        });
      } else if ( type === 'review' && order === 'ASC' ) {
      // Sorts by review: ascending
        return array.sort(function(a, b) {
          return a[type] - b[type];
        });
      }

      // Gender Sort
      if ( type === 'gender' ) {
        // Sorts and stores all females
        var female = [];
        array.forEach(function(val) {
          if ( val[type] === 'Female' ) {
            female.push(val);
          }
        });
        // Sorts females by review - descending
        sortList(female, {'type': 'review', 'order': 'DSC'});
        // Sorts and stores all males
        var male = [];
        array.forEach(function(val) {
          if ( val[type] === 'Male') {
            male.push(val);
          }
        });
        // Sorts males by review - descending
        sortList(male, {'type': 'review', 'order': 'DSC'});
        // Orders M-F or F-M
        if ( order === 'F' ) {
          // Combines sorted gender arrays, female-male
          var femaleSort = female.concat(male);
          currentList = femaleSort;
        } else if ( order === 'M' ) {
          // Combines sorted gender arrays, male-female
          var maleSort = male.concat(female);
          currentList = maleSort;
        }
      }
      
      // Name Sort
      if ( type === 'name' && order  === 'DSC' ) {
        // Sorts names in descending order
        array.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
        currentList = array;
      } else if ( type === 'name' && order === 'ASC' ) {
        // Sorts names in ascending order
        array.sort(function(a, b) {
          if ( a.name < b.name ) return 1;
          if ( a.name > b.name ) return -1;
          return 0;
        });
        currentList = array;
      }
    }
  };
  
  // Sorts doctors by name
  sortList(database.doctors, {'type': 'name', 'order': 'DSC'});
  
  // Populates doctor dropdown
  for (var key in database.doctors) {
    // Builds Dropdown with area names
    $('<li>').html('<a href="#">' + database.doctors[key].name + ', ' + database.doctors[key].area + ', ' + database.doctors[key].specialty + '</a>').appendTo($doctors);
  }

  // Builds DOM with current list and filters
  var buildList = function(list, filters) {
    sortList(list, filters);
    appendList(currentList);
  };

});

// Sorting Priority
  // Default Sort: Area > Specialty > Review: descending
  // Filter Options: Review | Gender | Name
    // Name:   Toggle Descending /Ascending
    // Review: Toggle Descending / Ascending
    // Gender: Toggle F-M / M-F
      // By default, gender's secondary sort is by review: descending
      
// Future additions:
  // Filter by location. I ran out of time, but you may have noticed
  // I added longitude/latitude property/values to my JSON dataset.
  // I would have added an input for the users ZIP code, then allowed
  // you to filter by nearest/furtherst doctor to your location.

// Database of doctors
// The properties and values of this JSON dataset are randomly selected from set parameters.
var database = {
  'doctors': [
  {
    "name": "Frank West",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 3.5,
    "gender": "Male",
    "longitude": "-79.46631",
    "latitude": "44.05011"
  }, {
    "name": "Mildred Carter",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 4.5,
    "gender": "Female",
    "longitude": "119.86023",
    "latitude": "27.85277"
  }, {
    "name": "Roger Black",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 2.4,
    "gender": "Male",
    "longitude": "106.38673",
    "latitude": "21.30626"
  }, {
    "name": "Jose Welch",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 3.2,
    "gender": "Male",
    "longitude": "124.2858",
    "latitude": "-9.845"
  }, {
    "name": "Kevin Larson",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 3.6,
    "gender": "Male",
    "longitude": "10.21889",
    "latitude": "36.75306"
  }, {
    "name": "Diana Moreno",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 1.4,
    "gender": "Female",
    "longitude": "4.8734",
    "latitude": "43.9334"
  }, {
    "name": "Ruth Howard",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 4.5,
    "gender": "Female",
    "longitude": "-8.8167",
    "latitude": "39.8167"
  }, {
    "name": "Amanda Hansen",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 2.6,
    "gender": "Female",
    "longitude": "37.66471",
    "latitude": "53.98548"
  }, {
    "name": "Amanda Hernandez",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 2.1,
    "gender": "Female",
    "longitude": "108.1944",
    "latitude": "-7.2801"
  }, {
    "name": "Shawn Evans",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 1.3,
    "gender": "Male",
    "longitude": "22.92617",
    "latitude": "40.49874"
  }, {
    "name": "Todd Dixon",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 4.6,
    "gender": "Male",
    "longitude": "107.07336",
    "latitude": "20.95045"
  }, {
    "name": "Joshua Hanson",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 3.1,
    "gender": "Male",
    "longitude": "22.13333",
    "latitude": "39.61667"
  }, {
    "name": "David Medina",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 3.9,
    "gender": "Male",
    "longitude": "-79.65333",
    "latitude": "22.31194"
  }, {
    "name": "Joe Pierce",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 4.3,
    "gender": "Male",
    "longitude": "82.40722",
    "latitude": "43.48722"
  }, {
    "name": "Melissa Long",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 3.7,
    "gender": "Female",
    "longitude": "5.9694",
    "latitude": "52.21"
  }, {
    "name": "Janet Mills",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 2.3,
    "gender": "Female",
    "longitude": "-47.51861",
    "latitude": "-22.58056"
  }, {
    "name": "Philip Lynch",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 4.7,
    "gender": "Male",
    "longitude": "38.17118",
    "latitude": "53.98179"
  }, {
    "name": "Debra Watkins",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 2.1,
    "gender": "Female",
    "longitude": "9.7351",
    "latitude": "4.7182"
  }, {
    "name": "Todd Larson",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 4.6,
    "gender": "Male",
    "longitude": "16.07261",
    "latitude": "51.50391"
  }, {
    "name": "Maria Berry",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 3.4,
    "gender": "Female",
    "longitude": "25.09985",
    "latitude": "35.20555"
  }, {
    "name": "Steven Ruiz",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 3.8,
    "gender": "Male",
    "longitude": "100.55458",
    "latitude": "1.08738"
  }, {
    "name": "Shawn Rodriguez",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 2.7,
    "gender": "Male",
    "longitude": "24.75",
    "latitude": "42.15"
  }, {
    "name": "Amanda Parker",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 3.5,
    "gender": "Female",
    "longitude": "76.31538",
    "latitude": "38.93824"
  }, {
    "name": "Cheryl Dunn",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 1.8,
    "gender": "Female",
    "longitude": "123.1073",
    "latitude": "11.2161"
  }, {
    "name": "Norma Reynolds",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 2.9,
    "gender": "Female",
    "longitude": "108.96329",
    "latitude": "34.30455"
  }, {
    "name": "Kelly Jacobs",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 1.4,
    "gender": "Female",
    "longitude": "107.81284",
    "latitude": "-7.54946"
  }, {
    "name": "Phyllis Smith",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 3.0,
    "gender": "Female",
    "longitude": "-77.85",
    "latitude": "-8.95"
  }, {
    "name": "Cynthia Garza",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 4.1,
    "gender": "Female",
    "longitude": "34.29614",
    "latitude": "-12.92744"
  }, {
    "name": "Willie Thomas",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 2.3,
    "gender": "Male",
    "longitude": "108.10548",
    "latitude": "28.22392"
  }, {
    "name": "Andrew Scott",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 2.8,
    "gender": "Male",
    "longitude": "98.6961",
    "latitude": "2.6081"
  }, {
    "name": "Andrea Shaw",
    "area": "Surgery",
    "specialty": "Neurological",
    "review": 1.1,
    "gender": "Female",
    "longitude": "82.36098",
    "latitude": "50.24489"
  }, {
    "name": "Lillian Harrison",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 1.3,
    "gender": "Female",
    "longitude": "-75.68935",
    "latitude": "4.39318"
  }, {
    "name": "Sharon Howell",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 2.4,
    "gender": "Female",
    "longitude": "16.06067",
    "latitude": "49.1077"
  }, {
    "name": "Helen Hunter",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 2.5,
    "gender": "Female",
    "longitude": "26.75377",
    "latitude": "56.60826"
  }, {
    "name": "Stephanie James",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 4.5,
    "gender": "Female",
    "longitude": "14.53839",
    "latitude": "46.20484"
  }, {
    "name": "Robert Wallace",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 3.3,
    "gender": "Male",
    "longitude": "94.40414",
    "latitude": "49.65963"
  }, {
    "name": "Patrick Edwards",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 2.5,
    "gender": "Male",
    "longitude": "-91.66451",
    "latitude": "15.40487"
  }, {
    "name": "Theresa Mitchell",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 4.1,
    "gender": "Female",
    "longitude": "109.90308",
    "latitude": "32.23744"
  }, {
    "name": "Anne Baker",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 3.5,
    "gender": "Female",
    "longitude": "106.71789",
    "latitude": "-6.28862"
  }, {
    "name": "Nicole Elliott",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 2.4,
    "gender": "Female",
    "longitude": "-64.52515",
    "latitude": "-30.86088"
  }, {
    "name": "Elizabeth Willis",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 3.9,
    "gender": "Female",
    "longitude": "29.42559",
    "latitude": "49.00449"
  }, {
    "name": "Gregory Stevens",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 3.9,
    "gender": "Male",
    "longitude": "-75.57028",
    "latitude": "4.6375"
  }, {
    "name": "Betty Kim",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 2.0,
    "gender": "Female",
    "longitude": "111.31879",
    "latitude": "35.29731"
  }, {
    "name": "Richard Davis",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 1.3,
    "gender": "Male",
    "longitude": "119.22171",
    "latitude": "26.09899"
  }, {
    "name": "Carl Bell",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 2.3,
    "gender": "Male",
    "longitude": "-83.9622",
    "latitude": "35.9901"
  }, {
    "name": "Norma Morris",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 3.6,
    "gender": "Female",
    "longitude": "-75.45482",
    "latitude": "-11.81371"
  }, {
    "name": "Mark Fox",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 4.3,
    "gender": "Male",
    "longitude": "117.3368",
    "latitude": "-8.5518"
  }, {
    "name": "George Lee",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 1.4,
    "gender": "Male",
    "longitude": "-101.4758",
    "latitude": "20.658"
  }, {
    "name": "Patrick Jenkins",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 1.1,
    "gender": "Male",
    "longitude": "118.03451",
    "latitude": "24.56909"
  }, {
    "name": "Anna Lynch",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 4.0,
    "gender": "Female",
    "longitude": "-39.25139",
    "latitude": "-12.43028"
  }, {
    "name": "Patricia Hansen",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 4.5,
    "gender": "Female",
    "longitude": "21.71667",
    "latitude": "60.68333"
  }, {
    "name": "Nicholas Sanchez",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 2.7,
    "gender": "Male",
    "longitude": "72.23369",
    "latitude": "55.70128"
  }, {
    "name": "Albert Rose",
    "area": "Surgery",
    "specialty": "Neurological",
    "review": 4.7,
    "gender": "Male",
    "longitude": "31.89961",
    "latitude": "-28.87097"
  }, {
    "name": "Wayne Matthews",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 3.1,
    "gender": "Male",
    "longitude": "0.1667",
    "latitude": "44.5"
  }, {
    "name": "Steven Ryan",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 2.3,
    "gender": "Male",
    "longitude": "10.4552",
    "latitude": "63.4365"
  }, {
    "name": "Fred Rodriguez",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 4.0,
    "gender": "Male",
    "longitude": "111.891",
    "latitude": "-8.0116"
  }, {
    "name": "Denise Howell",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 2.1,
    "gender": "Female",
    "longitude": "24.5387",
    "latitude": "53.4122"
  }, {
    "name": "Ann Vasquez",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 2.3,
    "gender": "Female",
    "longitude": "-98.9919",
    "latitude": "18.7031"
  }, {
    "name": "David Hunter",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 2.2,
    "gender": "Male",
    "longitude": "40.10259",
    "latitude": "47.696"
  }, {
    "name": "Michael Murphy",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 2.1,
    "gender": "Male",
    "longitude": "18.61547",
    "latitude": "50.2477"
  }, {
    "name": "Judith Russell",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 4.1,
    "gender": "Female",
    "longitude": "-7.9833",
    "latitude": "38.25"
  }, {
    "name": "Bobby Hicks",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 4.5,
    "gender": "Male",
    "longitude": "136.78333",
    "latitude": "35.25"
  }, {
    "name": "Christine Adams",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 2.6,
    "gender": "Female",
    "longitude": "102.09924",
    "latitude": "16.5443"
  }, {
    "name": "Eugene Garrett",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 1.3,
    "gender": "Male",
    "longitude": "123.6637",
    "latitude": "13.1175"
  }, {
    "name": "Bonnie Alexander",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 1.7,
    "gender": "Female",
    "longitude": "-8.6333",
    "latitude": "41.4"
  }, {
    "name": "Bruce Peters",
    "area": "Surgery",
    "specialty": "Neurological",
    "review": 2.8,
    "gender": "Male",
    "longitude": "6.6966",
    "latitude": "7.106"
  }, {
    "name": "Christopher Smith",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 2.2,
    "gender": "Male",
    "longitude": "114.20354",
    "latitude": "27.03328"
  }, {
    "name": "Anna Collins",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 4.8,
    "gender": "Female",
    "longitude": "23.33583",
    "latitude": "43.47222"
  }, {
    "name": "Jason Harvey",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 2.5,
    "gender": "Male",
    "longitude": "116.35886",
    "latitude": "25.84231"
  }, {
    "name": "Charles Dunn",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 4.9,
    "gender": "Male",
    "longitude": "14.5753",
    "latitude": "56.0521"
  }, {
    "name": "Marilyn Morales",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 2.6,
    "gender": "Female",
    "longitude": "-72.4175",
    "latitude": "18.73583"
  }, {
    "name": "Andrea Sullivan",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 1.4,
    "gender": "Female",
    "longitude": "-39.28444",
    "latitude": "-14.59306"
  }, {
    "name": "Cheryl Stanley",
    "area": "Surgery",
    "specialty": "Neurological",
    "review": 2.9,
    "gender": "Female",
    "longitude": "30.19978",
    "latitude": "51.38494"
  }, {
    "name": "Diana Gonzalez",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 3.5,
    "gender": "Female",
    "longitude": "22.01167",
    "latitude": "54.41056"
  }, {
    "name": "Rachel Gonzales",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 3.0,
    "gender": "Female",
    "longitude": "107.50092",
    "latitude": "31.21592"
  }, {
    "name": "Thomas Howell",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 1.4,
    "gender": "Male",
    "longitude": "2.6333",
    "latitude": "50.5333"
  }, {
    "name": "Lori Jordan",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 2.4,
    "gender": "Female",
    "longitude": "-8.2333",
    "latitude": "39.3833"
  }, {
    "name": "Roger Stephens",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 3.1,
    "gender": "Male",
    "longitude": "120.26131",
    "latitude": "30.51895"
  }, {
    "name": "Adam Fields",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 2.0,
    "gender": "Male",
    "longitude": "35.42287",
    "latitude": "46.81673"
  }, {
    "name": "George Davis",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 3.7,
    "gender": "Male",
    "longitude": "28.28224",
    "latitude": "56.83568"
  }, {
    "name": "Martin Meyer",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 4.0,
    "gender": "Male",
    "longitude": "-53.49139",
    "latitude": "-30.51222"
  }, {
    "name": "Rebecca Bowman",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 3.1,
    "gender": "Female",
    "longitude": "14.85444",
    "latitude": "46.52139"
  }, {
    "name": "Jeremy Kennedy",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 1.4,
    "gender": "Male",
    "longitude": "-48.71917",
    "latitude": "-22.23333"
  }, {
    "name": "Barbara Garcia",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 1.8,
    "gender": "Female",
    "longitude": "-101.9372",
    "latitude": "26.2789"
  }, {
    "name": "Joan Lopez",
    "area": "Dermatology",
    "specialty": "Phototherapy",
    "review": 4.1,
    "gender": "Female",
    "longitude": "123.5819",
    "latitude": "-10.1609"
  }, {
    "name": "Timothy Carr",
    "area": "Family Medicine",
    "specialty": "Sleep Medicine",
    "review": 3.4,
    "gender": "Male",
    "longitude": "-8.8167",
    "latitude": "39.8167"
  }, {
    "name": "Sara Schmidt",
    "area": "Dermatology",
    "specialty": "Dermatopathology",
    "review": 3.5,
    "gender": "Female",
    "longitude": "-8.2378",
    "latitude": "40.9349"
  }, {
    "name": "Charles Black",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 3.5,
    "gender": "Male",
    "longitude": "25.08333",
    "latitude": "37.03333"
  }, {
    "name": "Timothy Larson",
    "area": "Family Medicine",
    "specialty": "Geriatrics",
    "review": 4.5,
    "gender": "Male",
    "longitude": "114.60396",
    "latitude": "28.13564"
  }, {
    "name": "Harold Vasquez",
    "area": "Dentistry",
    "specialty": "Periodontics",
    "review": 4.0,
    "gender": "Male",
    "longitude": "45.25693",
    "latitude": "-12.78339"
  }, {
    "name": "Angela Matthews",
    "area": "Surgery",
    "specialty": "Neurological",
    "review": 4.5,
    "gender": "Female",
    "longitude": "-96.7776",
    "latitude": "32.7673"
  }, {
    "name": "Ann Thompson",
    "area": "Surgery",
    "specialty": "Orthopaedic",
    "review": 1.4,
    "gender": "Female",
    "longitude": "13.9582",
    "latitude": "58.1804"
  }, {
    "name": "Theresa Powell",
    "area": "Psychiatry",
    "specialty": "Adolescent Psychiatry",
    "review": 4.3,
    "gender": "Female",
    "longitude": "131.36667",
    "latitude": "31.6"
  }, {
    "name": "Harold Long",
    "area": "Psychiatry",
    "specialty": "Geriatric Psychiatry",
    "review": 2.7,
    "gender": "Male",
    "longitude": "112.5234",
    "latitude": "-8.0329"
  }, {
    "name": "Victor Harris",
    "area": "Psychiatry",
    "specialty": "Addiction Psychiatry",
    "review": 2.9,
    "gender": "Male",
    "longitude": "122.0853",
    "latitude": "12.3134"
  }, {
    "name": "Mary Morales",
    "area": "Dentistry",
    "specialty": "Endodontics",
    "review": 1.1,
    "gender": "Female",
    "longitude": "125.70083",
    "latitude": "6.14444"
  }, {
    "name": "George Ruiz",
    "area": "Dentistry",
    "specialty": "Orthodontics",
    "review": 3.6,
    "gender": "Male",
    "longitude": "38.91667",
    "latitude": "5.75"
  }, {
    "name": "Michael Watkins",
    "area": "Dermatology",
    "specialty": "Immunodermatology",
    "review": 4.1,
    "gender": "Male",
    "longitude": "18.37222",
    "latitude": "45.39889"
  }, {
    "name": "Ashley Alexander",
    "area": "Family Medicine",
    "specialty": "Sports Medicine",
    "review": 4.8,
    "gender": "Female",
    "longitude": "-80.63333",
    "latitude": "8.16667"
  }, {
    "name": "Gerald Howard",
    "area": "Surgery",
    "specialty": "Maxillofacial",
    "review": 2.5,
    "gender": "Male",
    "longitude": "7.9455",
    "latitude": "49.0371"
  }]
};

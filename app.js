
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

// Database of doctors
var database = {
  'doctors': [
    {
      'name': 'Pierre Fauchard',
      'specialty': 'Orthodontics',
      'area': 'Physician',
      'review': 4.1 
    },
    {
      'name': 'Jean-Martin Charcot',
      'specialty': 'Anatomical Pathology',
      'area': 'Neurologist',
      'review': 4.6  
    },
    {
      'name': 'Jonas Salk',
      'specialty': 'Virology',
      'area': 'Medical Research',
      'review': 4.3  
    },
    {
      'name': 'William Harvey',
      'specialty': 'Physiology',
      'area': 'Physician',
      'review': 3.2  
    },
    {
      'name': 'Rosalyn Sussman Yalow',
      'specialty': 'Physiology',
      'area': 'Physician',
      'review': 4.7 
    }
  ]
};

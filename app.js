//From tutorial below address;
//https://scotch.io/tutorials/build-a-real-time-scheduling-app-using-angularjs-and-firebase

// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
	var ref = new Firebase("https://brilliant-torch-7453.firebaseio.com/days");
	var fb = $firebase(ref);

	$scope.reset = function(){

		 fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          0100: {
            time: '1:00am',
            booked: false
          },
          0300: {
            time: '3:00am',
            booked: false
          },
          0500: {
            time: '5:00am',
            booked: false
          },
          0700: {
            time: '7:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          0100: {
            time: '1:00am',
            booked: false
          },
          0300: {
            time: '3:00am',
            booked: false
          },
          0500: {
            time: '5:00am',
            booked: false
          },
          0700: {
            time: '7:00am',
            booked: false
          }
        }
      },
      wednesday: {
        name: 'Wednesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          0100: {
            time: '1:00am',
            booked: false
          },
          0300: {
            time: '3:00am',
            booked: false
          },
          0500: {
            time: '5:00am',
            booked: false
          },
          0700: {
            time: '7:00am',
            booked: false
          }
        }
      },
      thursday: {
        name: 'Thursday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          0100: {
            time: '1:00am',
            booked: false
          },
          0300: {
            time: '3:00am',
            booked: false
          },
          0500: {
            time: '5:00am',
            booked: false
          },
          0700: {
            time: '7:00am',
            booked: false
          }
        }
      },
      friday: {
        name: 'Friday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          1100: {
            time: '11:00am',
            booked: false
          },
          0100: {
            time: '1:00am',
            booked: false
          },
          0300: {
            time: '3:00am',
            booked: false
          },
          0500: {
            time: '5:00am',
            booked: false
          },
          0700: {
            time: '7:00am',
            booked: false
          }
        }
      }
    }); 
			
	}

	var syncObject = fb.$asObject();

	syncObject.$bindTo($scope, 'days');


});
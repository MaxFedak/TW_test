import { faBriefcase, faCar, faList, faExclamationCircle, faClock, faMapMarkerAlt, faCarSide, faListAlt, faEye, faFolder } from '@fortawesome/free-solid-svg-icons';

export const tabs = [
    {name: 'All Vehicles', icon: faCar},
    {name: 'Cases', icon: faBriefcase},
    {name: 'Events', icon: faList},
];

export const vehicles = [
    {
      id: 1,
      registration: 'KU22 BBD',
      status: 'In Transit',
      lastUpdated: 'Today 12:00 AM',
      location: '3 Beecham Court Wigan',
      make: 'Ford',
      model: 'Focus',
      cases: [
        { id: 'Case-6324', note: 'Reported a flat tire on M6.', status: 'new' },
      ],
    },
    {
      id: 2,
      registration: 'AB12 CDE',
      status: 'Stationary',
      lastUpdated: 'Today 11:00 AM',
      location: '22 Acacia Avenue, London',
      make: 'BMW',
      model: 'X5',
      cases: [
        { id: 'Case-1123', note: 'Engine overheating issue reported near Baker Street.', status: 'picked' },
        { id: 'Case-1134', note: 'Minor collision with another vehicle in parking lot.', status: 'archived' },
      ],
    },
    {
      id: 3,
      registration: 'XY34 FGH',
      status: 'In Transit',
      lastUpdated: 'Today 09:30 AM',
      location: '56 Maple Street, Manchester',
      make: 'Audi',
      model: 'A6',
      cases: [
        { id: 'Case-7382', note: 'Broken headlight reported after hitting debris.', status: 'new' },
        { id: 'Case-8394', note: 'Windshield cracked by flying stone on highway.', status: 'picked' },
        { id: 'Case-8395', note: 'Reported sudden brake failure near city center.', status: 'archived' },
      ],
    },
    {
      id: 4,
      registration: 'JK56 IJK',
      status: 'Stationary',
      lastUpdated: 'Yesterday 04:00 PM',
      location: '78 Birch Lane, Leeds',
      make: 'Mercedes-Benz',
      model: 'C-Class',
      cases: [],
    },
    {
      id: 5,
      registration: 'LM78 NOP',
      status: 'In Transit',
      lastUpdated: 'Today 01:15 PM',
      location: '90 Elm Street, Birmingham',
      make: 'Volkswagen',
      model: 'Golf',
      cases: [
        { id: 'Case-9501', note: 'Fuel leak reported after refueling.', status: 'new' },
        { id: 'Case-9502', note: 'Engine misfire reported on motorway.', status: 'picked' },
        { id: 'Case-9503', note: 'Rear-end collision with another vehicle at traffic light.', status: 'archived' },
        { id: 'Case-9504', note: 'Airbag deployment during minor accident.', status: 'new' },
      ],
    },
    {
      id: 6,
      registration: 'QR90 STU',
      status: 'Stationary',
      lastUpdated: 'Today 03:45 PM',
      location: '123 Oak Road, Bristol',
      make: 'Toyota',
      model: 'Camry',
      cases: [
        { id: 'Case-1073', note: 'Reported unusual noise from the engine.', status: 'picked' },
        { id: 'Case-1074', note: 'Reported oil spill near vehicle after parking.', status: 'new' },
        { id: 'Case-1075', note: 'Lost control and skidded on wet road.', status: 'archived' },
        { id: 'Case-1076', note: 'Battery drained completely, unable to start.', status: 'picked' },
        { id: 'Case-1077', note: 'Minor fire in the engine compartment.', status: 'new' },
      ],
    },
  ];
  
export const headers = [
    { text: "Registration", icon: faCar },
    { text: "Vehicle Status", icon: faExclamationCircle },
    { text: "Last Updated", icon: faClock },
    { text: "Location", icon: faMapMarkerAlt },
    { text: "Make", icon: faCarSide },
    { text: "Model", icon: faListAlt },
    { text: "View in Fleetsmart", icon: faEye },
    { text: "Cases", icon: faFolder }
  ];
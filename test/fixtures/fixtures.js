'use strict';

var device = {
  uri: 'http://api.lelylan.com/devices/1',
  id: '1',
  name: 'Complex Light',
  type: { uri: 'http://api.lelylan.com/types/1', id: '1' },
  physical: { uri: 'http://arduino.house.com/1' },
  pending: false,
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1', value: 'on', expected: 'on', pending: false,
    suggested: {'on': 'On', 'off': 'Off'}
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2', value: '50', expected: '50', pending: false,
    suggested: {}
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3', value: '#39fbd9', expected: '#39fbd9', pending: false,
    suggested: {}
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4', value: '5', expected: '0', pending: false,
    suggested: {}
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5', value: '0.5', expected: '0.5', pending: false,
    suggested: {}
  }],
  maker: { id: '1' },
  owner: { id: '1' },
  created_at: '2012-09-01T16:00:32Z',
  updated_at: '2013-04-10T16:19:20Z',
  updated_from: 'Andrea Reginato'
};

var device2 = angular.copy(device)
device2.id = 2
device2.name = 'Babies Light'

var device3 = angular.copy(device)
device3.id = 3
device3.name = 'Garage Light'

var device4 = angular.copy(device)
device4.id = 4
device4.name = 'Kitchen Light'


var type = {
  uri: 'http://api.lelylan.com/types/1',
  id: '1',
  name: 'Basic Light',
  description: 'The **Basic Light** type represents the most basic light structure.',
  categories: ['lights'],
  created_at: '2012-09-01T15:01:22Z',
  updated_at: '2012-09-01T15:01:22Z',
  owner: { id: 1 },
  properties: [{
    uri: 'http://api.lelylan.com/properties/1',
    id: '1',
    name: 'Status',
    default: 'off',
    suggested: {'on': 'On', 'off': 'Off'},
    type: 'string'
  }, {
    uri: 'http://api.lelylan.com/properties/2',
    id: '2',
    name: 'Intensity',
    default: '0',
    suggested: null,
    type: 'range',
    range: { min: 0, max: 100, step: 1 }
  }, {
    uri: 'http://api.lelylan.com/properties/3',
    id: '3',
    name: 'Color',
    default: '#654321',
    suggested: null,
    type: 'color'
  }, {
    uri: 'http://api.lelylan.com/properties/4',
    id: '4',
    name: 'Blinking times',
    default: '0',
    suggested: null,
    type: 'number'
  }, {
    uri: 'http://api.lelylan.com/properties/5',
    id: '5',
    name: 'Blinking frequency',
    default: '1.0',
    suggested: null,
    type: 'range',
    range: { min: 0, max: 10, step: 0.1 }
  }],
  functions: [{
    uri: 'http://api.lelylan.com/functions/1',
    id: '1',
    name: 'Turn On',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      value: 'on'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/2',
    id: '2',
    name: 'Turn Off',
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      value: 'off'
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/3',
    id: '3',
    name: 'Set intensity',
    properties: [{
      uri: 'http://api.lelylan.com/properties/2',
      id: '2',
      value: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/4',
    id: '4',
    name: 'Set color',
    properties: [{
      uri: 'http://api.lelylan.com/properties/3',
      id: '3',
      value: null
    }]
  }, {
    uri: 'http://api.lelylan.com/functions/5',
    id: '5',
    name: 'Set blinking',
    properties: [{
      uri: 'http://api.lelylan.com/properties/4',
      id: '4',
      value: null
    }, {
      uri: 'http://api.lelylan.com/properties/5',
      id: '5',
      value: null
    }]
  }],
  statuses: [{
    uri: 'http://api.lelylan.com/statuses/1',
    id: '1',
    name: 'The light is on',
    function: { uri: 'http://api.lelylan.com/functions/2', id: '2' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['on'],
      pending: null,
    }]
  }, {
    uri: 'http://api.lelylan.com/statuses/2',
    id: '2',
    name: 'The light is off',
    function: { uri: 'http://api.lelylan.com/functions/1', id: '1' },
    properties: [{
      uri: 'http://api.lelylan.com/properties/1',
      id: '1',
      values: ['off'],
      pending: null,
    }]
  }]
};

var type2  = angular.copy(type);
type2.id   = 2;
type2.name = 'Lock';


var categories = [
  { name: 'lights' },
  { name: 'locks' },
  { name: 'thermostats' },
  { name: 'alarms' },
  { name: 'meters' },
  { name: 'cameras' },
  { name: 'windows' },
  { name: 'appliances' },
  { name: 'garddenings' },
  { name: 'sensors' },
  { name: 'others' }
]

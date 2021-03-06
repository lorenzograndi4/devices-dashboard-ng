'use strict';

var test = angular.module('test', ['lelylan.dashboards.devices', 'ngMockE2E']);

test.run(function($httpBackend, LoggedUser) {

  /* Dashboard */

  $httpBackend.whenGET('http://api.lelylan.com/me').respond({ id: 1, email: 'alice@example.com' });
  $httpBackend.whenGET('http://api.lelylan.com/devices?per=250').respond([device, device2, device3, device4]);

  /* Types */

  $httpBackend.whenGET('http://api.lelylan.com/types/popular?per=250').respond([type, type2]);
  $httpBackend.whenGET('http://api.lelylan.com/types?per=250').respond([type]);
  $httpBackend.whenGET('http://api.lelylan.com/types/1').respond(type);
  $httpBackend.whenGET('http://api.lelylan.com/types/2').respond(type2);
  $httpBackend.whenGET('http://api.lelylan.com/categories').respond(categories);

  /* Devices */

  $httpBackend.whenPOST('http://api.lelylan.com/devices').respond(device);
  $httpBackend.whenDELETE('http://api.lelylan.com/devices/1').respond(device);
  $httpBackend.whenPUT(/http:\/\/api.lelylan.com\/devices/)
    .respond(function(method, url, data, headers){ return [200, updateDevice(data), {}]; });

  var updateDevice = function(data) {
    data = angular.fromJson(data);
    var resource = device;
    if (data.id == 2) resource = device2
    if (data.id == 3) resource = device3
    if (data.id == 4) resource = device4
    _.each(data.properties, function(property) {
      var result = _.find(resource.properties, function(_property){ return _property.id == property.id; });
      result.expected = result.value = property.value;
    });
    return resource;
  }

  /* Categories */

  $httpBackend.whenGET('http://api.lelylan.com/devices?category=lights&per=250').respond([device, device2, device3, device4]);
  $httpBackend.whenGET(/http:\/\/api.lelylan.com\/devices/).respond([]);

  /* Pass through */

  $httpBackend.whenGET(/views/).passThrough();
  $httpBackend.whenGET(/templates/).passThrough();
});

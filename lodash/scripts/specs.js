describe("Lodash", function() {
  it("is defined", function() {
    expect(_).toBeDefined();
  });
});

describe("Lodash array helper", function() {
  var stepsData = [
    { 'datestamp': 20140101, 'stepCount': 3456 },
    { 'datestamp': 20140102, 'stepCount': 7122 },
    { 'datestamp': 20140103, 'stepCount': 1005 },
    { 'datestamp': 20140104, 'stepCount': 6121 },
    { 'datestamp': 20140105, 'stepCount': 7255 }
  ];

  it("compacts away falsy values", function() {
    expect(_.compact([0, 1, 2, false, '', 3, null])).toEqual([1, 2, 3]);
  });

  it("takes the difference between arrays", function() {
    expect(_.difference([1, 2, 3, 4, 5, 6, 7], [2, 3, 5, 7, 11])).toEqual([1, 4, 6]);
  });

  it("finds the index of the first matching object in an array", function() {
    var ndx = _.findIndex(stepsData, function(sd) {
      return sd.stepCount > 7000;
    });
    expect(ndx).toEqual(1);
  });

  it("finds the index of the last matching object in an array", function() {
    var ndx = _.findLastIndex(stepsData, function(sd) {
      return sd.stepCount > 7000;
    });
    expect(ndx).toEqual(4);
  });

  it("filters all instances with given characteristics", function() {
    var beforeJan4 = _.filter(stepsData, function(sd) {
      return sd.datestamp < 20140104;
    });
    expect(beforeJan4.length).toEqual(3);
  });

});

describe("Walker app", function() {
  it("exists", function() {
    expect(walkerApp).toBeDefined();
  });
});

describe("Steps analyzer", function() {
  var sampleData = [
      { 'datestamp': 20140101, 'stepCount':  3456 },
      { 'datestamp': 20140102, 'stepCount':  7122 },
      { 'datestamp': 20140103, 'stepCount':  1005 },
      { 'datestamp': 20140104, 'stepCount':  6121 },
      { 'datestamp': 20140105, 'stepCount':  7255 },
      { 'datestamp': 20140106, 'stepCount':  8555 },
      { 'datestamp': 20140107, 'stepCount':     0 },
      { 'datestamp': 20140108, 'stepCount': 12234 },
      { 'datestamp': 20140109, 'stepCount':  6367 },
      { 'datestamp': 20140110, 'stepCount':  7478 }
    ];

  it("exists", function() {
    expect(walkerApp.stepsAnalyzer).toBeDefined();
  });

  it("finds all days above a given threshhold", function() {
  	var sa = walkerApp.stepsAnalyzer;
  	sa.setData(sampleData);
    var days7k = sa.getDaysAboveThreshhold(7000);
    expect(days7k.length).toEqual(5);
  });

  it("finds all days within a range", function() {
  	var sa = walkerApp.stepsAnalyzer;
  	sa.setData(sampleData);
    var days7KRange = sa.getDaysInRange(7000, 8000);
    expect(days7KRange.length).toEqual(3);
    
  });

});

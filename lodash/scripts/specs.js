describe("Lodash", function() {
  it("is defined", function() {
    expect(_).toBeDefined();
  });
});

describe("Lodash array helper", function() {
  it("compacts away falsy values", function() {
    expect(_.compact([0, 1, 2, false, '', 3, null])).toEqual([1, 2, 3]);
  });

  it("takes the difference between arrays", function() {
    expect(_.difference([1, 2, 3, 4, 5, 6, 7], [2, 3, 5, 7, 11])).toEqual([1, 4, 6]);
  });

  it("finds the index of the first matching object in an array", function() {
    var stepsData = [
      { 'datestamp': '20140101', 'stepCount': 3456 },
      { 'datestamp': '20140102', 'stepCount': 7122 },
      { 'datestamp': '20140103', 'stepCount': 1005 },
      { 'datestamp': '20140104', 'stepCount': 6121 },
      { 'datestamp': '20140105', 'stepCount': 7255 }
    ];

    var ndx = _.findIndex(stepsData, function(sd) {
      return sd.stepCount > 7000;
    });

    expect(ndx).toEqual(1);

  });
});

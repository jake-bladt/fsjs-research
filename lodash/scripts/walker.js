var walkerApp = function() {};

(function(app) {
	app.stepsAnalyzer = function() {};

	(function(sa) {
	  sa.stepsData = [];

	  sa.setData = function(data) {
        stepsData = data;
	  };

      sa.getDaysAboveThreshhold = function(min) {
        return _.filter(stepsData, function(day) {
          return day.stepCount >= min;
        });
      };

      sa.getDaysInRange = function(min, max) {
        return _.filter(stepsData, function(day) {
          return day.stepCount >= min && day.stepCount < max;
        });
      };

	})(app.stepsAnalyzer);
})(walkerApp);

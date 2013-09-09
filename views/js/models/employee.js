directory.Employee = Backbone.Model.extend({

    urlRoot:"http://frozen-reaches-5015.herokuapp.com/employees",

    initialize:function () {
        this.reports = new directory.EmployeeCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

directory.EmployeeCollection = Backbone.Collection.extend({
    model: directory.Employee,
    url:"http://frozen-reaches-5015.herokuapp.com/employees"

});

var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
	options.dataType = "jsonp";
	return originalSync.apply(Backbone, arguments);

};
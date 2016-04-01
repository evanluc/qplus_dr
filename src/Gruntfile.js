module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
            myFiles: ['*.js', '../www/js/*.js', '../www/js/components/*/.js']
	},
	bower_concat: {
	    all: {
		mainFiles:{
		    'OnsenUI': ['js/onsenui.js','css/onsenui.css','css/onsen-css-components-blue-basic-theme.css']
		},
		dest: '../www/build/bower.js',
		cssDest: '../www/build/bower.css'
	    }
	}
    });

    

    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('default', ['jshint', 'bower_concat']);



};

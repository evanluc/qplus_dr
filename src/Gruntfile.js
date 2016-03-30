module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
            myFiles: ['*.js', '../www/js/*.js', '../www/js/components/*/.js']
	},
	bower_concat: {
	    all: {
		dest: '../www/build/bower.js'
	    }
	}
    });

    

  grunt.loadNpmTasks('grunt-contrib-jshint'); 
  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default', ['jshint', 'bower_concat']);



};

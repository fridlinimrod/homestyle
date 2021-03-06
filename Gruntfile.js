'use strict';

module.exports = function (grunt) {
	  
// Time how long tasks take. Can help when optimizing build times
require('time-grunt')(grunt);

// Automatically load required Grunt tasks
require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

// Define the configuration for all the tasks
grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
		  options: {
		    jshintrc: '.jshintrc',
		    reporter: require('jshint-stylish')
		  },
		  all: {
		    src: [
		      'Gruntfile.js',
		      'app/js/{,*/}*.js',
		      '!app/js/noanalytics.js'
		    ]
		  }
		},	
		postcss: {
		    options: {
		      map: {
		          inline: false, // save all sourcemaps as separate files... 
		          annotation: 'dist/css/maps/' // ...to the specified directory 
		      },
		 
		      processors: [
		        // require('pixrem')(), // add fallbacks for rem units 
		        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
		        // require('cssnano')() // minify the result 
		      ]
		    },
		    dist: {
		      src: 'app/css/*.css',
		      // dest: 'dist/test.css'
		    }
		},
		copy: {
		      dist: {
		        cwd: 'app',
		        src: [ '**', 'pics/**/*.*', '!css/**/*.css','!js/**/*.js', '!bower_components/**/*', '!./bower_components/' ],
		        dest: 'dist',
		        expand: true
		      },
		      fonts: {
		          files:[
		              {
		                  //for bootstrap fonts
		                    expand: true,
		                    dot: true,
		                    cwd: 'bower_components/bootstrap/dist',
		                    src: ['fonts/*.*'],
		                    dest: 'dist'
		                }, {
		                    //for font-awesome
		                    expand: true,
		                    dot: true,
		                    cwd: 'bower_components/font-awesome',
		                    src: ['fonts/*.*'],
		                    dest: 'dist'
		                }
		          ]
		        }
		    },

		    clean: {
		        build:{
		            src: [ 'dist/']
		        }
		    },

		    useminPrepare: {
		        html: 'app/index.html',
		        options: {
		            dest: 'dist'
		        }
		    },
		     
		    // Concat
		    concat: {
		        options: {
		            separator: ''
		        },
		        // dist configuration is provided by useminPrepare
		        dist: {}
		    },
		    
		    // Uglify
		    uglify: {
		        // dist configuration is provided by useminPrepare
		        dist: {}
		    },
		    cssmin: {
		        dist: {}
		    },
		    
		    // Filerev
		    filerev: {
		        options: {
		            encoding: 'utf8',
		            algorithm: 'md5',
		            length: 20
		        },
		        release: {
		            // filerev:release hashes(md5) all assets (images, js and css )
		            // in dist directory
		            files: [{
		                src: [
		                    'dist/js/*.js',
		                    'dist/css/*.css',
		                ]
		            }]
		        }
		    },
		    
		    // Usemin
		    // Replaces all assets with their revved version in html and css files.
		    // options.assetDirs contains the directories for finding the assets
		    // according to their relative paths
		    usemin: {
		        html: ['dist/*.html'],
		        css: ['dist/css/*.css'],
		        options: {
		            assetsDirs: ['dist', 'dist/css']
		        }
		    },

		    watch: {
		        copy: {
		            files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
		            tasks: [ 'build' ]
		        },
		        js: {
		            files: ['app/js/*.js'],
		            tasks:[ 'build']
		        },
		        css: {
		            files: ['app/css/*.css'],
		            tasks:['build']
		        },
		        livereload: {
		            options: {
		                livereload: '<%= connect.options.livereload %>'
		            },
		            files: [
		                'app/{,*/}*.html',
		                // 'app/css/*.css',
		                '.tmp/concat/{,*/}*.*',
		                'app/pics/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		            ]
		      }
		    },
		    connect: {
		      options: {
		        port: 9000,
		        // Change this to '0.0.0.0' to access the server from outside.
		        hostname: 'localhost',
		        livereload: 35729
		      },
		      dist: {
		        options: {
		          open: true,
		          base:{
		               path: 'dist',
		            	options: {
			                index: 'index.html',
			                maxAge: 300000
			            }
		          }
		        }
		      },
		      dev: {
		      	options: {
		          open: true,
		          base:{
		               path: 'app',
		            options: {
		                index: 'index.html',
		                maxAge: 300000
		            }
		          }
		        }
		      }
		    },
		});

grunt.registerTask('build', [
    'clean',
    'jshint',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'filerev',
    'usemin'
  ]);

grunt.registerTask('serve',['build','connect:dist','watch']);
grunt.registerTask('servedev',['connect:dev','watch']);
grunt.registerTask('default',['build']);
grunt.registerTask('compile',['jshint']);
grunt.registerTask('imagemin', ['imagemin']);

};
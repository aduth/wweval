module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.name %> <%= pkg.version %> | Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> | <%= pkg.license %> License */\n',

    concat: {
      options: {
        stripBanners: {
          block: true
        },
        banner: '<%= banner %>'
      },
      dist: {
        src: [ 'wweval.js' ],
        dest: 'wweval.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'wweval.min.js': [ 'wweval.js' ]
        }
      }
    },

    jshint: {
      files: [
        'wweval.js',
        'test/spec/test-wweval.js'
      ]
    },

    mocha: {
      index: [ 'test/index.html' ],
      options: {
        run: true
      }
    },

    watch: {
      files: [ 'wweval.js', 'test/spec/*.js' ],
      tasks: [ 'compile' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', [ 'jshint', 'mocha' ]);
  grunt.registerTask('compile', [ 'concat', 'uglify' ]);
  grunt.registerTask('release', [ 'test', 'compile' ]);
  grunt.registerTask('dev', [ 'compile', 'watch' ]);
  grunt.registerTask('default', [ 'dev' ]);
};

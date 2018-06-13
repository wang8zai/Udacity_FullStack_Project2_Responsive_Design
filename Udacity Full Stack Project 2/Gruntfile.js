/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/


module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1600,
            name: 'extra-large',
            suffix: '-1x',
            quality: 30
          },
          {
            width: 1200,
            name:'large',
            suffix: '-1x',
            quality: 60
          },
          {
            width: 998,
            name:'medium',
            suffix: '-1x',
            quality: 60
          },
          {
            width: 768,
            name:'small',
            suffix: '-1x',
            quality: 60
          },
          {
            width: 576,
            name:'extra-small',
            suffix: '-1x',
            quality: 60
          },
          {
            width: 238,
            name:'extra-small',
            suffix: '-0.5x',
            quality: 30
          }
        ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
/*

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: 1200,
            quality: 30,
            /*
            Change these:
            
            width: ,
            suffix: ,
            quality:
            */
 /*         }]
        },
*/
        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
/*        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
*/
    /* Clear out the images directory if it exists */
/*    clean: {
      dev: {
        src: ['images'],
      },
    },
*/
    /* Generate the images directory if it is missing */
/*    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },
*/
    /* Copy the "fixed" images that don't go through processing into the images/directory */
/*    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
*/

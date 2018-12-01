'use strict';
module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'css/styles.full.css': 'css/styles.scss'
                }
            }
        },



        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },


        // for local development
        'http-server': {

            'dev': {
                root: ".",
                host: "localhost",
                port: 8080,

                cache: 100,
                showDir: true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: true,

                // Tell grunt task to open the browser
                openBrowser: true
            }
        },



        watch: {
            // reload gruntfile.js if it changes while running
            configFiles: {
                files: ['gruntfile.js'],
                options: {
                    reload: true
                }
            },
            options: {
                livereload: true,
            },

            sass: {
                files: ['css/styles.scss'],
                tasks: ['sass', 'cssmin'],
            },
        }

    });



    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['http-server:dev', 'sass', 'cssmin', 'watch']);
    //now, just typing 'grunt' will run this and the watch task will take over.
};

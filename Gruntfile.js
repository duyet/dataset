module.exports = function(grunt) {

    grunt.initConfig({
        to_html: {
            default_options: {
                options: {
                  template: grunt.file.read('grunt/templates/header.jade'),
                  // templatingLanguage: 'handlebars',
                  useFileNameAsTitle: true,
                  generatePage: false,
                  title: 'dataset.duyetdev.com'
                },
                files: {
                    'data/index.html': 'data/**/**gz',
                }
            },
        }
    })

    grunt.loadNpmTasks('grunt-directory-to-html');
    grunt.registerTask('default', ['to_html']);
};

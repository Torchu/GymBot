module.exports = function (grunt) {
  //Plugins para grunt
  grunt.loadNpmTasks("grunt-run");

  grunt.initConfig({
    run: {
      install: {},

      build: {
      },

      test: {
        cmd: "npm",
        args: ["run", "test"],
      },

      transpile: {
        cmd: "tsc"
      },

      start: {
        cmd: "node",
        args: ["dist/server.js"],
      },
    },
  });

  //tarea default
  grunt.registerTask("default", ["run:install"]);
  //Tareas
  grunt.registerTask("build", ["run:build"]);
  grunt.registerTask("install", ["run:install"]);
  grunt.registerTask("test", ["run:test"]);
  grunt.registerTask("start", ["run:transpile", "run:start"]);
};

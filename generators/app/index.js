'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');

module.exports = yeoman.Base.extend({
  // initializing: function() {
  //   console.log('HELLO FROM INIT FUNCTION');
  // },

  paths: function() {
    // console.log(this.destinationRoot().toString());
    // console.log(this.destinationPath('index.js').toString());
    // console.log(this.sourceRoot().toString());
    // this.templatePath('index.html')
  },

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('generator-son') + ' generator!'
    ));

    var prompts = [{
      type   : 'input',
      name   : 'project_name',
      message: 'What is you project name ? '
    }, {
      type   : 'input',
      name   : 'author',
      message: 'What is author name?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );

    //package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        project_name: this.props.project_name,
        author      : this.props.author
      }
    );

    //index.html
    this.fs.copyTpl(
      this.templatePath('_index.html'),
      this.destinationPath('index.html')
    );

    //styles
    this.fs.copyTpl(
      this.templatePath('styles'),
      this.destinationPath('styles')
    );

    //js
    this.fs.copyTpl(
      this.templatePath('js'),
      this.destinationPath('js')
    );

    //img
    this.fs.copyTpl(
      this.templatePath('img'),
      this.destinationPath('img')
    );

    // console.log(this.destinationPath('dummyfile.txt').toString())
  },

  install: function () {
    this.installDependencies(); // run both npm install && bower install
    this.npmInstall(); //npm install
    this.bowerInstall() // bower install
    this.spawnCommand('echo', ['HELLO FROM ECHO SPAWN COMMAND - SON'])
  }
});

/*jslint node: true */
"use strict";

var mysql = require('mysql');
var bluebird = require('bluebird');

var exports = module.exports = {};


// Will set up a proper test db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'evan',
  password: 'strawberry',
  database: 'qplus_dr_test'
});

connection.connect(function(err) {
  if(!err){
    console.log("Database has connected");
  } else {
    console.log("Error connecting to DB");
  }
});


exports.getPatients = function() {

  
  return new Promise(function(resolve,reject){ connection.query('SELECT p.FirstName FROM PatientDoctor pd INNER JOIN Doctor d ON d.DoctorSerNum=pd.DoctorSerNum INNER JOIN Patient p ON pd.PatientSerNum = p.PatientSerNum WHERE d.DoctorSerNum = 4', function(err,results,fields){
    if (err){
      console.log('Could not fetch patients from sql database');
      reject(err);      
    } else {
      resolve(results);
    }
  });
  });
};



exports.getTasks = function() {

  return new Promise(function(resolve,reject){
    connection.query('SELECT ExpressionName, t.duedatetime, p.firstname, p.lastname FROM aliasExpression ae INNER JOIN task t ON ae.aliasexpressionsernum = t.aliasexpressionsernum INNER JOIN Patient p ON t.PatientSerNum = p.PatientSerNum INNER JOIN PatientDoctor pd ON pd.PatientSerNum = p.PatientSerNum WHERE pd.DoctorSerNum = 4', function(err,results,fields){
      if (err){
	console.log('Could not fetch tasks from sql database');
	reject(err);
      } else {
	resolve(results);
      }
    });})
};


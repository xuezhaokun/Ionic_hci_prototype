angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Results', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results = [{
    id: 0,
    name: 'COMP-0015 Data Structure',
    lastText: 'A second course in computer science. Data structures and algorithms are studied through major programming projects. Topics include linked lists, trees, graphs, dynamic storage allocation, and recursion. Recommendations: COMP 11 or permission of Instructor.'
  }, {
    id: 1,
    name: 'COMP-0115 Database Systems',
    lastText: 'Fundamental concepts of database systems, including conceptual design, relational and object-oriented data models, query languages (SQL, QBE), and implementation issues (indexing, transaction processing, concurrent control). The concepts and algorithms covered encompass many of those used in commercial and experimental database systems. Other topics include distributed databases and distributed query processing. Recommendations: COMP 15'
  }, {
    id: 2,
    name: 'COMP-0150 Special Topics: Intrnt Scale Dist Systms',
    lastText: 'Content and prerequisites to be announced. Over the past three years, special topics courses have been offered in parallel computing, graph drawing, computational geometry, multimedia data compression, cryptography and security, digital network communication, spoken language systems, system and network administration, and machine learning. Please see departmental website for specific details.'
  }, {
    id: 3,
    name: 'COMP-0160 Algorithms',
    lastText: 'Introduction to the study of algorithms. Strategies such as divide-and-conquer, greedy methods, and dynamic programming. Graph algorithms, sorting, searching, integer arithmetic, hashing, and NP-complete problems. Recommendations: COMP 15 and MATH 61 (formerly MATH 22).'
  }, {
    id: 4,
    name: 'COMP-0170 Computation Theory',
    lastText: '(Cross-listed as MATH 170). Models of computation: Turing machines, pushdown automata, and finite automata. Grammars and formal languages, including context-free languages and regular sets. Important problems, including the halting problem and language equivalence theorems. Recommendations: COMP 15 and MATH 61 (formerly MATH 22).'
  }, {
    id: 5,
    name: 'COMP-0171 Human Computer Interactn',
    lastText: 'Introduction to human-computer interaction, or how computers communicate with people. Methodology for designing and testing user interfaces, interaction styles (command line, menus, graphical user interfaces, virtual reality), interaction techniques (voice, gesture, eye movement), design guidelines, and user-interface management system software. Students will design a small user interface, program a prototype, and test the result for usability. Recommendations: COMP 14 or 15.'
  }];

  return {
    all: function() {
      return results;
    },
    get: function(resultId) {
      for (var i = 0; i < results.length; i++) {
        if (results[i].id === parseInt(resultId)) {
          return results[i];
        }
      }
      return null;
    }
  };
});

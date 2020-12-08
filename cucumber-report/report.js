$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:target/test-classes/features/FindWord.feature");
formatter.feature({
  "name": "Find longest and shortest word from sentence",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive Test to find longest and shortest word from the sentence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@single"
    },
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"\u003csentence\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.step({
  "name": "I am able to find \"LONG\" word with its length",
  "keyword": "Then "
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I search for \"SHORT\" word from the sentence",
  "keyword": "When "
});
formatter.step({
  "name": "I am able to find \"SHORT\" word with its length",
  "keyword": "Then "
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sentence"
      ]
    },
    {
      "cells": [
        "The cow jumped over the moon."
      ]
    },
    {
      "cells": [
        "Dinosaur jumped over the sun."
      ]
    },
    {
      "cells": [
        "OneWordDoesntFail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive Test to find longest and shortest word from the sentence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@single"
    },
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"The cow jumped over the moon.\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FindLongestWordSteps.ihaveSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"LONG\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"SHORT\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"SHORT\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Test to find longest and shortest word from the sentence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@single"
    },
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"Dinosaur jumped over the sun.\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FindLongestWordSteps.ihaveSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"LONG\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"SHORT\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"SHORT\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Test to find longest and shortest word from the sentence",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@single"
    },
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"OneWordDoesntFail\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FindLongestWordSteps.ihaveSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"LONG\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"SHORT\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to find \"SHORT\" word with its length",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iAmAbleToFindTheWordWithItsLength(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Word Found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Test to check when sentence is blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"\u003csentence\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.step({
  "name": "I get message \"Please provide valid sentence or word\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "sentence"
      ]
    },
    {
      "cells": [
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative Test to check when sentence is blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@findWord"
    }
  ]
});
formatter.step({
  "name": "I have \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "FindLongestWordSteps.ihaveSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"LONG\" word from the sentence",
  "keyword": "When "
});
formatter.match({
  "location": "FindLongestWordSteps.iSearchForWordFromTheSentence(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get message \"Please provide valid sentence or word\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLongestWordSteps.iGetMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
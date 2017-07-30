"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================


var data=[

  {
    areaName:"arnside and silverdale",
    description:"arnside and silverdale is an area between lancashire and cumbria. it covers 29 square miles and was designated in 1972. the area is characterised by the two carboniferous limestone hills named arnside knott and warton crag. the coastal areas contain large salt marsh areas.",
    region:"north west",
    email:"advdvsvvds",
    phone:"asdvds",
    image:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Arnside123.jpg"
  },
  {
    areaName:"forest of bowland",
    description:"the forest of bowland, also knowwn as the bowland fells, is an area of barren gritstone fells, deep valleys and peat moorland. it is located in north-east lancashire and was designated in 1964. the region was once described as the switzerland of england because of its ancient wilderness and the highets point ward's stone, with 1841 feet.",
    region:"north west",
    email:"avvvvvvvvvvvvvv",
    phone:"dddddda",
    image:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Ward%27s_Stone.jpg"
  },
  {
    areaName:"solway coast",
    description:"  the solway coast is located in northern cumbria and contains multiple sand dunes. it stretches from rockcliffe in the north to maryport in the south, covering about 115 square kilometres of the solway plain. the area was designated in december 1964 in recognition of the quality of its landscape and its significant historic and scientific interest.",
    region:"north west",
    email:"vdadv",
    phone:"dvdavdv",
    image:"https://upload.wikimedia.org/wikipedia/commons/c/c2/River_Nith_estuary.jpg"
  },
  {
    areaName:"cannock chase",
    description:"the cannok chase is a former royal forest in the county of staffordshire. it covers 26 square miles and was designated in 1958. there is a herd of 800 fallow deers and the marquis drive visitor's centre with a bird feeding station.",
    region:"west midlands",
    email:"avvvvddd",
    phone:"avvddvd",
    image:"https://upload.wikimedia.org/wikipedia/commons/2/26/Cannock_Chase_Path.jpg"
  },
  {
    areaName:"wye valley",
    description:"the wye valley is located between england and wales and is one of the most dramatic and scenic landscapes in southern britain. it was designated in 1971 and covers an area of 126 square miles.the area is particular recognised for its limestone gorge scenery and dense native woodlands. there are also archaeological and industrial remains.",
    region:"west midlands",
    email:"avvddv",
    phone:"avddvv",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/View_of_Tintern_Abbey.jpg"
  },
  {
    areaName:"shropshire hills",
    description:"the shropshire hills are located in the english county of shropshire, extending to its border with wales. it was designated in 1958 and covers an area of 310 square miles. the highest point is brown clee hill with 1772 feet. points of interest are the townbrook valley in the long mynd and the wrekin near wellington.",
    region:"west midlands",
    email:"avcv",
    phone:"aasx",
    image:"https://upload.wikimedia.org/wikipedia/commons/8/88/Shropshire_Long_Mynd.jpg"
  },
  {
    areaName:"malvern hills",
    description:"the malvern hills are a range of hills in the counties worcestershire and herefordshire. it was designated in 1959 and covers an area of 5 square miles. the malvern hills are known for their spring water initially made famous by the region's many holy wells.",
    region:"west midlands",
    email:"assx",
    phone:"asssaa",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Malvern_Hills_-_England.jpg"
  },
  {
    areaName:"cotswolds",
    description:"the cotswolds is an area in south central england containing the cotswold hills, a range of rolling hills which rise from the meadows of the upper thames to an escarpment, named the cotswold edge. it covers 768 square miles and was designated in 1966.",
    region:"south west",
    email:"savsvs",
    phone:"svvdvsa",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Castle_combe_cotswolds.jpg"
  },
  {
    areaName:"blackdown hills",
    description:"the blackdown hills are a range of hills in south western england near the somerset devon border. it covers 143 square miles and was designated in 1991. there are remains of ancient hill forts, norman motte-and-bailey castles and second world war airfields.",
    region:"south west",
    email:"avsvds",
    phone:"asvdvs",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/40/Blackdown_Hills_at_Dalwood.JPG"
  },
  //TODO
  {
    areaName:"cranborne chase and west wiltshire downs",
    description:"the cranborne chase is a chalk plateau in central southern england. it covers an area of 379 square miles and its highest point is win green, in wiltshire, at 910 feet. there are many nelithic and bronze age mounuments, including the henge monumnents at knowlton.",
    region:"south west",
    email:"avsdvdvs",
    phone:"avsdvvds",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Dorset_brings_01.jpg"
  },
  {
    areaName:"cornwall",
    description:"the cornwall area of outstanding beauty covers eleven coastlines and the bodmin moor. it covers 370 square miles in cornwall, england and was designated in 1959.",
    region:"south west",
    email:"avsdvs",
    phone:"avsdvds",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Cape_Cornwall_%28Judithili%29_edit.jpg"
  },
  {
    areaName:"dorset",
    description:"dorset is an area in south west england. it covers an area of 1024 square miles. dorset's coastline is one of the most visited coastlines in the world because it shows, along the the course of 95 miles, rocks from the beginning of triassic, through the jurassic and up to the end of the cretaceous.",
    region:"south west",
    email:"asdvds",
    phone:"asvsds",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Blue_lias_cliffs_at_Lyme_Regis.jpg"
  },
  {
    areaName:"east devon",
    description:"the east devon area of outstanding natural beauty is shaped by man's activities from prehistoric times to the present. it was designated in 1963. it includes the heritage coastal walk with beautiful valleys, woodland and the coastline of devon.",
    region:"south west",
    email:"asdv",
    phone:"bga",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Snow05_009.jpg"
  },
  {
    areaName:"isles of scilly",
    description:"the isles of scilly are an archipelago off the south western tip of the cornish peninsula. it covers 6,32 square miles and was designated 1975. the isles have the greatest density of scheduled monuments in the united kingdom.",
    region:"south west",
    email:"vc a",
    phone:"vfdya",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Tresco_-_aerial_photo6_edit.jpg"
  },
  {
    areaName:"mendip hills",
    description:"the mendip hills is a range of limestone hills to the south of bristol and bath in somerset, england. it was designated in 1972 and covers 77 sqaure miles. there is evidence of mining in the mendip hills dating back to the bronze age.",
    region:"south west",
    email:"ayfv",
    phone:"ayfv",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Crook_Peak_towards_Compton_Hill.jpg"
  },
  {
    areaName:"north devon coast",
    description:"the north devon coast is located in south england and contains a surprising diversity of scenery including tall rugged cliffs , wave cut platforms, sand dunes and traditional hedged fields with wind sculptured trees. it was designated in 1959 and covers an area of 66 square miles.",
    region:"south west",
    email:"avvvvvvvvvvvvvv",
    phone:"vya",
    image:"https://upload.wikimedia.org/wikipedia/commons/9/96/Cliffs_Clovelly_Coast_West.JPG"
  },
  {
    areaName:"north wessex downs",
    description:"the north wessex downs are located in the english counties  of west berkshire, hampshire, oxfordshire and wiltshire. the area is a site of scientific interest because of the dry valleys and sarsen outcrops. it was designated in 1972 and covers an area of 670 square miles.",
    region:"south west",
    email:"avyxc",
    phone:"xyca",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/40/The_South_Western_Slopes_of_Walbury_Hill_-_geograph.org.uk_-_62332.jpg"
  },
  {
    areaName:"quantock hills",
    description:"the quantock hills is a range of hills west of bridgwater in somerset, with the highest point named wills neck with a height of 1262 feet. the area covers 38 square miles and was designated in 1970. the area includes the quantock village and parish churches.",
    region:"south west",
    email:"ayxc",
    phone:"ayxc",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/13/UplandQuantocks.jpg"
  },
  {
    areaName:"south devon",
    description:"the south devon area is located in the county of devon and contains a lot of rugged coastline. it also contains geological and geomorphological features and expansive panoramic views. it was designated in 1960 and covers an area of 130 square miles.",
    region:"south west",
    email:"aycx",
    phone:"vca",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/42/Slapton_Sands_1.jpg"
  },
  {
    areaName:"tamar valley",
    description:"the tamar valley is located in south west england and was formed by the river tamar. it was designated in 1963 and covers an area of 75 square miles. the river tamar is also designated as a unesco world heritage site.",
    region:"south west",
    email:"ayxcv",
    phone:"ayxc",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/67/River_Tamar%2C_near_Bohetherick_-_geograph.org.uk_-_977730.jpg"
  },
  {
    areaName:"northumberland coast",
    description:"the northumberland coast is covering 100 miles of coastline from berwick-upon_tweed to the river coquet estuary in the northeast of england. it was designated in 1958 and includes sandy beaches, rugged cliffs and isolated islands.",
    region:"north east",
    email:"axyc",
    phone:"ayxc",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Bamburgh2006.jpg"
  },
  {
    areaName:"north pennines",
    description:"the north pennines are the northernmost section of the pennine range, which runs north south through northern england. the landscape is an open heather moors between deep dales, upland rivers, hay meadows and stone-built villages. some villages contain the legacies of a mining and industrial past. it was designated in 1988 and covers 770 square miles.",
    region:"north east",
    email:"ayxx",
    phone:"yvva",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/f8/Cauldron_Snout_-_July_2006.jpg"
  },
  {
    areaName:"lincolnshire wolds",
    description:"the lincolnshire wolds is a range of hills in the county of lincolnshire. it was designated in 1973 and covers an area of 216 square miles. the lincolnshire wolds can be divided into four distinct areas. the main area of chalk hills in the north, the north west scarp, an area of ridges and valleys in the south west and the claylands in the south east.",
    region:"east midlands",
    email:"ayvy",
    phone:"vvvva",
    image:"https://upload.wikimedia.org/wikipedia/commons/9/9f/Lincolnshirewolds.jpg"
  },
  {
    areaName:"dedham vale",
    description:"the deadham vale is an area on the essex suffolk border in east england. it supports a viable and diverse agriculture. the river stour is the key landscape focus and its course is defined by bank-side trees and wet meadows.",
    region:"east of england",
    email:"abbbb",
    phone:"axxx",
    image:"https://upload.wikimedia.org/wikipedia/commons/f/f2/John_Constable_012.jpg"
  },
  {
    areaName:"norfolk coast",
    description:"the norfolk coast is located in norfolk, england and includes one of the country's finest dune systems, the winterton dunes. it was designated in 1968 and covers an are of 173 square miles.",
    region:"east of england",
    email:"afds",
    phone:"a",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Cromer_beach_summer_UK.JPG"
  },
  {
    areaName:"suffolk coast and heaths",
    description:"the suffolk coast and heathhs is an area in suffolk england, which covers ancient woodland, commercial forestry, rivers and salt marsh. it was founded in 1970 and covers 60 miles of coast.",
    region:"east of england",
    email:"adsf",
    phone:"asfd",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Dunwich_seafront_today.JPG"
  },
  {
    areaName:"chichester harbour",
    description:"chichester harbour is a large natural harbour to the south west of chichester. it covers 9,13 acres and was designated in 1970. it is one of britain's most popular boating waters with its wide expanses and intricrate creeks. the harbour is also a very popular area for bird watching.",
    region:"south east",
    email:"asss",
    phone:"aaaa",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/16/View_Across_Chichester_Harbour_-_geograph.org.uk_-_1717805.jpg"
  },
  //TODO Chiltern Hils
  {
    areaName:"chilterns",
    description:"the chiltern hills form a chalk escarpment in the south east of england. the highest point is haddington hill with 878 feet. the area covers 322 square miles and was designated in 1965.",
    region:"south east",
    email:"vvva",
    phone:"ssa",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/df/Chilterns_England_Rolling_Countryside.jpg"
  },
  {
    areaName:"high weald",
    description:"the high weald area extends across the counties of surrey, west sussex, east sussex and kent. it covers 560 square miles and was designated in 1980. it is characterised by an attractive, small-scale landscape conataining small farms and woodlands, historic parks and ridge-top villages.",
    region:"south east",
    email:"asdff",
    phone:"asdf",
    image:"https://upload.wikimedia.org/wikipedia/en/f/fa/Highwealdview.jpg"
  },
  {
    areaName:"isle of wight",
    description:"the isle of wight is england's largest offshore island. it was designated as an area of outstanding beauty in 1963 and covers 72 square miles.",
    region:"south east",
    email:"sdfa",
    phone:"sda",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/IsleOfWightFromTheISS.jpg"
  },
  {
    areaName:"kent downs",
    description:"the kent downs are the eastern half of the north downs and stretch from the london surrey borders to the white cliffs of dover. they cover 338 square miles and ar renowned for their natural beauty.",
    region:"south east",
    email:"dsa",
    phone:"sdfa",
    image:"https://upload.wikimedia.org/wikipedia/commons/8/82/DownsRanscombeFieldToMway0734c.JPG"
  },
  {
    areaName:"surrey hills",
    description:"the surrey hills is an area located in surrey england and contains woodland, scrub heathland and chalk grassland. it was designated in 1958 and covers an area of 163 square miles. the highest point is leith hill with 965 feet.",
    region:"south east",
    email:"dddsa",
    phone:"assds",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/CalvertRoadDorking.jpg"
  },
  {
    areaName:"howardian hills",
    description:"the howardian hills are located in yorkshire and the humber. they take their name from the howard family who still own local lands. the area covers 79 square miles and was designated in 1987. the landscape has a high visual quality through his diverse landform and land us with contrasting scale, colour, texture and form alongside historic houses.",
    region:"yorkshire and humber",
    email:"acc",
    phone:"cca",
    image:"https://upload.wikimedia.org/wikipedia/commons/0/09/Howardian_Hills.jpg"
  },
  {
    areaName:"nidderdale",
    description:"nidderdale is located in north yorkshire and includes the attractions brimham rocks and the coldstone cut. it was designated in 1994 and it covers an area of 233 square miles.",
    region:"yorkshire and humber",
    email:"dca",
    phone:"cca",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Upper_Nidderdale.JPG"
  }

];

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

var skillName = "Alexa Team Lookup";

//This is the welcome message for when a user starts the skill without a specific intent.
// var WELCOME_MESSAGE = "Welcome to  " + skillName + "! I can help you find Alexa Evangelists and Solutions Architects. " + getGenericHelpMessage(data);

var WELCOME_MESSAGE = "Find Areas of Outstanding Natural Beauty in England. For example, " + getGenericHelpMessage(data)

//This is the message a user will hear when they ask Alexa for help in your skill.
var HELP_MESSAGE = "I can help you find Areas of Outstanding Natural Beauty in England. "

//This is the message a user will hear when they begin a new search
var NEW_SEARCH_MESSAGE = getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
var SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(data);

var DESCRIPTION_STATE_HELP_MESSAGE = "Here are some things you can say: Tell me more, or give me contact info";

var MULTIPLE_RESULTS_STATE_HELP_MESSAGE = "Sorry, please say the name of the Areas of Outstanding Natural Beauty you'd like to learn more about";

// This is the message use when the decides to end the search
var SHUTDOWN_MESSAGE = "Ok.";

//This is the message a user will hear when they try to cancel or stop the skill.
var EXIT_SKILL_MESSAGE = "Ok.";

// =====================================================================================================
// ------------------------------ Section 2. Skill Code - Intent Handlers  -----------------------------
// =====================================================================================================
// CAUTION: Editing anything below this line might break your skill.
//======================================================================================================

var states = {
    SEARCHMODE: "_SEARCHMODE",
    DESCRIPTION: "_DESCRIPTION",
    MULTIPLE_RESULTS: "_MULTIPLE_RESULTS"
};

const newSessionHandlers = {
    "LaunchRequest": function() {
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "SearchByNameIntent": function() {
        console.log("SEARCH INTENT");
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "TellMeMoreIntent": function() {
        this.handler.state = states.SEARCHMODE;
        // this.emitWithState("SearchByNameIntent");
        this.emit(":ask", WELCOME_MESSAGE, getGenericHelpMessage(data));
    },
    "TellMeThisIntent": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    },
    "SearchByInfoTypeIntent": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByInfoTypeIntent");
    },
    "AMAZON.YesIntent": function() {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask", HELP_MESSAGE, getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", HELP_MESSAGE + getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        this.handler.state = states.SEARCHMODE;
        this.emitWithState("SearchByNameIntent");
    }
};
var startSearchHandlers = Alexa.CreateStateHandler(states.SEARCHMODE, {
    "AMAZON.YesIntent": function() {
        this.emit(":ask", NEW_SEARCH_MESSAGE, NEW_SEARCH_MESSAGE);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
      var output;
      if(this.attributes.lastSearch){
        output = this.attributes.lastSearch.lastSpeech;
        console.log("repeating last speech");
      }
      else{
        output = getGenericHelpMessage(data);
        console.log("no last speech availble. outputting standard help message.");
      }
      this.emit(":ask",output, output);
    },
    "SearchByNameIntent": function() {
      searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function() {
      searchByCityIntentHandler.call(this);
    },
    "SearchByInfoTypeIntent": function() {
      searchByInfoTypeIntentHandler.call(this);
    },
    "TellMeThisIntent": function() {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeThisIntent");
    },
    "TellMeMoreIntent": function() {
        this.handler.state = states.DESCRIPTION;
        this.emitWithState("TellMeMoreIntent");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", getGenericHelpMessage(data), getGenericHelpMessage(data));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        console.log("Unhandled intent in startSearchHandlers");
        this.emit(":ask", SEARCH_STATE_HELP_MESSAGE, SEARCH_STATE_HELP_MESSAGE);
    }
});
var multipleSearchResultsHandlers = Alexa.CreateStateHandler(states.MULTIPLE_RESULTS, {

    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "AMAZON.YesIntent": function() {
        var output = "Hmm. I think you said - yes, but can you please say the name of the Area of outstanding natural beauty you'd like to learn more about?";
        this.emit(":ask", output, output);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask",this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "SearchByNameIntent": function() {
        var slots = this.event.request.intent.slots;
        var areaName = isSlotValid(this.event.request, "areaName");
        var region = isSlotValid(this.event.request, "region");
        var infoType = isSlotValid(this.event.request, "infoType");

        console.log("areaName:" + areaName);
        console.log("areaName:" + region);
        console.log("areaName:" + infoType);
        console.log("Intent Name:" + this.event.request.intent.name);

        var canSearch = figureOutWhichSlotToSearchBy(areaName,region);
        console.log("Multiple results found. canSearch is set to = " + canSearch);
        var speechOutput;

        if (canSearch)
            var searchQuery = slots[canSearch].value;
            var searchResults = searchDatabase(this.attributes.lastSearch.results, searchQuery, canSearch);
            var lastSearch;
            var output;

            if (searchResults.count > 1) { //multiple results found again
                console.log("multiple results were found again");
                this.handler.state = states.MULTIPLE_RESULTS;
                output = this.attributes.lastSearch.lastSpeech;
                this.emit(":ask",output);
            } else if (searchResults.count == 1) { //one result found
                this.attributes.lastSearch = searchResults;
                lastSearch = this.attributes.lastSearch;
                this.handler.state = states.DESCRIPTION;
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
                this.emit(":ask", output);

            } else { //no match found
                lastSearch = this.attributes.lastSearch;
                var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
                speechOutput = MULTIPLE_RESULTS_STATE_HELP_MESSAGE + ", " + listOfPeopleFound;
                this.emit(":ask", speechOutput);
            }
    },
    "SearchByCityIntent": function() {
      this.handler.state = states.SEARCHMODE;
      this.emitWithState("SearchByCityIntent");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        console.log("Unhandled intent in multipleSearchResultsHandlers");
        this.emit(":ask", MULTIPLE_RESULTS_STATE_HELP_MESSAGE, MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
    }
});
var descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTION, {
    "TellMeMoreIntent": function() {
      var person;
      var speechOutput;
      var repromptSpeech;
      var cardContent;

      if(this.attributes.lastSearch){
        person = this.attributes.lastSearch.results[0];
        cardContent = generateCard(person); //calling the helper function to generate the card content that will be sent to the Alexa app.
        speechOutput = generateTellMeMoreMessage(person);
        repromptSpeech = "Would you like to find another area of outstanding natural beauty? Say yes or no";

        console.log("the contact you're trying to find more info about is " + person.areaName);
        this.handler.state = states.SEARCHMODE;
        this.attributes.lastSearch.lastSpeech = speechOutput;
        this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
      }
      else{
        speechOutput = getGenericHelpMessage(data);
        repromptSpeech = getGenericHelpMessage(data);
        this.handler.state = states.SEARCHMODE;
        this.emit(":ask", speechOutput, repromptSpeech);
      }
    },
    "TellMeThisIntent": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];
        var infoType = isSlotValid(this.event.request, "infoType");
        var speechOutput;
        var repromptSpeech;
        var cardContent;

        console.log(isInfoTypeValid("description"));

          if(this.attributes.lastSearch && isInfoTypeValid(infoType)){
              person =  this.attributes.lastSearch.results[0];
              cardContent = generateCard(person);
              speechOutput = generateSpecificInfoMessage(slots,person);
              repromptSpeech = "Would you like to find another area of outstanding natural beauty? Say yes or no";
              this.handler.state = states.SEARCHMODE;
              this.attributes.lastSearch.lastSpeech = speechOutput;
              this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
            } else {
              //not a valid slot. no card needs to be set up. respond with simply a voice response.
              speechOutput = generateSearchHelpMessage();
              repromptSpeech = "You can ask me - what's the phone number, or give me the description";
              this.attributes.lastSearch.lastSpeech = speechOutput;
              this.handler.state = states.SEARCHMODE;
              this.emit(":ask", speechOutput, repromptSpeech);
            }
    },
    "SearchByNameIntent": function() {
        searchByNameIntentHandler.call(this);
    },
    "SearchByCityIntent": function() {
      searchByCityIntentHandler.call(this);
    },
    "AMAZON.HelpIntent": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];
        this.emit(":ask", generateNextPromptMessage(person,"current"), generateNextPromptMessage(person,"current"));
    },
    "AMAZON.StopIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.CancelIntent": function() {
        this.emit(":tell", EXIT_SKILL_MESSAGE);
    },
    "AMAZON.NoIntent": function() {
        this.emit(":tell", SHUTDOWN_MESSAGE);
    },
    "AMAZON.YesIntent": function() {
        this.emit("TellMeMoreIntent");
    },
    "AMAZON.RepeatIntent": function() {
        this.emit(":ask",this.attributes.lastSearch.lastSpeech, this.attributes.lastSearch.lastSpeech);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = states.SEARCHMODE;
        var output = "Ok, starting over." + getGenericHelpMessage(data);
        this.emit(":ask", output, output);
    },
    "SessionEndedRequest": function() {
        this.emit("AMAZON.StopIntent");
    },
    "Unhandled": function() {
        var slots = this.event.request.intent.slots;
        var person = this.attributes.lastSearch.results[0];

        console.log("Unhandled intent in DESCRIPTION state handler");
        this.emit(":ask", "Sorry, I don't know that" + generateNextPromptMessage(person,"general"), "Sorry, I don't know that" + generateNextPromptMessage(person,"general"));
    }
});

// ------------------------- END of Intent Handlers  ---------------------------------

function searchDatabase(dataset, searchQuery, searchType) {
    var matchFound = false;
    var results = [];

    //beginning search
    for (var i = 0; i < dataset.length; i++) {
        if (sanitizeSearchQuery(searchQuery) == dataset[i][searchType]) {
            results.push(dataset[i]);
            matchFound = true;
        }
        if ((i == dataset.length - 1) && (matchFound == false)) {
        //this means that we are on the last record, and no match was found
            matchFound = false;
            console.log("no match was found using " + searchType);
        //if more than searchable items were provided, set searchType to the next item, and set i=0
        //ideally you want to start search with  then areaName, and then region
        }
    }
    return {
        count: results.length,
        results: results
    };
}

function figureOutWhichSlotToSearchBy(areaName,region) {
  if (areaName){
    console.log("search by areaName");
    return "areaName";
  }
  else if (!areaName && region){
    console.log("search by region")
    return "region";
  }
  else{
    return false;
    console.log("no valid slot provided. can't search.")
  }
}

function searchByNameIntentHandler(){
  var areaName = isSlotValid(this.event.request, "areaName");
  var region = isSlotValid(this.event.request, "region");
  var infoType = isSlotValid(this.event.request, "infoType");
  var testingThis = testingThisFunction.call(this,"hello");

  var canSearch = figureOutWhichSlotToSearchBy(areaName,region);
  console.log("canSearch is set to = " + canSearch);

      if (canSearch){
        var searchQuery = this.event.request.intent.slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search complete. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which area of outstanding natural beauty would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well")
                this.emitWithState("TellMeThisIntent");
            }
            else{
                console.log("no infoType was provided.")
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                this.emit(":ask", output);
            }
        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);
        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}

function searchByCityIntentHandler(){
  var slots = this.event.request.intent.slots;
  var region = isSlotValid(this.event.request, "region");

      if (region){
        var searchQuery = slots.region.value;
        console.log("will begin search with  " + slots.region.value + " in region");
        var searchResults = searchDatabase(data, searchQuery, "region");

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("Search completed by city. Multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which area of outstanding natural beauty would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            console.log("one match found");
            this.handler.state = states.DESCRIPTION; // change state to description
            output = generateSearchResultsMessage(searchQuery,searchResults.results)
            this.attributes.lastSearch.lastSpeech = output;
            // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
            this.emit(":ask", output);

        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);

        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}

function searchByInfoTypeIntentHandler(){
  var slots = this.event.request.intent.slots;
  var areaName = isSlotValid(this.event.request, "areaName");
  var region = isSlotValid(this.event.request, "region");
  var infoType = isSlotValid(this.event.request, "infoType");

  var canSearch = figureOutWhichSlotToSearchBy(areaName,region);
  console.log("canSearch is set to = " + canSearch);

      if (canSearch){
        var searchQuery = slots[canSearch].value;
        var searchResults = searchDatabase(data, searchQuery, canSearch);

        //saving lastSearch results to the current session
        var lastSearch = this.attributes.lastSearch = searchResults;
        var output;

        //saving last intent to session attributes
        this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

        if (searchResults.count > 1) { //multiple results found
            console.log("multiple results were found");
            var listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
            output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Which area of outstanding natural beauty would you like to learn more about?";
            this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
            this.attributes.lastSearch.lastSpeech = output;
            this.emit(":ask", output);
        } else if (searchResults.count == 1) { //one result found
            this.handler.state = states.DESCRIPTION; // change state to description
            console.log("one match was found");
            if (infoType) {
                //if a specific infoType was requested, redirect to specificInfoIntent
                console.log("infoType was provided as well")
                var person = this.attributes.lastSearch.results[0];
                var cardContent = generateCard(person);
                var speechOutput = generateSpecificInfoMessage(slots,person);
                var repromptSpeech = "Would you like to find another area? Say yes or no";
                this.attributes.lastSearch.lastSpeech = speechOutput;
                this.handler.state = states.SEARCHMODE;
                this.emit(":askWithCard", speechOutput, repromptSpeech, cardContent.title, cardContent.body, cardContent.image);
                // this.emitWithState("TellMeThisIntent");
            }
            else{
                console.log("no infoType was provided.")
                output = generateSearchResultsMessage(searchQuery,searchResults.results)
                this.attributes.lastSearch.lastSpeech = output;
                // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
                this.emit(":ask", output);
            }
        }
        else{//no match found
          console.log("no match found");
          console.log("searchQuery was  = " + searchQuery);
          console.log("searchResults.results was  = " + searchResults);
          output = generateSearchResultsMessage(searchQuery,searchResults.results)
          this.attributes.lastSearch.lastSpeech = output;
          // this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
          this.emit(":ask", output);
        }
      }
        else {
            console.log("no searchable slot was provided");
            console.log("searchQuery was  = " + searchQuery);
            console.log("searchResults.results was  = " + searchResults);

            this.emit(":ask", generateSearchResultsMessage(searchQuery,false));
        }
}
// =====================================================================================================
// ------------------------------- Section 3. Generating Speech Messages -------------------------------
// =====================================================================================================

function generateNextPromptMessage(person,mode){
  var infoTypes = ["description","phone number","email"]
  var prompt;

  if (mode == "current"){
    // if the mode is current, we should give more informaiton about the current contact
    prompt = ". You can say - tell me more, or  tell me the" +  " " + infoTypes[getRandom(0,infoTypes.length-1)];
  }
  //if the mode is general, we should provide general help information
  else if (mode == "general"){
    prompt = ". " + getGenericHelpMessage(data);
  }
  return prompt;
}

function generateSendingCardToAlexaAppMessage(person,mode){
    var sentence = "I have sent " + person.areaName + "'s contact info to your Alexa app" + generateNextPromptMessage(person,mode);
    return sentence;
}

function generateSearchResultsMessage(searchQuery,results){
    var sentence;
    var details;
    var prompt;

    if (results){
      switch (true) {
      case (results.length == 0):
          sentence = "Hmm. I couldn't find " + searchQuery + ". " + getGenericHelpMessage(data);
          break;
      case (results.length == 1):
          var person = results[0];
          details = person.description
          prompt = generateNextPromptMessage(person,"current");
          sentence = details + prompt
          console.log(sentence);
          break;
      case (results.length > 1):
          sentence = "There are " + results.length + " matching areas.";
          break;
      }
    }
    else{
      sentence = "Sorry, I didn't quite get that. " + getGenericHelpMessage(data);
    }
    return sentence;
}

function getGenericHelpMessage(data){
  var sentences = ["ask - who is " + getRandomName(data),"say - find an area of outstanding natural beauty in " + getRandomCity(data)];
  return "You can " + sentences[getRandom(0,sentences.length-1)]
}

function generateSearchHelpMessage(){
    var sentence = "Sorry, I don't know that. You can ask me - what's the phone number, or give me the description";
    return sentence;
}

function generateTellMeMoreMessage(person){
    var sentence = person.areaName + "'s phone number is: " + person.phone + " , the email address is: " + person.email + ". " + generateSendingCardToAlexaAppMessage(person,"general");
    return sentence;
}
function generateSpecificInfoMessage(slots,person){
    var infoTypeValue;
    var sentence;

//TODO delete github stuff
    if (slots.infoType.value == "git hub"){
      infoTypeValue = "description";
      console.log("resetting gith hub to description");
    }
    else{
      console.log("no reset required for description");
      infoTypeValue = slots.infoType.value;
    }

    sentence = person.areaName + "'s " + infoTypeValue.toLowerCase() + " is : " + person[infoTypeValue.toLowerCase()] + " . Would you like to find another area of outstanding natural beauty? " + getGenericHelpMessage(data);
    return optimizeForSpeech(sentence);
}

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(newSessionHandlers, startSearchHandlers, descriptionHandlers, multipleSearchResultsHandlers);
    alexa.execute();
};

// =====================================================================================================
// ------------------------------------ Section 4. Helper Functions  -----------------------------------
// =====================================================================================================
// For more helper functions, visit the Alexa cookbook at https://github.com/alexa/alexa-cookbook
//======================================================================================================

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCity(arrayOfStrings) {
    return arrayOfStrings[getRandom(0, data.length - 1)].region;
}

function getRandomName(arrayOfStrings) {
    var randomNumber = getRandom(0, data.length - 1)
    return arrayOfStrings[randomNumber].areaName;
}

function titleCase(str) {
    return str.replace(str[0], str[0].toUpperCase());
}

function slowSpell(str) {
    return "That's spelled - " + str.split("").join("<break time=\"0.05s\"/>");
}

function generateCard(person) {
    var cardTitle = "Contact Info for " + titleCase(person.areaName);
    var cardBody = "phone: " + person.phone + " \n" + "description: " + person.description + " \n" + "email: " + person.email;
    var imageObj = {
    smallImageUrl: person.image,
    largeImageUrl: person.image,
    };
    return {
        "title": cardTitle,
        "body": cardBody,
        "image": imageObj
    };
}

function loopThroughArrayOfObjects(arrayOfStrings) {
    var joinedResult = "";
    // Looping through the each object in the array
    for (var i = 0; i < arrayOfStrings.length; i++) {
    //concatenating names (areaName ) for each item
        joinedResult = joinedResult + ", " + arrayOfStrings[i].areaName;
    }
    return joinedResult;
}


function sanitizeSearchQuery(searchQuery){
    searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
    searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
    return searchQuery;
}

function optimizeForSpeech(str){
    var optimizedString = str.replace("description","description");
    return optimizedString;
}

function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}



function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function isInfoTypeValid(infoType){
  var validTypes = ["description","phone","email"]
  return isInArray(infoType,validTypes);
}

function testingThisFunction(str){
  console.log("printing " + str);
}

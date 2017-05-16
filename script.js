var rounds = [
  [
    [
      "", "twitter1.jpg", "real"
    ],
    [
      "", "twitter2.jpg", "scam"
    ],
    [
      "", "twitter3.png", "real"
    ]
  ],
  [
    [
      "Ioana Frigura assigned you an action item in Text Your Computer With the Command Line Q3 FY17 Ioana Frigura -- bunny -- +patrick@mouse.org was this a typo? i'm not sure why the word 'bunny' is here.. Assigned to you Open 4 files with action items assigned to you", "round2option1.png", "real"

    ],
    [
      "Hi Meredith and Patrick, I'm running a student event in a couple of weeks and have a request to do a few projects that 'revolve around Help Desk type stuff.' Any suggestions? Regards, Jonathan, Jonathan Clemens, Ph.D., Learning Network Manager, Mouse_Minnesota", "round2option2.png", "real"

    ],
    [
      "In case you missed my email last week, timing in getting very tight now. You must read on to understand why you must act quickly for your benefit, and the benefit of your friends and family. If you recall, I told you that I have a friend who works at the food and drug administration who told me about a small company that has just completed human trials for a life-saving cancer therapy. There is nothing else on the market at the moment that can save 40% of patients with breast or prostate cancer. This drug does. The small company’s stock is going to go up from 2 dollars to over 30 dollars the moment that this announcement is made public within the next two weeks. Your window opportunity to buy shares of QSMG is quickly closing. You must act quickly before you miss out.", "round2option3.png", "scam"
    ]

  ],
  [
    [
      "Hi all! We're excited to invite interested folks from the Hive NYC community to the next CS-Paths Working Group session. This month, we’ll be hearing from the CS-Path project’s three design partners about the pathway building and brokering tools they’re developing, how iterations of their designs have unfolded, and early data and emergent lessons from design research cycles.", "round3option1.png", "real"

    ],
    [
      "Hi Patrick, In 2 weeks from now we'll be joined by industry thought leaders from Centene, Amway and HM Health Solutions for an insightful webinar discussion on how to leverage L&D along with digital solutions to overcome the challenges imposed by the ongoing changes in the marketplace. Save your complimentary spot and join us on Thursday, April 6th at 2pm EDT as our panelists explore: industry trends in a rapidly changing worlds, ultural and strategic alignment to achieve organizational objective, technology to simplify learning, continuous performance improvements . We know you have a busy schedule. Register even if you can't attend and I'll make sure you receive a copy of the recording post-webinar.", "round3option2.png", "scam"

    ],
    [
      "Welcome to Linode! Please confirm your email address. You're almost there! Please click the link below to create your Linode Manager account. Confirm my email and create my account! » Here are a few things to help you get started: Linode Docs - Getting Started Linode Docs - Beginner's Guide Join us via webchat or via #linode on irc.oftc.net For site migrations, server installs, one-off sysadmin tasks and nearly anything else you need, check out our Professional Services team.", "round3option3.png", "real"
    ]
  ]
]

var round = 0;
var totalRounds = 3;
var options;
var realChosen = 0;
var scamsChosen = 0;

nextOptions = function() {
  options = $( ".option-box" );
  for (var o in options) {
    $( options[o] ).append("<div class='option-content'>");
    if (rounds[round][o][0] != ""){
      $( options[o] ).append(rounds[round][o][0] + "<br><br>");
    }
    $( options[o] ).append("<img class='option-image' src='images/" + rounds[round][o][1] + "'></div>");
  }
}


$( "button#start" ).click(function() {
  $( "body" ).css("background-image", "none");
  $( "#start-header" ).hide();
  $( "#start-button-container" ).hide();
  $( "#game" ).show();
  nextOptions();
});


$( ".option-box").click(function() {
  for (var o in options) {
    if (this === options[o]){
      if (rounds[round][o][2] === "scam"){
        $( "#scam-alert" ).show();
        scamsChosen += 1;
      } else {
        $( "#real-alert" ).show();
        realChosen += 1;
      };
    }
  }
})

$( ".alert .close").click(function() {
  $( this ).parent().parent().hide();
  nextRound();
})

nextRound = function() {
  round += 1;
  optionTexts = $( ".option-content" );
  for (t in optionTexts) {
    $( optionTexts[t] ).remove();
  }
  if (round != totalRounds){
    nextOptions();
  } else {
    endGame()
  }
}

endGame = function() {
  $( "#end-alert" ).show();
  $( "#end-alert" ).append("<p>You Guessed " + scamsChosen + " of " + totalRounds + " scams correctly!</p>");
}

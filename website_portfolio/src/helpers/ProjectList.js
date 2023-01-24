import Project1 from "../images/witoStemopname.jpg";
import Project1_1 from "../images/kokosnoten.jpg"
import Project1_2 from "../images/draak.jpg";
import Project2 from "../images/parking.jpg";
import Project2_1 from "../images/openParking.jpg";
import Project2_2 from "../images/parkingNoMoreFree.jpg"
import Project3 from "../images/Solar.jpg";
import Project3_1 from "../images/tasmotaflash.jpg";
import Project4 from "../images/serre1.jpg";
import Project4_1 from "../images/serre.jpg";
import Project4_2 from "../images/serre4.jpg";
import Project5 from "../images/laptopkast.jpg";
import Project5_1 from "../images/stopcontact.jpg";
import Project6 from "../images/enigma3.jpg";
import Project6_2 from "../images/enigma4.jpg"
import Project7 from "../images/PowerBI.jpg";
import Project8 from "../images/theBigC.jpg";
import Project8_1 from "../images/theBigC2.jpg";
import Project8_2 from "../images/theBigC3.jpg";
import Project9 from "../images/Azure.jpg";
import Project9_1 from "../images/powerBIazure.jpg";



export const ProjectList = [
    {
        name: "Audiobook",
        image: [
          {
            picture: Project1,
            pText: ""
          },{
            picture: Project1_1,
            pText: "coconuts in the sand for the sound of horse hooves"
          },{
            picture: Project1_2,
            pText: ""
          }
        ],
        context: "In my final semester at KdG I had to make a Final project and at the end of the year present it to an external jury. When it became clear that we were very free to choose our final project, I quickly knew that I wanted to do something audio-oriented. In terms of subjects at school, I found the audio courses the most interesting. The only limitation we had was that it could only last fifteen minutes. I have been a fan of the audio books from “Het Geluidshuis” since I was nine years old and thought it would be a really fun challenge to make one myself. Their audiobooks aren’t just someone reading the book, but with different actors for each voice, music and sound effects.",
        date: "feb. 2020 - jun. 2020",
        assignment: "Make a final project",
        projectBody: [
              {
                heading: "PREPARATION",
                bodyText: "At my initial consultation, I was advised to find an existing story that was not too familiar and to turn it into a script. On the internet, I read an enormous number of stories. Just about every story by Grimm or Andersen and Greek myths and legends, but I was not really convinced of any of them (too long, too short, too well-known, bad ending,...). In the end, I went to the library to look for a story. After a few books I read one of the Efteling and there I found the story of the dragon. This was the first story of which I was really convinced. It came to life in my head when I read it. Accompanying an audio book should be a book of drawings. For this I am lucky that my sister has studied art and wanted to help me with this. To give her an idea of what I wanted I made her a document of 17 pages describing, based on photos, how I wanted it to be. The story also needed to be turned into an audiobook version. For example there was no dialog in the initial story. I started by writing out the story per character (narrator:, Vico:, ...) as it was in the book. From there I started adapting it to the final script. At first I collected a lot of separate ideas and once I really started writing, it went quite smoothly to incorporate them into the story. ",
              },
              {
                heading:"VOICE RECORDING",
                bodyText:"The voice recordings took place at DB Video. I was allowed to use their voice-over booth containing the Neumann TLM 103 microphone. The five voice actors voiced different roles here. It was great fun to hear my script come to life. What I quickly noticed was that not everyone reads a script in the same way and sometimes interprets the text in a completely different way. For me, the challenge was to make it clear what exactly I wanted it to sound like. This proved to be very difficult at times. I also noticed a number of times that what I had thought of didn't quite work out when the actors said it and then it was very pleasant that they thought along and wanted to try different things. Each actor came to record separately. During the recordings of the conversations, I always tried to listen if the tone and intonation matched the previous sentence and had a few variations done just to be sure. I let the voice actors do a few variations the first time they read it. That way I could interrupt them when it was good and let them do that version two more times.",
              },
              {
                heading:"FOLLEY",
                bodyText:"The bird ambience was recorded with the AKG C451 B stereo set. For all other sounds, a Sennheiser mkh416 shotgun microphone was used. Everything was recorded with the Zoom F6 field recorder in floating 32bit and a sample rate of 48khz. At the moment when the knights are on their way to the dragon, hoofbeats were needed. This was recorded with two coconuts in a sandbox with reasonably firm sand. It was surprisingly difficult to keep the right rhythm long enough, so I used shorter takes and edited them. For the other sounds, I needed a quiet space. For this purpose, I put down some comforters in a small room in the garage of an apartment building. There I recorded the hit of the dragon's tail on the knight's. This consists of three parts: the woosh is a stick that is waved, for the hit on a knight it is a stick that beats on a down blanket and a metal plate that is knocked on. For the king who wakes up startled I included some sheets. The moment where Vico takes the crown, coins also had to move/fall. To do this, I dropped coins on a stone and used a door handle to go through a pile of coins. There are also many sounds that I did not record myself. These I got from YouTube, zapsplat.com or freesound.org.",
              },
              {
                heading:"EDITING",
                bodyText:"For the editing, I started with the dialogue. In doing so, I searched for the best part of each take and placed it per characters into a stereo track. Once the dialogue was done, I started adding the sounds and music. to it. I always tried to imagine where the listener would be in the room and adjusted the panning accordingly. Compression and equalization was applied to each voice. To make it easier on myself, I adjusted my keyboard shortcuts. It was very handy to have one button to select all clips on and behind the cursor so I could easily add something in between. A separate button for the solo and mute toggle was also used a lot. To make it sound like my voice was coming through an intercom I used the old time radio preset of the parametric equalizer. The other voices were also recorded very dry and so did not yet sound as if they were recorded in the appropriate rooms. To get the voices right for spaces such as the cave, bedroom, throne room and outside, I used the studio reverb. When the actors had to listen I noticed afterwards that this was too soft and that by making it louder you could hear the air conditioning. This I could solve by using the DeNoise effect.",
              }],
        contribution: ["Find the actors.","Record the voices.","Record part of the folley.","Edit all the audio into one audiobook"],
        conclusion:"In this project, I learned a lot about audio, how best to record and edit sound, but most importantly soft skills. Talking to people I don't know and asking them if they want to record a voice. Directing those people while voicing. Talking to strangers is not something I shy away from anymore.",
      },
    {
        name: "Parking",
        image: [
          {
            picture: Project2,
            pText: ""
          },{
            picture: Project2_1,
            pText: ""
          }
        ],
        context: "This project was made for the course IoT Advanced in my second year at Thomas More. We had five weeks to work on it.",
        date: "oct. 2021 - dec. 2021",
        assignment: "Build an automated parking with license plate recognition and website to monitor.",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: 'Our group consisted of six people. We started out by deviding the project into smaller tasks. For example one task was to automate the barrier, another was the website. When parts were ready we put it together into one script. The entire parking was run with a raspberry pi. We used an ultrasonic sensor to detect when a car was parked in front of the barrier. When a car was noticed the camera would take a picture and the AI would return the license plate. Whe would only open the barrier if the license plate was in our database and the stoplight would turn green. Then the car would park over a LDR and the website would be updated. We also had an ultrasonic sensor with barrier to drive off the parking. If all places were occupied a push message would be send out and no one would be allowed to enter. This would make the stoplicht turn red. The display would always give an appropriate message for example "no more space" or a welcome message.',
          }],
        contribution: ["Stoplight","Display","Put everyones code together","Made the scale model","License plate recognition(not alone)"],
        conclusion:"I learned a lot more about programming with this project. To put all the code together I had to multithread in python which was new. Because we needed a scale model I finally had a good reason to use the laser cutter at school. I had already taken the course but this allowed me to make something myself. I had also never worked with AI and was glad I now have a tiny bit of experience with it instead of being a total novice.",
      },
      {
        name: "Solarpanels",
        image: [
          {
            picture: Project3,
            pText: "testText1"
          },{
            picture: Project3_1,
            pText: "testText2"
          }
        ],
        context: "This project was made for the course Systems Engineering & Analysis in my second year at Thomas More. We had a whole semester to work on it. Around the date of the project a lot of things were changing considering energy in Belgium. The prices were rising and the way of calculating your energy bill changed. The new rules make it way more expensive if you draw an energy peak.",
        date: "sep. 2021 - jan. 2022",
        assignment: "Find a way to keep his energy bill as low as possible, monitor his energy consumption and energy yield",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "This project was realized by a team of four students. In the first few weeks we mainly talked to our client(the teacher) to get a good understanding of what he wanted and to suggest a few concepts on how his problem could be solved. We worked in an agile matter so during those weeks the solution kept changing more and more to what the client would be happiest with. Then at the end of the semester we got one week to make a proof of concept and present our solution.",
          },
          {
            heading: "OUR SOLUTION",
            bodyText: "The first thing the client wanted was to be able to see his current power yield and consumption. With an esp32 we got the data from kWh pulse meters and sent it to our server via MQTT. We showed this data on a website via gauges we imported from Grafana. We also went a little further and stored the data in a mySQL database so we could show graphs on the website. Our teacher already had a windows server so we made everything into containers, easily started with docker-compose. Our solution to super expensive energy peaks was to give the client ways to use electrical appliances (like his washer) at the moments his solar panels were generating enough energy. His washer, dryer and dishwasher all had timers build in. The first step of our solution was to predict the solar yield of the next days and inform our client of the best time to use energy via a push notification. The data of the future solar yield came from the solcast API. This way he could load in his washer and tell it to start in 4 hours because the notification said that was the best time to use energy. The next step was to automate other electrical appliances. Our teacher had an electric fire to warm his bathroom. So we used a sonoff basic switch to be able to control whether or not this appliance would get powered. The tasmota software we placed onto the sonoff made us able to control it via MQTT. The state of the appliance was visible on the website as well as buttons to turn it on or off. There was also an option to do it automatically witch turned it on when there was enough excess solar power. We also had a vacation option on the website. If this was on our teacher would get an email if the power consumption goes above a certain level.",
          }
        ],
        contribution: ["Setup of the MQTT broker in docker-compose file.","Got data from the kWh meters on an esp32 and send it to the server via MQTT.","Record part of the folley.","Put the data from the esp32 in a database.","Made the website functional, links with Grafana and sliders, buttons to control appliances (not the styling).","Setup of the sonoff basic switch with tasmota software and MQTT.","Put together everyones code."],
        conclusion:"I learned a lot of new things with this project and was lucky to be able to add things like MQTT and Grafana because I already wanted to learn them before the project. The sonoff basic switch was also something new our teacher introduced to us that I’m very glad I know about now.",
      },
      {
        name: "Greenhouse",
        image: [
          {
            picture: Project4_1,
            pText: "testText1"
          },{
            picture: Project4,
            pText: "testText2"
          },{
            picture: Project4_2,
            pText: "testText2"
          }
        ],
        context: "This project was made for the course Project IoT in my second year at Thomas More. We had a whole semester to work on it. One of my teachers Paul has a hobby in which he grows pumpkins as large as possible and then enters competitions with it. He has a large greenhouse of 7 m x 18.5 m where he only plants 2 pumpkins a year. In order to grow the pumpkins as large as possible he has to handle a lot of things like temperature, water, light, ... which are all quite time-consuming. Before our project, the watering and temperature wasn't measured. So in order to make his life easier and be more precise with the temperature, watering, ...",
        date: "feb. 2021 - jun. 2022",
        assignment: "Monitor and automate the greenhouse",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "Before we got started, we first visited Pauls greenhouse to view the situation. Paul explained how everything works. He also set some requirements that had to be met. This was automating the windows and fan. Watering his plants was also a crucial part of the assignment. We had to take the temperature in the greenhouse into account when controlling the windows and fan. We used a temperature sensor to monitor the temperature. The pumpkin plants need a lot of water to grow. First this is done with time switches that water the pumpkin at the same times every day. Paul wanted us to monitor soil moisture. We did this with capacitive soil moisture sensors. This way he could know when the plants needed water. The water for the plants comes from cubic barrels. These must of course also be refilled after watering the plants. For this purpose, the pressure in the cubic vessels is read and automatically topped up when they are too empty. We made sure that he could make everything happen automatically, but we also made sure that everything could be done manually. He could then set this up on a website. We also ensured that a new photo was taken every hour and can be viewed on the website. There was a raspberry pi that housed the website and database, and esp32s for the sensors in the greenhouse. ",
          }],
        contribution: ["website","api to predict the temperature","picture of the pumpkin every day"],
        conclusion:"It was a very interesting project from which we learned a lot. In retrospect, there are things we would have done differently, such as the connections between the cables and the ESPs. We also slightly underestimated the work in the greenhouse, because we started building it there, we again encountered unforeseen obstacles. In the end, not everything was finished that we thought we could finish, but we did work very hard in the greenhouse.",
      },
      {
        name: "Laptop loan system",
        image: [
          {
            picture: Project5,
            pText: "testText1"
          },{
            picture: Project5_1,
            pText: "testText2"
          }
        ],
        context: "For the Embedded Devices Essentials course, we were asked to create an automatic lending system for laptops. At the moment, laptops can be borrowed, but someone from the secretariat must always be present to give the laptop. Because they soon want fewer computer rooms at Thomas More, they would like to make it more accessible to borrow laptops for students who cannot bring one to school.",
        date: "feb. 2021 - jun. 2022, sep. 2022 - oct. 2022",
        assignment: "Create a system so that students can borrow a laptop themselves with their student card.",
        projectBody: [
          {
            heading: "PREPARATION",
            bodyText: "We started with a meeting with the customer to see what they wanted. We also met with the person responsible for fire safety at Thomas More to see what we had to take into account. We didn't have to take any extra fire-safe measures for our prototype, if it really had to be built it would have to be placed in a fire-resistant cabinet.",
          },
          {
            heading: "CUSTOMER'S ASK",
            bodyText: "Students must be able to borrow and return a laptop with their student card. If a student does not return correctly, they may no longer lend. Overview of how many laptops are lent out daily to see if there are enough. Some people (admins) need to be able to open all the boxes at once. The laptops must be able to be charged in the cupboard. If the power fails, this must be reported.",
          },
          {
            heading: "OUR SOLUTION",
            bodyText: 'Our solution was a cabinet with an ESP32 per 2 laptop compartments. Each laptop compartment has a socket to charge the laptop, a solenoid lock that retracts when the cabinet is allowed to open and a piece of LED strip that is red when the laptop compartment is empty and green when there is a laptop in it. This way, students can immediately see whether any laptops are still available. After scanning the student card, it can be indicated on a screen whether there will be lent or returned. If it is the administrator, there is a third option “open everything”. If the student opts for loan, the database will check which laptop compartment is still full and have the solenoid from the free compartment retract. If a student wants to return the laptop, they can do so by simply clicking return and placing the laptop in the laptop compartment. If someone who has not lent a laptop wants to return it, they have the option "return for someone else" and "laptop found". If the laptop found option is used, the person who lent that laptop will be entered in the database in a table of bad renters. If the counter behind your rnumber in that table is at 3, you may no longer lend. To make the laptop cabinet work with 1 socket, there are only a few sockets for charging that are on at the same time. If the current sensor detects that the socket is not used, another one will activate using a relay. We also provided visualizations in grafana. This way the admins can see how many laptops are lent out per day.',
          }
        
        ],
        contribution: ["PCB","IO expander","wooden cabinet","current measurement","card reader (sep. 2022)","text message","website"],
        conclusion:"This project was a whole new challenge because a lot of new skills came up which caused everyone to have some problems. This of course created a lot of learning opportunities from which everyone learned. The skills from this project will certainly come in handy in future projects. I am especially happy to have learned how to design a PCB.",
      },
      {
        name: "enigma",
        image: [
          {
            picture: Project6,
            pText: "testText1"
          },{
            picture: Project6_2,
            pText: "testText2"
          }
        ],
        context: "My teacher Jochen Mariën had the assignment of making an enigma machine. The assignment was originally much simpler. An Arduino hooked up to a laptop with some physical buttons to do some settings. At our first meeting I proposed to mimic the enigma as closely as possible in real life with an ESP32 instead of an Arduino. My teacher thought this was a very good idea so I started working on it.",
        date: "sep. 2022 - jan. 2023",
        assignment: "Make a modern enigma machine.",
        projectBody: [
          {
            heading: "PERSONAL GOALS",
            bodyText: "With this assignment, I had also set myself some goals such as looking more at the datasheets and trying to program in the ESP-IDF environment. Both ended up working out quite well. Programming in ESP-IDF was quite a challenge that still gave some problems a week of delivery. I then made the choice to switch to Arduino code on the esp32 because otherwise it wasn't going to be finished in time.",
          },{
            heading: "HOW IT WORKS",
            bodyText: "My enigma machine is powered by a 9V battery attached to a switch. When you turn on the switch, 9V reaches an LM7805 which turns it into 5V that can go to the ESP32. Once voltage is applied to the ESP32 it begins a 4 step process.",
          },
          {
            heading: "step 1: setup the rotors",
            bodyText: "The first step is setting the rotors. There are 3 stepper motors that show purely visually how the rotors are positioned. There are 3 rotary encoders that can set the 3 rotors. By turning a rotary encoder you set the rotor’s starting position. The left rotary encoder for the left rotor,... . There used to be a standard choice of 5 rotors, each rotor was wired differently internally. You had to choose 3 of them and put them into the enigma machine. When you press on a rotary encoder you chose 1 of the 5 rotors in the code. The old enigma machines let you know the uncoded letter by lighting a light. My solution to this was a ws2812b led strip. While setting the rotors, the led strip indicates which rotor you choose when pressing and which letter you will start on when turning. When the rotors are set to your choice you can press start message. When start message is pressed the code begins step 2: reading the switchboard. ",
          },{
            heading: "step 2: read the switchboard",
            bodyText: "The switchboard requires 26 GPIO pins. In each case, 1 pin is set as high output and all other pins are read as inputs. Then if 1 of those inputs is high it means they are paired and are linked together in the code. After reading the switchboard, step 3 begins: reading the keyboard.",
          },{
            heading: "step 3: reading the keyboad",
            bodyText: "The keyboard is a button matrix so I only need 11 GPIO pins, 4 outputs (rows) and 7 inputs (columns). By setting 1 output high each time and checking all inputs, I know by the combination of row and column which button was pressed. Each letter you press goes in the code through the switchboard, the 3 rotors, the reflector, again through the 3 rotors and finally once more through the switchboard. The encoded letter that comes out of that will light up at the LED strip. Each time a key is pressed, the right rotor turns one letter. This way if you press the same letter twice you will never get the same encoded letter back. When you have finished typing your message you can press stop message, then step 4 starts: send message if needed.",
          },{
            heading: "step 4: send message if needed",
            bodyText: "When you press stop message the status of the WiFi switch is checked. If it is off then the message is not sent and you go back to step 1: setting up the rotors. If the switch is on the ESP32 connects to a WiFi network. Then the message is forwarded with a POST request so it can be read on a website. The settings of the rotors are then sent via MQTT to a NodeRed server running in the IBM cloud. In NodeRed that message is then sent to me via Whatsapp. After sending, you can get back to step 1.",
          },{
            heading: "FRAMING",
            bodyText: "For the framing, I used the laser cutter and the 3D printer we have available at school. Everything for the laser cutter was drawn in AutoCAD and the keys and rotors were drawn in fusion360. I had worked with a laser cutter before but it was the first time for me to 3D print. For the box around the enigma, I got a lot of help from my grandfather. He used to be a carpenter and helped me make the wooden wine tray into the beautiful frame that it is now. "
          }
        ],
        contribution: ["solo project", "got help with the wood assembly"],
        conclusion:"I thought it was a very interesting project in which I was able to do a lot that I said I wanted to try at the end of last school year, such as 3D printing and working with ESP-IDF. I'm also glad I got another chance to design a PCB.",
      },
      {
        name: "chicken test farm",
        image: [
          {
            picture: Project7,
            pText: "testText1"
          },{
            picture: Project2,
            pText: "testText2"
          },{
            picture: Project5,
            pText: "testText2"
          }
        ],
        context: "",
        date: "sep. 2022 - jan. 2023",
        assignment: "",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["My teammate and I worked on everything together.","making a star diagram","ETL process","visualisations in powerBI"],
        conclusion:"",
      },
      {
        name: "customer loyalty system",
        image: [
          {
            picture: Project8,
            pText: "testText1"
          },{
            picture: Project8_1,
            pText: "testText2"
          },{
            picture: Project8_2,
            pText: "testText2"
          }
        ],
        context: "",
        date: "sep. 2022 - dec. 2022",
        assignment: "",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["card reader","TFT screen","LCD screen","assembly of the components with wooden frame"],
        conclusion:"",
      },
      {
        name: "Azure IoT",
        image: [
          {
            picture: Project9,
            pText: "testText1"
          },{
            picture: Project9_1,
            pText: "testText2"
          }
        ],
        context: "",
        date: "sep. 2022 - jan. 2023",
        assignment: "",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["PCB","IO expander"],
        conclusion:"",
      },

];
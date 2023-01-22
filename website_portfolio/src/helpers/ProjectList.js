import Project1 from "../images/witoStemopname.jpg";
import Project2 from "../images/parking.jpg";
import Project3 from "../images/Solar.png";
import Project4 from "../images/serre1.png";
import Project4_1 from "../images/serre.jpg";
import Project5 from "../images/laptopkast.jpg";
import Project6 from "../images/enigma.jpg";
import Project7 from "../images/PowerBI.jpg";
import Project8 from "../images/theBigC.jpg";
import Project9 from "../images/Azure.PNG";



export const ProjectList = [
    {
        name: "Audiobook",
        image: Project1,
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
        image: Project2,
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
        image: Project3,
        context: "This project was made for the course Systems Engineering & Analysis in my second year at Thomas More. We had a whole semester to work on it.",
        date: "sep. 2021 - jan. 2022",
        assignment: "assignment text",
        projectBody: [
          {
            heading: "THE PROBLEM",
            bodyText: "Around the date of the project a lot of things were changing considering energy in Belgium. The prices were rising and the way of calculating your energy bill changed. The new rules make it way more expensive if you draw an energy peak. So our teacher, who has solar panels wanted to find a way to keep his energy bill as low as possible.",
          },
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
        image: Project4_1,
        context: "This project was made for the course Project IoT in my second year at Thomas More. We had a whole semester to work on it. One of my teachers has a hobby in which he grows pumpkins as large as possible and then enters competitions with it. He has a large greenhouse of 7 m x 18.5 m where he only plants 2 pumpkins a year. In order to grow the pumpkins as large as possible he has to handle a lot of things like temperature, water, light, ... which are all quite time-consuming. Before our project, the watering and temperature wasn't measured. So in order to make his life easier and be more precise with the temperature, watering, ...",
        date: "feb. 2021 - jun. 2022",
        assignment: "Monitor and automate the greenhouse",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["website","api to predict the temperature","picture of the pumpkin every day"],
        conclusion:"conclusion",
      },
      {
        name: "Laptop loan system",
        image: Project5,
        context: "For the Embedded Devices Essentials course, we were asked to create an automatic lending system for laptops. At the moment, laptops can be borrowed, but someone from the secretariat must always be present to give the laptop. Because they soon want fewer computer rooms at Thomas More, they would like to make it more accessible to borrow laptops for students who cannot bring one to school.",
        date: "feb. 2021 - jun. 2022, sep. 2022 - oct. 2022",
        assignment: "Create a system so that students can borrow a laptop themselves with their student card.",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["PCB","IO expander","wooden cabinet","current measurement","card reader","text message","website"],
        conclusion:"This project was a whole new challenge because a lot of new skills came up which caused everyone to have some problems. This of course created a lot of learning opportunities from which everyone learned. The skills from this project will certainly come in handy in future projects. I am especially happy to have learned how to design a PCB.",
      },
      {
        name: "enigma",
        image: Project6,
        context: "",
        date: "sep. 2022 - jan. 2023",
        assignment: "",
        projectBody: [
          {
            heading: "THE PROCESS",
            bodyText: "process",
          }],
        contribution: ["solo project", "got help with the wood assembly"],
        conclusion:"",
      },
      {
        name: "chicken test farm",
        image: Project7,
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
        image: Project8,
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
        image: Project9,
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
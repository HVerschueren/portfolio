import Project1 from "../images/witoStemopname.jpg";
import Project2 from "../images/parking.jpg";
import Project3 from "../images/Solar.png";
import Project4 from "../images/serre1.png";



export const ProjectList = [
    {
        name: "Audiobook",
        image: Project1,
        context: "In my final semester at KdG I had to make a Final project and at the end of the year present it to an external jury. When it became clear that we were very free to choose our final project, I quickly knew that I wanted to do something audio-oriented. In terms of subjects at school, I found the audio courses the most interesting. The only limitation we had was that it could only last fifteen minutes. I have been a fan of the audio books from “Het Geluidshuis” since I was nine years old and thought it would be a really fun challenge to make one myself. Their audiobooks aren’t just someone reading the book, but with different actors for each voice, music and sound effects.",
        date: "feb. 2020 - jun. 2020",
        assignment: "assignment text",
        process: "At my initial consultation, I was advised to find an existing story that was not too familiar and to turn it into a script. On the internet, I read an enormous number of stories. Just about every story by Grimm or Andersen and Greek myths and legends, but I was not really convinced of any of them (too long, too short, too well-known, bad ending,...). In the end, I went to the library to look for a story. After a few books I read one of the Efteling and there I found the story of the dragon. This was the first story of which I was really convinced. It came to life in my head when I read it. Accompanying an audio book should be a book of drawings. For this I am lucky that my sister has studied art and wanted to help me with this. To give her an idea of what I wanted I made her a document of 17 pages describing, based on photos, how I wanted it to be. The story also needed to be turned into an audiobook version. For example there was no dialog in the initial story. I started by writing out the story per character (narrator:, Vico:, ...) as it was in the book. From there I started adapting it to the final script. At first I collected a lot of separate ideas and once I really started writing, it went quite smoothly to incorporate them into the story.",
        contribution: ["Find the actors.","Record the voices.","Record part of the folley.","Edit all the audio into one audiobook"],
        conclusion:"fun project...",
      },
    {
        name: "Parking",
        image: Project2,
        context: "This project was made for the course IoT Advanced in my second year at Thomas More. We had five weeks to work on it.",
        date: "oct. 2021 - dec. 2021",
        assignment: "Build an automated parking with license plate recognition and website to monitor.",
        process: "Our group consisted of six people. We started out by deviding the project into smaller tasks. For example one task was to automate the barrier, another was the website. When parts were ready we put it together into one script. The entire parking was run with a raspberry pi.We used an ultrasonic sensor to detect when a car was parked in front of the barrier. When a car was noticed the camera would take a picture and the AI would return the license plate. Whe would only open the barrier if the license plate was in our database and the stoplight would turn green. Then the car would park over a LDR and the website would be updated. We also had an ultrasonic sensor with barrier to drive off the parking. If all places were occupied a push message would be send out and no one would be allowed to enter. This would make the stoplicht turn red. The display would always give an appropriate message for example <q>uot no more space </q> or a welcome message.",
        contribution: ["Stoplight","Display","Put everyones code together","Made the scale model","License plate recognition(not alone)"],
        conclusion:"I learned a lot more about programming with this project. To put all the code together I had to multithread in python which was new. Because we needed a scale model I finally had a good reason to use the laser cutter at school. I had already taken the course but this allowed me to make something myself. I had also never worked with AI and was glad I now have a tiny bit of experience with it instead of being a total novice.",
      },
      {
        name: "Solarpanels",
        image: Project3,
        context: "This project was made for the course Systems Engineering & Analysis in my second year at Thomas More. We had a whole semester to work on it.",
        date: "sep. 2021 - jan. 2022",
        assignment: "assignment text",
        process: "At my initial consultation, I was advised to find an existing story that was not too familiar and to turn it into a script. On the internet, I read an enormous number of stories. Just about every story by Grimm or Andersen and Greek myths and legends, but I was not really convinced of any of them (too long, too short, too well-known, bad ending,...). In the end, I went to the library to look for a story. After a few books I read one of the Efteling and there I found the story of the dragon. This was the first story of which I was really convinced. It came to life in my head when I read it. Accompanying an audio book should be a book of drawings. For this I am lucky that my sister has studied art and wanted to help me with this. To give her an idea of what I wanted I made her a document of 17 pages describing, based on photos, how I wanted it to be. The story also needed to be turned into an audiobook version. For example there was no dialog in the initial story. I started by writing out the story per character (narrator:, Vico:, ...) as it was in the book. From there I started adapting it to the final script. At first I collected a lot of separate ideas and once I really started writing, it went quite smoothly to incorporate them into the story.",
        contribution: ["Setup of the MQTT broker in docker-compose file.","Got data from the kWh meters on an esp32 and send it to the server via MQTT.","Record part of the folley.","Put the data from the esp32 in a database.","Made the website functional, links with Grafana and sliders, buttons to control appliances (not the styling).","Setup of the sonoff basic switch with tasmota software and MQTT.","Put together everyones code."],
        conclusion:"I learned a lot of new things with this project and was lucky to be able to add things like MQTT and Grafana because I already wanted to learn them before the project. The sonoff basic switch was also something new our teacher introduced to us that I’m very glad I know about now.",
      },
      {
        name: "Greenhouse",
        image: Project4,
        context: "This project was made for the course Project IoT in my second year at Thomas More. We had a whole semester to work on it.",
        date: "feb. 2021 - jun. 2022",
        assignment: "assignment text",
        process: "process text",
        contribution: ["website","api to predict the temperature","picture of the pumpkin every day"],
        conclusion:"conclusion",
      },

];
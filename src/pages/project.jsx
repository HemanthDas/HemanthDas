import Card from "../components/card";
const Project = () => {
  const obj = [
    {
      title: "Quiz Application",
      description:
        "React Quiz Application with Express.js backend. This application is a quiz application where users can take quizzes on various topics. The application has a user authentication system and a leaderboard to show the top scorers. The application is built using React.js, Express.js, and MongoDB.",
      link: "https://github.com/HemanthDas/Quiz-Application",
    },
    {
      title: "Chat Application",
      description:
        "This is a chat application built using React.js, Express.js, and MongoDB. The application has a real-time chat feature where users can chat with each other. The application is built using React.js, Express.js, and MongoDB. and Socket.io for real-time chat. This application is Managed using DevOps Tools like Docker, Jenkins, and Github.",
      link: "https://github.com/HemanthDas/Chat-Application",
    },
    {
      title: "Weather App",
      description:
        "This is a weather application built using React.js. The application fetches weather data from the OpenWeatherMap API and displays it to the user. The application allows users to search for weather data for any city in the world. The application is built using React.js and the OpenWeatherMap API.",
      link: "https://github.com/HemanthDas/Weather-App",
    },
  ];
  return (
    <div id="project">
      {obj.map((item) => {
        return <Card obj={item} key={item.title} />;
      })}
    </div>
  );
};

export default Project;

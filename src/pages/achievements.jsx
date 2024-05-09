import AchivementsCard from "../components/achivementsCard";

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Cloud Practitioner Certified",
      date: "July 18, 2023",
      href: "https://www.credly.com/badges/e27d38d1-809f-4260-87a5-2954e1fa96eb/public_url",
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      date: "August 07, 2026",
      href: "https://www.credly.com/badges/9e77a181-e1ca-4539-b49d-b082acc60cb4/public_url",
    },
  ];
  return (
    <div id="achievements">
      {achievements.map((achievement, index) => (
        <AchivementsCard
          key={index + 1}
          title={achievement.title}
          date={achievement.date}
          href={achievement.href}
        />
      ))}
    </div>
  );
};

export default Achievements;

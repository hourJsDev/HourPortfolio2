import { useGlobalContext } from "../Context";
const SkillList = () => {
  const { mySkill, setSelectedSkill } = useGlobalContext();
  return (
    <div className="w-[50%] max-md:w-full flex flex-col gap-[2rem]">
      <p  className="text-[1.5rem] max-md:text-[1.4rem] text-center">
        My name is <strong>Pich Lyhour</strong>. I am studying for the third year of a bachelor's
        degree in computer science and engineering at the royal university of
        Phnom Penh. In the bellow is my skill after learning web development for
        8 months.
      </p>
      <h3 className="text-[2rem]">Development</h3>
      <ul  className="grid w-[90%]  items-center max-md:w-full  grid-cols-3">
        {mySkill.map((sk) => (
          <li
            onClick={() => setSelectedSkill(sk)}
            className="text-[1.5rem]  max-md:text-[1.2rem] mb-[1rem] capitalize cursor-pointer"
            key={sk.id}
          >
            {sk.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

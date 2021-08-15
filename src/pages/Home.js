import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../redux/actions/peopleAction";
import { CharacterTable } from "../components/CharacterTable";
const Home = () => {
  const people = useSelector((state) => state.allPeople.peoples);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople(1));
  }, []);

  return (
    <div className="w-full px-2 md:w-10/12 mt-8 rounded-lg">
      <CharacterTable characters={people.results} total={people.count} />
    </div>
  );
};

export default Home;

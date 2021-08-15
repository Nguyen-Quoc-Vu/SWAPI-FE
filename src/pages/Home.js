import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "../redux/actions/peoplesAction";
import { CharacterTable } from "../components/CharacterTable";

const Home = () => {
  const people = useSelector((state) => state.allPeople.peoples);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <div>
      <CharacterTable characters={people.results} />
    </div>
  );
};

export default Home;

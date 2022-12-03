import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStarWarsData } from "../../../redux/features/data/data-slice";
import { Container } from "../../common/Container/Container";
import { Button } from "../../common/Button/Button";
import { Profile } from "./Profile/Profile";
import { apiUrl } from "../../../config/api";
import { People } from "../../../utils/types";
import "./Home.scss";

export const Home = () => {
  const [id, setId] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [people, setPeople] = useState<People>({
    name: "",
    eyeColor: "",
    birthYear: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${apiUrl}/${id}`, {
          method: "GET",
        });
        if (res.status === 200) {
          const data = await res.json();
          setPeople({
            ...people,
            name: data.name,
            eyeColor: data.eye_color,
            birthYear: data.birth_year,
          });
          dispatch(addStarWarsData({
            name: data.name,
            created: data.created,
            vehicles: data.vehicles,
          }));
        } else {
          setError("Nie znaleziono danych. Spróbój jeszcze raz.");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <Container>
        <nav className="home__nav">
          <p>Patrycja Ińska</p>
          <Button
            title="formularz rejestracyjny"
            color="gray"
            size="big"
            onClick={() => navigate("/register")}
          />
        </nav>
        <Profile
          name={people.name}
          eyeColor={people.eyeColor}
          birthYear={people.birthYear}
          img={`https://picsum.photos/id/${id}/300`}
        />
        <Button
          title="next profiles"
          color="green"
          size="small"
          onClick={() => setId(id + 1)}
        />
        <p className="home__error">{error}</p>
      </Container>
    </>
  );
};

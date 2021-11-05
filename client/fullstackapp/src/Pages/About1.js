import React from "react";
import { Link, useParams } from "react-router-dom";

function About() {
  let { email } = useParams();
  return (
    <div className="About">
      <div className="AboutRet">
        <Link
          to={`/Home1/${email}`}
          style={{ textDecoration: "none", color: "white", fontSize: "large" }}
        >
          Back
        </Link>
      </div>
      <div className="AboutText">
        <text>
          The Proximity Based Donations is an NGO in India headquartered in
          Bengaluru. Our organisation strives to eliminate classroom hunger by
          implementing the Mid-Day Meal Scheme in the government schools and
          government-aided schools. Alongside, Akshaya Patra also aims at
          countering malnutrition and supporting the right to education of
          socio-economically disadvantaged children. Since 2000, Akshaya Patra
          has been concerting all its efforts towards providing fresh and
          nutritious meals to children on every single school day. We are
          continuously leveraging technology to multiply our reach. The
          state-of-the-art kitchens have become a subject of study and have
          attracted curious visitors from around the world. Our partnership with
          the Government of India and various State Governments, along with the
          persistent support from corporates, individual donors, and
          well-wishers have helped us to grow from serving just 1,500 children
          in 5 schools in 2000 to serving 1.8 million children. Today, Akshaya
          Patra is the world’s largest (not-for-profit run) Mid-Day Meal
          Programme serving wholesome food every school day to over 1.8 million
          children from 19,039 schools across 12 states & 2 Union territories of
          India. Comparative Number of Meals The Growth of The Akshaya Patra
          Foundation – A Quick Overview On 28 November 2001, the Supreme Court
          of India passed a mandate, "Cooked mid-day meal is to be provided in
          all the Government and Government-aided primary schools in all the
          states." And, Akshaya Patra was also called upon to provide
          testimonies to the Supreme Court. By the time the Ministry of Human
          Resource Development - Department of School Health and Education
          extended its support to the initiative in 2003, Akshaya Patra was
          already reaching out to 23,000 children. Today, Akshaya Patra has 52
          kitchens spread across 12 states & 2 Union territories of India, a
          result of the successful partnership with the Government of India,
          various State Governments and generous supporters.
        </text>
      </div>
      <Link
        to="/"
        style={{
          paddingLeft: "350px",
          textAlign: "center",
          textDecoration: "none",
          color: "brown",
          fontWeight: "bolder",
          fontSize: "50px",
        }}
      >
        Click Here to join today
      </Link>
    </div>
  );
}

export default About;

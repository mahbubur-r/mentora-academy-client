import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import TopCourses from "../TopCourses/TopCourses";
import Expertise from "../Expertise/Expertise";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Statistics from "../../components/Statistics/Statistics";
import Categories from "../../components/Categories/Categories";
import LearningPath from "../../components/LearningPath/LearningPath";
import Testimonials from "../../components/Testimonials/Testimonials";
import BecomeInstructor from "../../components/BecomeInstructor/BecomeInstructor";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
  const topCourses = useLoaderData();

  return (
    <div>
      <title>Home</title>
      {import.meta.env.VITE_name}
      <Banner></Banner>
      <Expertise></Expertise>
      <Statistics></Statistics>
      <Categories></Categories>
      <TopCourses topCourses={topCourses}></TopCourses>
      <LearningPath></LearningPath>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <BecomeInstructor></BecomeInstructor>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
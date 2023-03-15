import React, { useEffect, useState } from "react";
import Stylesheet from "reactjs-stylesheet";
import { useLocation } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectCategorySelect from "../components/ProjectCategorySelect";
import data from "../data/data.json";

export default function Projects(props) {
  const { pathname } = useLocation();
  const [items, setItems] = useState([
    data.video[0],
    data.audio[0],
    data.software[0],
  ]);

  useEffect(() => {
    if (pathname === "/projects") {
      props.setSelected("projects");
    }
  }, [pathname, props]);

  return (
    <div style={styles.container}>
      <ProjectCategorySelect setItems={setItems} />
      {items.length !== 0 &&
        items.map((item) => (
          <ProjectCard
            title={item.title}
            body={item.body}
            image={item.image}
            demoURL={item.demoURL}
            projectURL={item.projectURL}
          />
        ))}
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    color: "white",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

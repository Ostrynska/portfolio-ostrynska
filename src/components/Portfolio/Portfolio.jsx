import React, { useEffect, useState } from 'react';
import { portfolioData } from '../../contentOption';

import {
 Container,
 TitleWrapp,
 Title,
 TitleLine,
 Content,
 List,
 Item,
} from './Portfolio.styled';

const projectFilters = [
 { name: 'all' },
 { name: 'personal' },
 { name: 'team' },
];

const Portfolio = () => {
 const [filter, setFilter] = useState({ name: 'all' });
 const [projects, setProjects] = useState([]);
 const [visibleProjects, setVisibleProjects] = useState([]);
 const [active, setActive] = useState(0);
 const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  setProjects(portfolioData);
  setVisibleProjects(portfolioData);
 }, []);
 console.log('projects', projects);

 useEffect(() => {
  if (filter.name === 'all') {
   setVisibleProjects(projects);
  } else {
   setVisibleProjects(
    projects.filter(
     project => project.category.toLowerCase() === filter.name.toLowerCase()
    )
   );
  }
 }, [filter, projects]);

 useEffect(() => {
  window.localStorage.setItem('projects', JSON.stringify(projects));
 }, [projects]);

 const handleClick = (e, idx) => {
  setFilter({ name: e.target.textContent.toLowerCase() });
  setActive(idx);
 };

 console.log(portfolioData);
 return (
  <div>
   <Container>
    <TitleWrapp>
     <Title>Portfolio</Title>
     <TitleLine />
    </TitleWrapp>
    <Content>
     <ul>
      {projectFilters.map((i, index) => {
       return (
        <li
         key={index}
         onClick={e => handleClick(e, index)}
         // className={`${active === index ? 'active-work' : ''} work__item`}
        >
         <button>{i.name}</button>
        </li>
       );
      })}
     </ul>
     <List>
      {visibleProjects.map(item => (
       <Item key={item.id}>
        <div>
         <img src={item.image} alt={item.title} width={150} />
         <h2>{item.title}</h2>
         <p>
          <strong>Tools:</strong> {item.tools}
         </p>
         {item.link !== false && (
          <a href={item.link} target="_blank" rel="noreferrer">
           Demo
          </a>
         )}
         <a href={item.git} target="_blank" rel="noreferrer">
          Git
         </a>
         <p>{item.description}</p>
        </div>
       </Item>
      ))}
     </List>
    </Content>
   </Container>
  </div>
 );
};

export default Portfolio;

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
  if (filter.name === 'all') {
   setVisibleProjects(projects);
  } else {
   setVisibleProjects(
    projects.filter(
     item => item.category.toLowerCase() === filter.name.toLowerCase()
    )
   );
  }
 }, [filter, projects]);

 useEffect(() => {
  window.localStorage.setItem('projects', JSON.stringify(projects));
 }, [projects]);

 const handleClick = (e, index) => {
  setFilter({ name: e.target.textContent.toLowerCase() });
  setActive(index);
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
     <div>
      {projectFilters.map((i, index) => {
       return (
        <span
         onClick={e => handleClick(e, index)}
         key={index}

         // className={`${active === index ? 'active-work' : ''} work__item`}
        >
         {i.name}
        </span>
       );
      })}
     </div>
     <List>
      {portfolioData.map(item => (
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

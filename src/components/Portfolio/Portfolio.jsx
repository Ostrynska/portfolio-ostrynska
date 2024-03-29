import { useEffect, useState } from 'react';
import { portfolioData } from '../../contentOption';

import {
 Container,
 TitleWrapp,
 Title,
 TitleLine,
 Content,
 List,
 Item,
 FilterList,
 FilterItem,
 FilterButton,
 Git,
 Link,
 ItemTitleWrap,
 LinksWrap,
 Line,
 Tools,
 Image,
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
 //  const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
  setProjects(portfolioData);
  setVisibleProjects(portfolioData);
 }, []);

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

 return (
  <Container>
   <TitleWrapp>
    <Title>Portfolio</Title>
    <TitleLine />
   </TitleWrapp>
   <Content>
    <FilterList>
     {projectFilters.map((i, idx) => {
      return (
       <FilterItem
        key={idx}
        onClick={e => handleClick(e, idx)}
        className={`${active === idx ? 'active' : ''} `}
       >
        <FilterButton>{i.name}</FilterButton>
       </FilterItem>
      );
     })}
    </FilterList>
    <List>
     {visibleProjects.map(item => (
      <Item key={item.id}>
       <Image href={item.link} target="_blank" rel="noreferrer">
        <img src={item.image} alt={item.title} width={250} />
       </Image>
       <ItemTitleWrap>
        <h2>{item.title}</h2>
        <LinksWrap>
         <a href={item.link} target="_blank" rel="noreferrer">
          <Link size={20} />
         </a>
         <a href={item.git} target="_blank" rel="noreferrer">
          <Git size={20} />
         </a>
        </LinksWrap>
       </ItemTitleWrap>
       <Line />
       <p>{item.description}</p>
       <Tools>
        <li key={item.id}>
         {item.tools.map((tool, index) => (
          <img key={index} src={tool} alt="Logo tool" />
         ))}
        </li>
       </Tools>
      </Item>
     ))}
    </List>
   </Content>
  </Container>
 );
};

export default Portfolio;

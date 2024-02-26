import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #007a15;
    position: sticky;
    top: 50px;
    z-index: 1000;

    a {
      text-decoration: none;
      color: white;
    }
  `;

const LinkButton = styled.div`
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin: 0 20px 0 20px;

    &:after {
      content: '';
      display: block;
      position: relative;
      top: 3px;
      width: 0;
      height: 2px;
      background-color: #7acc88;
      transition: width .3s;
    }

    &:hover:after {
      width: 100%;
      transition: width .3s;
    }

    &:hover {
      color: #7acc88;
      transition: color 0.3s ease;
    }
  `


export default function SmallNav(titles: string[], ids: string[]) {
  return(
    <NavWrapper>
      {titles.map((title, index) => {
        return(
          <Link href={`#${ids[index]}`} key={index}>
            <LinkButton>
              {title}
            </LinkButton>
          </Link>
        )
      }
      )}
    </NavWrapper>
  )
}
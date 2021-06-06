import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  isUserSignerIn,
  // selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useHistory } from "react-router-dom";

const nav = [
  { id: 0, link: "/home", icon: "/images/home-icon.svg", title: "HOME" },
  { id: 1, link: "/home", icon: "/images/search-icon.svg", title: "SEARCH" },
  {
    id: 2,
    link: "/home",
    icon: "/images/watchlist-icon.svg",
    title: "WATCHLIST",
  },
  {
    id: 3,
    link: "/home",
    icon: "/images/original-icon.svg",
    title: "ORIGINALS",
  },
  { id: 4, link: "/home", icon: "/images/movie-icon.svg", title: "MOVIES" },
  { id: 5, link: "/home", icon: "/images/series-icon.svg", title: "SERIES" },
];

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);
  const isUserSignedIn = useSelector(isUserSignerIn);
  const history = useHistory();

  React.useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName, history]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        meta: user,
        isSignedIn: true,
      })
    );
  };

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => alert(err.message));
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        history.replace("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!isUserSignedIn ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            {nav.map((item) => (
              <a key={item.id} href={item.link}>
                <img src={item.icon} alt={item.title} />
                <span>{item.title}</span>
              </a>
            ))}
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleSignOut}>Sign Out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  inset: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.25rem;
  z-index: 3;
`;

const Logo = styled.div`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  font-size: 0;
  flex-shrink: 0;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0 auto 0 25px;
  padding: 0;
  letter-spacing: 5.5px;

  a {
    display: flex;
    align-items: center;
    align-self: center;
    padding: 0 12px;

    img {
      width: 20px;
      min-width: 20px;
      height: 20px;
      z-index: auto;
    }

    span {
      font-size: 13px;
      color: rgb(249, 249, 249);
      padding: 2px 0;
      line-height: 1.08;
      position: relative;
      letter-spacing: 1.42px;
      white-space: nowrap;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 1;
        position: absolute;
        right: 0;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  will-change: background-color, color, border-color;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: "100%";
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition: 500ms;
    }
  }
`;

export default Header;

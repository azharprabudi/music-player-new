import React, { Fragment, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "@styles/sidebar.styl";
import Routes from "@navigation/routes";

const SideBar = () => {
  const { pathname } = window.location;
  const [pathNameState, setStatePathName] = useState(pathname);

  const onChangePathName = useCallback(
    newPathName => () => {
      setStatePathName(newPathName);
    },
    [pathNameState]
  );

  return (
    <div className="sidebar">
      <Link to="/" className="sidebar__anchor" onClick={onChangePathName("/")}>
        <h4 className="sidebar__anchor__title">
          <i className="fa fa-paw" /> Kon Player
        </h4>
      </Link>
      {Routes.map(({ group, children }) => (
        <Fragment key={group}>
          <h6 className="sidebar__group-title">{group}</h6>
          {children.map(({ icon, name, path }) => (
            <Link
              onClick={onChangePathName(path)}
              className="sidebar__btn-nav"
              to={path}
              key={path}
            >
              <i
                className={`${icon} sidebar__btn-nav__icon ${pathNameState ===
                  path && `sidebar__btn-nav__icon--active`}`}
              />
              <p
                href="javascript:void(0)"
                className={`sidebar__btn-nav__anchor ${pathNameState === path &&
                  `sidebar__btn-nav__anchor--active`}`}
              >
                {name}
              </p>
            </Link>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default SideBar;

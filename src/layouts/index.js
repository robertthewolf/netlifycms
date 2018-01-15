import React from "react";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div>
    <header>
    <nav>
    <Link to={`/`}>
        <img src="" alt="JNJ logo" />
    </Link>
    <ul>
      <li>
        <Link to={`/mirror/`}>
          Zrcadlo
        </Link>
      </li>
      <li>
        <Link to={`/photography/`}>
          Fotka
        </Link>
      </li>
      <li>
        <Link to={`/jewellery/`}>
          Šperk
        </Link>
      </li>
      <li>
        <Link to={`/glass/`}>
          Sklo
        </Link>
      </li>
    </ul>
    </nav>
  </header>
    {children()}
  </div>
);

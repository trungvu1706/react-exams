import React from "react";
import "../asset/css/MainMenu.css";

import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="MainMenu">
      <div className="main">
        <div className="post-title">
          <div className="row1">
            <Link to="/blog">
              <div className="card">
                <img src="../img/title-img1.jpg" alt="img1" />
                <figcaption>
                  Self-Care Plan: What is it &amp; How to Create an Effective
                  One?
                </figcaption>
              </div>
            </Link>
            <Link to="/blog">
              <div className="card">
                <img src="../img/title-img2.jpg" alt="img1" />
                <figcaption>
                  Self-Care Plan: What is it &amp; How to Create an Effective
                  One?
                </figcaption>
              </div>
            </Link>
            <Link to="/blog">
              <div className="card">
                <img src="../img/title-img3.jpg" alt="img1" />
                <figcaption>
                  Self-Care Plan: What is it &amp; How to Create an Effective
                  One?
                </figcaption>
              </div>
            </Link>
          </div>
        </div>
        <div className="title">
          <h2>Daily news</h2>
        </div>
        <div className="contain-row">
          <div className="row2">
            <div className="unit-link">
              <div>
                <img src="../img/content1.jpg" alt="img" />
              </div>
              <Link to="/blog">
                <div className="news">
                  <h3>
                    Self-Care Plan: What is it &amp; How to Create an Effective
                    One?
                  </h3>
                  <p>
                    Let us all admit it once and for all, adulting is difficult.
                    There is a heck load of stressors, from personal life to
                    professional life, from work pressure to family…
                  </p>
                  <p>Written by dev, 2 days ago</p>
                </div>
              </Link>
            </div>

            <div className="unit-link">
              <div>
                <img src="../img/content1.jpg" alt="img" />
              </div>
              <Link to="/blog">
                <div className="news">
                  <h3>
                    Self-Care Plan: What is it &amp; How to Create an Effective
                    One?
                  </h3>
                  <p>
                    Let us all admit it once and for all, adulting is difficult.
                    There is a heck load of stressors, from personal life to
                    professional life, from work pressure to family…
                  </p>
                  <p>Written by dev, 2 days ago</p>
                </div>
              </Link>
            </div>

            <div className="unit-link">
              <div>
                <img src="../img/content1.jpg" alt="img" />
              </div>
              <Link to="/blog">
                <div className="news">
                  <h3>
                    Self-Care Plan: What is it &amp; How to Create an Effective
                    One?
                  </h3>
                  <p>
                    Let us all admit it once and for all, adulting is difficult.
                    There is a heck load of stressors, from personal life to
                    professional life, from work pressure to family…
                  </p>
                  <p>Written by dev, 2 days ago</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="side-posts">
            <h2>Recent Posts</h2>
            <div className="side-link">
              <Link to="/blog">
                <div className="side-news">
                  <div>
                    <img src="../img/img2.svg" alt="img" />
                  </div>
                  <div>
                    <h3>
                      Self-Care Plan: What is it &amp; How to Create an
                      Effective One?
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="side-link">
              <Link to="/blog">
                <div className="side-news">
                  <div>
                    <img src="../img/img2.svg" alt="img" />
                  </div>
                  <div>
                    <h3>
                      Self-Care Plan: What is it &amp; How to Create an
                      Effective One?
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="side-link">
              <Link to="/blog">
                <div className="side-news">
                  <div>
                    <img src="../img/img2.svg" alt="img" />
                  </div>
                  <div>
                    <h3>
                      Self-Care Plan: What is it &amp; How to Create an
                      Effective One?
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="footer">
            <div className="social">
              <h3>Follow us</h3>
              <a href="#1">
                <img src="../img/facebook.svg" alt="facebook" />
              </a>
              <a href="#2">
                <img src="../img/instagram.svg" alt="instagram" />
              </a>
              <a href="#3">
                <img src="../img/twitter.svg" alt="twitter" />
              </a>
            </div>

            <div className="others">
              <div className="col">
                <h4>Popular articles</h4>
                <a href="#1">
                  Smart CCTV networks are driving an AI-powered apartheid in
                  South Africa
                </a>
                <p>Jun 30, 2021</p>
                <a href="#2">
                  Apple may be making major changes to some of its iPhone sizes
                  next year
                </a>
                <p>Jun 30, 2021</p>
                <a href="#3">
                  Elon says 250,000 people have already preordered Tesla’s new
                  Cybertruck
                </a>
                <p>Jun 30, 2021</p>
                <a href="#4">
                  Artists used deepfake tech to tell alternate moon landing
                  history
                </a>
                <p>Jun 30, 2021</p>
              </div>
              <div className="col">
                <h4>Featured</h4>
                <a href="#1">
                  Smart CCTV networks are driving an AI-powered apartheid in
                  South Africa
                </a>
                <p>Jun 30, 2021</p>
                <a href="#2">
                  Apple may be making major changes to some of its iPhone sizes
                  next year
                </a>
                <p>Jun 30, 2021</p>
                <a href="#3">
                  Elon says 250,000 people have already preordered Tesla’s new
                  Cybertruck
                </a>
                <p>Jun 30, 2021</p>
                <a href="#4">
                  Artists used deepfake tech to tell alternate moon landing
                  history
                </a>
                <p>Jun 30, 2021</p>
              </div>
              <div className="col">
                <h4>Newsletter</h4>
                <p>
                  Subscribe to get the latest news, offers and special
                  announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

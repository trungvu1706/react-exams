import React from "react";
import cls from "../asset/scss/Blog/Blog.module.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className={cls.Blog}>
      <div className={cls.main}>
        <div className={cls.content}>
          <h2>
            Watch this ultra-hypnotic supercomputer simulation of galaxies
            feasting
          </h2>
          <div className={cls.pic}>
            <img
              src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?cs=srgb&dl=pexels-pixabay-2150.jpg&fm=jpg"
              alt="img"
            />
          </div>

          <div className={cls.txt}>
            <p>
              Last week, news broke that James Dean will star in a new movie—64
              years after his death. A production company called Magic City got
              the rights to Dean’s image from the late actor’s estate and plans
              to bring him to the silver screen again thanks to the wonder (or
              terror) of CGI. Now, Dean, or the digitally resurrected version of
              Dean or whatever, will play the second lead in a Vietnam War movie
              called Finding Jack, with a living actor standing in as his voice.
              Unsurprisingly, the announcement inspired a wave of immediate
              backlash around Hollywood. Chris Evans called it “awful” and
              “shameful,” and Elijah Wood said, simply, “NOPE.” But it turns out
              the intense reaction was surprising to at least one person: Magic
              City’s Anton Ernst, the Finding Jack director.
            </p>
          </div>
          <div className={cls.written}>
            <div>
              <img src="../img/img2.svg" alt="avt" />
            </div>
            <div>
              <p> Written by Sarah Senero</p>
              <p>Jan 30, 2021</p>
            </div>
          </div>
        </div>
        <div className={cls.side}>
          <h3>Lastest Article</h3>
          <Link to="/blog">
            <div className={cls.side_link}>
              <div>
                <h4>Drew Banga wants to spark the Bay Area’s rap resurgence</h4>
                <p>November 29, 2019</p>
              </div>

              <div>
                <img src="../img/img3.svg" alt="title" />
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className={cls.side_link}>
              <div>
                <h4>Drew Banga wants to spark the Bay Area’s rap resurgence</h4>
                <p>November 29, 2019</p>
              </div>

              <div>
                <img src="../img/img3.svg" alt="title" />
              </div>
            </div>
          </Link>
          <Link to="/blog">
            <div className={cls.side_link}>
              <div>
                <h4>Drew Banga wants to spark the Bay Area’s rap resurgence</h4>
                <p>November 29, 2019</p>
              </div>

              <div>
                <img src="../img/img3.svg" alt="title" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className={cls.footer}>
        <div className={cls.social}>
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

        <div className={cls.others}>
          <div className={cls.col}>
            <h4>Popular articles</h4>
            <a href="#1">
              Smart CCTV networks are driving an AI-powered apartheid in South
              Africa
            </a>
            <p>Jun 30, 2021</p>
            <a href="#2">
              Apple may be making major changes to some of its iPhone sizes next
              year
            </a>
            <p>Jun 30, 2021</p>
            <a href="#3">
              Elon says 250,000 people have already preordered Tesla’s new
              Cybertruck
            </a>
            <p>Jun 30, 2021</p>
            <a href="#4">
              Artists used deepfake tech to tell alternate moon landing history
            </a>
            <p>Jun 30, 2021</p>
          </div>
          <div className={cls.col}>
            <h4>Featured</h4>
            <a href="#1">
              Smart CCTV networks are driving an AI-powered apartheid in South
              Africa
            </a>
            <p>Jun 30, 2021</p>
            <a href="#2">
              Apple may be making major changes to some of its iPhone sizes next
              year
            </a>
            <p>Jun 30, 2021</p>
            <a href="#3">
              Elon says 250,000 people have already preordered Tesla’s new
              Cybertruck
            </a>
            <p>Jun 30, 2021</p>
            <a href="#4">
              Artists used deepfake tech to tell alternate moon landing history
            </a>
            <p>Jun 30, 2021</p>
          </div>
          <div className={cls.col}>
            <h4>Newsletter</h4>
            <p>
              Subscribe to get the latest news, offers and special
              announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import "./trending.css";
import { Avatar } from "./Avatar";
function Trending() {
  return (
    <section>
      <div className="search">
        <svg viewBox="0 0 24 24" className="icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="Whatshappening">
        <h3 className="Trendingbold">What's Happening</h3>
        <div className="corona">
          <div className="coronabody">
            <p>COVID-19 . LIVE</p>
            <h4>COVID-19 in India</h4>
          </div>
          <img
            src="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
            alt=""
            className="image"
          />
        </div>
        <div className="trendingbox">
          <div className="trendingHeading">
            <span>Trending in India</span>
            <svg viewBox="0 0 24 24" className="spread">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
          <h4>Dhawan</h4>
          <p className="tweetcount">2650 Tweets</p>
        </div>
        <div className="trendingbox">
          <div className="trendingHeading">
            <span>Trending in India</span>
            <svg viewBox="0 0 24 24" className="spread">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
          <h4>#Cyborg</h4>
          <p className="tweetcount">2650 Tweets</p>
        </div>
        <div className="trendingbox">
          <div className="trendingHeading">
            <span>Trending in India</span>
            <svg viewBox="0 0 24 24" className="spread">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
          <h4>#MotoG30</h4>
          <p className="tweetcount">2650 Tweets</p>
        </div>
        <span className="Showmore">Show More</span>
      </div>
      <div className="whotofollow">
        <h3 className="Trendingbold">Who to follow</h3>
        <div className="User space">
          <Avatar pix="40px" />
          <div className="usernames">
            <h4>Gourav Kumar Dey</h4>
            <p>@Gackrey</p>
          </div>
          <button className="followbutton">Follow</button>
        </div>
        <div className="User space">
          <Avatar
            pix="40px"
            src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_200x200.jpg"
          />
          <div className="usernames">
            <h4>Tanay Pratap</h4>
            <p>@tanaypratap</p>
          </div>
          <button className="followbutton">Follow</button>
        </div>
        <div className="User space">
          <Avatar
            pix="40px"
            src="https://pbs.twimg.com/profile_images/1350667071202332673/glWYSyvy_200x200.jpg"
          />
          <div className="usernames">
            <h4>neog.camp</h4>
            <p>@neogcamp</p>
          </div>
          <button className="followbutton">Follow</button>
        </div>
      </div>
    </section>
  );
}
export default Trending;
